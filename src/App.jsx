import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
// import About from './About'

function App() {
 
  return (
    <>
   <Navbar/>
   <Home/>
   <Footer/>
   {/* <About/> */}
    </>
  )
}

export default App
