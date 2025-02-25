"use client"
import googleImg from "../../../public/assets/google.png";
import githubImg from "../../../public/assets/github.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
export default function SocialLogin() {
  const handleSocialLogin = async (providerName) => {
    const result = await signIn(providerName, { redirect: false });
    console.log(result);
  };
  return (
    <div className="mb-4 w-3/4 mx-auto flex justify-center items-center gap-12">
      <figure
        onClick={() => handleSocialLogin("google")}
        className="border border-gray-400 p-2 rounded-full"
      >
        <Image src={googleImg} width={30} height={30} alt="google icon"></Image>
      </figure>
      <figure
        onClick={() => handleSocialLogin("github")}
        className="border border-gray-400 p-2 rounded-full"
      >
        <Image src={githubImg} width={30} height={30} alt="google icon"></Image>
      </figure>
    </div>
  );
}
