"use client";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import userImg from "../../public/assets/user.png";
import Active from "@/components/Active";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="w-full border-b sticky top-0 z-20 bg-white">
        <div className="navbar w-11/12 mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Active href="/">Home</Active>
                </li>
                <li>
                  <Active href="/about">About</Active>
                </li>
                <li>
                  <Active href="/contact">Contact</Active>
                </li>
              </ul>
            </div>
            <a className="lg:text-xl text-lg font-semibold uppercase">
              Exclusive
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-6">
              <li>
                <Active href="/">Home</Active>
              </li>
              <li>
                <Active href="/about">About</Active>
              </li>
              <li>
                <Active href="/contact">Contact</Active>
              </li>
            </ul>
          </div>

          <div className="navbar-end lg:ml-0 ml-8 gap-4 lg:justify-end">
            <FaRegHeart></FaRegHeart>
            <BsCart3></BsCart3>
            <div className="relative">
              {/* Dropdown Trigger (Image) */}
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center space-x-2"
              >
                <Image
                  src={userImg}
                  alt="user profile"
                  width={30}
                  height={30}
                  className="rounded-full cursor-pointer"
                />
              </button>

              {/* Smooth Dropdown Content */}
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border"
                  >
                    <ul className="p-4 space-y-3 text-center w-full">
                      <li className="px-4 py-2 w-full">
                        <Active
                          href="/login"
                          className="block text-gray-700 hover:bg-gray-100 w-full"
                        >
                          Login
                        </Active>
                      </li>
                      <li className="px-4 py-2">
                        <Active
                          href="/register"
                          className="block text-gray-700 hover:bg-gray-100"
                        >
                          Register
                        </Active>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
