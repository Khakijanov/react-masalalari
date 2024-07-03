import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";

export const useGlobalContext = ()=>{
    const context = useContext(globalContext);

    if(!context){
        throw new Error("context providerni faqatgini global context o'rab turgan joydagini ishlatgin")
    }

    return context
}