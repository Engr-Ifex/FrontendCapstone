import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput(""); // clear input
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;