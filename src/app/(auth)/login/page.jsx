"use client";
import Header from "@/app/components/Header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../../useContext/AuthContext";
import { useRouter } from "next/navigation";
import { auth, firestore } from "@/lib/fireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const initialData = { email: "", password: "" };

const Login = () => {
  const { isAuth, user, setState, } = useAuthContext();

  const [usersData, setUserData] = useState([]);
  const [inputData, setInputData] = useState(initialData);

  console.log("State", isAuth);

  const handleInputChange = (e) => {
    setInputData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  console.log("inputData:", inputData);
  console.log("usersData:", usersData);

  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.replace("/");
    }
  }, [isAuth]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inputData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      return toast.error("please enter your Email");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address");
    }
    if (!password) {
      return toast.error("please Enter Your Password");
    }
    if (password.length < 6) {
      return toast.error("Password Must be at Least 6 Characters");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then ( async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUserData((prev) => [...prev, inputData]);
        setState({ isAuth: true, user: { email: user.email, uid: user.uid } });
        await setDoc(doc(firestore, 'users', user.uid), {status: 'LoggedIn', time: new Date()}, { merge: true })
        setInputData(initialData);
        toast.success("Login SuccessFully.");
        // ...
      })
      .catch((error) => {
        console.log('error.code', error.code)
        console.log('error.message', error.message)
        toast.error('invalid email or password');
      });
  };

  return (
    <div className="min-h-[100vh] w-full flex flex-col bg-gradient-to-b from-[#A8D3FF] to-[#FFF4DF]">
      <Header />
      <main className="grow-1 flex flex-col justify-center">
        <section className="flex items-center justify-center px-4 ">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>

            <form className="flex flex-col gap-4">
              <input
                type="email"
                name="email"
                value={inputData.email}
                placeholder="Email address"
                required
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                onChange={handleInputChange}
              />

              <input
                type="password"
                name="password"
                value={inputData.password}
                placeholder="Password"
                required
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="mt-2 bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </form>

            <div className="text-center mt-6 text-sm text-gray-500">
              Don’t have an account?{" "}
              <Link
                href="/signUp"
                className="text-black font-medium hover:underline"
              >
                Sign up
              </Link>
            </div>
          </div>
        </section>
      </main>

      <div className="flex bg-amber-200 px-[20px] py-[10px] flex-wrap justify-center gap-[20px] md:justify-between">
        <ul className="flex gap-[20px] text-[#000000] font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <p className="text-[16px] leading-[22px]">
          © {new Date().getFullYear()} · All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Login;
