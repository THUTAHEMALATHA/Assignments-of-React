import React, { useContext } from "react";
import { TodoContext } from "./Todos";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return <p>No todos yet.</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
