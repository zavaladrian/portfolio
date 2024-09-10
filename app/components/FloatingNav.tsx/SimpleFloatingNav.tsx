'use client'
import React from "react";
import Link from "next/link";
import ToggleWrapper from "../toggle/DarkModeToggle";


const LINKS = [
    {
      title: "Top",
      href: "/#",
    },
    {
      title: "About",
      href: "/#about",
    },
    {
      title: "Projects",
      href: "/#projects",
    },
  
  ];
  


export const SimpleFloatingNav = () => {
  return (
    <nav className="fixed left-[50%] top-8  w-fit -translate-x-[50%] items-center gap-6 rounded-2xl border-[1px] border-neutral-700 bg-glacier dark:bg-lavender p-2 text-lg text-neutral-900 z-30 hidden laptop:flex font-playwrite font-bold ">
     {LINKS.map((l, idx) => {
        return(
            <Link href={l.href} key={l.title} >
                {l.title}
            </Link>
        )
     })}   
      <ContactButton />
      {/* <ToggleWrapper /> */}
    </nav>
  );
};


const ContactButton = () => {
  return (
    <Link href="/#contact">
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
          border-neutral-700 px-4 py-1.5 font-medium
         text-neutral-900 transition-all duration-300
         font-playwrite
          
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
      Contact
    </button>
    </Link>
  );
};