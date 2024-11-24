// TaskList.js
import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTaskCompletion }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available. Add your first task!</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
