import React, { useState, useEffect } from 'react';
import { User, GraduationCap, BookOpen, Sparkles, Trophy, ArrowRight, RotateCcw, ShieldAlert, Activity } from 'lucide-react';
import { getStudentAttempts } from '../utils/storage';
import { StudentRecord } from '../types';

interface CoverScreenProps {
  onStartExam: (nama: string, kelas: string, attemptNumber: number) => void;
}

export const CoverScreen: React.FC<CoverScreenProps> = ({ onStartExam }) => {
  const [nama, setNama] = useState('');
  const [kelas, setKelas] = useState('');
  const [attempts, setAttempts] = useState<StudentRecord[]>([]);

  useEffect(() => {
    if (nama.trim()) {
      const records = getStudentAttempts(nama.trim(), kelas.trim() || '-');
      setAttempts(records);
    } else {
      setAttempts([]);
    }
  }, [nama, kelas]);

  const completedAttemptsCount = attempts.length;
  const nextAttemptNumber = completedAttemptsCount + 1;
  const maxAttemptsReached = completedAttemptsCount >= 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim()) return;
    if (maxAttemptsReached) return;

    onStartExam(nama.trim(), kelas.trim() || '-', nextAttemptNumber);
  };

  return (
    <div className="min-h-[calc(100vh-65px)] bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-900 text-slate-100 relative overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-10">
      
      {/* Ambient Animated Frosted Glowing Light Orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-indigo-600/25 rounded-full blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl pointer-events-none animate-orb-2" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
        
        {/* Left Intro Frosted Glass Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-indigo-200 text-xs font-semibold tracking-wide shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Evaluasi & Refleksi Digital PKK</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                Ujian Produk Kreatif <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">& Kewirausahaan</span>
              </h1>
              <p className="text-slate-200/90 text-sm leading-relaxed font-normal">
                Ujian evaluasi mata pelajaran <strong className="text-white font-semibold">Produk Kreatif dan Kewirausahaan (PKK)</strong> yang dirancang untuk menguji pemahaman analisis peluang usaha, analisis SWOT, kelayakan produk, dan Business Model Canvas (BMC).
              </p>
            </div>
          </div>

          {/* Frosted Glass Attempt Rules Panel */}
          <div className="glass-card-dark rounded-2xl p-5 space-y-3.5 border border-white/15">
            <div className="font-bold text-amber-300 flex items-center gap-2 text-xs uppercase tracking-wider border-b border-white/10 pb-2.5">
              <Trophy className="w-4 h-4 text-amber-300" />
              <span>Ketentuan 3 Kali Kesempatan Ujian</span>
            </div>
            <ul className="space-y-3 text-slate-200 text-xs leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded-md bg-indigo-500/30 text-indigo-200 font-mono font-bold text-[11px] shrink-0 border border-indigo-400/30">01-02</span>
                <span><strong>Percobaan 1 & 2:</strong> Soal berurutan. Dilengkapi Kunci Jawaban & Pembahasan Detail setelah selesai untuk bahan belajar mandiri.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="px-2 py-0.5 rounded-md bg-purple-500/30 text-purple-200 font-mono font-bold text-[11px] shrink-0 border border-purple-400/30">03</span>
                <span><strong>Percobaan 3 (FINAL):</strong> Urutan 40 soal & opsi jawaban diacak total. Hasil akhir hanya menampilkan rekapitulasi nilai tanpa kunci jawaban.</span>
              </li>
            </ul>
          </div>

          {/* System status ticker */}
          <div className="hidden lg:flex items-center justify-between text-xs text-slate-300/80 border-t border-white/10 pt-3">
            <span className="flex items-center gap-1.5"><Activity className="w-3.5 h-3.5 text-emerald-400" /> System Online</span>
            <span>SMK Produk Kreatif</span>
            <span>Security Encrypted</span>
          </div>
        </div>

        {/* Right Form Frosted Glass Card */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="glass-card-dark rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 shadow-2xl relative overflow-hidden">
            
            <div className="border-b border-white/10 pb-4 flex justify-between items-end">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Form Identitas Siswa</h2>
                <p className="text-xs text-slate-300/80 mt-1">Lengkapi data diri Anda di bawah ini sebelum memulai kuis.</p>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-white/10 text-indigo-200 border border-white/15 hidden sm:block">
                INPUT REGISTRATION
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nama Siswa */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                  Nama Lengkap Siswa <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-300 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Masukkan nama lengkap siswa..."
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm text-white focus:outline-none placeholder:text-slate-400 font-medium transition-all"
                  />
                </div>
              </div>

              {/* Kelas Text Input */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                  Kelas / Rombel <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-indigo-300 pointer-events-none" />
                  <input
                    type="text"
                    value={kelas}
                    onChange={(e) => setKelas(e.target.value)}
                    placeholder="Masukkan kelas (contoh: XI-1)..."
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl glass-input text-sm text-white focus:outline-none placeholder:text-slate-400 font-medium transition-all"
                  />
                </div>
              </div>

              {/* Mata Pelajaran (Readonly) */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-200 uppercase tracking-wider">
                  Mata Pelajaran
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-300 pointer-events-none" />
                  <input
                    type="text"
                    readOnly
                    value="Produk Kreatif dan Kewirausahaan"
                    className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-950/40 border border-white/10 text-slate-300 text-sm font-semibold cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Existing Attempts History Box */}
              {nama.trim() && kelas && (
                <div className="p-4 rounded-xl bg-slate-950/50 border border-white/15 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-indigo-200 flex items-center gap-1.5">
                      <RotateCcw className="w-3.5 h-3.5 text-indigo-300" />
                      Rekapitulasi Percobaan
                    </span>
                    <span className="font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-[11px]">
                      {completedAttemptsCount} / 3 Selesai
                    </span>
                  </div>

                  {attempts.length > 0 ? (
                    <div className="space-y-2 pt-1">
                      {attempts.map((r) => (
                        <div key={r.id} className="flex items-center justify-between text-xs bg-white/5 px-3.5 py-2 rounded-lg border border-white/10">
                          <span className="font-medium text-slate-200">Percobaan ke-{r.attemptNumber}</span>
                          <span className="font-bold text-amber-300">Skor: {r.score}</span>
                          <span className="text-[11px] text-slate-400">{r.timestamp.split(',')[0]}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-400 italic">Belum ada riwayat pengerjaan untuk identitas ini.</p>
                  )}
                </div>
              )}

              {/* Max Attempts Reached Warning */}
              {maxAttemptsReached && (
                <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Seluruh 3 kali kesempatan ujian untuk nama dan kelas ini telah terpakai.</span>
                </div>
              )}

              {/* Start Exam Button */}
              <button
                type="submit"
                disabled={!nama.trim() || maxAttemptsReached}
                className="w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 border border-white/30 shadow-xl shadow-indigo-500/25 transition-all flex items-center justify-center gap-2.5 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none active:scale-[0.98]"
              >
                <span>{maxAttemptsReached ? 'Batas Percobaan Habis' : `Mulai Ujian - Percobaan Ke-${nextAttemptNumber}`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};
