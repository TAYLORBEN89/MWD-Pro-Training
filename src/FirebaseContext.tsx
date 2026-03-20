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

  useEffect(() => {
    let unsubscribeResults: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
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
    });

    return () => {
      unsubscribeAuth();
      if (unsubscribeResults) unsubscribeResults();
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

  return (
    <FirebaseContext.Provider value={{ user, loading, login, logout, saveQuizResult, results }}>
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
