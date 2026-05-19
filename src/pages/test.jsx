import { useEffect, useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAuth } from "../context/AuthContext";

const Dashboard = () => {

  // ✅ Get logged-in user
  const { user } = useAuth();

  // ✅ State
  const [tasks, setTasks] = useState([]);

  // ✅ Dynamic localStorage key per user
  const storageKey = `tasks-${user?.uid}`;

  // ✅ Load tasks for current user
  useEffect(() => {

    // stop if user is not ready
    if (!user) return;

    const savedTasks = localStorage.getItem(storageKey);

    // If user already has tasks
    if (savedTasks) {

      setTasks(JSON.parse(savedTasks));

    } else {

      // Otherwise fetch default tasks
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((res) => res.json())
        .then((data) => {

          const formatted = data.map((item) => ({
            id: item.id,
            text: item.title,
          }));

          setTasks(formatted);

        })
        .catch((error) => {
          console.log(error);
        });
    }

  }, [user]);

  // ✅ Save tasks for current user
  useEffect(() => {

    if (!user) return;

    localStorage.setItem(storageKey, JSON.stringify(tasks));

  }, [tasks, user]);

  // ✅ Add Task
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

  // ✅ Delete Task
  const deleteTask = (id) => {

    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );

    toast.info("Task deleted 🗑️");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 p-6">

      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          🧠 Productivity Dashboard
        </h1>

        {/* ✅ Show logged in user */}
        <p className="text-center text-gray-600 mb-6">
          Logged in as: {user?.email}
        </p>

        <div className="bg-white p-6 rounded-2xl shadow-xl">

          {/* Task Input */}
          <TaskInput addTask={addTask} />

          {/* Task List */}
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
          />

        </div>

      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
      />

    </div>
  );
};

export default Dashboard;