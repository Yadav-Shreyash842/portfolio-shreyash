import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-ovo mb-8'>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        As a passionate and dedicated web developer, I specialize in 
        building fast, modern, and user-friendly websites and web 
        applications. I blend creativity with functionality to deliver 
        responsive designs, smooth user experiences, and clean,
        scalable code. Whether you're a startup, small business, or 
        individual, I aim to bring your ideas to life on the web.
      </p>

      {/* ✅ Custom grid-template-columns applied via inline style */}
      <div
        className='grid gap-6 my-10'
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className='border border-gray-300 rounded-lg px-8 py-12 transition duration-500 transform hover:shadow-md hover:-translate-y-1 hover:bg-gray-100 cursor-pointer'
          >
            <Image src={icon} alt={`${title} icon`} width={40} height={40} />
            <h3 className='text-lg my-4 text-gray-700 font-semibold'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5 text-blue-500 hover:underline'>
              Read more
              <Image src={assets.right_arrow} alt='Arrow icon' width={16} height={16} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
