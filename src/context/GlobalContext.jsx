import { createContext, useReducer } from "react"
export const globalContext = createContext()

const usersData = {
    user:null,
    isAuthor:false , 
}

// const changeState = (state, action)=>{
//     console.log(state)
//     console.log(action)
    
// const {title, price} = action
// }
export const GlobalContextProvider = ({children})=>{

    // const [state, dispatch]= useReducer(changeState, globalState)

    // dispatch({type:'ADD_ITEM', payload:{title:'iphone', price:'550$'}})


    return <globalContext.Provider value={{}}>
        {children}
    </globalContext.Provider>

}