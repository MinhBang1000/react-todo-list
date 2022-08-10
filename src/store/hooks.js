import { StoreContext } from "."
import { useContext } from "react"


export const useStore = () => {
    return useContext(StoreContext)
}