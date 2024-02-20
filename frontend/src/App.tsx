import { Navigate, Route, BrowserRouter as Router, Routes } from '../node_modules/react-router-dom/dist/index'
import Layout from './layouts/Layout'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Register/>}/>
        <Route path="/search" element={<Layout></Layout>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App