import Image from "next/image";
import React from "react";
import Basic from "./Basic";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  return (
    <section id="home">
      <div className='flex items-center justify-around  bg-gray-900 text-gray-100 py-3 '>
        <div className='flex flex-col md:flex-row mx-auto md:mx-0 items-center space-x-4 '>
          <Image src='/asif.png' alt='' width={63} height={63} className="rounded-full hover:scale-125 "></Image>
          <h3 className='text-xl font-serif hover:scale-150 hover:text-red-500 uppercase hover:border-2 hover:bg-green-200 hover:animate-pulse'>
            Asif Raza
          </h3>
        </div>
        <div>
          <ul className=' hidden md:flex space-x-8 font-serif '>
            <li className=' hover:text-red-400 uppercase hover:border-2 hover:bg-green-200 hover:animate-pulse  '>
              <a href='#home'>Home</a>
            </li>
            <li className=' hover:text-red-400 uppercase hover:border-2 hover:bg-green-200 hover:animate-pulse'>
              <a href='#about'>About</a>
            </li>
            <li className=' hover:text-red-400 uppercase hover:border-2 hover:bg-green-200 hover:animate-pulse'>
              <a href='#Skills'>Skills</a>
              </li>
            <li className=' hover:text-red-400 uppercase hover:border-2 hover:bg-green-200 hover:animate-pulse'>
              <a href='#projects'>Projects</a>
            </li>
            <li className=' hover:text-red-400 uppercase hover:border-2 hover:bg-green-200 hover:animate-pulse'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
          
        </div>
        {/* Hamburger Icon */}
        <div
            style={{ color: `white` }}
            className='md:hidden mr-14'
          >
            <AiOutlineMenu size={25} />
          </div>
      </div>
    </section>
  );
}
