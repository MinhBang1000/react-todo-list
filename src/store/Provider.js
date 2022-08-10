import React from "react"
import Context from "./Context"
import { useReducer } from "react"
import { initState } from "./state-structure"
import { reducer } from "./reducer"


const Provider = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initState)
    
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider