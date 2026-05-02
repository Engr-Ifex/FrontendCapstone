import { useEffect, useState } from "react";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1️⃣ LOAD FROM LOCALSTORAGE OR API
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
      setLoading(false);
    } else {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((res) => res.json())
        .then((data) => {
          // format API data to match our structure
          const formatted = data.map((item) => ({
            id: item.id,
            text: item.title,
          }));

          setTasks(formatted);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }
  }, []);

  // 2️⃣ SAVE TO LOCALSTORAGE WHEN TASKS CHANGE
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

      {/* LOADING STATE */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <TaskInput addTask={addTask} />
          <TaskList tasks={tasks} deleteTask={deleteTask} />
        </>
      )}
    </div>
  );
};

export default Dashboard;