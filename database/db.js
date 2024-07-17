import mongoose from "mongoose";

const Connection = async (URI) => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
    });

    console.log("DB successfully Connected !! ");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
