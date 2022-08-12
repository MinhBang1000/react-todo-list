import React, { useState } from "react"
import classes from "./TodoTask.module.css"
import { useStore } from "../../store/hooks"
import { deleteTodo } from "../../store/constraints"
import axios from "axios"
import { BASE_URL } from "../../store/base-url"

const TodoTask = ({ task, lastest }) => {

    const dispatch = useStore()[1]
    const [checked, setChecked] = useState(task.checked)

    const handleDelete = () => {

        axios.delete(`${BASE_URL}/tasks/${task.id}/`)
        .then((response) => {
            dispatch(deleteTodo(task.id))
        })  
        .catch((error) => {
            console.log("Error: ", error);
        })

    }

    const handleChecked = () => {

        const data = {
            checked: !checked
        }
        axios.put(`${BASE_URL}/tasks/${task.id}/`, data)
        .then((response) => {
            setChecked(!checked)
        })
        .catch((error) => {
            console.log("Error: ", error);
        })

    }

    return (
        <div className={`${classes["todo-task"]} ${ !lastest && classes["lastest-item"] }`}>
            <input  
                type="checkbox"
                checked={checked}
                onChange={handleChecked}
            />
            { !checked ? <label onClick={handleChecked}>{task.name}</label> : <label  onClick={handleChecked}><strike>{task.name}</strike></label> }
            <span
                onClick={handleDelete}
            >&#10006;</span>
        </div>
    )

}

export default TodoTask