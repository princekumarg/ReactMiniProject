import React, { useState } from 'react'
import {
  FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes
} from 'react-icons/fa'
import { MdOutgoingMail } from "react-icons/md";

function Navbar() {
  const [nav,setNav]=useState(false)
  const handleClick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300'>
        <div>
          <h1 className='text-purple-900'>LOGO</h1>
        </div>
        {/* Menu */}
        <div>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'> 
        {/* <p>z-10 is used to bring the menu to the front </p> */}
            {!nav?<FaBars/>:<FaTimes/>}   
        </div>
        <ul className={!nav?"hidden":"absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center gap-4"}>
          <li className='py-4 text-4xl'>Home</li>
          <li className='py-4 text-4xl'>About</li>
          <li className='py-4 text-4xl'>Skills</li>
          <li className='py-4 text-4xl'>Work</li>
          <li className='py-4 text-4xl'>Contact</li>
        </ul>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a href="/" className='flex justify-between items-center w-full text-gray-300'>Facebook<FaFacebook size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700'>
              <a href="/" className='flex justify-between items-center w-full text-gray-300'>LinkedIn<FaLinkedin size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
              <a href="/" className='flex justify-between items-center w-full text-gray-300'>Github<FaGithub size={30}/></a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
              <a href="/" className='flex justify-between items-center w-full text-gray-300'>Gmail<MdOutgoingMail size={30}/></a>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Navbar
