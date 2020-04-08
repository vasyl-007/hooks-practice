import React, { useState } from "react";

const EditForm = ({ onSave = () => null }) => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    onSave(todoText);
    setTodoText("");
  };

  return (
    <form onSubmit={submitHandle} style={{ display: "block" }}>
      <input type="text" onChange={handleChange} value={todoText} />
      <p>{todoText}</p>
      <button type="submit">SAVE</button>
    </form>
  );
};

export default EditForm;
