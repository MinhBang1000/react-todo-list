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
                todos: [...state.todos, {
                    todoId: Math.random().toString(36).substr(2, 9),
                    todoName: state.todoName
                }],
                todoName: ""
            }
        case constraints.DELETE_TODO:
            return {
                ...state,
                todos: [...state.todos.filter((todo) => (todo.todoId !== action.payload))]
            }
        default: 
            throw new Error("Invalid action!")
    }
}