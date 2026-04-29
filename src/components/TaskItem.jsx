import React from 'react'

const TaskItem = ({ task, deleteTask}) => {
  return (
    <div>
        <li>
            {task.text}

            <button onClick={() => deleteTask(task.id)}>
                Delete
            </button>
        </li>
    </div>
  )
}

export default TaskItem