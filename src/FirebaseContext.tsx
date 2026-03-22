import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  auth, 
  db, 
  loginWithGoogle, 
  logout, 
  onAuthStateChanged, 
  User, 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  query, 
  where, 
  orderBy, 
  onSnapshot, 
  addDoc, 
  serverTimestamp,
  handleFirestoreError,
  OperationType
} from './firebase';
import { AlertCircle } from 'lucide-react';

interface QuizResult {
  id: string;
  sectionId: string;
  sectionTitle: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  completedAt: any;
}

interface FirebaseContextType {
  user: User | null;
  loading: boolean;
  login: () => Promise<any>;
  logout: () => Promise<void>;
  saveQuizResult: (sectionId: string, sectionTitle: string, score: number, correctAnswers: number, totalQuestions: number) => Promise<void>;
  results: QuizResult[];
}

const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribeResults: (() => void) | null = null;

    // Safety timeout to prevent infinite loading if Firebase fails
    const timeoutId = setTimeout(() => {
      if (loading) {
        console.warn("Firebase initialization timed out. Proceeding anyway.");
        setLoading(false);
      }
    }, 5000);

    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
      clearTimeout(timeoutId);
      // Cleanup previous results subscription if it exists
      if (unsubscribeResults) {
        unsubscribeResults();
        unsubscribeResults = null;
      }

      setUser(currentUser);
      
      if (currentUser) {
        // Sync user profile to Firestore
        const userRef = doc(db, 'users', currentUser.uid);
        try {
          await setDoc(userRef, {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
            createdAt: serverTimestamp()
          }, { merge: true });
        } catch (error) {
          console.error("Error syncing user profile:", error);
        }

        // Listen for quiz results
        const resultsQuery = query(
          collection(db, 'results'),
          where('uid', '==', currentUser.uid),
          orderBy('completedAt', 'desc')
        );

        unsubscribeResults = onSnapshot(resultsQuery, (snapshot) => {
          const fetchedResults = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as QuizResult[];
          setResults(fetchedResults);
        }, (error) => {
          // Only report if we are still logged in
          if (auth.currentUser) {
            handleFirestoreError(error, OperationType.LIST, 'results');
          }
        });
      } else {
        setResults([]);
      }
      setLoading(false);
    }, (err) => {
      console.error("Auth state change error:", err);
      clearTimeout(timeoutId);
      setError("Failed to connect to authentication services.");
      setLoading(false);
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeResults) unsubscribeResults();
      clearTimeout(timeoutId);
    };
  }, []);

  const login = async () => {
    try {
      await loginWithGoogle();
    } catch (error: any) {
      if (error.code === 'auth/user-cancelled') {
        console.log('User cancelled the login popup');
        return;
      }
      console.error('Login error:', error);
      throw error;
    }
  };

  const saveQuizResult = async (sectionId: string, sectionTitle: string, score: number, correctAnswers: number, totalQuestions: number) => {
    if (!user) return;

    try {
      await addDoc(collection(db, 'results'), {
        uid: user.uid,
        sectionId,
        sectionTitle,
        score,
        correctAnswers,
        totalQuestions,
        completedAt: serverTimestamp()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'results');
    }
  };

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="bg-zinc-900/50 border border-red-500/20 p-6 rounded-2xl max-w-sm w-full text-center">
          <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="text-red-500 w-6 h-6" />
          </div>
          <h2 className="text-white font-medium mb-2">Connection Error</h2>
          <p className="text-zinc-400 text-sm mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="w-full bg-emerald-500 text-black font-bold py-3 rounded-xl hover:bg-emerald-400 transition-colors"
          >
            Retry Connection
          </button>
        </div>
      </div>
    );
  }

  const logoutUser = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <FirebaseContext.Provider value={{ user, loading, login, logout: logoutUser, saveQuizResult, results }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
