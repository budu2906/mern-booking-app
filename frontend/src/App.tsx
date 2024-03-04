import { Navigate, Route, BrowserRouter as Router, Routes } from '../node_modules/react-router-dom/dist/index'
import { useAppContext } from './contexts/AppContext'
import Layout from './layouts/Layout'
import AddHotel from './pages/AddHotel'
import EditHotel from './pages/EditHotel'
import MyHotels from './pages/MyHotels'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
const App = () => {
  const isLoggedIn = useAppContext()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Register/>}/>
        <Route path="/search" element={<Layout></Layout>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/sign-in" element={<SignIn/>} />
        {isLoggedIn && <>
        <Route path='/add-hotel' element={<AddHotel/>}/>
        </>}
        {isLoggedIn && <>
        <Route path='/edit-hotel/:hotelId' element={<EditHotel/>}/>
        </>}
        {isLoggedIn && <>
        <Route path='/my-hotels' element={<MyHotels/>}/>
        </>}
        <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App