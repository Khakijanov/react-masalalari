import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useState } from "react";

// context
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";

//firebase


export const useRegister = ()=>{

   

    const [isPanding, setIsPanding] = useState(false);
    const {dispatch} = useGlobalContext()

   //  register with google
    const registerWithGoogle = async ( )=>{

        setIsPanding(true)
        try{
          const provider = new GoogleAuthProvider();
          const result = await signInWithPopup(auth, provider)
          const user = result.user;
          dispatch({type:'LOG_IN', payload:user}) 
          toast.success(`Welcome! ${user.displayName}`)
          setIsPanding(false)

       }catch(error){
          const errorMessage = error.message;
          console.log(errorMessage)
          setIsPanding(false)
    }
   
     }

     //register with email
     const registerEmailAndPassword = async (email, password,  displayName, confirmPassword)=>{
      setIsPanding(true)
      try{
       if(confirmPassword !== password){
         throw new Error('place check password')
       }
         const register = createUserWithEmailAndPassword(auth, email, password);
         const user = (await register).user
         await updateProfile(auth.currentUser, {displayName})
         dispatch({type:'LOG_IN', payload:user});
         toast.success(`welcome! ${user.displayName}`)
         setIsPanding(false)

      }
      catch(error){
         const errorMessage = error.message;
         toast.error('place chek password')
         setIsPanding(false)
      }
     }
  return {registerWithGoogle, isPanding, registerEmailAndPassword}
} 