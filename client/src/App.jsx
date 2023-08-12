import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Navbar from './assets/Navbar'
import Home from './pages/Home'
import UpdatePassword from './pages/UpdatePassword'
import Login from './pages/Login'
import axios from 'axios'
import {Toaster} from 'react-hot-toast';
// import { UserContextProvider } from '../context/userContext'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path='' element = {<Home />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/login' element = {<Login />} />
        <Route path='/updatePassword' element={<UpdatePassword />} />
        <Route path='/navbar' element={<Navbar />} />
      </Routes>
      </>
  )
}

export default App
