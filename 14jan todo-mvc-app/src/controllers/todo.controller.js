import { readTodos, writeTodos } from "../models/todo.model.js";

// CREATE
export const createTodo = (req, res) => {
  try {
    console.log("REQ.BODY:", req.body); // log request body

    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const todos = readTodos();
    console.log("TODOS BEFORE ADD:", todos); // log current todos

    const newTodo = { id: Date.now(), title };
    todos.push(newTodo);

    writeTodos(todos);
    console.log("TODOS AFTER ADD:", todos); // log after write

    res.status(201).json(newTodo);
  } catch (err) {
    console.error("ERROR IN CREATE TODO:", err); // log actual error
    res.status(500).json({ error: "Failed to create todo" });
  }
};



// READ ALL
export const getTodos = (req, res) => {
  try {
    const todos = readTodos();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

// READ ONE
export const getTodoById = (req, res) => {
  try {
    const todos = readTodos();
    const todo = todos.find(t => t.id == req.params.id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todo" });
  }
};

// UPDATE
export const updateTodo = (req, res) => {
  try {
    const todos = readTodos();
    const index = todos.findIndex(t => t.id == req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todos[index].title = req.body.title ?? todos[index].title;
    writeTodos(todos);

    res.status(200).json(todos[index]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

// DELETE
export const deleteTodo = (req, res) => {
  try {
    const todos = readTodos();
    const filtered = todos.filter(t => t.id != req.params.id);

    if (filtered.length === todos.length) {
      return res.status(404).json({ error: "Todo not found" });
    }

    writeTodos(filtered);
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
