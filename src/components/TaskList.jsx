import TaskItem from "./TaskItem";

const TaskList = ({ tasks = [], deleteTask }) => {
  return (
    <div>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-400">
          No tasks yet. Start adding 🚀
        </p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}

    </div>
  );
};

export default TaskList;