import {
  addTodo,
  fetchUserTodos,
  editTodo,
  removeTodo
} from '../services/todo.service.js';

export const createTodo = async (req, res) => {
  const { title, description, userId } = req.body;

  if (!title || !userId) {
    return res.status(400).json({ error: 'Title and userId required' });
  }

  const { data, error } = await addTodo({ title, description, userId });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(201).json(data);
};

export const getUserTodos = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await fetchUserTodos(userId);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

export const updateTodo = async (req, res) => {
  const { todoId } = req.params;

  const { data, error } = await editTodo(todoId, req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

export const deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const { error } = await removeTodo(todoId);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ message: 'Todo deleted' });
};
