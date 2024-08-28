import express from "express";
import { login, signup } from "../controllers/users.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = express.Router();

router.route("/signup").post(upload.single("avatar"), signup);
router.route("/login").post(login);

export default router;
