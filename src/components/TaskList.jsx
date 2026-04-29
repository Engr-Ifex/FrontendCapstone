import React from 'react'
import TaskItem from './TaskItem'

const TaskList = () => {
  return (
    <div>
        <ul>
            {
                tasks.map((task) => (
                    <TaskItem
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    />
                ))
            }
        </ul>
    </div>
  )
}

export default TaskList