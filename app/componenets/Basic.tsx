import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
export default function Basic() {
  return (
    <div className='path '>
      <div className=' items-center justify-between px-28  pt-16 pb-32  bg-gray-900 min-h-full '>
        <div className='text-center text-gray-100 font-serif'>
          <h1 className='text-4xl font-bold mt-6 md:mt-0 md:text-5xl'>
            Hi, I&#39;m{" "}
            <span className=' text-red-500 hover:text-red-500 uppercase hover:border-2 hover:bg-green-200 hover:animate-pulse'>
              Asif Raza
            </span>
          </h1>
          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            I&#39;m a{" "}
            <span className='font-semibold text-gray-50'>
              Software Developer{" "}
            </span>
            based in Sahiwal,Pakistan. Working towards creating software that
            makes life easier and more meaningful.
          </p>
        </div>

        <div className='flex px-2 py-3 space-x-2 md:space-x-4 pt-10 justify-center '>
          <div className='text-white rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='https://www.facebook.com' target='_blank'>
              <BsFacebook size={30} />
            </Link>
          </div>

          <div className='text-white rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='https://www.twitter.com' target='_blank'>
              <AiFillTwitterCircle size={30} />
            </Link>
          </div>

          <div className='text-white rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='https://www.linkedin.com/feed/' target='_blank'>
              <AiFillLinkedin size={30} />
            </Link>
          </div>
          <div className='text-white rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='https://github.com/AsifRaza1009' target='_blank'>
              <AiFillGithub size={30} />
            </Link>
          </div>
          <div className='text-white rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='https://www.youtube.com/channel/UCNGhfBkAtoXrxFe_LkbWQ5Q' target='_blank'>
              <AiFillYoutube size={30} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
