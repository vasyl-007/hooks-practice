import React from "react";

const TodoList = ({ items, delTodo }) => (
  <ul>
    {items.map(({ id, text }) => (
      <li key={id}>
        <p>{text}</p>
        <button onClick={() => delTodo(id)}>DELETE</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
