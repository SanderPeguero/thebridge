import React, {useContext, createContext, useEffect, useState} from "react";
import { confiCards, CardList } from "./Functions/Configuration/Funcions";

const Context = createContext() 

export const useContextBridge = () => {
 const context = useContext(Context)
 if(!context) throw new Error("There is not context provide")
 return context
}

//Pasar variable para el contexto
export function ProviderContext({children}) {
    const [Cardlist, setCardlist] = useState([])

    const HandleSaveCards = (Card) => {
        console.log("Context")
        confiCards(Card)
    }
    
    useEffect(() => {
        CardList(setCardlist)
        console.log("Datos de card")
    }, [])
    
    return (
    <Context.Provider
        value={{
            HandleSaveCards,
            Cardlist
        }}
    >
        {children}
    </Context.Provider>
    )
}