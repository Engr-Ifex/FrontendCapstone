import { useState } from 'react'

const TaskInput = ({ addTask}) => {
    const [input, setInput] = useState('')

    const handleAdd = () => {
        addTask(input)
        setInput('')
    }
  return (
    <div>
        <input type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleAdd}>
            Add
        </button>
    </div>
  )
}

export default TaskInput