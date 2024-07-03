import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"

// layout
import MainLayout from './layout/MainLayout';
import AboutLayout from "./layout/AboutLayout";
// pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from "./pages/ErrorPage";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import AboutContent from "./pages/AboutContent";
// components
import Protect from "./components/Protect";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
// action
import { action as registorAction } from "./pages/Register";
import { action as loginAction } from "./pages/LogIn"

// context
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useEffect } from "react";

// firebase
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";



function App() {
  const {user, dispatch, isAuthReady} = useGlobalContext()
  console.log(user, )
 
  
  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Protect user={user}>
        <MainLayout/>,
      </Protect>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element: <Home/>,
        },
        {
          path:'/about',
          element: <AboutLayout/>,
          children: [
            {
              index:true,
              element: <About/>
            }, 
            {
              path: ':aboutContent',
              element: <AboutContent/>
            }
          ]
          
        },
        {
          path:'/contact',
          element: <Contact/>,
        },
        {
          path: '/products',
          element: <Products/>

        },
        {
          path: '/products',
          element: <ProductDetail/>

        },
        {
          path: '/productDetail/:id',
          element: <ProductDetail/>
        }
       
      ]
    },
    {
      path:'/login',
      element: user ? <Navigate to={'/'} /> : <LogIn/>,
      errorElement:<ErrorPage/>,
      action: loginAction

    },
    {
      path:'/register',
      element:user ? <Navigate to={'/'} /> : <Register/>,
      errorElement:<ErrorPage/>,
      action: registorAction,

    }
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      dispatch({type:'LOG_IN', payload:user});
      dispatch({type:"IS_AUTH_READY"})
    })
  },[])
  
  return (
    <>
        {  isAuthReady && <RouterProvider router={routes}/>}
    </>
  )
}

export default App