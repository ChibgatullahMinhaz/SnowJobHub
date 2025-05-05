import React, { use, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { LoaderContext } from "../Context/LocaderContext";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../../Utilities/firebase.init";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { isLoading, setIsLoading } = useContext(LoaderContext);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const creteUserWithGoogle = (provider) => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };

  const sendVerificationEmail = (currentUser) => {
    setIsLoading(true);
    return sendEmailVerification(currentUser);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
      return () => unsubscribe();
    });
  }, [setIsLoading]);

  const userInfo = {
    user,
    logout,
    createUser,
    setIsLoading,
    creteUserWithGoogle,
    sendVerificationEmail,
    userLogin,
    isLoading,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
