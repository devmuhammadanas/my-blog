"use client";

import { auth } from "@/lib/fireBaseConfig";
import { signOut } from "firebase/auth";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const initialState = { isAuth: false, user: {} };

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  console.log("state1", state);

  const logout = (e) => {
    e.preventDefault();
    signOut(auth);
    setState({ isAuth: false, user: {} });
  };

  return (
    <AuthContext.Provider value={{ ...state, setState, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
