// ✅ Apply dark mode styles and subtle animations with Tailwind CSS
// ✅ Assumes tailwind.config.js has: darkMode: 'class'

'use client'

import React, { useEffect, useState } from 'react'
import About from './component/About'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Header from './component/Header'
import Navbar from './component/Navbar'
import Services from './component/Services'
import Work from './component/Work'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme))
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', darkMode)
      localStorage.setItem('darkMode', JSON.stringify(darkMode))
    }
  }, [darkMode, mounted])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Navbar />


      {/* Animated wrapper */}
      <main className="transition-all duration-500 ease-in-out">
        <Header />
        <About />
        <Services />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

/* Add this to globals.css if not present:
body {
  transition: background-color 0.4s ease, color 0.4s ease;
}
*/