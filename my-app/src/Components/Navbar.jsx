import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import DarkMode from './DarkMode'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-[100] bg-white/80 backdrop-blur-md border-b border-gray-100'>

      <nav className='flex items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12'>

        <div className='flex items-center cursor-pointer' onClick={() => navigate('/')}>
          <h1 className='text-xl md:text-2xl font-black tracking-tighter text-gray-900 uppercase'>
            Joshyy<span className='text-green-500'>11</span>
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 items-center justify-center text-gray-800 text-[13px] font-bold uppercase tracking-widest bg-white shadow-sm border border-gray-100 py-3 px-8 rounded-full">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.path)}
                className={`relative py-1 transition-colors hover:text-green-600 ${location.pathname === item.path ? 'text-green-600' : 'text-gray-800'
                  }
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:h-0.5 after:w-full after:bg-green-500
                  after:scale-x-0 after:origin-right
                  after:transition-transform after:duration-300
                  hover:after:scale-x-100 hover:after:origin-left
                  ${location.pathname === item.path ? 'after:scale-x-100' : ''}`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-4'>
          <div className='hidden sm:block'>
            <button className='group py-2.5 px-6 bg-black rounded-full tracking-widest text-[12px] font-bold uppercase text-white shadow-lg flex items-center gap-2 hover:bg-green-600 transition-all duration-300'>
              Download CV
              <i className="bi bi-arrow-right-short text-xl group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-2xl text-black p-1'
          >
            <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='absolute top-20 left-0 w-full bg-white shadow-xl border-b border-gray-100 flex flex-col p-6 gap-4 md:hidden'
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.path);
                  setMenuOpen(false);
                }}
                className={`text-center text-lg font-black uppercase tracking-tighte transition-colors hover:text-green-600 ${location.pathname === item.path ? 'text-green-500' : 'text-gray-900'
                  } `}
              >
                {item.name}
              </button>
            ))}
            <button className='group mt-2 py-4 bg-black text-white rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:bg-green-600'>
              Download CV
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar