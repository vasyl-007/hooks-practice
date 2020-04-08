import React, { useState } from "react";

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
      <form style={{ display: "block" }}>
        <input type="text" onChange={handleChange} value={todoText} />
        <p>{todoText}</p>
        <button type="submit">button</button>
      </form>
    </div>
  );
};

export default App;
