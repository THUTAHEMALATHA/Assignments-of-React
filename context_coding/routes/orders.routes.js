import express from "express";
import { readDB, writeDB, getTodayDate } from "../utils.js";

const router = express.Router();

// Create Order
router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const db = readDB();
  const product = db.products.find((p) => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });
  if (product.stock === 0 || quantity > product.stock) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  const newOrder = {
    id: db.orders.length + 1,
    productId,
    quantity,
    totalAmount: product.price * quantity,
    status: "placed",
    createdAt: getTodayDate()
  };

  product.stock -= quantity;
  db.orders.push(newOrder);
  writeDB(db);
  res.status(201).json(newOrder);
});

// Get All Orders
router.get("/", (req, res) => {
  const db = readDB();
  res.json({ count: db.orders.length, orders: db.orders });
});

// Cancel Order (soft delete)
router.delete("/:orderId", (req, res) => {
  const { orderId } = req.params;
  const db = readDB();
  const order = db.orders.find((o) => o.id == orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled") return res.status(400).json({ message: "Already cancelled" });
  if (order.createdAt !== getTodayDate()) return res.status(400).json({ message: "Cancellation allowed only today" });

  order.status = "cancelled";
  const product = db.products.find((p) => p.id === order.productId);
  if (product) product.stock += order.quantity;

  writeDB(db);
  res.json({ message: "Order cancelled", order });
});

// Change Order Status
router.patch("/change-status/:orderId", (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;
  const db = readDB();
  const order = db.orders.find((o) => o.id == orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled" || order.status === "delivered") {
    return res.status(400).json({ message: "Cannot change status" });
  }

  const validFlow = { placed: "shipped", shipped: "delivered" };
  if (validFlow[order.status] !== status) {
    return res.status(400).json({ message: `Invalid status change from ${order.status} to ${status}` });
  }

  order.status = status;
  writeDB(db);
  res.json({ message: "Status updated", order });
});

export default router;
