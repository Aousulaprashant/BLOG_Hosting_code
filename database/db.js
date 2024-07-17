import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = async () => {
  try {
    const password = process.env.PASSWORD;
    const URI = `mongodb+srv://prashanthchary91595:${password}@blogclustoe.f1qrdrz.mongodb.net/?retryWrites=true&w=majority&appName=Blogclustoe`;
    await mongoose.connect(URI, {
      useNewUrlParser: true,
    });

    console.log("DB successfully Connected !! ");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
