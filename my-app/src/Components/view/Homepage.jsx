import React from 'react'
import Hero from "../Hero"
import About from '../About'
import Journal from '../Journal'
const Homepage = () => {
  return (
    <div className='min-h-screen bg-[#FAFAFA] transition-colors duration-500 relative'>

      {/* -- Home Page -- */}
      <Hero />

      {/* -- About Page -- */}
      <About />

      {/* -- Journal Page -- */}
      <Journal />
    </div>
  )
}

export default Homepage
