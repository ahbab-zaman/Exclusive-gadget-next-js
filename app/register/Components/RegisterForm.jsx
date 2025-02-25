"use client";
import { registerUser } from "@/app/actions/auth/registerUser";
import { useRef } from "react";
import SocialLogin from "@/app/login/Components/SocialLogin";

export default function RegisterForm() {
  const formRef = useRef();
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    await registerUser({ name, email, password, photo });
    formRef.current.reset();
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
          <button className="px-4 py-2 rounded-lg bg-[#db4444] text-white font-semibold w-full">
            Register
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <SocialLogin></SocialLogin>
      </div>
    </>
  );
}
