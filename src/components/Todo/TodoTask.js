import React, { useState } from "react"
import classes from "./TodoTask.module.css"
import { useStore } from "../../store/hooks"
import { deleteTodo } from "../../store/constraints"

const TodoTask = ({ task, lastest }) => {

    const dispatch = useStore()[1]
    const [checked, setChecked] = useState(false)

    const handleDelete = () => {

        dispatch(deleteTodo(task.todoId))

    }

    const handleChecked = () => {
        setChecked(!checked)
    }

    return (
        <div className={`${classes["todo-task"]} ${ !lastest && classes["lastest-item"] }`}>
            <input  
                type="checkbox"
                checked={checked}
                onChange={handleChecked}
            />
            { !checked ? <label onClick={handleChecked}>{task.todoName}</label> : <label  onClick={handleChecked}><strike>{task.todoName}</strike></label> }
            <span
                onClick={handleDelete}
            >&#10006;</span>
        </div>
    )

}

export default TodoTask