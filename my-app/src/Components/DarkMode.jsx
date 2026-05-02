import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window != 'undefined') {
      const saveTheme = localStorage.getItem("theme")
      const systemPreferDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches
      return saveTheme || (systemPreferDark ? 'dark' : 'light')
    }
    return 'light'
  })

  useEffect(() => {
    const html = document.documentElement
    if (theme === 'dark') {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <button
      onClick={toggleTheme}
      className='group relative w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all active:scale-95 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(251,191,36,0.25)]'
    >

      <AnimatePresence mode='wait' initial={false}>
        {theme === 'dark' ? (
          <motion.span
            key='sun'
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className='text-amber-300 text-sm'
          >
            <i className="bi bi-sun-fill"></i>
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className='text-black text-sm'
          >
            <i className="bi bi-moon-stars-fill"></i>
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export default DarkMode
