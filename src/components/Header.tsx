import React from 'react';
import { Timer, User, BookOpen, KeyRound, Sparkles } from 'lucide-react';
import { formatTime } from '../utils/quizHelper';

interface HeaderProps {
  studentName?: string;
  studentClass?: string;
  attemptNumber?: number;
  timerSeconds?: number;
  isQuizActive?: boolean;
  onOpenAdmin: () => void;
  onOpenPromptGuide?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  studentName,
  studentClass,
  attemptNumber,
  timerSeconds = 0,
  isQuizActive = false,
  onOpenAdmin,
  onOpenPromptGuide
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/40 backdrop-blur-xl border-b border-white/10 text-slate-100 px-4 py-3 shadow-lg shadow-slate-950/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/20 border border-white/20 flex items-center justify-center text-indigo-300 shadow-inner">
            <BookOpen className="w-5 h-5 text-indigo-200" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base md:text-lg tracking-tight text-white drop-shadow-sm">
                Evaluasi PKK
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-wider rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 backdrop-blur-md">
                FROSTED GLASS ED.
              </span>
            </div>
            <p className="text-xs text-slate-300/80 hidden sm:block font-medium">Produk Kreatif & Kewirausahaan</p>
          </div>
        </div>

        {/* Center Zone: Active Student & Timer Info */}
        {isQuizActive && (
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
            <div className="flex items-center gap-2 text-amber-300 font-mono font-bold text-sm sm:text-base">
              <Timer className="w-4 h-4 text-amber-300 animate-pulse" />
              <span className="tracking-wider">{formatTime(timerSeconds)}</span>
            </div>

            {studentName && (
              <div className="hidden md:flex items-center gap-2 pl-3 border-l border-white/20 text-xs text-slate-200">
                <User className="w-3.5 h-3.5 text-indigo-300" />
                <span className="font-semibold text-white truncate max-w-[130px]">{studentName}</span>
                <span className="text-slate-300">({studentClass})</span>
                {attemptNumber && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-500/30 text-indigo-200 border border-indigo-300/40">
                    PERCOBAAN {attemptNumber}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Actions Zone */}
        <div className="flex items-center gap-2">
          {onOpenPromptGuide && (
            <button
              onClick={onOpenPromptGuide}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-sm"
              title="Spesifikasi & Panduan Prompt"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Panduan Prompt</span>
            </button>
          )}

          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600/40 to-purple-600/40 hover:from-indigo-600/60 hover:to-purple-600/60 text-white border border-white/30 backdrop-blur-md transition-all active:scale-95 shadow-md shadow-indigo-950/30"
          >
            <KeyRound className="w-3.5 h-3.5 text-indigo-200" />
            <span>Admin 🔑</span>
          </button>
        </div>
      </div>
    </header>
  );
};
