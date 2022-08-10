import React from "react"
import TodoForm from "./components/Todo/TodoForm"
import TodoList from "./components/Todo/TodoList"
import Card from "./components/UI/Card"

const App = () => {

  return (
    <>
      <Card>
        <TodoForm />
        <TodoList />
      </Card>
    </>
  )

}

export default App
