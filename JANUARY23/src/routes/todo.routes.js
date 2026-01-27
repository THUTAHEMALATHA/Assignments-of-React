import express from 'express';
import {
  createTodo,
  getUserTodos,
  updateTodo,
  deleteTodo
} from '../controllers/todo.controller.js';

const router = express.Router();

router.post('/add-todo', createTodo);
router.get('/get-my-todo/:userId', getUserTodos);
router.put('/update-todo/:todoId', updateTodo);
router.delete('/delete-todo/:todoId', deleteTodo);

export default router;
