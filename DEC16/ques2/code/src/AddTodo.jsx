import React, { useContext, useState } from "react";
import { TodoContext } from "./Todos";

function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;
