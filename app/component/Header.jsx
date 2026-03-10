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
      <p className='mb-6'>
I’m Shreyash Yadav, a passionate MERN Stack Developer based in Surat, India. 
I specialize in building modern, responsive, and scalable web applications 
using React, Node.js, Express, and MongoDB.

Currently working as a MERN Developer Intern, I focus on transforming ideas 
and designs into clean, high-performance web experiences. I enjoy solving 
complex problems, developing real-time features, and creating intuitive user interfaces.

I have experience building full-stack applications including authentication 
systems, REST APIs, and real-time platforms. Some of my key projects include 
a real-time Chat Application with messaging and video calling using Socket.IO 
and WebRTC, and a Visitor Pass Management System that allows organizations 
to manage visitor check-ins, approvals, and tracking efficiently.

My goal is to continuously grow as a developer, contribute to impactful 
projects, and become a strong full-stack engineer in modern web development.
</p>
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
          href="/ShreyashYadav_MERN_resume.pdf"
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

