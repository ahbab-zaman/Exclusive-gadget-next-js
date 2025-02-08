import Image from "next/image";
import Utils from "../ReuseFuncs/utils";
import registerImg from "../../public/assets/login.png";
import "./login.css";
export default function Login() {
  return (
    <>
      <section className="w-11/12 mx-auto my-8">
        <Utils title="welcome to login page"></Utils>
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
              <form>
                <div className="mb-6 w-full">
                  <input
                    className="animated-input w-full"
                    type="text"
                    name="name"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div className="mb-6 w-full">
                  <input
                    className="animated-input w-full"
                    type="text"
                    name="name"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
