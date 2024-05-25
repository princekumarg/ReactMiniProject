import React from 'react'
import { FaArrowRight } from "react-icons/fa";
function Home() {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-purple-900'>Hi, my name</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd5f6]'>Prince Kumar</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-600 hover:border-purple-600'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <FaArrowRight className='ml-3' />
          </span>
        </button>
      </div>
      </div>
      
      
    </div>
  )
}

export default Home
