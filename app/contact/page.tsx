import React from 'react'
import { Reveal } from '@/utils/Reveal'
import { AiFillMail } from "react-icons/ai";
import Link from 'next/link'
import { MyLinks } from '../components/MyLinks';



const Contact = () => {
  return (
    <div className=''>
    <section id='contact' className='section-wrapper'>
        <div className='max-w-[700px] m-auto rounded-[1.2rem]'>
            <Reveal width='100%'>
                <h4 className=' text-center font-black leading-none text-7xl text-mblue  dark:text-lavender '>
                    Contact <span className=' text-blue-400'>Me.</span>
                </h4>
            </Reveal>
            <Reveal width='100%'>
                <p className=' text-center font-semibold text-4xl mx-0 my-[2.4rem] dark:text-antwhite '>
                Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="nofollow"
              className='hover:text-blue-200 hover:font-bold text-rblue'
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link href="https://www.twitter.com" target="_blank" rel="nofollow" className=' text-rose-500 hover:text-rose-200 hover:font-bold'>
              X
            </Link>{" "}
            if that&apos;s more your speed.
                </p>
            </Reveal>
            <Reveal width="100%">
          <Link href="mailto:adrian@zavaladrian.com">
            <div className="flex items-center justify-center gap-[0.8rem] w-fit text-xl laptop:text-2xl font-semibold font-serif transition-[0.25s] duration-[color] m-auto hover:text-red-500 dark:text-antwhite dark:hover:text-rblue">
              <AiFillMail size="2.4rem" />
              <span>adrian@zavaladrian.com</span>
            </div>
          </Link> 
          </Reveal>
          <Reveal width="100%">
          <div className=' mx-16 tablet:mx-60'>
          <MyLinks />
          </div>
          </Reveal>
        </div>

    </section>
    </div>
  )
}

export default Contact
