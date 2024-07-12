import React from 'react';
import { SectionHeader } from '@/utils/SectionHeader';
import { Reveal } from '@/utils/Reveal';

import Card from './components/CardT';

import backendImage from '@/public/backend.png';
import nativeImage from '@/public/native.png';
import reactImage from '@/public/react.png';
import watchlistImage from '@/public/watchlist.png';

// Define type for project object
type Project = {
  id: number;
  title: string;
  libs: string;
  description: string;
  img: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Nucamp Site',
    libs: 'Java, Bootstrap, React',
    description: 'We built a site that included multiple pages with listed campsites along with reviews from fake users off a json server database that we also built. The site also included a log in feature that also registered and stored new users to the database, including new reviews to campsites',
    img: reactImage.src,
  },
  {
    id: 2,
    title: 'Mobile Nucamp Site',
    libs: 'React, React Native, Bootstrap, Expo SDK',
    description: 'We built the same campsite site from earlier react course and created a mobile site for it.',
    img: nativeImage.src,
  },
  {
    id: 3,
    title: 'Nucamp Server',
    libs: 'Express, MongoDB, NodeJs',
    description: 'We built a backend server to store data and integrate with our website. We learned how to authenticate users and some fundamentals of cybersecurity. Was introduced to Postman which allowed us to do some backend testing and in general, with building and using APIs.',
    img: backendImage.src,
  },
  {
    id: 4,
    title: 'Anime Watchlist',
    libs: 'Framer Motion, Tailwind, React',
    description: 'A Nucamp Honors Project that was optional towards the end of the course and using the knowledge from Nucamp provided. This site featured anime shows with descriptions and a filtered system. There was a watchlist on a separate page which you were able to add from the list provided on the homepage or enter your own with a form provided on the watchlist. Also had a login and member feature.',
    img: watchlistImage.src,
  },
];

export default function Projects() {
  return (
    <div className='dark:bg-slate-800 dark:bg-none bg-gradient-to-l from-glacier to-antwhite'>
    <section id='projects' className='section-wrapperp'>
      <SectionHeader title='Nucamp Projects' dir='l' />
      <div>
        <Reveal>
          <div className='p-2'>
            <p className='text-2xl text-pretty font-serif dark:text-antwhite'>While I was enrolled in Nucamp, we were expected to do projects along with the learning and I wanted showcase some of them. </p>
          </div>
        </Reveal>
        <div className='grid grid-cols-2 '>
          {projects.map((p) => (
            <Reveal key={p.id}>
              <div className='m-8'>
                <Card
                  title={p.title}
                  libs={p.libs}
                  description={p.description}
                  imgSrc={p.img}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}
