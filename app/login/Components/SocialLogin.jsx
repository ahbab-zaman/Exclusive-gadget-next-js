"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
export default function SocialLogin() {
  const router = useRouter();
  const { status } = useSession;
  const handleSocialLogin = async (providerName) => {
    await signIn(providerName, { callbackUrl: "/" });
  };
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
      toast("User Login Successfully");
    }
  }, [status, router]);

  return (
    <div className="mb-4 w-3/4 mx-auto flex justify-center items-center gap-12">
      <button
        onClick={() => handleSocialLogin("google")}
        className="border border-gray-400 p-2 rounded-full hover:bg-[#f1f1f1] hover:transition-all hover:duration-300"
      >
        <FaGoogle width={30} height={30} />
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="border border-gray-400 p-2 rounded-full hover:bg-[#f1f1f1] hover:transition-all hover:duration-300"
      >
        <FaGithub width={30} height={30} />
      </button>
    </div>
  );
}
