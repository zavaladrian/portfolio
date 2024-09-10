'use client'

import React from 'react';
import { SectionHeader } from '@/utils/SectionHeader';
import ProjectSlider from '../components/Projects';


export default function Projects() {
  return (
    <div className=''>
    <section id='projects' className='section-wrapperp'>
      <SectionHeader title='Projects' dir='r' />
      <ProjectSlider />
    </section>
    </div>
  );
}
