import { StudentRecord } from '../types';

const STORAGE_KEY = 'pkk_exam_global_db_v1';

export function getStoredRecords(): StudentRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load student records:', err);
    return [];
  }
}

export function saveRecord(record: StudentRecord): void {
  const records = getStoredRecords();
  records.unshift(record); // Add to beginning
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error('Failed to save student record:', err);
  }
}

export function getStudentAttempts(nama: string, kelas: string): StudentRecord[] {
  const records = getStoredRecords();
  const lowerNama = nama.trim().toLowerCase();
  const lowerKelas = kelas.trim().toLowerCase();
  
  return records.filter(
    (r) => r.nama.trim().toLowerCase() === lowerNama && r.kelas.trim().toLowerCase() === lowerKelas
  );
}

export function clearStoredRecords(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear student records:', err);
  }
}
