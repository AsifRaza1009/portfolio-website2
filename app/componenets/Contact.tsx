import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../../public/contact.jpg';

export default function Contact() {
  return (
    <section id='contact'>
    <div className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-24 w-full '>
        <p className='text-2xl font-serif font-semibold border-l-4 border-l-red-500 pl-4 tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4 font-serif text-red-500'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-2xl shadow-gray-600 bg-gray-900 rounded-2xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-2xl hover:scale-125 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div className='text-gray-200'>
                <h2 className='py-2 font-serif uppercase text-red-500'>Asif Raza</h2>
                <p>Front-End Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='uppercase pt-8 font-serif text-blue-500'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/feed/'
                    target='_blank'>
                    <div className='text-white rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaLinkedinIn  size={30}/>
                    </div>
                  </a>
                  <a
                    href='https://github.com/AsifRaza1009'
                    target='_blank'>
                    <div className='text-white rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <FaGithub size={30} />
                    </div>
                  </a>

                  <div className='text-white rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail size={30} />
                  </div>
                  <Link href='/resume'>
                    
                      <div className='text-white rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill size={30} />
                      </div>
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
           <div className=' font-serif col-span-3 w-full h-auto shadow-2xl  bg-gray-900 text-gray-200 shadow-gray-600 rounded-2xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows={10}
                    name='message'
                  ></textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
        
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            
          </Link>
        </div>
       
      </div>
      <div className='max-w-[1440px] bg-gray-900 text-gray-200 text-center font-serif'>
        <p>All right reserved by <span className='text-red-500 font-semibold'>Asif Raza</span></p>
    </div>
    </div>
    
    </section>
    
  )
}
