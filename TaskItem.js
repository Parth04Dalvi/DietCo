// TaskItem.js
import React from "react";

const TaskItem = ({ task, index, toggleTaskCompletion }) => {
  return (
    <div
      className={`task-item ${task.completed ? "completed" : ""}`}
      onClick={() => toggleTaskCompletion(index)}
    >
      {task.text}
    </div>
  );
};

export default TaskItem;
