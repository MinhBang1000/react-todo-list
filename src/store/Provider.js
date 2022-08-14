import React, { useEffect } from "react"
import Context from "./Context"
import { useReducer } from "react"
import { initState } from "./state-structure"
import { reducer } from "./reducer"
import axios from "axios"
import { BASE_URL, LANGUAGE } from "./base-url"
import  * as constraints  from "./constraints"

const Provider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {

        let ordering = "?ordering=id"
        if (LANGUAGE === "laravel") {
            ordering = "";
        }
        axios.get(`${BASE_URL}/tasks/${ordering}`)
        .then((response) => {
            const data = response.data
            dispatch(constraints.addListTodo(data))
        })
        .catch((error) => {
            console.log(error)
        })

    },[])
    
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider