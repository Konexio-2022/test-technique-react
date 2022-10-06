import React, { Component } from 'react'

import './App.css'
import todosTemplate from './todo.json'

import { TodoContextProvider } from './contexts/Todo'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoResults from './components/TodoResults'

const App = () => {
  return (
    <TodoContextProvider>
      <div className="root">
        <TodoList />
        <TodoResults />
        <TodoForm />
      </div>
    </TodoContextProvider>
  )
}

export default App