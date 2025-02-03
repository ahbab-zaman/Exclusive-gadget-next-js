import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function BannerPage() {
  return (
    <>
      <section className="bg-black h-[300px] w-11/12 mx-auto my-8 px-12 flex items-center justify-between">
        {/* left side */}
        <div className="space-y-4">
          <figure className="flex items-center gap-4">
            <Image
              src="/assets/apple.png"
              width={40}
              height={49}
              alt="i-phone logo"
            ></Image>
            <h3 className="text-sm text-gray-200 font-semibold">
              iPhone 14 Series
            </h3>
          </figure>
          <h1 className="text-white text-6xl">
            Up to 10% <br /> off Voucher
          </h1>
          <Link href="/allProducts">
            <button className="btn btn-outline text-white">
              Shop Now <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>

        {/* right side */}
        <div>
          <Image
            src="/assets/hero_banner.png"
            width={496}
            height={300}
            className="h-[300px] w-full object-contain"
            alt="main banner"
          ></Image>
        </div>
      </section>
    </>
  );
}
