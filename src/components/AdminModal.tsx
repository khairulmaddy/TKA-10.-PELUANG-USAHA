import React, { useState } from 'react';
import { getStoredRecords, clearStoredRecords } from '../utils/storage';
import { StudentRecord } from '../types';
import { exportToExcel } from '../utils/excelExport';
import { formatTime } from '../utils/quizHelper';
import { KeyRound, Lock, LogOut, Download, Trash2, Search, Eye, X, Trophy, Users, Award, FileSpreadsheet, AlertTriangle } from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  const [records, setRecords] = useState<StudentRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('ALL');

  const [selectedDetailRecord, setSelectedDetailRecord] = useState<StudentRecord | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin123') {
      setIsAuthenticated(true);
      setLoginError('');
      setPasswordInput('');
      refreshRecords();
    } else {
      setLoginError('Kata sandi yang Anda masukkan salah. Akses ditolak.');
    }
  };

  const refreshRecords = () => {
    setRecords(getStoredRecords());
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setSelectedDetailRecord(null);
  };

  const handleClearAll = () => {
    clearStoredRecords();
    setRecords([]);
    setShowClearConfirm(false);
    setSelectedDetailRecord(null);
  };

  if (!isOpen) return null;

  const filteredRecords = records.filter((rec) => {
    const matchesName = rec.nama.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === 'ALL' || rec.kelas === selectedClass;
    return matchesName && matchesClass;
  });

  const totalSubmissions = filteredRecords.length;
  const uniqueStudents = new Set(filteredRecords.map((r) => `${r.nama.toLowerCase()}_${r.kelas}`)).size;
  const avgScore = totalSubmissions > 0
    ? Math.round(filteredRecords.reduce((acc, r) => acc + r.score, 0) / totalSubmissions)
    : 0;
  const maxScore = totalSubmissions > 0
    ? Math.max(...filteredRecords.map((r) => r.score))
    : 0;

  const allClasses = Array.from(new Set(records.map((r) => r.kelas))).sort();

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-card-dark rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl text-slate-100 overflow-hidden border border-white/20">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-slate-950/60 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center font-bold shadow-md">
              <KeyRound className="w-5 h-5 text-indigo-200" />
            </div>
            <div>
              <h2 className="font-bold text-base text-white flex items-center gap-2 tracking-wide">
                <span>Portal Administrasi Guru</span>
                <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">
                  Global Local DB
                </span>
              </h2>
              <p className="text-xs text-slate-400">Rekapitulasi Nilai & Laporan Hasil Ujian Siswa</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 border border-white/15 transition-colors flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Keluar</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {!isAuthenticated ? (
            /* Login Form */
            <div className="max-w-md mx-auto my-12 space-y-6 bg-slate-950/60 p-8 rounded-3xl border border-white/15 shadow-2xl">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 mx-auto flex items-center justify-center shadow-lg">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">Login Verifikasi Admin</h3>
                <p className="text-xs text-slate-300">Masukkan kata sandi admin untuk mengakses laporan nilai siswa.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                    Kata Sandi Admin
                  </label>
                  <input
                    type="password"
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Masukkan kata sandi..."
                    className="w-full px-4 py-3.5 rounded-xl glass-input text-sm text-white focus:outline-none"
                  />
                </div>

                {loginError && (
                  <p className="text-xs text-rose-300 font-medium bg-rose-950/60 p-3 rounded-xl border border-rose-500/40">
                    {loginError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border border-white/30 shadow-lg shadow-indigo-500/25 transition-all active:scale-95"
                >
                  Masuk Portal Admin
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Admin Dashboard */
            <div className="space-y-6">
              
              {/* Summary Stats Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-slate-950/40 p-4 rounded-2xl border border-indigo-400/30 space-y-1 shadow-lg">
                  <span className="text-[11px] font-bold text-indigo-300 uppercase flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-indigo-300" /> Total Siswa
                  </span>
                  <span className="text-2xl font-bold text-white block">{uniqueStudents}</span>
                  <span className="text-[11px] text-slate-400">{totalSubmissions} kali pengerjaan</span>
                </div>

                <div className="bg-slate-950/40 p-4 rounded-2xl border border-emerald-400/30 space-y-1 shadow-lg">
                  <span className="text-[11px] font-bold text-emerald-300 uppercase flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-300" /> Rata-Rata
                  </span>
                  <span className="text-2xl font-bold text-emerald-400 block">{avgScore}</span>
                  <span className="text-[11px] text-slate-400">skor rata-rata kelas</span>
                </div>

                <div className="bg-slate-950/40 p-4 rounded-2xl border border-amber-400/30 space-y-1 shadow-lg">
                  <span className="text-[11px] font-bold text-amber-300 uppercase flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-amber-300" /> Skor Tertinggi
                  </span>
                  <span className="text-2xl font-bold text-amber-300 block">{maxScore}</span>
                  <span className="text-[11px] text-slate-400">skor maksimum</span>
                </div>

                <div className="bg-slate-950/40 p-4 rounded-2xl border border-purple-400/30 space-y-1 shadow-lg">
                  <span className="text-[11px] font-bold text-purple-300 uppercase flex items-center gap-1.5">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-purple-300" /> Ekspor Data
                  </span>
                  <button
                    onClick={() => exportToExcel(filteredRecords)}
                    disabled={filteredRecords.length === 0}
                    className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border border-white/30 disabled:opacity-40 transition-all flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Excel</span>
                  </button>
                </div>
              </div>

              {/* Search & Filter Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950/40 p-4 rounded-2xl border border-white/10">
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-300" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Cari nama siswa..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-xs text-white focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="px-3.5 py-2.5 rounded-xl glass-input text-xs font-semibold text-white focus:outline-none cursor-pointer"
                  >
                    <option value="ALL">Semua Kelas ({records.length})</option>
                    {allClasses.map((c) => (
                      <option key={c} value={c} className="bg-slate-900 text-slate-100">
                        Kelas {c}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => setShowClearConfirm(true)}
                    className="px-3.5 py-2.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-400/40 text-xs font-bold transition-colors flex items-center gap-1.5"
                    title="Hapus Seluruh Data Database"
                  >
                    <Trash2 className="w-3.5 h-3.5 text-rose-300" />
                    <span className="hidden sm:inline">Reset DB</span>
                  </button>
                </div>
              </div>

              {/* Data Table */}
              <div className="bg-slate-950/40 border border-white/10 rounded-2xl overflow-x-auto shadow-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-900/80 text-indigo-200 font-bold border-b border-white/10 uppercase tracking-wider">
                    <tr>
                      <th className="p-3.5">No</th>
                      <th className="p-3.5">Nama Siswa</th>
                      <th className="p-3.5">Kelas</th>
                      <th className="p-3.5 text-center">Ke-</th>
                      <th className="p-3.5 text-center">Skor</th>
                      <th className="p-3.5 text-center">Benar / Salah</th>
                      <th className="p-3.5 text-center">Durasi</th>
                      <th className="p-3.5">Waktu Selesai</th>
                      <th className="p-3.5 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-200 font-medium">
                    {filteredRecords.length > 0 ? (
                      filteredRecords.map((rec, index) => (
                        <tr key={rec.id} className="hover:bg-white/5 transition-colors">
                          <td className="p-3.5 text-slate-400 font-mono">{index + 1}</td>
                          <td className="p-3.5 font-bold text-white">{rec.nama}</td>
                          <td className="p-3.5 text-indigo-300 font-semibold">{rec.kelas}</td>
                          <td className="p-3.5 text-center font-bold text-purple-300">#{rec.attemptNumber}</td>
                          <td className="p-3.5 text-center font-extrabold text-emerald-400 text-sm">
                            {rec.score}
                          </td>
                          <td className="p-3.5 text-center font-mono">
                            <span className="text-emerald-400 font-bold">{rec.correctCount}</span> / <span className="text-rose-400 font-bold">{rec.incorrectCount}</span>
                          </td>
                          <td className="p-3.5 text-center font-mono text-amber-300">
                            {formatTime(rec.durationSeconds)}
                          </td>
                          <td className="p-3.5 text-slate-400 text-[11px] font-mono">
                            {rec.timestamp}
                          </td>
                          <td className="p-3.5 text-center">
                            <button
                              onClick={() => setSelectedDetailRecord(rec)}
                              className="px-3 py-1 rounded-xl bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 text-[11px] font-bold transition-colors flex items-center gap-1 mx-auto"
                            >
                              <Eye className="w-3 h-3 text-indigo-300" />
                              <span>Detail</span>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={9} className="p-8 text-center text-slate-400 italic">
                          Belum ada data pengerjaan ujian siswa yang terekam di database global lokal ini.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

            </div>
          )}
        </div>

        {/* Modal Detail Student Attempt */}
        {selectedDetailRecord && (
          <div className="fixed inset-0 z-60 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="glass-card-dark rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col p-6 space-y-5 text-slate-100 shadow-2xl border border-white/20">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedDetailRecord.nama}</h3>
                  <p className="text-xs text-slate-300">
                    Kelas {selectedDetailRecord.kelas} | Percobaan ke-{selectedDetailRecord.attemptNumber} | Skor: {selectedDetailRecord.score}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedDetailRecord(null)}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-y-auto space-y-4 pr-1 text-xs">
                {/* Refleksi 1 */}
                <div className="p-4 rounded-2xl bg-slate-950/40 border border-indigo-400/30 space-y-1">
                  <span className="font-bold text-indigo-300 block">1. Refleksi Pemahaman Konsep (Metakognisi):</span>
                  <p className="text-slate-200 leading-relaxed italic">{selectedDetailRecord.reflectionAnswers?.q1}</p>
                </div>

                {/* Refleksi 2 */}
                <div className="p-4 rounded-2xl bg-slate-950/40 border border-purple-400/30 space-y-1">
                  <span className="font-bold text-purple-300 block">2. Penerapan Nyata (Aplikasi Keterampilan):</span>
                  <p className="text-slate-200 leading-relaxed italic">{selectedDetailRecord.reflectionAnswers?.q2}</p>
                </div>

                {/* Refleksi 3 */}
                <div className="p-4 rounded-2xl bg-slate-950/40 border border-pink-400/30 space-y-1">
                  <span className="font-bold text-pink-300 block">3. Evaluasi Diri & Komitmen Belajar:</span>
                  <p className="text-slate-200 leading-relaxed italic">{selectedDetailRecord.reflectionAnswers?.q3}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedDetailRecord(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-xs text-slate-200 border border-white/15"
                >
                  Tutup Detail
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Confirm Clear DB */}
        {showClearConfirm && (
          <div className="fixed inset-0 z-60 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4">
            <div className="glass-card-dark rounded-3xl max-w-md w-full p-6 space-y-5 text-slate-100 border border-rose-500/40 shadow-2xl">
              <div className="text-center space-y-2">
                <AlertTriangle className="w-10 h-10 text-rose-400 mx-auto" />
                <h3 className="text-lg font-bold text-white tracking-wide">Reset Seluruh Rekam Nilai?</h3>
                <p className="text-xs text-slate-300">
                  Tindakan ini akan menghapus seluruh data pengerjaan siswa dari browser ini secara permanen. Data yang dihapus tidak dapat dipulihkan.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="w-1/2 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-bold text-xs text-slate-200 border border-white/15"
                >
                  Batal
                </button>
                <button
                  onClick={handleClearAll}
                  className="w-1/2 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 font-bold text-xs text-white shadow-md shadow-rose-600/30"
                >
                  Ya, Hapus Semua
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
