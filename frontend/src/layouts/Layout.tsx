import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'

// interface Props{
//   children: React.ReactNode
// }

const Layout = () => {
  return (
    <div>
            <Header/>
        <div className="flex flex-col min-h-screen">
            <Hero/>
            <div className="container mx-auto py-10 flex-1">

            <Outlet/>
            </div>
        </div>
            <Footer/>
    </div>
  )
}

export default Layout