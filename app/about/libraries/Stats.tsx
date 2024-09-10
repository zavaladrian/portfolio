import React from 'react'
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from '@/utils/Reveal';
import styles from './stats.module.scss'



const Stats = () => {
  return (
    <div className='relative hidden laptop:block'>
        <Reveal>
        <div>
            <h4 className=' flex items-center mb-[2.4rem]'>
                <AiFillCode size="2.4rem" className='text-black' />
                <span className='text-xl font-bold relative ml-[0.8rem] text-black'>Nucamp Taught Me</span>
            </h4>
            <div className='flex flex-wrap gap-[1.2rem] mb-[4.8rem] text-rblue font-extrabold'>
               <span className={styles.stats}><p>Javascript</p></span>
               <span className={styles.stats}><p>HTML</p></span>
               <span className={styles.stats}><p>CSS</p></span>
               <span className={styles.stats}><p>React</p></span>
               <span className={styles.stats}><p>Redux</p></span>
               <span className={styles.stats}><p>NodeJS</p></span>
               <span className={styles.stats}><p>Express</p></span>
               <span className={styles.stats}><p>MongoDb</p></span>
               <span className={styles.stats}><p>GitHub</p></span>
               <span className={styles.stats}><p>React Native</p></span>
               <span className={styles.stats}><p>Bootstrap</p></span>
               <span className={styles.stats}><p>Expo SDK</p></span>
            </div>
        </div>
    </Reveal>
    <Reveal>
        <div>
            <h4 className=' flex items-center mb-[2.4rem]'>
                <AiFillSmile size="2.4rem" className='text-black' />
                <span className='text-xl font-bold relative ml-[0.8rem] text-black'>Self Taught</span>
            </h4>
            <div className='flex flex-wrap gap-[1.2rem] mb-[4.8rem] text-rblue font-extrabold'>
               <span className={styles.stats}><p>NextJs</p></span>
               <span className={styles.stats}><p>TypeScript</p></span>
               <span className={styles.stats}><p>Tailwind</p></span>
               <span className={styles.stats}><p>Framer Motion</p></span>
            </div>
        </div>
    </Reveal>
    </div>
  )
}

export default Stats

{/* <span className='text-xs bg-slate-300 px-[0.8rem] py-[0.2rem] rounded-[999px]'></span> */}
