'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScroll, setIsScroll] = useState(false)
  const [mounted, setMounted] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Background Decorative Image */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image 
          src={assets.header_bg_color} 
          alt='Decorative background'
          className='w-full h-auto object-cover' 
        />
      </div>

      {/* Navbar */}
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        
        {/* Logo */}
        <a href="#top">
          <Image 
            src={assets.logo} 
            alt="Logo"
            className='w-34 cursor-pointer mr-14' 
          />
        </a>

        {/* Desktop Links */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition-all duration-300 ${
          mounted && isScroll ? "bg-white shadow-sm bg-opacity-50" : ""
        }`}>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#work">My Work</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>

        {/* Right Icons */}
        <div className='flex items-center gap-4'>
         

          {/* Contact Button */}
          <a 
            href="#contact" 
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
          >
            Contact 
            <Image 
              src={assets.arrow_icon} 
              alt="Arrow Icon"
              className='w-3' 
            />
          </a>

          {/* Mobile Menu Button */}
          <button 
            className='block md:hidden ml-3' 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            <Image 
              src={assets.menu_black} 
              alt="Menu Icon" 
              className='w-6' 
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 bg-rose-50 transition-transform duration-500 ${
        menuOpen ? 'right-0' : '-right-64'
      }`}>
        {/* Close Icon */}
        <div className='absolute top-4 right-4 cursor-pointer' onClick={closeMenu}>
          <Image src={assets.close_black} alt='Close Menu' className='w-5' />
        </div>

        {/* Mobile Nav Links */}
        <li><a href="#top" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About Me</a></li>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#work" onClick={closeMenu}>My Work</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
      </ul>
    </>
  )
}

export default Navbar
