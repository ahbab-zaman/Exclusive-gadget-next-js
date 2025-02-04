import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function special() {
  return (
    <>
      <section className="w-11/12 mx-auto my-8 bg-black">
        <div className="p-12 flex lg:flex-row flex-col items-center justify-between">
          <div className="space-y-5">
            <p className="text-[#00FF66] text-sm font-semibold">Categories</p>
            <h2 className="text-4xl font-semibold text-white">
              Enhance Your <br /> Music Experience
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-20 h-20 bg-white flex flex-col justify-center items-center rounded-full p-2">
                <h3 className="font-semibold">19</h3>
                <p
                  className="text-sm uppercase font-semibold
                "
                >
                  Hours
                </p>
              </div>
              <div className="w-20 h-20 bg-white flex flex-col justify-center items-center rounded-full">
                <h3 className="font-semibold">05</h3>
                <p
                  className="text-sm uppercase font-semibold
                "
                >
                  Days
                </p>
              </div>
              <div className="w-20 h-20 bg-white flex flex-col justify-center items-center rounded-full">
                <h3 className="font-semibold">22</h3>
                <p
                  className="text-sm uppercase font-semibold
                "
                >
                  minutes
                </p>
              </div>
              <div className="w-20 h-20 bg-white flex flex-col justify-center items-center rounded-full">
                <h3 className="font-semibold">45</h3>
                <p
                  className="text-sm uppercase font-semibold
                "
                >
                  seconds
                </p>
              </div>
            </div>
            <div>
              <Link href="/allProducts">
                <button className="px-4 py-2 rounded-lg bg-[#00FF66] text-white font-semibold">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
          <div>
            <Image src="/assets/jbl.png" width={568} height={330} alt="JBL speaker" />
          </div>
        </div>
      </section>
    </>
  );
}
