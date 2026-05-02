import React from 'react'
import Navbar from '../Navbar'
import Homepage from './Homepage'

const MainWebsite = () => {
  return (
    <div className='relative min-h-screen bg-gray-100  transition-colors duration-300'>
      <Navbar />

      <main className='relative'>
        <Homepage />
      </main>
    </div>
  )
}

export default MainWebsite
