'use client'
import React from 'react'
import useMeasure from 'react-use-measure';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';

import { useState } from 'react';

const MobileList = () => {
  return (
    <div className='px-2 py-12'>
        <div className='mx-auto'>
                <Course title="Nucamp Site" >
                    <p>
                    We built a site that included multiple pages with listed campsites along with reviews from fake users off a json server database that we also built. The site also included a log in feature that also registered and stored new users to the database, including new reviews to campsites. The libraries I used for this was Bootstrap and React.
                    </p>
                    <Link href="https://github.com/zavaladrian/nucampsite" target="_blank" rel="nofollow">
                        <AiFillGithub size="2.4rem"  className="opacity-50  hover:text-rose-700 hover:opacity-100 mx-auto mt-2 " />
                    </Link>
                </Course>
                <Course title="Mobile Nucamp Site" >
                    <p>
                    We built the same campsite site from earlier react course and created a mobile site for it. The libraries I used for this was React Native, Bootstrap, and Expo SDK.
                    </p>
                    <Link href="https://github.com/zavaladrian/reactnative" target="_blank" rel="nofollow">
                        <AiFillGithub size="2.4rem"  className="opacity-50  hover:text-rose-700 hover:opacity-100 mx-auto mt-2 " />
                    </Link>
                </Course>
                <Course title="Nucamp Server" >
                    <p>
                    We built a backend server to store data and integrate with our website. We learned how to authenticate users and some fundamentals of cybersecurity. Was introduced to Postman which allowed us to do some backend testing and in general, with building and using APIs. The libraries I used for this was Express, MongoDB, and NodeJs.
                    </p>
                    <Link href="https://github.com/zavaladrian/nucampserver" target="_blank" rel="nofollow">
                        <AiFillGithub size="2.4rem"  className="opacity-50  hover:text-rose-700 hover:opacity-100 mx-auto mt-2 " />
                    </Link>
                </Course>
                <Course title="Anime Watchlist" >
                    <p>
                    A Nucamp Honors Project that was optional towards the end of the course and using the knowledge from Nucamp provided. This site featured anime shows with descriptions and a filtered system. There was a watchlist on a separate page which you were able to add from the list provided on the homepage or enter your own with a form provided on the watchlist. Also had a login and member feature. The libraries I used for this was Framer Motion, Tailwind, and React.
                    </p>
                    <Link href="https://github.com/zavaladrian/anime-watchlist" target="_blank" rel="nofollow">
                        <AiFillGithub size="2.4rem"  className="opacity-50  hover:text-rose-700 hover:opacity-100 mx-auto mt-2 " />
                    </Link>
                </Course>
        </div>
    </div>
  )
}

const Course = ({
    title,
    children,
    defaultOpen = false,
  }: {
    title: string;
    children: JSX.Element | any;
    defaultOpen?: boolean;
    
  }) => {
    const [ref, { height }] = useMeasure();
    const [open, setOpen] = useState(defaultOpen);
  
    return (
      <motion.div
        animate={open ? "open" : "closed"}
        className="border-b-[1px] border-b-slate-300"
      >
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex w-full items-center justify-between gap-4 py-6"
        >
          <motion.span
            variants={{
              open: {
                color: "rgba(26, 178, 225, 0)",
              },
              closed: {
                color: "rgba(26, 178, 225, 1)",
              },
            }}
            className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-left text-lg font-medium"
          >
            {title}
          </motion.span>
          <motion.span
            variants={{
              open: {
                rotate: "180deg",
                color: "rgb(124 58 237)",
              },
              closed: {
                rotate: "0deg",
                color: "#030617",
              },
            }}
          >
            <FiChevronDown className="text-2xl" />
          </motion.span>
        </button>
        <motion.div
          initial={false}
          animate={{
            height: open ? height : "0px",
            marginBottom: open ? "24px" : "0px",
          }}
          className="overflow-hidden text-slate-600 dark:text-white"
        >
          <p ref={ref}>{children}</p>
        </motion.div>
      </motion.div>
    )};

export default MobileList