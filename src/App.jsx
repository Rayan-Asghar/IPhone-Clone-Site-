import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Highlight from './Components/Highlight'
// import { useState } from 'react'



const App= ()=> {
  return (
    <>
     <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlight/>
     </main>
    </>
  )
}

export default App
