import express from "express";
import { readDB } from "../utils.js";

const router = express.Router();

// All orders with count
router.get("/allorders", (req, res) => {
  const db = readDB();
  let count = 0;
  const ordersList = [];
  db.orders.forEach(order => {
    ordersList.push(order);
    count++;
  });
  res.json({ count, orders: ordersList });
});

// Cancelled orders
router.get("/cancelled-orders", (req, res) => {
  const db = readDB();
  const cancelled = db.orders.filter(o => o.status === "cancelled");
  res.json({ count: cancelled.length, orders: cancelled });
});

// Shipped orders
router.get("/shipped", (req, res) => {
  const db = readDB();
  const shipped = db.orders.filter(o => o.status === "shipped");
  res.json({ count: shipped.length, orders: shipped });
});

// Total revenue by product
router.get("/total-revenue/:productId", (req, res) => {
  const { productId } = req.params;
  const db = readDB();
  const product = db.products.find(p => p.id == productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const revenue = db.orders
    .filter(o => o.productId == productId && o.status !== "cancelled")
    .reduce((sum, o) => sum + o.quantity * product.price, 0);

  res.json({ productId: product.id, productName: product.name, totalRevenue: revenue });
});

// Overall revenue
router.get("/alltotalrevenue", (req, res) => {
  const db = readDB();
  const revenue = db.orders
    .filter(o => o.status !== "cancelled")
    .reduce((sum, o) => {
      const product = db.products.find(p => p.id === o.productId);
      return sum + (product ? product.price * o.quantity : 0);
    }, 0);
  res.json({ totalRevenue: revenue });
});

export default router;
