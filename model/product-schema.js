import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  detailUrl: {
    type: String,
    required: true,
  },
  title: {
    type: Object,
    required: true,
  },
  price: {
    type: Object,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  discount: {
    type: String,
  },
  tagline: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);

export default Product;
