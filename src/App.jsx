import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
// import MiddleBody from './components/MiddleBody'
// import LowerBody from './components/LowerBody'
// import LowerBody2 from './components/LowerBody2'
import { ImOpera } from 'react-icons/im'
import Footer from './components/Footer'
import HomePage from './components/Homepage'
import { Outlet } from 'react-router-dom'


function App() {
 

  return (
    <>
    <NavBar/>
    <Outlet/>
   
     <Footer/>
    
    
       
    </>
  )
}

export default App
