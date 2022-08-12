import React, { useRef } from "react"
import { useStore } from "../../store/hooks"
import * as constraints from "../../store/constraints"
import classes from "./TodoForm.module.css"
import axios from "axios"
import { BASE_URL } from "../../store/base-url"

const TodoForm = () => {

    // Library hooks
    const [state, dispatch] = useStore()
    const { todoName } = state
    const inputName = useRef()

    // customize function
    const handleSaveTask = (e) => {

        e.preventDefault()
        inputName.current.focus()
        if (todoName.toString().trim().length === 0){
            alert("A todo task name should not be emtpy !")
            return;
        }
        const data = {
            name: todoName
        }
        axios.post(`${BASE_URL}/tasks/`,data)
        .then((response) => {
            const data = response.data
            dispatch(constraints.addTodo(data))
        })
        .catch((error) => {
            console.log("Error: ", error);
        })

    }

    return (
        <form onSubmit={handleSaveTask} className={classes["todo-form"]}>
            <label>Awesome Todo List</label>
            <div>
                <input  
                    type="text"
                    ref={inputName}
                    value={todoName}
                    placeholder={"What do you need to do today ?"}
                    onChange={(e) => dispatch(constraints.setTodoName(e.target.value))}
                />
                <button
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export default TodoForm