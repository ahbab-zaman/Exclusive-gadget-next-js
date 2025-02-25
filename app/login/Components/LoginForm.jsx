"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
export default function LoginForm() {
  const router = useRouter();
  const formRef = useRef();
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        router.push("/");
        toast.success("User Login Successful");
        formRef.current.reset();
      } else {
        toast.error("Authentication Failed");
      }
    } catch {
      console.log("Login Failed!! Please enter valid credentials");
    }
  };
  return (
    <>
      <form ref={formRef} onSubmit={handleLogin}>
        <div className="mb-6 w-full">
          <input
            className="animated-input w-full"
            type="text"
            name="email"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="mb-6 w-full">
          <input
            className="animated-input w-full"
            type="text"
            name="password"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="mb-4 w-full">
            <button className="px-4 py-2 rounded-lg bg-[#db4444] text-white font-semibold">
              Login
            </button>
          </div>
          <div className="mb-4 w-full text-end">
            <h4 className="text-[#db4444] font-semibold">Forget password?</h4>
          </div>
        </div>
      </form>
      <div className="mt-4 text-center">
        <SocialLogin></SocialLogin>
      </div>
    </>
  );
}
