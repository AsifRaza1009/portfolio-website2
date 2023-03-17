import Image from "next/image";
import React from "react";
import HTML from "../../public/skills/html.png";
import CSS from "../../public/skills/css.png";
import JS from "../../public/skills/javascript.png";
import TS from "../../public/skills/TS.png";
import NODE from "../../public/skills/node.png";
import NEXT from "../../public/skills/nextjs.png";
import CHKRA from "../../public/skills/chak.png";
import TW from "../../public/skills/tailwind.png";
import FIG from "../../public/skills/fig.png";
import GIT from "../../public/skills/github1.png";

export default function Skills() {
  return (
    <section id='Skills' className="w-screen overflow-hidden">
      <div className='path1 w-screen overflow-hidden' >
        <div className='bg-gray-900'>
          <div className='w-full min-h-screen lg:h-screen py-24 px-10 '>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
              <p className=' font-serif font-semibold uppercase text-3xl tracking-widest text-blue-500 border-l-8 border-l-red-500'>
                Skills
              </p>
              <h2 className='py-4 text-red-500 font-serif text-2xl'>
                What I Can Do
              </h2>
              <div className='grid grid-colo-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                <div className='p-6 shadow-2xl rounded-2xl bg-gray-300 hover:scale-125 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={HTML} width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3 className='font-serif font-semibold text-xs'>HTML</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-2xl rounded-2xl bg-gray-300 hover:scale-125 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={CSS} width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3 className='font-serif font-semibold text-xs'>CSS</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-2xl rounded-2xl bg-gray-300 hover:scale-125 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={JS} width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3 className='font-serif font-semibold uppercase text-xs'>
                        JavaScript
                      </h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-2xl rounded-2xl bg-gray-300 hover:scale-125 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={TS} width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3 className='font-serif font-semibold text-xs'>TYPESCRPITE</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-2xl rounded-2xl bg-gray-300 hover:scale-125 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={NODE} width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3 className='font-serif font-semibold text-xs'>NODE.JS</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-2xl rounded-2xl bg-gray-300 hover:scale-125 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={NEXT} width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3 className='font-serif font-semibold text-xs'>NEXT.JS</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-2xl rounded-2xl bg-gray-300 hover:scale-125 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={CHKRA} width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3 className='font-serif font-semibold text-xs'>CHAKRA</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-2xl rounded-2xl bg-gray-300 hover:scale-125 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={TW} width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3 className='font-serif font-semibold text-xs'>TAILWIND</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-2xl rounded-2xl bg-gray-300 hover:scale-125 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto '>
                      <Image src={FIG} width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3 className='font-serif font-semibold text-xs'>FIGMA</h3>
                    </div>
                  </div>
                </div>
                <div className='p-6 shadow-2xl rounded-2xl bg-gray-300 hover:scale-125 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                      <Image src={GIT} width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <h3 className='font-serif font-semibold text-xs'>GITHUB</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
