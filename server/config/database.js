import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connected Successfully ...");
  } catch (error) {
    console.error("Error while connecting db : ", error);
    process.exit(1);
  }
};
