"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import { useRef, useState } from "react";
import SocialLogin from "@/app/login/Components/SocialLogin";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

export default function RegisterForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    await registerUser({ name, email, password, photo });
    console.log({ name, email, password, photo });
    formRef.current.reset();
    setLoading(false);
  };
  return (
    <>
      <form ref={formRef} onSubmit={handleRegister}>
        <div className="mb-6 w-full">
          <input
            className="animated-input w-full"
            type="text"
            name="name"
            placeholder="Enter Your Name"
          />
        </div>

        <div className="mb-6 w-full">
          <input
            className="animated-input w-full"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="mb-6 w-full">
          <input
            className="animated-input w-full"
            type="url"
            name="photo"
            placeholder="Enter Photo URL"
          />
        </div>

        <div className="mb-6 w-full">
          <input
            className="animated-input w-full"
            type="text"
            name="password"
            placeholder="Create Password"
          />
        </div>

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
              "Register"
            )}
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <SocialLogin></SocialLogin>
      </div>
    </>
  );
}
