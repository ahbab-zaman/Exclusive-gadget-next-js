import Image from "next/image";
import registerImg from "../../public/assets/login.png";
import "./login.css";
import Link from "next/link";
import LoginForm from "./Components/LoginForm";
import SocialLogin from "./Components/SocialLogin";
export default function Login() {
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
              <LoginForm></LoginForm>
            </div>
            <div className="w-3/5 text-center">
              <p className="text-[#db4444] font-semibold">
                New to this account? <Link href="/register">Register</Link>
              </p>
            </div>
            <div className="mt-4 w-3/5 text-center">
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
