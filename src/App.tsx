import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { CoverScreen } from './components/CoverScreen';
import { QuizScreen } from './components/QuizScreen';
import { ReflectionScreen } from './components/ReflectionScreen';
import { ResultScreen } from './components/ResultScreen';
import { AdminModal } from './components/AdminModal';
import { PromptGuideModal } from './components/PromptGuideModal';

import { QUESTIONS_DATA } from './data/questionsData';
import { Question, ReflectionAnswers, StudentRecord } from './types';
import { prepareQuestionsForAttempt, evaluateAnswers } from './utils/quizHelper';
import { saveRecord, getStudentAttempts } from './utils/storage';

type AppView = 'cover' | 'quiz' | 'reflection' | 'result';

export default function App() {
  const [view, setView] = useState<AppView>('cover');
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [attemptNumber, setAttemptNumber] = useState(1);

  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, any>>({});
  
  // Stopwatch Timer State
  const [timerSeconds, setTimerSeconds] = useState(0);
  const timerRef = useRef<any>(null);

  const [currentRecord, setCurrentRecord] = useState<StudentRecord | null>(null);

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isPromptGuideOpen, setIsPromptGuideOpen] = useState(false);

  // Handle Timer
  useEffect(() => {
    if (view === 'quiz') {
      timerRef.current = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [view]);

  // Handler: Start Exam
  const handleStartExam = (nama: string, kelas: string, attempt: number) => {
    setStudentName(nama);
    setStudentClass(kelas);
    setAttemptNumber(attempt);
    setUserAnswers({});
    setTimerSeconds(0);

    // Prepare questions (shuffled for attempt 3)
    const prepared = prepareQuestionsForAttempt(QUESTIONS_DATA, attempt);
    setActiveQuestions(prepared);

    setView('quiz');
  };

  // Handler: User changes answer for a question
  const handleAnswerChange = (questionId: number, answer: any) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Handler: Submit Quiz -> Proceed to Reflection
  const handleSubmitQuiz = () => {
    setView('reflection');
  };

  // Handler: Save Reflection -> Calculate Grade & Save Record
  const handleSaveReflection = (reflectionAnswers: ReflectionAnswers) => {
    // Evaluate answers against original questions data
    const evalResult = evaluateAnswers(QUESTIONS_DATA, userAnswers);

    const now = new Date();
    const formattedTimestamp = `${now.toLocaleDateString('id-ID')} ${now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}`;

    const newRecord: StudentRecord = {
      id: `REC_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      nama: studentName,
      kelas: studentClass,
      attemptNumber,
      score: evalResult.score,
      correctCount: evalResult.correctCount,
      incorrectCount: evalResult.incorrectCount,
      totalQuestions: QUESTIONS_DATA.length,
      durationSeconds: timerSeconds,
      timestamp: formattedTimestamp,
      reflectionAnswers,
      answersDetail: userAnswers
    };

    saveRecord(newRecord);
    setCurrentRecord(newRecord);
    setView('result');
  };

  // Handler: Retry Exam (for attempt 2 or 3)
  const handleRetry = () => {
    const existing = getStudentAttempts(studentName, studentClass);
    const nextAttempt = existing.length + 1;

    if (nextAttempt <= 3) {
      handleStartExam(studentName, studentClass, nextAttempt);
    } else {
      setView('cover');
    }
  };

  // Handler: Return to Cover
  const handleHome = () => {
    setView('cover');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Header Bar */}
      <Header
        studentName={studentName}
        studentClass={studentClass}
        attemptNumber={attemptNumber}
        timerSeconds={timerSeconds}
        isQuizActive={view === 'quiz'}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenPromptGuide={() => setIsPromptGuideOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {view === 'cover' && (
          <CoverScreen onStartExam={handleStartExam} />
        )}

        {view === 'quiz' && (
          <QuizScreen
            questions={activeQuestions}
            studentName={studentName}
            studentClass={studentClass}
            attemptNumber={attemptNumber}
            userAnswers={userAnswers}
            onAnswerChange={handleAnswerChange}
            onSubmitQuiz={handleSubmitQuiz}
          />
        )}

        {view === 'reflection' && (
          <ReflectionScreen onSaveReflection={handleSaveReflection} />
        )}

        {view === 'result' && currentRecord && (
          <ResultScreen
            record={currentRecord}
            questions={QUESTIONS_DATA}
            onRetry={handleRetry}
            onHome={handleHome}
          />
        )}
      </main>

      {/* Modals */}
      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      <PromptGuideModal isOpen={isPromptGuideOpen} onClose={() => setIsPromptGuideOpen(false)} />

      {/* Required Footer Branding */}
      <footer className="bg-slate-950/90 backdrop-blur-md border-t border-white/10 py-3.5 px-6 text-center text-xs font-semibold text-slate-400 tracking-wider">
        <p>Copywrite by Khairul Maddy</p>
      </footer>
    </div>
  );
}
