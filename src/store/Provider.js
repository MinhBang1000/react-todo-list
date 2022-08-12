import React, { useEffect } from "react"
import Context from "./Context"
import { useReducer } from "react"
import { initState } from "./state-structure"
import { reducer } from "./reducer"
import axios from "axios"
import { BASE_URL } from "./base-url"
import  * as constraints  from "./constraints"

const Provider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {

        axios.get(`${BASE_URL}/tasks/`)
        .then((response) => {
            const data = response.data
            dispatch(constraints.addListTodo(data))
        })
        .catch((error) => {
            console.log(new Error("Can't call api --> Error: ", error))
        })

    },[])
    
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider