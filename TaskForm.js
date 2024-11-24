// TaskForm.js
import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput(""); // Clear input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
