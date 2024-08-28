import mongoose, { Schema } from "mongoose";

const productsSchema = new Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
      index: true,
    },
    img: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productsSchema);
