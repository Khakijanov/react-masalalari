import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer></footer>
    </>
  )
}

export default MainLayout