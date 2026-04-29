const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">

      <span className="text-gray-700">
        {task.text}
      </span>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700 font-medium"
      >
        Delete
      </button>

    </li>
  );
};

export default TaskItem;