import React, { useState } from "react";
import shortId from "shortid";
import TodoList from "./components/TodoList";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const [todoText, setTodoText] = useState("");
  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const [todos, setTodos] = useState([]);
  const addTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: shortId.generate(),
      text: todoText,
    };
    setTodos([...todos, todo]);
    setTodoText("");
  };
  const delTask = (id) => {
    console.log("delete this task");
  };
  return (
    <div style={{ width: 330, margin: "0 auto" }}>
      <div style={{ display: "flex" }}>
        <button
          onClick={increment}
          style={{
            padding: "10px 10px",
            margin: "20px 30px",
            backgroundColor: "orange",
            border: "none",
          }}
        >
          BUTTON +
        </button>
        <p style={{ padding: "10px 0" }}>{count}</p>
        <button
          onClick={decrement}
          style={{
            padding: "10px 10px",
            margin: "20px 30px",
            backgroundColor: "orange",
            border: "none",
          }}
        >
          BUTTON -{" "}
        </button>
      </div>
      <hr />
      <form onSubmit={addTodo} style={{ display: "block" }}>
        <input type="text" onChange={handleChange} value={todoText} />
        <p>{todoText}</p>
        <button type="submit">SAVE</button>
      </form>
      {todos.length > 0 && <TodoList items={todos} delTask={delTask} />}
    </div>
  );
};

export default App;
