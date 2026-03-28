import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ROUTES
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running");
});

// ✅ DB
mongoose.connect("mongodb://127.0.0.1:27017/eshop")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});