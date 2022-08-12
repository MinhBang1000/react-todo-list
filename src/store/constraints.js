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
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const DELETE_TODO = "delete_todo"
export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const ADD_LIST_TODO = "add_list_todo"
export const addListTodo = (payload) => {
    return {
        type: ADD_LIST_TODO,
        payload
    }
}

export const REMOVE_ALL_TODO = "remove_all_todo"
export const removeAllTodo = (payload) => {
    return {
        type: REMOVE_ALL_TODO
    }
}