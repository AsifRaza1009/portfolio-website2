import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Portfolio Website",
    description: "Portfolia Website design using Next.js with tailwind CSS.",
    image: "/projects/asif.png",
    github: "https://github.com/AsifRaza1009/panaverse-website",
    link: "https://resumewebsite-chi.vercel.app/",
  },
  {
    name: "Panaverse DAO Website",
    description:
      "Panaverse DAO is a website in which all kind of te detail about the Panaverse company.",
    image: "/projects/logo4.png",
    github: "https://github.com/AsifRaza1009/panaverse-website",
    link: "https://website2-one-iota.vercel.app/",
  },
  {
    name: "ToDo App",
    description:
      "ToDo project is a to do list app that built using the Next.js and Chakra",
    image: "/projects/todo.png",
    github: "https://github.com/AsifRaza1009/ToDo-App",
    link: "https://vercel.com/asifraza1009/todoapp",
  },
  {
    name: "Pricing UI Page ",
    description:
      "Simple page of UI by using design of Figma on Next.js Frame work .",
    image: "/projects/pricing.png",
    github: "https://github.com/AsifRaza1009/pricingUI",
    link: "https://vercel.com/asifraza1009/pricinguichakra",
  },
  {
    name: "ATM Machine Project ",
    description: "Built a ATM project using Node.js and TS .",
    image: "/projects/ATM.jpg",
    github: "https://github.com/AsifRaza1009/asif-atm",
    link: "https://github.com/AsifRaza1009/asif-atm",
  },
  {
    name: "Number Guessing Game ",
    description: "Built a Number Guess project using Node.js and TS .",
    image: "/projects/number.jpg",
    github: "https://github.com/AsifRaza1009/asif-number-guessing",
    link: "https://github.com/AsifRaza1009/asif-number-guessing",
  },
  {
    name: "Word Counter ",
    description: "Built a Word Counter project using Node.js and TS .",
    image: "/projects/word-counter.jpg",
    github: "https://github.com/AsifRaza1009/asif-word-counter",
    link: "https://github.com/AsifRaza1009/asif-word-counter",
  },
  {
    name: "Currrency Converter ",
    description: "Built a Currency Converter project using Node.js and TS .",
    image: "/projects/currency.jpg",
    github: "https://github.com/AsifRaza1009/asif-currency-converter",
    link: "https://github.com/AsifRaza1009/asif-currency-converter",
  },
];

export default function Project() {
  return (
    <>
      <section id='projects'>
        <div className=''>
          <h1 className=' text-center md:text-left mt-12 mx-12 px-4 justify-center font-serif uppercase border-l-4 border-l-red-500 font-semibold text-2xl tracking-widest text-blue-500 '>
            Projects
          </h1>
          <h2 className='text-center md:text-left py-4 mx-12 my-4 text-red-500 font-serif'>
            My Projects
          </h2>
        </div>

        <div className='flex flex-col space-y-10 px-5 md:px-40 my-5 m-auto'>
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div className='flex flex-col md:flex-row  justify-center items-center space-y-5 md:space-y-0 md:space-x-5'>
                  <div className='w-full mx-auto flex flex-row justify-center items-center md:w-1/2'>
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=''
                        width={350}
                        height={350}
                        className='rounded-2xl shadow-2xl hover:opacity-50 hover:scale-125 ease-in duration-300 '
                      />
                    </Link>
                  </div>
                  <div className=' flex flex-col justify-between w-full h-[350px] md:w-1/2 shadow-2xl p-5 bg-gray-900 text-gray-200 rounded-2xl '>
                    <h1 className='text-3xl font-bold  hover:text-red-400'>
                      {project.name}
                    </h1>
                    <p className='text-md flex-grow leading-7 text-justify'>
                      {project.description}
                    </p>
                    <div className='inline-flex text-blue-500 space-x-4 md:pb-5 md:pl-4'>
                      <Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
