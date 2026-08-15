import { Question, StudentRecord } from '../types';

export function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function prepareQuestionsForAttempt(questions: Question[], attemptNumber: number): Question[] {
  if (attemptNumber !== 3) {
    // Attempt 1 & 2: Normal order
    return questions;
  }

  // Attempt 3: Randomize questions and options
  const shuffledQuestions = shuffleArray(questions).map((q) => {
    const cloned = { ...q };

    if (cloned.options) {
      cloned.options = shuffleArray(cloned.options);
    }

    if (cloned.type === 'matching' && cloned.columnB) {
      cloned.columnB = shuffleArray(cloned.columnB);
    }

    return cloned;
  });

  return shuffledQuestions;
}

export function evaluateAnswers(
  questions: Question[],
  userAnswers: Record<number, any>
): { score: number; correctCount: number; incorrectCount: number; detail: Record<number, boolean> } {
  let totalPoints = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  const detail: Record<number, boolean> = {};

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    let isCorrect = false;

    if (q.type === 'single') {
      if (ans && ans === q.correctAnswer) {
        isCorrect = true;
      }
    } else if (q.type === 'complex') {
      if (Array.isArray(ans) && q.correctAnswers) {
        const sortedUser = [...ans].sort();
        const sortedCorrect = [...q.correctAnswers].sort();
        if (
          sortedUser.length === sortedCorrect.length &&
          sortedUser.every((val, index) => val === sortedCorrect[index])
        ) {
          isCorrect = true;
        }
      }
    } else if (q.type === 'true_false') {
      if (ans && typeof ans === 'object' && q.statements) {
        let matchAll = true;
        q.statements.forEach((st) => {
          if (ans[st.id] !== st.correctAnswer) {
            matchAll = false;
          }
        });
        isCorrect = matchAll;
      }
    } else if (q.type === 'matching') {
      if (ans && typeof ans === 'object' && q.correctPairs && q.columnA) {
        let matchAll = true;
        q.columnA.forEach((item) => {
          if (ans[item.id] !== q.correctPairs?.[item.id]) {
            matchAll = false;
          }
        });
        isCorrect = matchAll;
      }
    }

    detail[q.id] = isCorrect;

    if (isCorrect) {
      correctCount++;
      totalPoints += 1;
    } else {
      incorrectCount++;
    }
  });

  // Calculate scaled score out of 100
  const finalScore = Math.round((totalPoints / questions.length) * 100);

  return {
    score: finalScore,
    correctCount,
    incorrectCount,
    detail
  };
}

export function formatTime(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const pad = (n: number) => n.toString().padStart(2, '0');

  if (hrs > 0) {
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  }
  return `${pad(mins)}:${pad(secs)}`;
}
