import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <>
      <h2>This is a TODOs page</h2>

      {todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.completed ? "Completed" : "Not Completed"}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Todos;
