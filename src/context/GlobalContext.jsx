import { createContext, useReducer } from "react"
export const globalContext = createContext()

const changeState = (state, action)=>{
    const {type, payload} = action

    switch(type){
        case "LOG_IN":
            return {...state, user:payload}
        case "LOG_OUT":
            return {...state, user:null}    
        case "IS_AUTH_READY":
            return {...state, isAuthReady:true}   
        default: 
    }
}
export const GlobalContextProvider = ({children})=>{

    const [state, dispatch] = useReducer(changeState, {
        user:null,
        isAuthReady:false,
        products:[],
        totalProduct:0,
        totalCounter:0,

    })

    return <globalContext.Provider value={{...state, dispatch}}>
        {children}
    </globalContext.Provider>

}