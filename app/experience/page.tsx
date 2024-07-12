'use client'
import React from 'react'
import Image from 'next/image'
import { SectionHeader } from '@/utils/SectionHeader'
import Resturant from '@/public/elfaro.png'
import Link from 'next/link'
import { Reveal } from '@/utils/Reveal'


const Experience = () => {
  return (
    <div className='bg-mblue'>
    <section className='section-wrapper' id='experience'>
        <SectionHeader title='Recent Projects' dir='r' />
        <Reveal>
    <div className='grid grid-flow-col'>
        <div>
            <p className='text-5xl mb-5 underline text-glacier font-serif'>El Faro Resturaunt</p>
            <p className='text-3xl mb-3 text-balance font-serif text-lavender'>Given my background in a family-owned restaurant business, I took the initiative to develop and design a website aimed at showcasing our menu offerings. </p>
            <p>
            <Link href="https://www.elfaro.restaurant" target='_blank'  rel='noopener noreferrer' prefetch={false} className='text-glacier font-bold text-xl hover:text-rblue hover:underline' >
                www.elfaro.restaurant
            </Link>
            </p>
        </div>
        <div>
            <Link href="https://www.elfaro.restaurant" target='_blank'  rel='noopener noreferrer' prefetch={false}>
        <Image
         
        src={Resturant}
        alt='dumb pic'
        className='h-auto  w-96 ml-10'/>
        </Link>
        </div>
    </div>
    </Reveal>
    </section>
    </div>
  )
}

export default Experience