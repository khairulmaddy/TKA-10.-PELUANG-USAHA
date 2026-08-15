import * as XLSX from 'xlsx';
import { StudentRecord } from '../types';
import { formatTime } from './quizHelper';

export function exportToExcel(records: StudentRecord[], filenamePrefix = 'Rekapitulasi_Nilai_PKK'): void {
  const exportData = records.map((rec, index) => ({
    'No': index + 1,
    'Nama Siswa': rec.nama,
    'Kelas': rec.kelas,
    'Percobaan Ke': rec.attemptNumber,
    'Nilai Skor': rec.score,
    'Jawaban Benar': rec.correctCount,
    'Jawaban Salah': rec.incorrectCount,
    'Total Soal': rec.totalQuestions,
    'Durasi': formatTime(rec.durationSeconds),
    'Waktu Selesai': rec.timestamp,
    'Refleksi Pemahaman': rec.reflectionAnswers?.q1 || '-',
    'Refleksi Penerapan Nyata': rec.reflectionAnswers?.q2 || '-',
    'Refleksi Evaluasi Diri': rec.reflectionAnswers?.q3 || '-'
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  
  // Set column widths
  const colWidths = [
    { wch: 5 },  // No
    { wch: 25 }, // Nama Siswa
    { wch: 15 }, // Kelas
    { wch: 12 }, // Percobaan Ke
    { wch: 12 }, // Nilai Skor
    { wch: 14 }, // Jawaban Benar
    { wch: 14 }, // Jawaban Salah
    { wch: 12 }, // Total Soal
    { wch: 12 }, // Durasi
    { wch: 22 }, // Waktu Selesai
    { wch: 35 }, // Refleksi 1
    { wch: 35 }, // Refleksi 2
    { wch: 35 }  // Refleksi 3
  ];
  worksheet['!cols'] = colWidths;

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Rekapitulasi Nilai PKK');

  const dateStr = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `${filenamePrefix}_${dateStr}.xlsx`);
}
