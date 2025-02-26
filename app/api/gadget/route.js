import { collectionNameObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  console.log(body);
  const orderCollection = await dbConnect(collectionNameObj.orderCollection);
  const result = await orderCollection.insertOne(body);
  return NextResponse.json(result);
};
