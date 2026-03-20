export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface CurriculumSection {
  id: string;
  title: string;
  content: string;
  quizQuestions: QuizQuestion[];
}

export interface UserProgress {
  completedSections: string[];
  quizScores: Record<string, number>;
}
