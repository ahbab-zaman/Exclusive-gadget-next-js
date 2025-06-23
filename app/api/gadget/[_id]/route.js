import { collectionNameObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { _id } = params;

  // Check if _id is a valid 24-character hex string
  if (!_id || !_id.match(/^[0-9a-fA-F]{24}$/)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const gadgetsCollection = await dbConnect(
    collectionNameObj.gadgetsCollection
  );
  const data = await gadgetsCollection.findOne({ _id: new ObjectId(_id) });

  if (!data) {
    return NextResponse.json({ error: "Gadget not found" }, { status: 404 });
  }

  return NextResponse.json(data);
};


