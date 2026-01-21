import express from "express";
import { readDB, writeDB } from "../utils.js";

const router = express.Router();

// Get all products
router.get("/", (req, res) => {
  res.json({ message: "Products route works" });
});
// router.get("/", (req, res) => {
//   const db = readDB();
//   res.json({ count: db.products.length, products: db.products });
// });

// Add new product
router.post("/", (req, res) => {
  const { name, price, stock } = req.body;
  if (!name || !price || stock === undefined) {
    return res.status(400).json({ message: "Invalid input" });
  }
  const db = readDB();
  const newProduct = {
    id: db.products.length + 1,
    name,
    price,
    stock
  };
  db.products.push(newProduct);
  writeDB(db);
  res.status(201).json(newProduct);
});

export default router;
