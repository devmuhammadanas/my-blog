"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useAuthContext } from "../../../useContext/AuthContext";

const Header = ({ className }) => {
  const { isAuth, logout } = useAuthContext();

  const [showManu, setShowManu] = useState(false);

  return (
    <header className={className}>
      <nav
        className={`py-[20px] px-[20px] flex items-center justify-between ${showManu ? "bg-white" : "bg-transparent"}`}
      >
        <p className="text-[20px] leading-[18px] font-extrabold text-shadow-lg">
          Aetherfield
        </p>
        <ul className="hidden md:flex flex items-center gap-[20px] text-[#000000] font-medium">
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
        {isAuth ? (
          <div className="flex hidden md:flex gap-[20px]">
            <Link
              className="text-[18px] shadow-2xl leading-[22px] font-bold"
              href="/dashboard"
            >
              DashBoard
            </Link>

            <Link
              className="text-[18px] shadow-2xl leading-[22px] font-bold"
              href="/signUp"
              onClick={logout}
            >
              LogOut
            </Link>
          </div>
        ) : (
          <div className="flex hidden md:flex gap-[20px]">
            <Link
              className="text-[18px] shadow-2xl leading-[22px] font-bold"
              href="/login"
            >
              Login
            </Link>

            <Link
              className="text-[18px] shadow-2xl leading-[22px] font-bold"
              href="/signUp"
            >
              Sing Up
            </Link>
          </div>
        )}
        <button
          className="md:hidden flex items-center"
          onClick={() => setShowManu(!showManu)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="#111"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {showManu && (
        <div className="md:hidden z-50 bg-white absolute top-[70.58px] w-full shadow-lg px-6 py-6">
          <ul className="flex flex-col gap-5 text-[#000000] font-medium">
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
          {isAuth ? (
            <div className="flex mt-[6px] gap-[20px]">
              <Link
                className="text-[18px] leading-[22px] font-bold"
                href="/dashboard"
              >
                DashBoard
              </Link>

              <Link
                className="text-[18px] leading-[22px] font-bold"
                href="/signUp"
                onClick={logout}
              >
                LogOut
              </Link>
            </div>
          ) : (
            <div className="flex mt-[6px] gap-[20px]">
              <Link
                className="text-[18px] leading-[22px] font-bold"
                href="/login"
              >
                Login
              </Link>

              <Link
                className="text-[18px] leading-[22px] font-bold"
                href="/signUp"
              >
                Sing Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
