import React, { useContext } from "react";
import { TodoContext } from "./Todos";

function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <li>
      {todo.title}{" "}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
