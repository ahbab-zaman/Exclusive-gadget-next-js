import React from "react";
import { dbConnect } from "../lib/dbConnect";

export default async function DiscountProduct() {
  const gadgetCollection = dbConnect("allGadgets");
  const data = await gadgetCollection.find({}).toArray();
  console.log(data)
  return (
    <>
      <section className="w-11/12 mx-auto my-8"></section>
    </>
  );
}
