import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo mb-8'>About Me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        
        
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image
            src={assets.user_image}
            alt='User Illustration'
            className='w-full h-full object-contain rounded-3xl'
          />
        </div>

       
        <div className='flex-1 text-gray-700 font-ovo text-lg'>
          <p className='mb-6'>
            I'm Yadav Shreyash, an aspiring frontend and backend web developer with experience in building responsive, user-friendly web applications.
            I specialize in HTML, CSS, JavaScript, React, and Node.js. I enjoy solving problems, learning new technologies, and working on meaningful projects.
            My goal is to continuously improve and grow as a developer while contributing to impactful and collaborative teams.
          </p>

          
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                           transition duration-500 
                           hover:bg-blue-100 
                           hover:shadow-[4px_4px_0_#000] 
                           dark:hover:shadow-[4px_4px_0_#fff]'
              >
                <Image src={icon} alt={title} width={28} height={28} className='mt-3' />
                <div>
                  <h3 className='my-4 font-semibold text-gray-700 dark:text-gray-200'>{title}</h3>
                  <p className='text-gray-600 dark:text-gray-400 text-sm'>{description}</p>
                </div>
              </li>
            ))}
          </ul>

          
          <h4 className='mt-10 mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200'>Tools I Use</h4>

          <ul className='flex flex-wrap gap-4'>
            {toolsData.map((tool, index) => (
              <li className='flex items-center justify-center
              w-12 sm:w-14 aspect-square border border-gray-400
              rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index} title='Tool'>
                <Image src={tool} alt={`Tool ${index + 1}`} width={28} height={28} className='sm:w-7 w-5' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About