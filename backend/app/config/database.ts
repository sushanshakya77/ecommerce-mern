import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/ecommerce", () => {
  console.log("connected to db");
});
