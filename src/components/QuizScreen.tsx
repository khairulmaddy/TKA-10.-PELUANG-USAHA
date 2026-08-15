import React, { useState } from 'react';
import { Question } from '../types';
import { ArrowLeft, ArrowRight, Grid, HelpCircle, AlertTriangle, Sparkles, Send } from 'lucide-react';

interface QuizScreenProps {
  questions: Question[];
  studentName: string;
  studentClass: string;
  attemptNumber: number;
  userAnswers: Record<number, any>;
  onAnswerChange: (questionId: number, answer: any) => void;
  onSubmitQuiz: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  questions,
  studentName,
  studentClass,
  attemptNumber,
  userAnswers,
  onAnswerChange,
  onSubmitQuiz
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavGrid, setShowNavGrid] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;

  const isQuestionAnswered = (q: Question) => {
    const ans = userAnswers[q.id];
    if (ans === undefined || ans === null) return false;

    if (q.type === 'single') {
      return typeof ans === 'string' && ans.length > 0;
    } else if (q.type === 'complex') {
      return Array.isArray(ans) && ans.length > 0;
    } else if (q.type === 'true_false') {
      if (typeof ans !== 'object') return false;
      return q.statements?.every((st) => ans[st.id] !== undefined) ?? false;
    } else if (q.type === 'matching') {
      if (typeof ans !== 'object') return false;
      return q.columnA?.every((item) => ans[item.id] !== undefined) ?? false;
    }
    return false;
  };

  const answeredCount = questions.filter(isQuestionAnswered).length;
  const unansweredCount = totalQuestions - answeredCount;

  const handleSingleSelect = (key: string) => {
    onAnswerChange(currentQuestion.id, key);
  };

  const handleComplexToggle = (key: string) => {
    const currentList: string[] = Array.isArray(userAnswers[currentQuestion.id])
      ? userAnswers[currentQuestion.id]
      : [];
    if (currentList.includes(key)) {
      onAnswerChange(
        currentQuestion.id,
        currentList.filter((k) => k !== key)
      );
    } else {
      onAnswerChange(currentQuestion.id, [...currentList, key]);
    }
  };

  const handleTrueFalseSelect = (statementId: number, isTrue: boolean) => {
    const currentObj = userAnswers[currentQuestion.id] || {};
    onAnswerChange(currentQuestion.id, {
      ...currentObj,
      [statementId]: isTrue
    });
  };

  const handleMatchingSelect = (colAId: string, colBId: string) => {
    const currentObj = userAnswers[currentQuestion.id] || {};
    onAnswerChange(currentQuestion.id, {
      ...currentObj,
      [colAId]: colBId
    });
  };

  return (
    <div className="min-h-[calc(100vh-65px)] bg-gradient-to-br from-slate-950 via-indigo-950/80 to-slate-900 text-slate-100 p-4 sm:p-6 md:p-8 relative overflow-hidden">
      
      {/* Ambient Frosted Orbs */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        
        {/* Top Progress & Navigation Glass Bar */}
        <div className="glass-card-dark rounded-2xl p-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 tracking-wide">
              Soal {currentIndex + 1} / {totalQuestions}
            </span>
            {attemptNumber === 3 && (
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-xl bg-purple-500/20 text-purple-200 border border-purple-400/30">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" /> Soal & Opsi Diacak
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-300 hidden sm:inline font-medium">
              Terjawab: <strong className="text-emerald-400 font-bold">{answeredCount}</strong> / {totalQuestions}
            </span>
            <button
              onClick={() => setShowNavGrid(!showNavGrid)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/20 backdrop-blur-md transition-all active:scale-95"
            >
              <Grid className="w-4 h-4 text-indigo-300" />
              <span>Daftar Soal</span>
            </button>
          </div>
        </div>

        {/* Question Grid Navigation Drawer */}
        {showNavGrid && (
          <div className="glass-card-dark rounded-2xl p-5 space-y-4 shadow-2xl border border-white/20">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-xs font-bold text-white flex items-center gap-2 tracking-wide uppercase">
                <Grid className="w-4 h-4 text-indigo-300" />
                Navigasi Indeks Soal
              </h3>
              <button
                onClick={() => setShowNavGrid(false)}
                className="text-xs text-slate-400 hover:text-white"
              >
                [ Tutup ]
              </button>
            </div>

            <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2">
              {questions.map((q, idx) => {
                const answered = isQuestionAnswered(q);
                const isCurrent = idx === currentIndex;
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setShowNavGrid(false);
                    }}
                    className={`py-2 text-xs font-bold rounded-xl transition-all border ${
                      isCurrent
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-white/40 shadow-lg shadow-indigo-500/30 font-black'
                        : answered
                        ? 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40'
                        : 'bg-slate-950/40 text-slate-300 border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-4 text-xs text-slate-300 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-400/40"></span> Terjawab
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-slate-950/40 border border-white/10"></span> Belum
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-indigo-500 border border-white/40"></span> Aktif
              </span>
            </div>
          </div>
        )}

        {/* Main Question Frosted Glass Card */}
        <div className="glass-card-dark rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
          
          {/* Question Metadata Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 text-xs font-bold">
                Level: {currentQuestion.cognitiveLevel}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 border border-white/15 text-xs font-medium">
                {currentQuestion.questionFormat}
              </span>
            </div>
            <span className="text-xs font-mono font-semibold text-slate-400">ID Soal #{currentQuestion.id}</span>
          </div>

          {/* Question Text */}
          <div className="space-y-3">
            <p className="text-base sm:text-lg font-semibold leading-relaxed text-slate-100">
              <span className="font-bold text-indigo-300 mr-1.5">{currentIndex + 1}.</span> {currentQuestion.question}
            </p>
          </div>

          {/* OPTIONS CONTENT BASED ON QUESTION TYPE */}

          {/* 1. SINGLE CHOICE */}
          {currentQuestion.type === 'single' && currentQuestion.options && (
            <div className="space-y-3 pt-2">
              {currentQuestion.options.map((opt) => {
                const isSelected = userAnswers[currentQuestion.id] === opt.key;
                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSingleSelect(opt.key)}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-3.5 group border ${
                      isSelected
                        ? 'bg-gradient-to-r from-indigo-600/35 to-purple-600/30 border-indigo-400/80 shadow-xl shadow-indigo-500/20'
                        : 'bg-slate-950/40 border-white/10 hover:border-white/25 hover:bg-slate-950/60'
                    }`}
                  >
                    <span
                      className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md'
                          : 'bg-white/10 text-slate-300 border border-white/15 group-hover:border-white/30'
                      }`}
                    >
                      {opt.key}
                    </span>
                    <span className="text-sm sm:text-base font-medium text-slate-100 leading-snug pt-1 answer-option-text">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* 2. COMPLEX CHOICE (MULTI SELECT) */}
          {currentQuestion.type === 'complex' && currentQuestion.options && (
            <div className="space-y-3 pt-2">
              <p className="text-xs text-amber-200 bg-amber-500/15 p-3 rounded-xl border border-amber-400/30 font-medium">
                💡 PETUNJUK: Anda dapat memilih lebih dari satu jawaban yang menurut Anda benar.
              </p>
              {currentQuestion.options.map((opt) => {
                const selectedList: string[] = Array.isArray(userAnswers[currentQuestion.id])
                  ? userAnswers[currentQuestion.id]
                  : [];
                const isSelected = selectedList.includes(opt.key);
                return (
                  <button
                    key={opt.key}
                    onClick={() => handleComplexToggle(opt.key)}
                    className={`w-full text-left p-4 rounded-2xl transition-all flex items-start gap-3.5 group border ${
                      isSelected
                        ? 'bg-gradient-to-r from-purple-600/35 to-pink-600/30 border-purple-400/80 shadow-xl shadow-purple-500/20'
                        : 'bg-slate-950/40 border-white/10 hover:border-white/25 hover:bg-slate-950/60'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-xl font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        isSelected
                          ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md'
                          : 'bg-white/10 text-slate-300 border border-white/15 group-hover:border-white/30'
                      }`}
                    >
                      {isSelected ? '✓' : opt.key}
                    </div>
                    <span className="text-sm sm:text-base font-medium text-slate-100 leading-snug answer-option-text">
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* 3. TRUE / FALSE STATEMENTS */}
          {currentQuestion.type === 'true_false' && currentQuestion.statements && (
            <div className="space-y-4 pt-2">
              <p className="text-xs text-slate-300 font-medium">
                Pilih status <strong className="text-emerald-400">BENAR</strong> atau <strong className="text-rose-400">SALAH</strong> untuk setiap pernyataan:
              </p>
              <div className="space-y-3">
                {currentQuestion.statements.map((st) => {
                  const currentTFObj = userAnswers[currentQuestion.id] || {};
                  const userVal = currentTFObj[st.id];

                  return (
                    <div
                      key={st.id}
                      className="p-4 rounded-2xl border border-white/10 bg-slate-950/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <p className="text-sm font-medium text-slate-100 leading-snug flex-1">
                        <span className="font-bold text-indigo-300 mr-1.5">{st.id})</span> {st.text}
                      </p>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleTrueFalseSelect(st.id, true)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                            userVal === true
                              ? 'bg-emerald-500 text-slate-950 border-emerald-300 shadow-lg shadow-emerald-500/30'
                              : 'bg-white/5 text-emerald-300 border-white/15 hover:bg-emerald-500/20'
                          }`}
                        >
                          BENAR
                        </button>
                        <button
                          onClick={() => handleTrueFalseSelect(st.id, false)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
                            userVal === false
                              ? 'bg-rose-500 text-white border-rose-300 shadow-lg shadow-rose-500/30'
                              : 'bg-white/5 text-rose-300 border-white/15 hover:bg-rose-500/20'
                          }`}
                        >
                          SALAH
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 4. MATCHING COLUMNS */}
          {currentQuestion.type === 'matching' && currentQuestion.columnA && currentQuestion.columnB && (
            <div className="space-y-4 pt-2">
              <p className="text-xs text-slate-300 font-medium">
                Pasangkan setiap item di Kolom A dengan pilihan yang tepat di Kolom B:
              </p>

              <div className="space-y-3">
                {currentQuestion.columnA.map((itemA) => {
                  const currentMatchObj = userAnswers[currentQuestion.id] || {};
                  const selectedVal = currentMatchObj[itemA.id] || '';

                  return (
                    <div
                      key={itemA.id}
                      className="p-4 rounded-2xl border border-white/10 bg-slate-950/40 flex flex-col md:flex-row md:items-center justify-between gap-3"
                    >
                      <div className="font-medium text-sm text-slate-100 md:w-1/2">
                        {itemA.label}
                      </div>

                      <div className="md:w-1/2">
                        <select
                          value={selectedVal}
                          onChange={(e) => handleMatchingSelect(itemA.id, e.target.value)}
                          className="w-full p-3 rounded-xl glass-input text-xs font-semibold focus:outline-none cursor-pointer"
                        >
                          <option value="" className="bg-slate-900 text-slate-400">-- Pasangkan Pilihan --</option>
                          {currentQuestion.columnB?.map((itemB) => (
                            <option key={itemB.id} value={itemB.id} className="bg-slate-900 text-slate-100">
                              {itemB.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions Bar */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-5 py-3 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 border border-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-slate-200 transition-all flex items-center gap-2 backdrop-blur-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          {currentIndex < totalQuestions - 1 ? (
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
              className="px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white border border-white/30 shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2 active:scale-95"
            >
              <span>Selanjutnya</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowConfirmModal(true)}
              className="px-6 py-3 rounded-xl font-bold text-xs bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border border-white/30 shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Selesai & Refleksi</span>
            </button>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card-dark rounded-3xl p-6 sm:p-8 max-w-md w-full text-slate-100 space-y-6 shadow-2xl border border-white/20">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 mx-auto flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">Selesaikan Soal Ujian?</h3>
              <p className="text-xs text-slate-300">
                Anda telah menjawab <strong className="text-emerald-400 font-bold">{answeredCount}</strong> dari <strong className="text-white font-bold">{totalQuestions}</strong> soal.
              </p>
            </div>

            {unansweredCount > 0 && (
              <div className="p-3.5 rounded-xl bg-amber-500/15 border border-amber-400/30 text-amber-200 text-xs flex items-center gap-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-300 shrink-0" />
                <span>
                  Terdapat <strong>{unansweredCount} soal</strong> yang belum dijawab. Yakin ingin melanjutkan ke lembar refleksi?
                </span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="w-1/2 py-3 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 transition-all"
              >
                Kembali Periksa
              </button>
              <button
                onClick={() => {
                  setShowConfirmModal(false);
                  onSubmitQuiz();
                }}
                className="w-1/2 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border border-white/30 shadow-md shadow-emerald-500/20 transition-all"
              >
                Lanjut Refleksi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
