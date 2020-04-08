import React from "react";

const TodoList = ({ items, delTask }) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <p>{item.text}</p>
        <button onClick={delTask}>DELETE</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
