import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Removed deprecated options
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectDB;

