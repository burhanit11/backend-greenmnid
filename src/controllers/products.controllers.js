import { Product } from "../models/products.model.js";
import uploadOnClodinary from "../utils/cloudinary.js";

const getAllProducts = async (req, res) => {
  try {
    const { query } = req.query;

    // const products = await Product.find({
    //   //   title: { $regex: title, $options: "i" }, // Case-insensitive search
    // });

    let products;

    if (query) {
      // If a search query is provided, search for products
      products = await Product.find({
        title: { $regex: query, $options: "i" }, // Case-insensitive search
      });
    } else {
      // If no search query is provided, return all products
      products = await Product.find({});
    }
    res.status(200).json({ message: "All Products", products });
  } catch (error) {}
};

const productsPost = async (req, res) => {
  try {
    const { title, price, decs } = req.body;

    const imgLocalPath = req.file.path;

    if (!imgLocalPath) {
      return res.status(402).json({ message: "Image Local path is required." });
    }

    const img = await uploadOnClodinary(imgLocalPath);

    const products = await Product.create({
      title,
      img: img?.url,
      price,
      decs,
    });
    res.status(200).json({ message: "Product Posted", products });
  } catch (error) {
    console.log(error);
  }
};

export { getAllProducts, productsPost };
