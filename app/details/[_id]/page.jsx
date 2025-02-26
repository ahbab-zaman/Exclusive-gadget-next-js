import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import returnImage from "../../../public/assets/return.png";
import deliveryImage from "../../../public/assets/delivery.png";
import Link from "next/link";

export default async function viewDetails({ params }) {
  const g = await params;
  const res = await fetch(`http://localhost:3000/api/gadget/${g._id}`);
  const data = await res.json();
  console.log(data);
  return (
    <>
      <section className="w-11/12 mx-auto lg:p-12 p-2 flex lg:flex-row flex-col justify-between gap-6">
        <figure className="bg-base-200 lg:p-10 p-2 rounded-xl lg:w-1/2 w-full mx-auto flex justify-center items-center">
          <Image
            src={data?.item_image}
            width={300}
            height={400}
            alt="Gadgets"
          ></Image>
        </figure>
        <div className="text-left lg:w-1/2 w-full space-y-4">
          <h2 className="text-xl font-semibold">{data?.item_name}</h2>
          <p className="text-green-500 font-semibold">
            {data?.in_stock ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-lg ">${data?.price}</p>
          <p className="font-semibold">{data?.description}</p>
          <div className="flex items-center gap-2">
            <Link href={`/checkout/${data._id}`}>
              <button className="px-4 py-2 border hover:bg-[#DB4444] hover:text-white transition-all duration-300 font-semibold rounded-xl">
                Buy Now
              </button>
            </Link>
            <button className="border rounded-xl hover:bg-[#DB4444] hover:text-white transition-all duration-300 p-2">
              <Heart />
            </button>
          </div>
          <div>
            <div className="flex items-center gap-2 border p-4">
              <figure>
                <Image
                  src={returnImage}
                  width={20}
                  height={20}
                  alt="Return Image"
                ></Image>
              </figure>
              <div>
                <h4 className="font-semibold">Return Delivery</h4>
                <p className="text-sm font-semibold">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 border border-t-0 p-4">
              <figure>
                <Image
                  src={deliveryImage}
                  width={20}
                  height={20}
                  alt="Return Image"
                ></Image>
              </figure>
              <div>
                <h4 className="font-semibold">Free Delivery</h4>
                <p className="text-sm font-semibold">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
