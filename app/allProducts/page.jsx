import React from "react";
import Utils from "../ReuseFuncs/utils";
import { dbConnect } from "@/lib/dbConnect";
import Slide from "../components/DiscountProducts/Slide/Slide";

export default async function allProducts() {
  const gadgetCollection = await dbConnect("allGadgets");
  const data = await gadgetCollection.find().toArray();
  return (
    <>
      <section className="w-11/12 mx-auto my-8">
        <Utils title="explore all products"></Utils>

        <div>
          <div
            className="grid lg:grid-cols-4 grid-cols-1
           gap-4 py-6"
          >
            {data.map((item) => (
              <Slide key={item._id} item={item}></Slide>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
