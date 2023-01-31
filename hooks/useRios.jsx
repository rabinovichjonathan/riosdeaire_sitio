import { useContext } from "react"
import RiosContext from "../context/RiosProvider"

useContext

const useRios = () => {
    return useContext(RiosContext)
}

export default useRios