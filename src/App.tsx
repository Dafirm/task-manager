import React, { useState } from 'react';

import './App.css';
import TaskItem from './components/TaskItem';

function App() {
    const [tasks, setTasks] = useState([
      {
        id: 1,
        title: "Complete task 1",
        description: "This is task 1",
        completed: false,
      },
      {
        id: 2,
        title: "Complete task 2",
        description: "This is task 2",
        completed: true,
      },
    ]);

    const handleToggleComplete = (taskId: number) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
    };
  return (
  <div className="App">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          title={task.title}
          description={task.description}
          completed={task.completed}
          onToggleComplete={() => handleToggleComplete(task.id)}
        />
      ))}
    </div>
  );
}

export default App;
