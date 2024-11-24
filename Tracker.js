import React, { useState, useEffect } from "react";
import Header from "./Header";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./tracker.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // useEffect
  useEffect(() => {
    const initialTasks = [
      { text: "Complete Cardio", completed: false },
      { text: "Complete Protien Intake", completed: false },
      { text: "Go for Walk/Sprints", completed: false },
    ];
    setTasks(initialTasks);
  }, []);

  const addTask = (taskText) => {
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <Header title="DietCo Task Manager" />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
};

export default App;
