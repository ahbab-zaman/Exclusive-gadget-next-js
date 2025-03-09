import Image from "next/image";
import registerImg from "../../public/assets/login.png";
import "./login.css";
import Link from "next/link";
import LoginForm from "./Components/LoginForm";
export default function Login() {
  return (
    <>
      <section className="w-11/12 mx-auto my-8">
        <div className="flex lg:flex-row flex-col justify-between items-center">
          <div className="lg:w-1/2 w-full">
            <Image
              src={registerImg}
              alt="Login Illustration"
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl font-semibold mb-6">Login to Exclusive</h2>
            <div className="lg:w-3/5 w-11/12">
              <LoginForm></LoginForm>
            </div>
            <div className="lg:w-3/5 w-11/12 text-center">
              <p className="text-[#db4444] font-semibold">
                New to this account? <Link href="/register">Register</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
