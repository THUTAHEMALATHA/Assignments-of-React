import express from "express";
import fs from "fs";

const router = express.Router();

const readDB = () => JSON.parse(fs.readFileSync("db.json", "utf-8"));
const writeDB = (data) => fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const db = readDB();

  const product = db.products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  if (product.stock === 0 || quantity > product.stock) {
    return res.status(400).json({ message: "Insufficient stock" });
  }

  const totalAmount = product.price * quantity;

  const order = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount,
    status: "placed",
    createdAt: new Date().toISOString().slice(0, 10)
  };

  product.stock -= quantity;
  db.orders.push(order);
  writeDB(db);

  res.status(201).json(order);
});
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.orders);
});
router.delete("/:orderId", (req, res) => {
  const db = readDB();
  const order = db.orders.find(o => o.id == req.params.orderId);

  if (!order) return res.status(404).json({ message: "Order not found" });
  if (order.status === "cancelled") {
    return res.status(400).json({ message: "Order already cancelled" });
  }

  const today = new Date().toISOString().slice(0, 10);
  if (order.createdAt !== today) {
    return res.status(400).json({ message: "Cancellation not allowed" });
  }

  const product = db.products.find(p => p.id === order.productId);
  product.stock += order.quantity;

  order.status = "cancelled";
  writeDB(db);

  res.json({ message: "Order cancelled successfully" });
});

router.patch("/change-status/:orderId", (req, res) => {
  const { status } = req.body;
  const db = readDB();

  const order = db.orders.find(o => o.id == req.params.orderId);
  if (!order) return res.status(404).json({ message: "Order not found" });

  const validFlow = ["placed", "shipped", "delivered"];
  const currentIndex = validFlow.indexOf(order.status);
  const nextIndex = validFlow.indexOf(status);

  if (order.status === "cancelled" || order.status === "delivered") {
    return res.status(400).json({ message: "Status change not allowed" });
  }

  if (nextIndex !== currentIndex + 1) {
    return res.status(400).json({ message: "Invalid status flow" });
  }

  order.status = status;
  writeDB(db);

  res.json(order);
});

export default router;