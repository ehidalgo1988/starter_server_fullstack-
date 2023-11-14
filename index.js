import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
// routes import
import userRoutes from "./routes/userRoute.js";
import productRoutes from "./routes/productsRoute.js";

dotenv.config();
const app = express();

app.use(cors({ origin: [process.env.CLIENT_URL] }));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }))

app.use("/api", userRoutes);
app.use("/api", productRoutes);

// db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("db error", err));

// server running
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
