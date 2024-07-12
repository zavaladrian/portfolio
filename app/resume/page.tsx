import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import Link from 'next/link';


const Resume = () => {
  
  
  return (
    <div className='flex'>
        <Link href='/'>
    <IoArrowBack className='text-black text-6xl ml-10 mt-8 hover:text-red-600 '/>
    </Link>
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
    <header className="pt-8 text-2xl tablet:text-6xl font-bold pr-3 tablet:pr-0">
     Adrian Zavala
    </header>
    <p className='text-2xl p-2'> Full Stack Developer</p>
    <main className=" pr-10 tablet:pr-0 space-y-10 text-balance text-center">
      <section className="mt-5">
        <h2 className="text-2xl font-semibold mb-2" >Summary</h2>
        <p >Versatile professional with a strong foundation in web building and maintenance. A driven freelancer, using marketing and design experience to make an impact in web design and web development. A lifelong learner committed to diversifying by developing a wide range of skills to be valuable to any team.</p>
      </section>
      <section className="">
        <h2 className="text-2xl font-bold mb-2">Education</h2>
        <p>Honors Full Stack Development Certificate</p>
        <p>Front-End Web Development: React Certificate</p>
        <p>Front-End Web and Mobile Development: React Native Certificate</p>
        <p>Front-End Web Development:Bootstrap Certificate</p>
        <p className='font-semibold'>Nucamp Bootcamp</p>
        <p>Graduated: November 2023</p>
      </section>
      <section className="">
        <p>Bachelor of Arts in Psychology</p>
        <p className='font-semibold'>Eastern Illinois Univeristy</p>
        <p>Graduated: Decemeber 2012</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-5">Experience</h2>
        <p className='font-semibold'>Web Developer</p>
        <p>Responsibilities:</p>
        <ul className="list-disc list-inside mb-10">
          <li>Built a site that promotes the restaurant</li>
          <li>Display menus of multiple restaurants at different locations</li>
          <li>Use photoshop to alter and display images</li>
          <li>Testing and debugging code</li>
        <p> Libraries Used:</p>
        <ul className=' list-disc list-inside'>
          <li>React</li>
          <li>Vite</li>
          <li>Tailwind</li>
          <li>Framer Motion</li>
        </ul>
        </ul>
        <p className='font-semibold'>Restaurant Manager</p>
        <p>El Faro</p>
        <p>Responsibilities:</p>
        <ul className="list-disc list-inside">
          <li>Work and Train employees</li>
          <li>Collaborating with team members</li>
          <li>Handle Customer Service</li>
        </ul>

      </section>
    </main>
  </div>
  </div>
  )
}

export default Resume