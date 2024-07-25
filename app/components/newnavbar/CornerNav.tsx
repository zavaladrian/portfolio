'use client'
import { SiInstagram, SiLinkedin, SiTwitter, SiYoutube } from "react-icons/si";
import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ToggleWrapper from "../toggle/DarkModeToggle";


export const CornerNav = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="hidden laptop:block ">
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>{active && <LinksOverlay />}</AnimatePresence>
    </div>
  );
};

const LinksOverlay = () => {
  return (
    <nav className=" fixed left-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(25%_-_32px)] overflow-hidden">
      <Logo />
      <LinksContainer />
      <ToggleWrapper />
      <FooterCTAs />
    </nav>
  );
};

const LinksContainer = () => {
  return (
    <motion.div className="space-y-4 p-12 pl-4 md:pl-20">
      {LINKS.map((l, idx) => {
        return (
          <NavLink key={l.title} href={l.href} idx={idx}>
            {l.title}
          </NavLink>
        );
      })}
    </motion.div>
  );
};

const NavLink = ({
  children,
  href,
  idx,
}: {
  children: ReactNode;
  href: string;
  idx: number;
}) => {
  return (
    <motion.a
      initial={{ opacity: 0, y: -8 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      exit={{ opacity: 0, y: -8 }}
      href={href}
      className=" text-5xl font-semibold text-mblue dark:text-glacier transition-colors hover:text-violet-50 dark:hover:text-black md:text-7xl"
    >
      {children}.
    </motion.a>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.a
      initial={{ opacity: 0, y: -12 }}
      animate={{
        opacity: 1,
        y: 0,
        x:173,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      exit={{ opacity: 0, y: -12, x:-173 }}
      href="#"
      className="grid h-20 w-20 place-content-center rounded-tl-xl rounded-bl-xl rounded-tr-xl bg-black transition-colors hover:bg-glacier"
    >
      <svg 
        width="50"
        height="39"
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_bgCarrier" strokeWidth="0" />
<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
<g id="SVGRepo_iconCarrier"> 
  <path d="M21 21V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V21M18 21V12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12V21M15 21V12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12V21" stroke="#FBFAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></g>
</svg>
    </motion.a>
  );
};


const HamburgerButton = ({
  active,
  setActive,
}: {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <motion.div
        initial={false}
        animate={active ? "open" : "closed"}
        variants={UNDERLAY_VARIANTS}
        style={{ top: 16, left: 16 }}
        className="group fixed z-10 rounded-xl bg-gradient-to-tl from-antwhite to-lavender dark:from-mblue dark:to-rblue shadow-lg shadow-lavender/20 dark:shadow-rblue/20"
      />

      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`  group fixed left-4 top-4 z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 ${
          active ? "rounded-br-xl rounded-tl-xl" : "rounded-xl"
        }`}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute block h-1 w-10 bg-white dark:bg-black"
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-1 w-10 bg-white dark:bg-black"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-1 w-5 bg-white dark:bg-black"
          style={{ x: "-50%", y: "50%" }}
        />
      </motion.button>
    </>
  );
};

const FooterCTAs = () => {
  return (
    <>
      <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
        {SOCIAL_CTAS.map((l, idx) => {
          return (
            <motion.a
              key={idx}
              href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + idx * 0.125,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              exit={{ opacity: 0, y: -8 }}
            >
              <l.Component className="text-xl text-black dark:text-white transition-colors hover:text-violet-300" />
            </motion.a>
          );
        })}
      </div>
    </>
  );
};

const LINKS = [
  {
    title: "Home",
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
  {
    title: "Contact",
    href: "/#contact",
  },
];

const SOCIAL_CTAS = [
  {
    Component: SiTwitter,
    href: "#",
  },
  {
    Component: SiInstagram,
    href: "#",
  },
  {
    Component: SiLinkedin,
    href: "#",
  },
  {
    Component: SiYoutube,
    href: "#",
  },
];

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(14% - 32px)",
    height: "calc(100vh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "80px",
    height: "80px",
    
  },
};

const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};