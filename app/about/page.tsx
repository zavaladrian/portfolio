import { Reveal } from '@/utils/Reveal'
import { SectionHeader } from '@/utils/SectionHeader'
import React from 'react'
import { MyLinks } from '../components/MyLinks'
import { AiOutlineArrowRight } from "react-icons/ai";
import Stats from './libraries/Stats';
import adrian from '@/public/adrian.png'
import Image from 'next/image';

const About = () => {

  return (
    <div className=' text-black text-pretty '>
    <section id='about' className='section-wrapper'>
    <SectionHeader title="About Me" dir='l' />
    <div className='laptop:grid laptop:grid-cols-[1fr_300px] laptop:gap-[2.4rem] text-center grid-cols-none '>
        <div> 
            <Reveal>   
                <p className='mb-[2.4rem] text-xl '>  
              <Image 
              alt='profile picture'
              src={adrian} 
              className='mx-auto h-33 w-36 flex rounded-full float-left'/>
                    <span className=' font-bold float-left mr-[0.6rem]  rounded-[0.4rem] text-5xl text-antwhite'> H </span>ello, my name is Adrian Zavala. I am a restaurant owner with a deep passion for technology, particularly front-end development. After a career in the restaurant industry, I decided to pursue my interest in coding and completed the Full Stack program at Nucamp, earning an honors certificate that covered Front-End technologies like JavaScript, Bootstrap, React, and React Native, as well as Back-End technologies like Node.js, MongoDB, Express, and Postman.
                </p>
            </Reveal>
            <Reveal>
                <p className='mb-[2.4rem]  text-xl '>
                Throughout my studies, I found my true calling in front-end development, where I excelled in using React and Bootstrap to create intuitive, user-friendly interfaces. Although I am also familiar with back-end technologies, my primary focus and strength lie in front-end design and development. As part of my coursework, I created the website for my family's restaurant, El Faro, demonstrating my skills in web development.  
                </p>
            </Reveal>
            <Reveal>
                <p className='mb-[2.4rem]  text-xl '>
                I graduated from Eastern Illinois University with a Bachelor of Arts in Psychology in 2012. During my time at university, I was active in the band and became a member of Tau Beta Sigma, where I held several leadership roles, including Treasurer and Vice President. These experiences helped me develop a strong sense of teamwork, leadership, and attention to detail.  
                </p>
            </Reveal>
            <Reveal>
                <p className='mb-[2.4rem] text-xl '>
                In my free time, I enjoy staying active and pursuing new challenges, whether it's learning a new technology or engaging in physical activities like going to the gym or hiking. I believe in continuous learning and personal growth, which drives my passion for front-end development.
                </p>
            </Reveal>
            <Reveal>
                <p className='mb-[2.4rem] text-xl'>
                I am currently exploring opportunities in front-end development where I can contribute my skills and passion for creating engaging user experiences. If you have any positions or projects that align with my expertise, I'd love to discuss how I can bring value to your team. Let's connect!   
                </p>
            </Reveal>
            <Reveal>
            <div className="flex items-center gap-[1.6rem]">
              <div className="flex items-center gap-[0.8rem] text-sm ">
                <span  className='text-black font-extrabold text-2xl font-serif'>My Links</span>
                <AiOutlineArrowRight className='text-black'/>
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <div className='block hidden:laptop '>
        <Stats />
        </div>
    </div>
    </section>
    </div>
  )
}

export default About