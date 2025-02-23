import Link from "next/link";
import registerImg from "../../public/assets/login.png";

import Image from "next/image";
import "./register.css";
import RegisterForm from "./Components/RegisterForm";
export default function Register() {
  return (
    <>
      <section className="w-11/12 mx-auto my-8">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <Image
              src={registerImg}
              alt="Login Illustration"
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-semibold mb-6">Login to Exclusive</h2>
            <div className="w-3/5">
              <RegisterForm></RegisterForm>
            </div>
            <div className="w-3/5 text-center">
              <p className="text-[#db4444] font-semibold">
                Already have an account? <Link href="/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
