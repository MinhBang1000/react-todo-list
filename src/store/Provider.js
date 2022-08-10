import React from "react"
import Context from "./Context"
import { useReducer } from "react"
import { SET_TODO,ADD_TODO } from "./constraints"

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, state.todoInput],
                todoInput:"",
            }
        default: 
            throw new Error("Invalid action!")
    }
}

const initState = {
    todoInput: "",
    todos: []
}

const Provider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initState)
    

    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider