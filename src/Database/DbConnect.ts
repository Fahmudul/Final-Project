import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    console.log(process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongodb connected successfully");
    });
    connection.on("error", (error) => {
      console.log("Mongodb connection error", error);
      process.exit(1);
    });
  } catch (error: unknown) {
    console.log(error);
    throw new Error(error as string);
  }
};
