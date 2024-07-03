import signUp from '../img/signIn3.svg'
import { Form, Link, useActionData } from 'react-router-dom'
import FormInput from '../components/FormInput'
import Google from '../img/google-plus-1.svg'
import { useEffect } from 'react'

// custom hooks
import {useRegister} from '../hooks/useRegister'


export const action = async ({request})=>{
  let formData = await request.formData();
  let userName = await formData.get('userName');
  let userLastName = await formData.get('userLastName');
  let email = await formData.get('email');
  let phoneNumber = await formData.get('phoneNumber');
  let password = await formData.get('password');
  let confirmPassword = await formData.get('confirmPassword');
  return { userName, userLastName, email, phoneNumber, password, confirmPassword }

}
function Register() {
  const {registerWithGoogle, isPanding,registerEmailAndPassword } = useRegister()
  const userData = useActionData();
  
  useEffect(()=>{
    console.log(userData)
    {userData && registerEmailAndPassword( userData.email, userData.password, userData.userName, userData.confirmPassword)}
  }, [userData])
  return (
    <div className={'grid grid-cols-1  lg:grid-cols-2 min-h-screen w-full bg-gray-400'}>
     <div className={'hidden  lg:grid lg:place-items-center'}>
        <div className='flex flex-col items-center'>
        <img src={signUp} alt="svg" className='w-[80%] h-[80%] ' />
        <div className='flex  items-center gap-4 mt-5'>
          <p className='text-slate-600'>if you have an account ? </p>
          <Link to={'/login'} className='text-black font-semibold underline'>Sign in</Link>
        </div>
        </div>
      </div>
      <div className={'grid place-items-center '}>
        <Form method='post' className='flex flex-col gap-2 shadow-2xl  w-[60%] p-4'>
        
        <div>
          <h1 className={'text-[40px] text-black font-semibold leading-none'}>Creat an Account</h1>
          <p className={'text-gray-600'}>Place create  your accaunt</p>
        </div>
        <div className='flex gap-3'>
        <FormInput name={"userName"} type={"text"} label={'Name'}placeholder={'your name...'}/>
        <FormInput name={"userLastName"} type={"text"} label={'Last name'}placeholder={'your last name...'}/>
        </div>
        <FormInput name={"email"} type={"email"} label={'Email Adress'} placeholder={'your email'}/>
        <FormInput name={"phoneNumber"} type={"text"} label={'Phone Number'} placeholder={'your phoneNumber'}/>
          <div className='flex gap-3'>
          <FormInput name={"password"} type={"password"} label={'Password'}placeholder={'your password'}/>
          <FormInput name={"confirmPassword"} type={"password"} label={'Confirm'}placeholder={'your password'}/>
          </div>
       
        <div>

        { isPanding && 
        <button disabled type='submit' className="btn  bg-black text-white hover:bg-transparent hover:text-black hover:border-black  btn-block">
        <span className="loading loading-dots loading-md"></span>
        </button>
       }
        
       { !isPanding &&
        <button type='submit' className="btn  bg-black text-white hover:bg-transparent hover:text-black hover:border-black  btn-block">Sign up 
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
          </span>
        </button>
       }
        </div>
        <span className='text-center'>OR</span>
        <div>
        {isPanding &&  <button disabled onClick={registerWithGoogle} type='button' className="btn bg-transparent border-black hover:bg-transparent  btn-block relative font-bold text-black"><span className="loading loading-dots loading-md"></span></button>}
        {!isPanding &&  <button onClick={registerWithGoogle} type='button' className="btn bg-transparent border-black hover:bg-transparent  btn-block relative font-bold text-black"><span><img src={Google} alt="" className=''/></span>With google...</button>}
        </div>

        </Form>
      </div>
    </div>
  )
}

export default Register