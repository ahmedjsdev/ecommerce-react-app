import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([
    {
      name: "todo 1",
    },
    {
      name: "todo 2",
    },
  ]);
  const [todoName, setTodoName] = useState("");

  return (
    <div>
      <h1>Todos Will Live , </h1>
      <input
        type="text"
        placeholder="please add todo name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button onClick={() => setTodos([...todos, { name: todoName }])}>        
        Add todos
      </button>

      <button onClick={() => setTodos([])}>
        
        delete All
      </button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
