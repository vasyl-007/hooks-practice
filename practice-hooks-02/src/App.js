import React, { useState, useEffect } from "react";
import shortId from "shortid";
import TodoList from "./components/TodoList";
import EditForm from "./components/EditForm";
import Modal from "./components/Modal";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  // const [todoText, setTodoText] = useState("");
  // const handleChange = (e) => {
  //   setTodoText(e.target.value);
  // };

  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const todo = {
      id: shortId.generate(),
      text,
    };
    // setTimeout(() => {
    //   setTodos((prev) => [...prev, todo]);
    // }, 2000);
    setTodos((prev) => [todo, ...prev]);

    // 1. todos []
    // 2. todos []
    // 3. todos []
    // setTimeout(() => {
    //   setTodos([...todos, todo]);
    // }, 2000);
    // setTodoText("");
  };
  const delTodo = (taskId) => {
    setTodos((prev) => prev.filter((el) => el.id !== taskId));
  };

  useEffect(() => {
    console.log("UseEffect render", Date.now());
    // localStorage.setItem("todos", JSON.stringify(todos));
    const persistedTodos = localStorage.getItem("todos");
    console.log("allTodos", persistedTodos);

    // if (persistedTodos) {
    //   setTodos(JSON.parse(persistedTodos));
    // }
    // console.log(`UseEffect render" ${Date.now()}`);
  }, [todos]);

  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div style={{ width: 630 }}>
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
      <EditForm onSave={addTodo} />
      {/* <form onSubmit={addTodo} style={{ display: "block" }}>
        <input type="text" onChange={handleChange} value={todoText} />
        <p>{todoText}</p>
        <button type="submit">SAVE</button>
      </form> */}
      {todos.length > 0 && <TodoList items={todos} delTodo={delTodo} />}
      <hr />
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      {isOpen && <Modal onClose={handleClose} />}
    </div>
  );
};

export default App;
