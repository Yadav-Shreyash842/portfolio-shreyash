import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
      
      <div className='text-center'>
        <Image
          src={assets.logo}
          alt='Logo'
          className='w-36 mx-auto mb-2'
        />

        <div className='w-max flex items-center gap-2 mx-auto text-sm text-gray-700'>
          <Image src={assets.mail_icon} alt='Email Icon' className='w-6 h-6' />
          <span>yadavshreyash842@gmail.com</span>
        </div>
      </div>

      
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 text-sm'>
        <p className='mb-2 sm:mb-0'>
          © 2025 Yadav Shreyash. All rights reserved.
        </p>

        <ul className='flex justify-center gap-4'>
          <li>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.instagram.com/yadav__shreyash/?__pwa=1'         
              className='hover:underline text-blue-600'
            >
              Instagram
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Footer
