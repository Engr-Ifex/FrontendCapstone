import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  // STATE (LIFTED HERE)
  const [tasks, setTasks] = useState([]);

  // ADD TASK
  const addTask = (text) => {
    if (text.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Add Task */}
      <TaskInput addTask={addTask} />

      {/* Show Tasks */}
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default Dashboard;