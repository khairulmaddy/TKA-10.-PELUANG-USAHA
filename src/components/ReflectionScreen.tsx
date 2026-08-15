import React, { useState } from 'react';
import { ReflectionAnswers } from '../types';
import { Lightbulb, Target, Sparkles, CheckCircle2, HeartHandshake } from 'lucide-react';

interface ReflectionScreenProps {
  onSaveReflection: (answers: ReflectionAnswers) => void;
}

export const ReflectionScreen: React.FC<ReflectionScreenProps> = ({ onSaveReflection }) => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveReflection({
      q1: q1.trim() || 'Tidak mengisi refleksi 1',
      q2: q2.trim() || 'Tidak mengisi refleksi 2',
      q3: q3.trim() || 'Tidak mengisi refleksi 3'
    });
  };

  return (
    <div className="min-h-[calc(100vh-65px)] bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-900 text-slate-100 flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      
      {/* Ambient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-orb-2" />

      <div className="max-w-3xl w-full mx-auto glass-card-dark rounded-3xl p-6 sm:p-10 space-y-8 relative z-10 shadow-2xl border border-white/20">
        
        {/* Banner Header */}
        <div className="text-center space-y-2.5 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Prinsip Pembelajaran Mendalam (Deep Learning)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Refleksi Diri & Metakognisi
          </h2>
          <p className="text-xs sm:text-sm text-slate-300/90 max-w-xl mx-auto leading-relaxed">
            Isi 3 instrumen refleksi di bawah ini untuk menghubungkan pemahaman ujian dengan penerapannya di dunia usaha nyata.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Question 1 */}
          <div className="p-5 rounded-2xl bg-slate-950/40 border border-indigo-400/30 space-y-3">
            <label className="block text-sm font-bold text-indigo-200 flex items-center gap-2">
              <Lightbulb className="w-4.5 h-4.5 text-indigo-300 shrink-0" />
              1. Refleksi Pemahaman (Metakognisi)
            </label>
            <p className="text-xs text-slate-300">
              Wawasan atau pemahaman konsep paling berharga apa yang Anda peroleh setelah menyelesaikan soal-soal peluang usaha, SWOT, dan Business Model Canvas ini?
            </p>
            <textarea
              required
              rows={3}
              value={q1}
              onChange={(e) => setQ1(e.target.value)}
              placeholder="Tuliskan pemahaman penting yang Anda dapatkan di sini..."
              className="w-full p-3.5 rounded-xl glass-input text-slate-100 text-sm focus:outline-none placeholder:text-slate-500 resize-none"
            />
          </div>

          {/* Question 2 */}
          <div className="p-5 rounded-2xl bg-slate-950/40 border border-purple-400/30 space-y-3">
            <label className="block text-sm font-bold text-purple-200 flex items-center gap-2">
              <Target className="w-4.5 h-4.5 text-purple-300 shrink-0" />
              2. Penerapan Nyata (Aplikasi Keterampilan)
            </label>
            <p className="text-xs text-slate-300">
              Bagaimana Anda akan menerapkan analisis SWOT atau kelayakan usaha yang dipelajari untuk merancang/mengembangkan rencana bisnis nyata Anda sendiri?
            </p>
            <textarea
              required
              rows={3}
              value={q2}
              onChange={(e) => setQ2(e.target.value)}
              placeholder="Jelaskan gagasan penerapan bisnis nyata Anda..."
              className="w-full p-3.5 rounded-xl glass-input text-slate-100 text-sm focus:outline-none placeholder:text-slate-500 resize-none"
            />
          </div>

          {/* Question 3 */}
          <div className="p-5 rounded-2xl bg-slate-950/40 border border-pink-400/30 space-y-3">
            <label className="block text-sm font-bold text-pink-200 flex items-center gap-2">
              <HeartHandshake className="w-4.5 h-4.5 text-pink-300 shrink-0" />
              3. Evaluasi Diri & Komitmen Belajar
            </label>
            <p className="text-xs text-slate-300">
              Tantangan apa yang paling terasa saat mengerjakan ujian ini dan apa komitmen konkret Anda untuk meningkatkan kemampuan kewirausahaan ke depan?
            </p>
            <textarea
              required
              rows={3}
              value={q3}
              onChange={(e) => setQ3(e.target.value)}
              placeholder="Tuliskan komitmen belajar kewirausahaan Anda..."
              className="w-full p-3.5 rounded-xl glass-input text-slate-100 text-sm focus:outline-none placeholder:text-slate-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 hover:from-emerald-600 hover:to-indigo-600 border border-white/30 shadow-xl shadow-emerald-500/20 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Simpan Refleksi & Tampilkan Hasil Ujian</span>
          </button>
        </form>
      </div>
    </div>
  );
};
