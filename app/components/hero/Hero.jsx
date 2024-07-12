'use client'
import { Reveal } from '@/utils/Reveal'
import React from 'react';
import Link from 'next/link'


const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden bg-gradient-to-t from-glacier to-antwhite px-8 py-24 md:px-12 md:py-32 h-screen w-auto dark:bg-slate-800  dark:bg-none ">
      <div className="relative mx-auto max-w-5xl">   
        <div className='float-right'>

    </div>
        <div className="pointer-events-none relative ">
          <Reveal>
            <h1 className="pointer-events-auto text-6xl font-black text-black md:text-8xl dark:text-antwhite">
              Hi, I'm Adrian<span className="text-indigo-400">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-5xl text-black md:my-4 md:text-4xl dark:text-antwhite">
              I'm a{" "}
              <span className="font-semibold text-indigo-400">
                Full Stack Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto max-w-xl text-3xl text-slate-800 font-serif dark:text-antwhite">
              I've spent 20 years in the food industry and decided it was time for a change. So I decided to complete a full stack developer program. Let's connect!
            </p>
          </Reveal>
          <div className=' flex flex-row space-x-5'>
          <Reveal>
            <Link href="mailto:adrian@adrianzavala.com">
            <button className=" font-sans pointer-events-auto mt-4 rounded-lg bg-indigo-500 px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-900 active:scale-95 md:mt-6 text-xl">
              Contact Me
            </button>
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/resume">
            <button className="text-xl font-sans pointer-events-auto mt-4 rounded-lg bg-indigo-500 px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-900 active:scale-95 md:mt-6">
              Resume
            </button>
            </Link>
          </Reveal>
          </div>
        </div>
      </div>  
     
    </section>
  );
};

export default Hero