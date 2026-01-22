import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

// Get all categories
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// Add new category
router.post("/", async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.json(category);
});

export default router;
