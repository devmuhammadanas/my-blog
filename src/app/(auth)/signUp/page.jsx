"use client";
import Header from "@/app/components/Header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../../../../useContext/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/fireBaseConfig";
import { useRouter } from "next/navigation";

const initialData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const { isAuth, setState } = useAuthContext();
  // const [uersData, setUsersData] = useState([]);
  const [inputData, setInputData] = useState(initialData);

  const handleInputChange = (e) => {
    setInputData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  
    const router = useRouter();

    useEffect(() => {
      if (isAuth) {
        router.replace("/");
      }
    }, [isAuth]);
    
  const handleSubmit = (e) => {
    const { fullName, email, password, confirmPassword } = inputData;
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName.length < 3) {
      return toast.error("Your name must be at least 3 characters long");
    }
    if (!emailRegex.test(email)) {
      return toast.error("Please enter a valid email address");
    }
    if (password.length < 6) {
      return toast.error("Your Password length least 3 characters long ");
    }
    if (confirmPassword !== password) {
      return toast.error("Your password doesn't match");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setState({ isAuth: true, user: { email: user.email, uid: user.uid } });
        toast.success("Signup successful");
        // ...
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already exists");
        } else {
          toast.error(error.message);
        }
      });

    setInputData(initialData);
  };

  return (
    <div className="min-h-[100vh] w-full flex flex-col bg-gradient-to-b from-[#A8D3FF] to-[#FFF4DF]">
      <Header />
      <main className="grow-1 flex flex-col justify-center">
        <section className="flex items-center justify-center mb-[20px] px-4 ">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h1 className="text-2xl font-semibold mb-6 text-center">Sign Up</h1>

            <form className="flex flex-col gap-3">
              <input
                type="text"
                name="fullName"
                value={inputData.fullName}
                placeholder="Full name address"
                required
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                onChange={handleInputChange}
              />
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
              <input
                type="password"
                name="confirmPassword"
                value={inputData.confirmPassword}
                placeholder="Confirm Password"
                required
                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                onChange={handleInputChange}
              />

              <button
                type="submit"
                className="mt-1 bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
            </form>

            <div className="text-center mt-4 text-sm text-gray-500">
              Don’t have an account?{" "}
              <Link
                href="/login"
                className="text-black font-medium hover:underline"
              >
                Login
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

export default SignUp;
