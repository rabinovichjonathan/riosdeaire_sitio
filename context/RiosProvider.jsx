import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const RiosContext = createContext()

const RiosProvider = ({children}) => {
  
    const [fechas, setFechas] = useState([])

    const obtenerFechas = async () => {
        const { data } = await axios('/api/fechas')
        setFechas(data)
    }
    
    useEffect(() => {
        obtenerFechas()
    },[])



    return(
        <RiosContext.Provider
            value={{fechas}}
        >
            {children}
        </RiosContext.Provider>
    )
    
}

export {
    RiosProvider
}

export default RiosContext