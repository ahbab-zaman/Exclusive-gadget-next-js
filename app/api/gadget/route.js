import { authOptions } from "@/lib/authooptions";
import { collectionNameObj, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  console.log(body);
  const orderCollection = await dbConnect(collectionNameObj.orderCollection);
  const result = await orderCollection.insertOne(body);
  return NextResponse.json(result);
};

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  console.log(session);
  if (session) {
    const email = session?.user?.email;
    const orderCollection = dbConnect(collectionNameObj.orderCollection);
    const result = await orderCollection.find({ email }).toArray();
    console.log(result);
    return NextResponse.json(result);
  }
  return NextResponse.json({});
};
