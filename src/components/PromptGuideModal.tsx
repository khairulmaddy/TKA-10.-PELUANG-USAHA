import React from 'react';
import { X, Sparkles, Code2, BookOpen, Layers, Trophy } from 'lucide-react';

interface PromptGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptGuideModal: React.FC<PromptGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4">
      <div className="glass-card-dark rounded-3xl w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl text-slate-100 overflow-hidden border border-white/20">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950/60 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 flex items-center justify-center font-bold shadow-md">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h2 className="font-bold text-base text-white tracking-wide uppercase">PANDUAN & SPESIFIKASI PROMPT</h2>
              <p className="text-xs text-slate-400">Arsitektur & Konsep Pembelajaran Mendalam Aplikasi PKK</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-xs text-slate-200">
          
          <div className="p-4 rounded-2xl bg-slate-950/40 border border-indigo-400/30 space-y-2">
            <h3 className="font-bold text-indigo-300 text-xs flex items-center gap-1.5 uppercase tracking-wide">
              <Code2 className="w-4 h-4 text-indigo-300" /> 1. STRUKTUR FORM & IDENTITAS SISWA
            </h3>
            <p className="leading-relaxed text-slate-300">
              Halaman depan (Cover) mengumpulkan data <strong>Nama Siswa</strong>, <strong>Kelas</strong> (menggunakan dropdown pilihan kelas), dan mata pelajaran <strong>"Produk Kreatif dan Kewirausahaan"</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/40 border border-purple-400/30 space-y-2">
            <h3 className="font-bold text-purple-300 text-xs flex items-center gap-1.5 uppercase tracking-wide">
              <Layers className="w-4 h-4 text-purple-300" /> 2. PENGUKUR WAKTU (STOPWATCH TIMER)
            </h3>
            <p className="leading-relaxed text-slate-300">
              Aplikasi merekam durasi pengerjaan dalam detik secara presisi dari awal kuis dimulai hingga pengerjaan selesai.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/40 border border-emerald-400/30 space-y-2">
            <h3 className="font-bold text-emerald-300 text-xs flex items-center gap-1.5 uppercase tracking-wide">
              <Trophy className="w-4 h-4 text-emerald-300" /> 3. SISTEM 3 KALI PERCOBAAN (ATTEMPT MANAGEMENT)
            </h3>
            <ul className="space-y-1.5 list-disc list-inside text-slate-300">
              <li><strong>Percobaan 1 & 2:</strong> Soal disajikan berurutan. Setelah selesai, kunci jawaban & pembahasan lengkap ditampilkan untuk bahan evaluasi.</li>
              <li><strong>Percobaan 3 (Final):</strong> Urutan 40 soal & pilihan jawaban diacak total. Hanya rekapitulasi nilai yang ditampilkan tanpa pembahasan.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/40 border border-amber-400/30 space-y-2">
            <h3 className="font-bold text-amber-300 text-xs flex items-center gap-1.5 uppercase tracking-wide">
              <BookOpen className="w-4 h-4 text-amber-300" /> 4. PORTAL ADMINISTRASI & DOWNLOAD EXCEL
            </h3>
            <p className="leading-relaxed text-slate-300">
              Guru/Admin dapat mengakses portal via tombol <code>Admin 🔑</code> di header untuk melihat rekapitulasi nilai seluruh siswa dan mengunduhnya ke file Excel (<code>.xlsx</code>).
            </p>
          </div>

        </div>

        <div className="p-4 bg-slate-950/60 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-md"
          >
            Tutup Informasi
          </button>
        </div>
      </div>
    </div>
  );
};
