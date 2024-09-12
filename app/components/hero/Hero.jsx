'use client'
import { Reveal } from '@/utils/Reveal'
import React from 'react';
import Link from 'next/link'


const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden px-8 py-24 tablet:px-12 tablet:py-40 laptop:py-60 h-auto w-auto  ">
      <div className="relative mx-auto max-w-5xl">   
        <div className='float-right'>

    </div>
        <div className="pointer-events-none relative ">
          <Reveal>
            <h1 className="pointer-events-auto text-6xl font-black text-antwhite tablet:text-8xl dark:text-antwhite my-5 tablet:my-0 font-serif">
              Hi, I'm Adrian<span className="text-indigo-400">.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-8 text-5xl font-bold text-slate-400 tablet:my-4 tablet:text-7xl dark:text-antwhite tablet:pt-2">
              I'm a{" "}
              <span className="font-semibold text-indigo-400">
                Full Stack Developer
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto max-w-xl text-3xl text-antwhite font-serif dark:text-antwhite tablet:text-4xl tablet:pt-5">
              I've spent 20 years in the food industry and decided it was time for a change. So I decided to complete a full stack developer program. Let's connect!
            </p>
          </Reveal>
          <div className=' flex flex-row space-x-5 my-8 tablet:my-0 tablet:pt-2'>
          <Reveal>
            <Link href="mailto:adrian@zavaladrian.com">
            <button className=" font-sans pointer-events-auto mt-4 rounded-lg bg-glacier  text-rblue px-4 py-2 font-medium transition-all hover:bg-mblue hover:text-white active:scale-95 md:mt-6 text-xl">
              Contact Me
            </button>
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/resume">
            <button className="text-xl font-sans pointer-events-auto mt-4 rounded-lg bg-glacier  text-rblue px-4 py-2 font-medium transition-all hover:bg-mblue hover:text-white active:scale-95 md:mt-6">
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