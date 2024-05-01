import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [editTodoTask, setEditTodoTask] = useState(task.task);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(editTodoTask, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={editTodoTask}
        onChange={(event) => setEditTodoTask(event.target.value)}
        className="todo-input"
        placeholder="Update task"
      />
      <button type="submit" className="todo-button">
        Update Task
      </button>
    </form>
  );
};
