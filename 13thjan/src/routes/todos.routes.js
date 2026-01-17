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

/* CREATE TODO */
router.post("/add", (req, res) => {
  const db = readDB();

  const newTodo = {
    id: Date.now(),
    ...req.body
  };

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json(newTodo);
});

/* GET ALL TODOS */
router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.todos);
});

/* GET SINGLE TODO */
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todoId = Number(req.params.todoId);

  const todo = db.todos.find(t => t.id === todoId);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
});

/* UPDATE TODO */
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const todoId = Number(req.params.todoId);

  const index = db.todos.findIndex(t => t.id === todoId);
  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos[index] = { ...db.todos[index], ...req.body };
  writeDB(db);

  res.json(db.todos[index]);
});

/* DELETE TODO */
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const todoId = Number(req.params.todoId);

  const initialLength = db.todos.length;
  db.todos = db.todos.filter(t => t.id !== todoId);

  if (db.todos.length === initialLength) {
    return res.status(404).json({ message: "Todo not found" });
  }

  writeDB(db);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
