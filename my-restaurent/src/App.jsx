import React from 'react'
import HeroSection from './Component/HeroSection'
import Navbar from './Component/Navbar'
import Dishes from './Component/Dishes'
import About from './Component/About'
import Misson from './Component/Misson'
import Expertise from './Component/Expertise'
import Review from './Component/Review'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection/>
      <Navbar/>
      <Dishes/>
      <About/>
      <Misson/>
      <Expertise/>
      <Review/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App