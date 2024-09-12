'use client'
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillCodepenCircle,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className="flex gap-[1.6rem] pt-2.5 relative dark:text-antwhite text-black ">
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link href="https://www.linkedin.com/in/adrian-zavala-835ba358/" target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.4rem"  className="opacity-50  hover:text-blue-700 hover:opacity-100 "/>
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://www.github.com/zavaladrian" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem"  className="opacity-50  hover:text-black hover:opacity-100 " />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://twitter.com/AdrianZavalaDev" target="_blank" rel="nofollow">
          <AiFillTwitterCircle size="2.4rem" className="opacity-50 hover:text-sky-600 hover:opacity-100 "/>
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="https://www.codepen.io/zavaladrian" target="_blank" rel="nofollow">
          <AiFillCodepenCircle size="2.4rem" className="opacity-50 hover:text-green-400 hover:opacity-100 "/>
        </Link>
      </motion.span>
    </div>
  );
};
