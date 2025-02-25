"use server";

import { collectionNameObj, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const loginUser = async (payload) => {
  const { email, password, photo } = payload;
  const userCollection = await dbConnect(collectionNameObj.userCollection);
  const user = await userCollection.findOne({ email });
  if (!user) return null;
  const isPasswordOk = bcrypt.compare(user.password, password);
  if (!isPasswordOk) return null;
  return user;
};
