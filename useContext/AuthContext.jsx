"use client";

import { auth, firestore } from "@/lib/fireBaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/navigation";
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
  const router = useRouter()

  const readeData = useCallback(async (user) => {

    const docSnap = await getDoc(doc(firestore, "users", user.uid));
    console.log("docSnap", docSnap.data());

    if (docSnap.exists()) {
      setState({ isAuth: true, user: { ...docSnap.data(), uid: user.uid } });

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
      }
    });
  }, []);


  const [loading, setLoading] = useState(false)
  const [postsData, setPostsData] = useState([])

  const getData = async () => {
    try {
      const q = query(collection(firestore, "blogPost"), where("uid", "==", state.user.uid));
      let array = []
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log("imp", doc.data());
        array.push(doc.data());
      });
      setLoading(false)

      setPostsData(array);
    } catch (error) {
      console.log(error)
      setLoading(false)

    }
  }

  useEffect(() => {
    if (!state.user?.uid) return;
    setLoading(true)

    getData()

  }, [state.user])

  console.log("postsData0", postsData)


  const logout = (e) => {
    e.preventDefault();
    signOut(auth);
    router.replace('/')
    setState({ isAuth: false, user: {} });
  };

  return (
    <AuthContext.Provider
      value={{ ...state, setState, logout, getData, postsData, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
