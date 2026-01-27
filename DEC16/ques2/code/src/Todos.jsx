import React, { createContext, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export const TodoContext = createContext(null);

function Todos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    if (!title.trim()) return;
    const newTodo = {
      id: Date.now(),
      title,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const value = { todos, addTodo, deleteTodo };

  return (
    <TodoContext.Provider value={value}>
      <div>
        <h2>Todos</h2>
        <AddTodo />
        <TodoList />
      </div>
    </TodoContext.Provider>
  );
}

export default Todos;
