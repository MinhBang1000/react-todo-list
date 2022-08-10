// Create const action
export const SET_TODO_NAME = "set_todo"
export const setTodoName = (payload) => {
    return {
        type: SET_TODO_NAME,
        payload
    }
}
export const SET_TODO_DATE = "set_todo_date"
export const setTodoDate = (payload) => {
    return {
        type: SET_TODO_DATE,
        payload
    }
}
export const SET_TODO_DESCRIBE = "set_todo_describe"
export const setTodoDescribe = (payload) => {
    return {
        type: SET_TODO_DESCRIBE,
        payload
    }
}
export const ADD_TODO = "add_todo"
export const addTodo = () => {
    return {
        type: ADD_TODO
    }
}

export const DELETE_TODO = "delete_todo"
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}