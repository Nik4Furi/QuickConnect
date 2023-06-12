import React,{useEffect} from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

//Components
import Navbar from './components/Navbar'

//Pages
import Home from './pages/Home'
import Footer from './components/Footer'
// import Register from './pages/Register'
// import Login from './pages/Login'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
 
  return (
    <>
      <BrowserRouter >
        {/* Navbar Component  */}
        <Navbar />

        <Routes >
		 {/* Home/Secret Page  */}
          <Route path='/' element={<Home />} ></Route>

          {/* Register Page  */}
          {/* <Route path='/Register' element={<Register showAlert={showAlert}/>} ></Route>

          {/* Login Page  */}
          {/* <Route path='/login' element={<Login showAlert={showAlert}/>} ></Route> */}

         
          {/* Footer Component  */}

        </Routes>

          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
