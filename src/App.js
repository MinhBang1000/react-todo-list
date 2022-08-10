import {React, useContext, useRef} from "react"
import {StoreContext} from "./store"
import { setTodo, addTodo } from "./store/constraints"


const App = () => {
  
  const todoRef = useRef()

  const [state, dispatch] = useContext(StoreContext)

  const { todos, todoInput } = state

  const handleAddTodo = () => {
    dispatch(addTodo())
    todoRef.current.focus()
  }

  return (
    <>
      <h1>React Context For Global</h1>
      <input 
        type="text"
        placeholder="Todo list ..."
        value={todoInput}
        onChange={(e) => dispatch(setTodo(e.target.value))}
        ref={todoRef}
      />
      <button type="button" onClick={handleAddTodo}>Submit</button>
      <ul>
        {todos && todos.map((todo, index) => <li key={index}>{todo}</li> )}
      </ul>
    </>
  )
}

export default App
