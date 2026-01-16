import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-16'>
      <div>
        <Image src={assets.profile_img} alt='Profile Image' className='rounded-full w-32' />
      </div>

      <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-3 font-ovo'>
        Hi! I'm Yadav Shreyash
        <Image src={assets.hand_icon} alt='Waving Hand' className='w-6' />
      </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        Mern Stack Developer
      </h1>

      <p className='max-w-2xl mx-auto font-ovo text-gray-700'>
        I am Yadav Shreyash, an aspiring Web Developer with a strong foundation in front-end and back-end technologies, including HTML, CSS, JavaScript, 
        and basic knowledge of frameworks like React and Node.js. Passionate about building user-friendly, responsive websites and continuously learning new 
        tools and technologies. Completed hands-on projects and coursework demonstrating my ability to design, develop, and maintain web applications. 
        Eager to contribute to a dynamic development team and grow professionally in a collaborative environment.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a
          href="#contact"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt='Right Arrow Icon' className='w-4' />
        </a>

        <a
          href="/resume-2026.pdf"
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'
        >
          My Resume
          <Image src={assets.download_icon} alt='Download Icon' className='w-4' />
        </a>
      </div>
    </div>
  )
}

export default Header