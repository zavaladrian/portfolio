'use client'
import { Dispatch, SetStateAction, useState } from "react";
import {  motion } from "framer-motion";
import { IconType } from "react-icons";
import { FiHome} from "react-icons/fi";
import { SiAboutdotme } from "react-icons/si"
import { GrProjects, GrContactInfo  } from "react-icons/gr";
import MobileSwitch from "./LightDarkMobile";



const FloatingBottomNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-white z-10 align-bottom left-1 justify-center fixed h-screen laptop:hidden tablet:left-48">
      <motion.nav
        animate={open ? "open" : "closed"}
        initial="closed"
        className="bg-white text-black shadow-lg flex items-center justify-between absolute bottom-8"
      >
        <MenuButton setOpen={setOpen} open={open} />
        <div className="flex gap-6 px-6">
          <Link text="Home" href="#" Icon={FiHome} />
          <Link text="About" href="#about" Icon={SiAboutdotme} />
          <Link text="Projects" href="#projects" Icon={GrProjects} />
          <Link text="Contact" href="#contact" Icon={GrContactInfo} />
        </div>
     
      </motion.nav>
    </div>
  );
};

const Link = ({ text, Icon, href }: { text: string; Icon: IconType; href:string }) => {
  return (
    <a
      href={href}
      rel="nofollow"
      className="text-sm w-12 hover:text-indigo-500 transition-colors flex flex-col gap-1 items-center"
    >
      <Icon />
      <span className="text-xs">{text}</span>
    </a>
  );
};

const MenuButton = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setOpen((pv) => !pv)}
      className="text-xl font-bold h-full bg-black text-white"
    >
      
        <MobileSwitch />
        {/* <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="icon-1"
              className="block"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.125, ease: "linear" }}
            >
               <p>Dark</p>
            </motion.span>
          ) : (
            <motion.span
              key="icon-2"
              className="block"
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.125, ease: "linear" }}
            >
              <p>Light</p>
            </motion.span>
          )}
        </AnimatePresence> */}
      
    </div>
  );
};


export default FloatingBottomNav;

const iconVariants = {
  initial: { rotate: 180, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: -180, opacity: 0 },
};

