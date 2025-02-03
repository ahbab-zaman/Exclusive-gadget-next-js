import Utils from "@/app/ReuseFuncs/utils";
import { dbConnect } from "@/lib/dbConnect";
import Slide from "./Slide/Slide";
import Link from "next/link";
const gadgetCollection = await dbConnect("allGadgets");
const data = await gadgetCollection.find().limit(8).toArray();

export default function discountProduct() {
  return (
    <>
      <section className="w-11/12 mx-auto my-8">
        <Utils title="our latest products"></Utils>
        <div className="grid grid-cols-4 gap-4 py-6">
          {data.map((item) => (
            <Slide key={item._id} item={item}></Slide>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Link href="/allProducts">
            <button className="bg-[#DB4444] text-white py-2 px-4 font-semibold ">
              View All Products
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
