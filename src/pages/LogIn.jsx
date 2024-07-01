import signIn from '../img/login.svg'
import { Form, Link, useActionData } from 'react-router-dom'
import FormInput from '../components/FormInput'
import Google from '../img/google-plus-1.svg'
import { useEffect } from 'react'
export const action = async ({request})=>{
  let formData = await request.formData();
  let email = await formData.get('email');
  let password = await formData.get('password');
  return {  email,  password  }

}
function LogIn() {
  const userData = useActionData();
  useEffect(()=>{
    console.log(userData)
  },[userData])
  return (
    <div className={'grid grid-cols-1  lg:grid-cols-2 min-h-screen w-full bg-gray-400'}>
      <div className={'hidden  lg:grid lg:place-items-center'}>
        <div className='flex flex-col items-center'>
        <img src={signIn} alt="svg" className='w-[80%] h-[80%] ' />
        <div className='flex  items-center gap-4 mt-5'>
          <p className='text-slate-600'>Don't have an account yet ? </p>
          <Link to={'/register'} className='text-black font-semibold underline'>Create accaunt</Link>
        </div>
        </div>
      </div>

      {/* Form */}
      <div className={'grid place-items-center '}>
        <Form method='post' className='flex flex-col gap-2 shadow-2xl w-[60%] p-6'>
        
        <div>
          <h1 className={'text-[40px] text-black font-semibold'}>Welcome back!</h1>
          <p className={'text-gray-600'}>Place login to your accaunt</p>
        </div>
        <FormInput name={"email"} type={"email"} label={'Email Adress'} placeholder={'your email'}/>
        <FormInput name={"password"} type={"password"} label={'Password'}placeholder={'your password'}/>
        <div className='w-full flex justify-between items-center'>
          <label className='flex items-center gap-2'>
          <input type="checkbox" defaultChecked className="checkbox checkbox-xs" />

          <span className='select-none cursor-pointer'>Remember me</span>
          </label>

          <p className={'text-slate-600 hover:cursor-pointer hover:text-black transition-colors select-none'}>Forget password ?</p>
        </div>
        <div>
        <button type='submit' className="btn  bg-black text-white hover:bg-transparent hover:text-black hover:border-black  btn-block">Sign in <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>
</span></button>
        </div>
        <span className='text-center'>OR</span>
        <div>
        <button type='button' className="btn bg-transparent border-black hover:bg-transparent  btn-block relative font-bold text-black"><span><img src={Google} alt="" className=''/></span>With google</button>
        </div>

        </Form>
      </div>
    </div>
  )
}

export default LogIn