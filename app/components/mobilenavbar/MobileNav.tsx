"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { SiAboutdotme } from "react-icons/si";
import { GrProjects, GrContactInfo } from "react-icons/gr";

import { AiOutlineVerticalAlignTop } from "react-icons/ai";

const FloatingBottomNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" bg-glacier dark:bg-lavender z-30 align-top justify-center fixed laptop:hidden  tablet:left-40 ">
      <motion.nav
        animate={open ? "open" : "closed"}
        initial="closed"
        className="bg-glacier dark:bg-lavender  text-black shadow-lg flex justify-center absolute mt-2 smphone:ml-3 phone:ml-10 rounded-md"
      >
        <MenuButton setOpen={setOpen} open={open} />
        <div className="flex gap-6 px-2 text-2xl">
          <Link text="Top" href="#" Icon={AiOutlineVerticalAlignTop} />
          <Link text="About" href="#about" Icon={SiAboutdotme} />
          <Link text="Projects" href="#projects" Icon={GrProjects} />
          <Link text="Contact" href="#contact" Icon={GrContactInfo} />
        </div>
      </motion.nav>
    </div>
  );
};

const Link = ({
  text,
  Icon,
  href,
}: {
  text: string;
  Icon: IconType;
  href: string;
}) => {
  return (
    <a
      href={href}
      rel="nofollow"
      className="m-2 hover:text-indigo-500 transition-colors flex flex-col gap-1 items-center"
    >
      <Icon />
      <span className=" text-base tablet:text-xl font-bold font-mono">
        {text}
      </span>
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
      className="text-xl font-bold h-full bg-black text-white rounded-tl-md rounded-bl-md "
    ></div>
  );
};

export default FloatingBottomNav;
