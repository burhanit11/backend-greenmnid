import express from "express";
import {
  getAllProducts,
  productsPost,
} from "../controllers/products.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.route("/getAllProducts").get(getAllProducts);
router.route("/productsPost").post(upload.single("img"), productsPost);

export default router;
