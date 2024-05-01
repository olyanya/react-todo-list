import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todoList, setTodoList] = useState([]);

  const addTask = (task) => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        task: task,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTodo = (id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  const editTask = (newTaskDescription, id) => {
    setTodoList(
      todoList.map((task) =>
        task.id === id
          ? {
              ...task,
              task: newTaskDescription,
              isEditing: !task.isEditing,
            }
          : task
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>TO-DO LIST!</h1>
      <TodoForm addTask={addTask} />
      {todoList.map((task) =>
        task.isEditing ? (
          <EditTodoForm editTodo={editTask} task={task} />
        ) : (
          <Todo
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
