import express from "express";
import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo
} from "../controllers/todo.controller.js";

const router = express.Router();

router.post("/add", createTodo);
router.get("/", getTodos);
router.get("/:id", getTodoById);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

export default router;
