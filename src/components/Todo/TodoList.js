import React from "react"
import { useStore } from "../../store/hooks"
import TodoTask from "./TodoTask"

const TodoList = () => {

    // Library
    const [ state ] = useStore()
    const { todos } = state

    // Customize function

    return (
        <>
            { todos && todos.map((task,index) => {
                return <TodoTask key={task.id} task={task} lastest={(index+1) === todos.length} />
            })}
        </>
    )

}

export default TodoList