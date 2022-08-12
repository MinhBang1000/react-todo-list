import * as constraints from "./constraints"

export const reducer = (state, action) => {
    
    switch (action.type) {
        case constraints.SET_TODO_NAME:
            return {
                ...state,
                todoName: action.payload,
            }
        case constraints.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoName: ""
            }
        case constraints.DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((todo) => (todo.id !== action.payload))]
            }
        case constraints.ADD_LIST_TODO:
            return {
                ...state,
                todos: [...action.payload]
            }
        case constraints.REMOVE_ALL_TODO:
            return {
                ...state,
                todos: []
            }
        default: 
            throw new Error("Invalid action!")
    }
}