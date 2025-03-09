import Link from "next/link";
import registerImg from "../../public/assets/login.png";
import Image from "next/image";
import "./register.css";
import RegisterForm from "./Components/RegisterForm";
export default function Register() {
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
            <h2 className="lg:text-3xl text-2xl lg:text-start text-center font-semibold mb-6">Register to Exclusive</h2>
            <div className="lg:w-3/5 w-11/12">
              <RegisterForm></RegisterForm>
            </div>
            <div className="lg:w-3/5 w-11/12 text-center">
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
