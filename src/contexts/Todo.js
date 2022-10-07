import { createContext, useState } from "react"
import todoTemplate from "../todo.json"
// import data from the json file

const TodoContext = createContext({})

const TodoContextProvider = (props) => {
    const [todos, setTodos] = useState(todoTemplate)
    // setup todos with default data from todo.json

    const value = {
        todos,
        setTodos,
    }

    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoContextProvider }
