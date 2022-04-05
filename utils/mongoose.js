import mongoose from "mongoose";
import { MONGODB_URI } from "../config.js";

export const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Mongodb connected");
  } catch (error) {
    console.error(error);
  }
};
