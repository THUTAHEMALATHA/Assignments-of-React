const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const DB_PATH = path.join(__dirname, "../db.json");

function readDB() {
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

/* CREATE USER */
router.post("/add", (req, res) => {
  const db = readDB();

  const newUser = {
    id: Date.now(),
    ...req.body
  };

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json(newUser);
});

/* GET ALL USERS */
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.users);
});

/* GET SINGLE USER */
router.get("/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);

  const user = db.users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(user);
});

/* UPDATE USER */
router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);

  const index = db.users.findIndex(u => u.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  db.users[index] = { ...db.users[index], ...req.body };
  writeDB(db);

  res.json(db.users[index]);
});

/* DELETE USER */
router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);

  const initialLength = db.users.length;
  db.users = db.users.filter(u => u.id !== userId);

  if (db.users.length === initialLength) {
    return res.status(404).json({ message: "User not found" });
  }

  writeDB(db);
  res.json({ message: "User deleted" });
});

module.exports = router;
