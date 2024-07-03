// import 
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";

// globalcontext
import { useGlobalContext } from "./useGlobalContext";

export const useLogin = ()=>{
    const [isPending, setIsPending] = useState(false);
    const {dispatch} = useGlobalContext()
    const login = async (email, password)=>{
        setIsPending(true)  
        try{
          const result = await  signInWithEmailAndPassword(auth, email, password)
          const user = result.user
          dispatch({type:'LOG_IN', payload:user});
          toast.success(`welcome! ${user.displayName}`)
          setIsPending(false)
          
        }
        catch(error){
            toast.error(error.message)
            setIsPending(false)
        }
    }
    return({isPending, login})
}