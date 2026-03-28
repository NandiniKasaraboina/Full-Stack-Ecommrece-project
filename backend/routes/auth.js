import express from "express";
import User from "../models/User.js";

const router = express.Router();

// ✅ REGISTER
router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const user = new User({ email, password });
  await user.save();

  res.json({ message: "User registered" });
});

// ✅ LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login Success", user });
});

export default router;