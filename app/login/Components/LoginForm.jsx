"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
export default function LoginForm() {
  const router = useRouter();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
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
        setLoading(false);
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
            <button
              type="submit"
              className="px-4 py-2 bg-[#DB4444] text-white font-semibold w-full flex items-center justify-center gap-2 hover:bg-[#f1f1f1] hover:text-[#DB4444] duration-300 transition-all"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                  Please wait...
                </>
              ) : (
                "Login"
              )}
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
