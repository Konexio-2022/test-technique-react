import { useContext, useState } from "react"

import "./todo-form.css"
import { TodoContext } from "../../contexts/Todo"

const TodoForm = () => {
    const { todos, setTodos } = useContext(TodoContext)
    const [task, setTask] = useState("")
    const [id, setId] = useState(7)

    const handleAddTodo = () => {
        // Fix an ability to add new task
        const newTask = { id, label: task, checked: false }
        setTodos([...todos, newTask])
        // creation and push the new task into the state todos
        setTask("")
        // reset input for new task
        const newId = id + 1
        setId(newId)
        // id update
    }

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            handleAddTodo()
        }
    }

    return (
        <div className="todo-form">
            <input
                placeholder="Enter new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyUp={handleKeyUp}
            />
            <button type="button" onClick={handleAddTodo}>
                Add task
            </button>
        </div>
    )
}

export default TodoForm
