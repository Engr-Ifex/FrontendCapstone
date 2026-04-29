import { useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  // ✅ ADD TASK
  const addTask = (text) => {
    if (!text || text.trim() === "") {
      toast.warning("Task cannot be empty ⚠️");
      return;
    }

    const newTask = {
      id: Date.now(),
      text,
    };

    setTasks((prev) => [...prev, newTask]);

    toast.success("Task added successfully ✅");
  };

  // ✅ DELETE TASK
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));

    toast.info("Task deleted 🗑️");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 p-6">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          🧠 Productivity Dashboard
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-xl">

          <TaskInput addTask={addTask} />

          <TaskList tasks={tasks} deleteTask={deleteTask} />

        </div>

      </div>

      {/* ✅ Toast Container */}
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        theme="colored"
      />
    </div>
  );
};

export default Dashboard;