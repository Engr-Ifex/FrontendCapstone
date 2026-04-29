import { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTask(input);
    setInput("");
  };

  return (
    <div className="flex gap-3 mb-6">

      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5CBF0D]"
      />

      <button
        onClick={handleAdd}
        className="bg-[#5CBF0D] text-white px-5 rounded-lg hover:bg-[#4da80c] transition"
      >
        Add
      </button>

    </div>
  );
};

export default TaskInput;