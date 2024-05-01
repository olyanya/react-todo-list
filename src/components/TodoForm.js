import React, { useState } from "react";

export const TodoForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.trim()) {
      setError("Task field cannot be empty!");
      return;
    }
    addTask(newTask);
    setNewTask("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        className="todo-input"
        value={newTask}
        placeholder="What are your tasks today?"
        onChange={(event) => {
          setNewTask(event.target.value);
          setError("");
        }}
      />
      {error && <p className="error-message">{error}</p>}
      <button className="todo-button">Add task</button>
    </form>
  );
};
