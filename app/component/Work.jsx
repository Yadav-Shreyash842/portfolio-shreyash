import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Heading */}
      <h4 className="text-center mb-2 text-lg font-ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-ovo mb-8">My Latest Work</h2>

      {/* Intro Paragraph */}
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo text-gray-700 dark:text-gray-300">
        Welcome to my web development portfolio! Explore a collection of projects
        showcasing my experience in both front-end and back-end development.
      </p>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-10">
        {workData.map((project, index) => (
          <a
            key={index}
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Card Footer with Info + Icon */}
            <div
              className="bg-white dark:bg-gray-800 w-10/12 rounded-md absolute bottom-5 
                         left-1/2 -translate-x-1/2 py-3 px-5 flex items-center 
                         justify-between duration-500 group-hover:bottom-7 shadow-lg"
            >
              <div>
                <h2 className="text-base font-semibold dark:text-white">{project.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
              <div
                className="border rounded-full border-black dark:border-white w-9 aspect-square 
                           flex items-center justify-center 
                           shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] 
                           group-hover:bg-lime-300 transition"
              >
                <Image
                  src={assets.send_icon}
                  alt="send icon"
                  width={20}
                  height={20}
                  className="invert-0 dark:invert"
                />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Show More Button */}
      <a
        href="#"
        className="w-max flex items-center justify-center gap-2
                   text-gray-700 dark:text-gray-200 border border-gray-700 dark:border-gray-200 
                   rounded-full py-3 px-10 mx-auto my-20 
                   hover:bg-gray-100 dark:hover:bg-gray-800 duration-500"
      >
        Show More
        <Image
          src={assets.right_arrow_bold}
          alt="right arrow"
          className="w-4 h-4"
          width={16}
          height={16}
        />
      </a>
    </div>
  );
};

export default Work;
