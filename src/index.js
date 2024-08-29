import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./utils/connectDB.js";

dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ message: "Hello World from backend" });
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
