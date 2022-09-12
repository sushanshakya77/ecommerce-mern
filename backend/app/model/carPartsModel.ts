import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  carDetails: {
    carMaker: String,
    model: {
      series: String,
      title: String,
    },
    engine: {
      version: String,
      title: String,
    },
  },
  image: String,
  rating: {
    rate: Number,
  },
});

const CarProducts = mongoose.model("CarProducts", productsSchema);

export default CarProducts;
