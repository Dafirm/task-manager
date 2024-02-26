import React, { useState, useEffect } from "react";

import "./App.css";
import TaskItem from "./components/TaskItem";
import TasksForm from "./components/TasksForm";
import './App.css';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}
const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleToggleComplete = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (taskId: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleAddTask = (title: string, description: string) => {
    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      description,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div >
      <TasksForm onSubmit={handleAddTask} />
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          completed={task.completed}
          onToggleComplete={() => handleToggleComplete(task.id)}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </div>
  );
};

export default App;
