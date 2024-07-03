import { NavLink, Link } from "react-router-dom"
import { useGlobalContext } from "../hooks/useGlobalContext"
import './navbar.css'

// firebase
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";


function Navbar() {
  const {user} = useGlobalContext()

  const signOutProfile = async ()=>{
    await signOut(auth);
    toast.success(`See you Soon ${user.displayName}`)
 }
 
  return (
    
  <header className={'bg-gray-200'}>
    <div className="navbar  lg:container lg:max-w-[1166px] lg:m-auto lg:pl-12 pr-12">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><Link to={'/'} className={'active:bg-slate-500 text-white'}>Home</Link></li>
          <li><Link to={'/about'} className={'active:bg-slate-500 text-white'}>About</Link></li>
          <li><Link to={'/contact'} className={'active:bg-slate-500 text-white'}>Contact</Link></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Khakijanov</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><Link to={'/'} className={'focus:bg-white  active:bg-white text-gray-600'}>Home</Link></li>
        <li><Link to={'/about'} className={'focus:bg-white active:bg-white text-gray-600'}>About</Link></li>
        <li><Link to={'/contact'} className={'focus:bg-white active:bg-white text-gray-600'}>Contact</Link></li>
      </ul>
    </div>
    <div className="navbar-end flex gap-5 ">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {/* <span className="badge badge-sm indicator-item"></span> */}
        </div>
      </div>
      <div className="avatar">
</div>
      {/* <NavLink to={'/login'} className="btn  btn-ghost max-w-44 font-semibold">Sign up</NavLink>
      <NavLink to={'/register'} className="btn btn-outline btn-primary  max-w-44 font-semibold">Sign in</NavLink> */}
      <NavLink onClick={signOutProfile} className="btn btn-outline btn-primary  max-w-44 font-semibold">Log out</NavLink>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photoURL ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}/>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            {user.displayName}
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><Link onClick={signOutProfile}>Logout</Link></li>
      </ul>
    </div>
    </div>
  </div>
  </header>

  )
}

export default Navbar