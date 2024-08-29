import express from "express";
import cookieparser from "cookie-parser";
import userRouter from "./routes/user.routes.js";
import productsRouter from "./routes/products.routes.js";
import cors from "cors";

const app = express();

var corsOptions = {
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  origin: "https://backend-greenmnid-52js.vercel.app",
  Credential: true,
  optionsSuccessStatus: 200,
};

// middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieparser());

// api
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productsRouter);

export { app };
