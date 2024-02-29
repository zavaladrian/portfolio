"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export const NavBar = () => {

const links: {title: string, href: string}[] = [
    {
        title: "Home",
        href:"/"
    },
    {
        title: "About Me",
        href:"/about"
    },
    {
        title: "Education",
        href:"/education"
    },
    {
        title: "Projects",
        href:"/projects"
    },
]

  return (
    <div className="fixed left-[50%] top-8 flex w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[2px] border-neutral-700 bg-sky-900 p-2 text-med text-neutral-200" >    
      {links.map((li, index) => (
        <Link href={li.href} key={index}>
            <TitleLink>
                {li.title}
            </TitleLink>
        </Link>
      ))} 
      <ContactButton />
   </div>
  );
};


const TitleLink = ({ children,  }: { children: string }) => {
  return (
    <div className="block overflow-hidden">
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        <span className="flex h-[20px] items-center">{children}</span>
        <span className="flex h-[20px] items-center text-neutral-50">
          {children}
        </span>
      </motion.div>
    </div>
  );
};

const ContactButton = () => {
  return (
    <Link href="/contact">
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-white px-4 py-1.5 font-medium
         text-neutral-300 transition-all duration-300
          
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100`}  
    >
      Contact Me
    </button>
    </Link>
  );
};

