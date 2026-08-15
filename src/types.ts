export type QuestionType = 'single' | 'complex' | 'true_false' | 'matching';

export interface Option {
  key: string; // 'A', 'B', 'C', 'D', 'E'
  text: string;
}

export interface TrueFalseStatement {
  id: number;
  text: string;
  correctAnswer: boolean; // true = BENAR, false = SALAH
  explanation: string;
}

export interface MatchingPair {
  id: string; // e.g. '1', '2', '3'
  label: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  cognitiveLevel: string; // 'C1', 'C2', 'C3', 'C4', 'C5'
  questionFormat: string; // 'Pilihan Ganda', 'Pilihan Ganda Kompleks', 'Benar / Salah', 'Menjodohkan'
  options?: Option[];
  correctAnswer?: string; // For 'single'
  correctAnswers?: string[]; // For 'complex'
  statements?: TrueFalseStatement[]; // For 'true_false'
  columnA?: MatchingPair[]; // For 'matching'
  columnB?: MatchingPair[]; // For 'matching'
  correctPairs?: Record<string, string>; // For 'matching' e.g. { '1': 'c', '2': 'e', ... }
  explanation: string;
}

export interface ReflectionAnswers {
  q1: string; // Refleksi Pemahaman
  q2: string; // Penerapan Nyata
  q3: string; // Evaluasi & Komitmen Diri
}

export interface StudentRecord {
  id: string;
  nama: string;
  kelas: string;
  attemptNumber: number; // 1, 2, or 3
  score: number;
  correctCount: number;
  incorrectCount: number;
  totalQuestions: number;
  durationSeconds: number;
  timestamp: string;
  reflectionAnswers: ReflectionAnswers;
  answersDetail: Record<number, any>; // Stores user response per question id
}
