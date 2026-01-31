"use client";

import { auth, firestore } from "@/lib/fireBaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();
const initialState = { isAuth: false, user: null, loading: true };

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  // const [sacreenLoading, setSacreenLoading] = useState(true);

  console.log("state1", state);

  const readeData = useCallback(async (user) => {
    console.log("myuser", user);

    const docSnap = await getDoc(doc(firestore, "users", user.uid));
    console.log("docSnap", docSnap.data());

    if (docSnap.exists()) {
      setState({ isAuth: true, user: { ...docSnap.data(), uid: user.uid } });
      // setSacreenLoading(false);
    } else {
      console.log("No such document!");
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        readeData(user);
      } else {
        console.log("User signed out");
        // setSacreenLoading(false);
      }
    });
  }, []);

  const logout = (e) => {
    e.preventDefault();
    signOut(auth);
    setState({ isAuth: false, user: {} });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, setState, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
