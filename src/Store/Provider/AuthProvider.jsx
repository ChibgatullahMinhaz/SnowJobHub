import React, { use, useEffect, useState } from "react";
import { AuthContext, LoadingContext } from "./FirebaseAuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { setLoading,loading } = use(LoadingContext);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const creteUserWithGoogle = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const createUserWithGithub = (provider) => {
    toast.warning("Coming soon!");
  };
  const sendVerificationEmail = (currentUser) => {
    setLoading(true);
    return sendEmailVerification(currentUser);
  };
  const logout = ()=> {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
     return ()=> unsubscribe();

    });
  }, [setLoading]);

  const userInfo = {
    user,
    logout,
    createUser,
    createUserWithGithub,
    setLoading,
    creteUserWithGoogle,
    sendVerificationEmail,
    userLogin,
    loading
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;