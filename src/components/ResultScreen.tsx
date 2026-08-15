import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Question, StudentRecord } from '../types';
import { formatTime } from '../utils/quizHelper';
import { Trophy, CheckCircle2, XCircle, Clock, RotateCcw, Home, Sparkles, BookOpen } from 'lucide-react';

interface ResultScreenProps {
  record: StudentRecord;
  questions: Question[];
  onRetry: () => void;
  onHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  record,
  questions,
  onRetry,
  onHome
}) => {
  const isAttempt1Or2 = record.attemptNumber === 1 || record.attemptNumber === 2;
  const isAttempt3 = record.attemptNumber === 3;
  const remainingAttempts = 3 - record.attemptNumber;

  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Ignore
    }
  }, []);

  return (
    <div className="min-h-[calc(100vh-65px)] bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-900 text-slate-100 p-4 sm:p-6 md:p-8 relative overflow-hidden">
      
      {/* Ambient Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-orb-1" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none animate-orb-2" />

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        
        {/* Top Summary Frosted Glass Card */}
        <div className="glass-card-dark rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-2xl relative overflow-hidden border border-white/20">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-xs font-semibold">
            <Trophy className="w-4 h-4 text-amber-300" />
            <span>Hasil Evaluasi — Percobaan Ke-{record.attemptNumber}</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {record.nama}
            </h1>
            <p className="text-xs text-slate-300 font-medium">
              Kelas: <strong className="text-white">{record.kelas}</strong> | Pelajaran: <strong className="text-white">Produk Kreatif & Kewirausahaan</strong>
            </p>
          </div>

          {/* Main Score & Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto pt-2">
            <div className="bg-slate-950/40 border border-indigo-400/30 p-4 rounded-2xl text-center space-y-1 shadow-lg">
              <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">Skor Total</span>
              <span className="text-3xl sm:text-4xl font-black text-white block">
                {record.score}
              </span>
              <span className="text-[10px] text-slate-400 block">/ 100 POIN</span>
            </div>

            <div className="bg-slate-950/40 border border-emerald-400/30 p-4 rounded-2xl text-center space-y-1 shadow-lg">
              <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Benar
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">
                {record.correctCount}
              </span>
              <span className="text-[10px] text-slate-400 block">SOAL</span>
            </div>

            <div className="bg-slate-950/40 border border-rose-400/30 p-4 rounded-2xl text-center space-y-1 shadow-lg">
              <span className="text-[11px] font-bold text-rose-300 uppercase tracking-wider flex items-center justify-center gap-1">
                <XCircle className="w-3.5 h-3.5" /> Salah
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-rose-400 block">
                {record.incorrectCount}
              </span>
              <span className="text-[10px] text-slate-400 block">SOAL</span>
            </div>

            <div className="bg-slate-950/40 border border-amber-400/30 p-4 rounded-2xl text-center space-y-1 shadow-lg">
              <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Durasi
              </span>
              <span className="text-xl sm:text-2xl font-bold text-amber-300 font-mono block">
                {formatTime(record.durationSeconds)}
              </span>
              <span className="text-[10px] text-slate-400 block">PENGERJAAN</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            {remainingAttempts > 0 ? (
              <button
                onClick={onRetry}
                className="px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border border-white/30 shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2 active:scale-95 uppercase tracking-wider"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Coba Lagi (Sisa {remainingAttempts} Percobaan)</span>
              </button>
            ) : (
              <div className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-semibold">
                Batas Maksimum 3 Percobaan Selesai
              </div>
            )}

            <button
              onClick={onHome}
              className="px-6 py-3 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-slate-100 border border-white/20 transition-all flex items-center gap-2 uppercase tracking-wider backdrop-blur-md"
            >
              <Home className="w-4 h-4" />
              <span>Halaman Utama</span>
            </button>
          </div>
        </div>

        {/* NOTICE FOR ATTEMPT 3 */}
        {isAttempt3 && (
          <div className="p-5 rounded-2xl bg-amber-500/15 border border-amber-400/30 text-amber-200 text-xs space-y-2">
            <div className="font-bold flex items-center gap-2 text-sm text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Evaluasi Ujian Final (Percobaan Ke-3)</span>
            </div>
            <p className="leading-relaxed text-slate-300 text-xs">
              Pada Percobaan Ke-3 ini, urutan 40 soal dan opsi pilihan diacak secara total. Kunci jawaban & pembahasan disembunyikan untuk merefleksikan penguasaan materi mandiri secara murni.
            </p>
          </div>
        )}

        {/* DETAILED QUESTION REVIEW (SHOWN FOR ATTEMPT 1 & 2) */}
        {isAttempt1Or2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-300" />
                Kunci Jawaban & Pembahasan Detail
              </h2>
              <span className="text-xs text-slate-400 font-medium">TOTAL {questions.length} SOAL</span>
            </div>

            <div className="space-y-6">
              {questions.map((q, idx) => {
                const userAns = record.answersDetail?.[q.id];

                return (
                  <div
                    key={q.id}
                    className="glass-card-dark rounded-3xl p-6 shadow-xl text-slate-100 space-y-4 border border-white/15"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-xs font-bold">
                          Soal #{idx + 1}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-medium">
                          Level: {q.cognitiveLevel}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{q.questionFormat}</span>
                    </div>

                    {/* Question text */}
                    <p className="font-semibold text-slate-100 text-sm sm:text-base leading-relaxed">
                      {q.question}
                    </p>

                    {/* 1. SINGLE CHOICE REVIEW */}
                    {q.type === 'single' && q.options && (
                      <div className="space-y-2 pt-1">
                        {q.options.map((opt) => {
                          const isUserSelected = userAns === opt.key;
                          const isKey = q.correctAnswer === opt.key;

                          let bgClass = 'bg-slate-950/40 border-white/10 text-slate-200';
                          let badgeText = '';

                          if (isKey) {
                            bgClass = 'bg-emerald-500/20 border-emerald-400/80 text-emerald-100 font-bold';
                            badgeText = '✓ KUNCI JAWABAN';
                          } else if (isUserSelected && !isKey) {
                            bgClass = 'bg-rose-500/20 border-rose-400/80 text-rose-100';
                            badgeText = '✗ JAWABAN ANDA';
                          }

                          return (
                            <div
                              key={opt.key}
                              className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-3 ${bgClass}`}
                            >
                              <div className="flex items-start gap-2.5">
                                <span className="font-bold shrink-0">{opt.key}.</span>
                                <span className="answer-option-text">{opt.text}</span>
                              </div>
                              {badgeText && (
                                <span
                                  className={`text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0 ${
                                    isKey
                                      ? 'bg-emerald-500 text-slate-950'
                                      : 'bg-rose-500 text-white'
                                  }`}
                                >
                                  {badgeText}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* 2. COMPLEX CHOICE REVIEW */}
                    {q.type === 'complex' && q.options && (
                      <div className="space-y-2 pt-1">
                        {q.options.map((opt) => {
                          const userList: string[] = Array.isArray(userAns) ? userAns : [];
                          const isUserSelected = userList.includes(opt.key);
                          const isKey = q.correctAnswers?.includes(opt.key);

                          let bgClass = 'bg-slate-950/40 border-white/10 text-slate-200';
                          let badgeText = '';

                          if (isKey && isUserSelected) {
                            bgClass = 'bg-emerald-500/20 border-emerald-400/80 text-emerald-100 font-bold';
                            badgeText = '✓ BENAR (DIPILIH)';
                          } else if (isKey && !isUserSelected) {
                            bgClass = 'bg-amber-500/20 border-amber-400/80 text-amber-100';
                            badgeText = '! KUNCI JAWABAN';
                          } else if (!isKey && isUserSelected) {
                            bgClass = 'bg-rose-500/20 border-rose-400/80 text-rose-100';
                            badgeText = '✗ SALAH (DIPILIH)';
                          }

                          return (
                            <div
                              key={opt.key}
                              className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between gap-3 ${bgClass}`}
                            >
                              <div className="flex items-start gap-2.5">
                                <span className="font-bold shrink-0">[{opt.key}]</span>
                                <span className="answer-option-text">{opt.text}</span>
                              </div>
                              {badgeText && (
                                <span className="text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0 bg-slate-950 text-indigo-200 border border-white/15">
                                  {badgeText}
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* 3. TRUE / FALSE REVIEW */}
                    {q.type === 'true_false' && q.statements && (
                      <div className="space-y-2 pt-1">
                        {q.statements.map((st) => {
                          const userTFVal = userAns?.[st.id];
                          const correctTFVal = st.correctAnswer;
                          const isMatch = userTFVal === correctTFVal;

                          return (
                            <div
                              key={st.id}
                              className={`p-3.5 rounded-xl border text-xs space-y-1 ${
                                isMatch
                                  ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-100'
                                  : 'bg-rose-500/20 border-rose-400/60 text-rose-100'
                              }`}
                            >
                              <div className="flex items-center justify-between font-semibold">
                                <span>{st.id}) {st.text}</span>
                                <span className="font-mono text-[11px]">
                                  Kunci: {correctTFVal ? 'BENAR' : 'SALAH'} | Anda: {userTFVal === undefined ? '-' : userTFVal ? 'BENAR' : 'SALAH'}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-300 pt-0.5">{st.explanation}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* 4. MATCHING REVIEW */}
                    {q.type === 'matching' && q.columnA && (
                      <div className="space-y-2 pt-1">
                        {q.columnA.map((itemA) => {
                          const correctBId = q.correctPairs?.[itemA.id];
                          const userBId = userAns?.[itemA.id];
                          const correctBObj = q.columnB?.find((b) => b.id === correctBId);
                          const userBObj = q.columnB?.find((b) => b.id === userBId);
                          const isMatch = correctBId === userBId;

                          return (
                            <div
                              key={itemA.id}
                              className={`p-3.5 rounded-xl border text-xs space-y-1 ${
                                isMatch
                                  ? 'bg-emerald-500/20 border-emerald-400/60 text-emerald-100'
                                  : 'bg-rose-500/20 border-rose-400/60 text-rose-100'
                              }`}
                            >
                              <div className="font-bold">{itemA.label}</div>
                              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px]">
                                <span>Kunci: <strong>{correctBObj?.label || correctBId}</strong></span>
                                <span>Jawaban Anda: <strong>{userBObj?.label || userBId || 'Belum dijawab'}</strong></span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {/* Explanation Box */}
                    <div className="p-4 rounded-2xl bg-indigo-500/15 border border-indigo-400/30 text-xs space-y-1.5">
                      <div className="font-bold text-indigo-300 flex items-center gap-1.5 uppercase">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>Pembahasan Soal:</span>
                      </div>
                      <p className="text-slate-200 leading-relaxed font-medium">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
