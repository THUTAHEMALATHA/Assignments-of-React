// TodosList.jsx
import React, { useEffect, useState } from "react";

function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid gray", margin: "8px", padding: "8px" }}>
      <p>User: {userId}</p>
      <p>Title: {title}</p>
      <p>Status: {completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let cancelled = false;

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        if (!cancelled) {
          setTodos(data.slice(0, 15)); // first 15 todos
        }
      })
      .catch(err => console.error(err));

    return () => {
      cancelled = true;
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

export default TodosList;
