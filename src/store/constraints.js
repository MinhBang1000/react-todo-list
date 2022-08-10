// Create const action
export const SET_TODO = "set_todo"
export const setTodo = (payload) => {
    return {
        type: SET_TODO,
        payload
    }
}
export const ADD_TODO = "add_todo"
export const addTodo = () => {
    return {
        type: ADD_TODO
    }
}