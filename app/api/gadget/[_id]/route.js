import { collectionNameObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const g = await params;
  const gadgetsCollection = await dbConnect(
    collectionNameObj.gadgetsCollection
  );
  const data = await gadgetsCollection.findOne({ _id: new ObjectId(g._id) });
  return NextResponse.json(data);
};