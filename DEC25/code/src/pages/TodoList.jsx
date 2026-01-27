import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((response) => {
      setTodos(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {todos.slice(0, 20).map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title}
            </Link>
            {" - "}
            {todo.completed ? "✅ Completed" : "❌ Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
