import React, { useState, useMemo, useEffect, Component, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { 
  BookOpen, 
  GraduationCap, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Trophy,
  User as UserIcon,
  LayoutGrid,
  LogOut,
  LogIn,
  History,
  Award,
  AlertCircle,
  RefreshCcw,
  PlayCircle
} from 'lucide-react';
import { mwdCurriculum } from './data/mwdData';
import { CurriculumSection, QuizQuestion } from './types';
import { useFirebase } from './FirebaseContext';

// Error Boundary Component
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      let errorMessage = "An unexpected error occurred.";
      let errorDetails = null;

      try {
        const parsed = JSON.parse(this.state.error.message);
        if (parsed.error) {
          errorMessage = parsed.error;
          errorDetails = parsed;
        }
      } catch (e) {
        errorMessage = this.state.error?.message || errorMessage;
      }

      return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-red-100">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Something went wrong</h2>
            <p className="text-slate-600 mb-6">{errorMessage}</p>
            {errorDetails && (
              <div className="text-left bg-slate-50 rounded-lg p-4 mb-6 overflow-auto max-h-40">
                <p className="text-xs font-mono text-slate-500">
                  Operation: {errorDetails.operationType}<br />
                  Path: {errorDetails.path}
                </p>
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCcw className="w-5 h-5" />
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  const { user, login, logout, saveQuizResult, results, loading } = useFirebase();
  const [currentSectionId, setCurrentSectionId] = useState<string | null>(null);
  const [view, setView] = useState<'curriculum' | 'quiz' | 'results' | 'certification' | 'profile'>('curriculum');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState<QuizQuestion[]>([]);

  const currentSection = useMemo(() => {
    return mwdCurriculum.find(s => s.id === currentSectionId);
  }, [currentSectionId]);

  const startQuiz = (section: CurriculumSection) => {
    if (!section.quizQuestions || section.quizQuestions.length === 0) {
      alert("Quiz content for this section is coming soon!");
      return;
    }
    // Shuffle questions
    const shuffled = [...section.quizQuestions].sort(() => Math.random() - 0.5);
    setCurrentQuizQuestions(shuffled);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setView('quiz');
  };

  const handleAnswer = (questionIndex: number, answerIndex: number) => {
    if (quizSubmitted) return;
    setQuizAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
  };

  const calculateScore = () => {
    let correct = 0;
    currentQuizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correctAnswerIndex) correct++;
    });
    return correct;
  };

  const handleViewResults = async () => {
    const score = Math.round((calculateScore() / currentQuizQuestions.length) * 100);
    if (user && currentSection) {
      await saveQuizResult(
        currentSection.id,
        currentSection.title,
        score,
        calculateScore(),
        currentQuizQuestions.length
      );
    }
    setView('results');
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen max-w-md mx-auto bg-zinc-50 flex flex-col relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-zinc-100 max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white shadow-lg">
            <GraduationCap size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">MWD Pro</h1>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">Petro Academy</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {(currentSectionId || view !== 'curriculum') && (
            <button 
              onClick={() => { setView('curriculum'); setCurrentSectionId(null); }}
              className="flex flex-col items-center gap-0.5 text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              <LayoutGrid size={20} />
              <span className="text-[8px] font-bold uppercase tracking-tighter">Menu</span>
            </button>
          )}
          
          {user ? (
            <button 
              onClick={() => logout()}
              className="flex flex-col items-center gap-0.5 text-zinc-400 hover:text-red-600 transition-colors"
            >
              <LogOut size={20} />
              <span className="text-[8px] font-bold uppercase tracking-tighter">Logout</span>
            </button>
          ) : (
            <button 
              onClick={() => login()}
              className="flex flex-col items-center gap-0.5 text-zinc-400 hover:text-emerald-600 transition-colors"
            >
              <LogIn size={20} />
              <span className="text-[8px] font-bold uppercase tracking-tighter">Login</span>
            </button>
          )}
        </div>
      </header>

      <main className="flex-1 p-6 pt-24 overflow-y-auto pb-24">
        <AnimatePresence mode="wait">
          {view === 'curriculum' && (
            <motion.div 
              key="curriculum"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <BookOpen size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Curriculum</span>
              </div>

              {/* Overall Progress Bar */}
              <div className="bg-white p-4 rounded-2xl border border-zinc-100 shadow-sm mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-tighter">Your Progress</span>
                  <span className="text-xs font-bold text-emerald-600">{Math.round((mwdCurriculum.findIndex(s => s.id === currentSectionId) + 1) / mwdCurriculum.length * 100) || 0}% Complete</span>
                </div>
                <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((mwdCurriculum.findIndex(s => s.id === currentSectionId) + 1) / mwdCurriculum.length) * 100 || 0}%` }}
                    className="h-full bg-emerald-500"
                  />
                </div>
              </div>

              {currentSection ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => setCurrentSectionId(null)}
                      className="flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors bg-zinc-100 px-4 py-2 rounded-full"
                    >
                      <ChevronLeft size={18} /> Back to Modules
                    </button>
                    <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full">
                      <BookOpen size={16} />
                      <span className="text-xs font-bold uppercase tracking-wider">Module {mwdCurriculum.findIndex(s => s.id === currentSection.id) + 1}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 leading-tight">{currentSection.title}</h2>
                    
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100">
                      <div className="prose prose-zinc prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-zinc-600 prose-p:leading-relaxed prose-li:text-zinc-600 prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-hr:border-zinc-100 max-w-none">
                        <ReactMarkdown>{currentSection.content}</ReactMarkdown>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4 pb-12">
                    <button 
                      onClick={() => startQuiz(currentSection)}
                      className="group flex items-center gap-3 bg-zinc-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-zinc-200 active:scale-95"
                    >
                      <PlayCircle size={24} />
                      Start Module Quiz
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-3xl font-bold tracking-tight">Training Modules</h2>
                    <p className="text-sm text-zinc-500">Complete all 15 sections to earn your MWD Certification.</p>
                  </div>
                  
                  <div className="grid gap-4">
                    {mwdCurriculum.map((section, index) => (
                      <button 
                        key={section.id}
                        onClick={() => setCurrentSectionId(section.id)}
                        className="group relative bg-white p-6 rounded-[2rem] border border-zinc-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all text-left overflow-hidden active:scale-[0.98]"
                      >
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 font-bold group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-zinc-900 group-hover:text-emerald-700 transition-colors">{section.title}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Module {index + 1}</span>
                              <div className="w-1 h-1 rounded-full bg-zinc-200" />
                              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Available</span>
                            </div>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                        
                        {/* Subtle background accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-emerald-500/10 transition-colors" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {view === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Knowledge Check</h2>
                <span className="text-xs font-bold bg-zinc-100 px-3 py-1 rounded-full">
                  {Object.keys(quizAnswers).length} / {currentQuizQuestions.length}
                </span>
              </div>

              <div className="space-y-12">
                {currentQuizQuestions.map((q, qIdx) => (
                  <div key={q.id} className="space-y-4">
                    <p className="font-bold text-lg leading-snug">{qIdx + 1}. {q.question}</p>
                    <div className="grid gap-2">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = quizAnswers[qIdx] === oIdx;
                        const isCorrect = oIdx === q.correctAnswerIndex;
                        const showFeedback = quizAnswers[qIdx] !== undefined;
                        
                        let bgColor = "bg-white";
                        let borderColor = "border-zinc-100";
                        let textColor = "text-zinc-900";

                        if (showFeedback && isSelected) {
                          if (isCorrect) {
                            bgColor = "bg-emerald-50";
                            borderColor = "border-emerald-200";
                            textColor = "text-emerald-700";
                          } else {
                            bgColor = "bg-red-50";
                            borderColor = "border-red-200";
                            textColor = "text-red-700";
                          }
                        } else if (showFeedback && isCorrect && quizAnswers[qIdx] !== undefined) {
                          bgColor = "bg-emerald-50";
                          borderColor = "border-emerald-200";
                          textColor = "text-emerald-700";
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleAnswer(qIdx, oIdx)}
                            disabled={quizAnswers[qIdx] !== undefined}
                            className={`w-full p-4 text-left rounded-2xl border-2 transition-all flex items-center justify-between ${bgColor} ${borderColor} ${textColor} ${!showFeedback ? 'hover:border-zinc-300 active:scale-[0.98]' : ''}`}
                          >
                            <span className="font-medium">{opt}</span>
                            {showFeedback && isSelected && (
                              isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />
                            )}
                            {showFeedback && !isSelected && isCorrect && quizAnswers[qIdx] !== undefined && (
                              <CheckCircle2 size={18} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                    
                    {quizAnswers[qIdx] !== undefined && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="p-4 bg-zinc-100 rounded-2xl text-sm text-zinc-600 border border-zinc-200"
                      >
                        <p className="font-bold text-zinc-900 mb-1">Explanation</p>
                        {q.explanation}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <button 
                onClick={handleViewResults}
                disabled={Object.keys(quizAnswers).length < currentQuizQuestions.length}
                className="w-full btn-primary"
              >
                View Results
              </button>
            </motion.div>
          )}

          {view === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-8 py-8"
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 bg-zinc-900 rounded-full flex items-center justify-center text-white mx-auto shadow-2xl">
                  <Trophy size={48} />
                </div>
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="absolute -bottom-2 -right-2 bg-emerald-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold border-4 border-white"
                >
                  {Math.round((calculateScore() / currentQuizQuestions.length) * 100)}%
                </motion.div>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-bold">
                  {calculateScore() / currentQuizQuestions.length >= 0.8 ? 'Excellent!' : 'Good Effort!'}
                </h2>
                <p className="text-zinc-500">
                  You scored {calculateScore()} out of {currentQuizQuestions.length} questions correctly.
                </p>
              </div>

              <div className="grid gap-3">
                {currentSectionId === 'section-15' && calculateScore() / currentQuizQuestions.length >= 0.8 && (
                  <button 
                    onClick={() => setView('certification')}
                    className="w-full bg-emerald-600 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-200"
                  >
                    <Trophy size={20} /> Claim Certification
                  </button>
                )}
                <button 
                  onClick={() => { setView('curriculum'); setCurrentSectionId(null); }}
                  className="w-full btn-primary"
                >
                  Continue Learning
                </button>
                <button 
                  onClick={() => { setQuizAnswers({}); setQuizSubmitted(false); setView('quiz'); }}
                  className="w-full btn-secondary flex items-center justify-center gap-2"
                >
                  <RotateCcw size={18} /> Retake Quiz
                </button>
              </div>
            </motion.div>
          )}

          {view === 'profile' && (
            <motion.div 
              key="profile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-2 text-zinc-400 mb-2">
                <UserIcon size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">My Profile</span>
              </div>

              {user ? (
                <div className="space-y-8">
                  <div className="flex items-center gap-4 p-6 apple-card">
                    <img 
                      src={user.photoURL || `https://ui-avatars.com/api/?name=${user.displayName}`} 
                      alt={user.displayName || 'User'} 
                      className="w-16 h-16 rounded-2xl shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h3 className="text-xl font-bold">{user.displayName}</h3>
                      <p className="text-sm text-zinc-500">{user.email}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <History size={16} />
                      <h4 className="text-xs font-bold uppercase tracking-widest">Quiz History</h4>
                    </div>

                    {results.length > 0 ? (
                      <div className="space-y-3">
                        {results.map((result) => (
                          <div key={result.id} className="p-4 apple-card flex items-center justify-between">
                            <div>
                              <p className="font-bold text-sm">{result.sectionTitle}</p>
                              <p className="text-[10px] text-zinc-400 font-medium">
                                {result.completedAt?.toDate?.() ? result.completedAt.toDate().toLocaleDateString() : 'Just now'}
                              </p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-bold ${result.score >= 80 ? 'bg-emerald-50 text-emerald-600' : 'bg-zinc-100 text-zinc-600'}`}>
                              {result.score}%
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-zinc-100 rounded-3xl border border-dashed border-zinc-300">
                        <p className="text-sm text-zinc-400 font-medium">No quiz results yet.</p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Award size={16} />
                      <h4 className="text-xs font-bold uppercase tracking-widest">Certifications</h4>
                    </div>
                    {results.some(r => r.sectionId === 'section-15' && r.score >= 80) ? (
                      <button 
                        onClick={() => setView('certification')}
                        className="w-full p-4 apple-card flex items-center gap-4 border-2 border-emerald-200 bg-emerald-50/50"
                      >
                        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                          <Trophy size={20} />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-emerald-900">MWD Professional</p>
                          <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Verified Certification</p>
                        </div>
                      </button>
                    ) : (
                      <div className="p-8 text-center bg-zinc-100 rounded-3xl border border-dashed border-zinc-300">
                        <p className="text-sm text-zinc-400 font-medium">Complete the Final Assessment with 80%+ to earn your certificate.</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-6 py-12">
                  <div className="w-20 h-20 bg-zinc-100 rounded-3xl flex items-center justify-center text-zinc-300 mx-auto">
                    <UserIcon size={40} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Sign in to track progress</h3>
                    <p className="text-sm text-zinc-500 max-w-[200px] mx-auto">Save your quiz results and earn your MWD Professional certification.</p>
                  </div>
                  <button 
                    onClick={() => login()}
                    className="btn-primary flex items-center justify-center gap-2 mx-auto"
                  >
                    <LogIn size={18} /> Sign in with Google
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 apple-blur border-t border-zinc-100 flex justify-around items-center">
        <button 
          onClick={() => { setView('curriculum'); setCurrentSectionId(null); }}
          className={`flex flex-col items-center gap-1 ${view === 'curriculum' ? 'text-zinc-900' : 'text-zinc-400'}`}
        >
          <BookOpen size={20} />
          <span className="text-[10px] font-bold uppercase">Learn</span>
        </button>
        <button 
          onClick={() => setView('profile')}
          className={`flex flex-col items-center gap-1 ${view === 'profile' ? 'text-zinc-900' : 'text-zinc-400'}`}
        >
          <UserIcon size={20} />
          <span className="text-[10px] font-bold uppercase">Profile</span>
        </button>
      </nav>
    </div>
    </ErrorBoundary>
  );
}
