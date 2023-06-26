import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  children: React.ReactNode;
}

interface UserContextValue {
  createUser: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  googleSignIn: () => void;
  user: User | null;
}

const UserContext = createContext<UserContextValue | null>(null);

export const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const [authInitialized, setAuthInitialized] = useState(false); // Added state to track if authentication has been initialized

  const createUser = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log("Error signing in:", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthInitialized(true); // Mark authentication as initialized once the state changes
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (authInitialized && user) { // Check if authentication has been initialized and user is available
      navigate("/free-demo");
    }
  }, [ user]);

  const userContextValue: UserContextValue = {
    createUser,
    signIn,
    logOut,
    googleSignIn,
    user,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
