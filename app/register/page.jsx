import Link from "next/link";
import registerImg from "../../public/assets/login.png";
import googleImg from "../../public/assets/google.png";
import githubImg from "../../public/assets/github.png";
import Image from "next/image";
import "./register.css";
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
              <form>
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
                    name="name"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div className="mb-6 w-full">
                  <input
                    className="animated-input w-full"
                    type="url"
                    name="name"
                    placeholder="Enter Photo URL"
                  />
                </div>

                <div className="mb-6 w-full">
                  <input
                    className="animated-input w-full"
                    type="text"
                    name="name"
                    placeholder="Create Password"
                  />
                </div>

                <div className="mb-4 w-full">
                  <button className="px-4 py-2 rounded-lg bg-[#db4444] text-white font-semibold w-full">
                    Register
                  </button>
                </div>

                <div className="mb-4 w-full flex justify-center items-center gap-12">
                  <figure className="border border-gray-400 p-2 rounded-full">
                    <Image
                      src={googleImg}
                      width={30}
                      height={30}
                      alt="google icon"
                    ></Image>
                  </figure>
                  <figure className="border border-gray-400 p-2 rounded-full">
                    <Image
                      src={githubImg}
                      width={30}
                      height={30}
                      alt="google icon"
                    ></Image>
                  </figure>
                </div>
              </form>
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
