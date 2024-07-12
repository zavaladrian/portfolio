import React from 'react';
import Image from 'next/image';

// Define type for CardProps
type CardProps = {
  title: string;
  libs: string;
  description: string;
  imgSrc: string;
};

const Card: React.FC<CardProps> = ({ title, libs, description, imgSrc }) => {
  return (
    <div className='bg-antwhite dark:bg-glacier text-center text-pretty shadow-xl shadow-black rounded-lg '>
      <div>
        <div className='bg-antwhite dark:bg-glacier rounded-lg'>
        <p className=' font-black font-serif text-3xl p-3 text-indigo-600 '>{title}</p>
        </div>
        <Image
          alt={title}
          src={imgSrc}
          width={600}
          height={400}
          className='justify-center'
        />
        <button type='button' className='shadow-md shadow-black bg-rblue rounded-md p-3 my-2 mx-5 disabled'>
          <span className='text-base text-white font-serif'>{libs}</span>
        </button>
        <p className=' font-medium font-sans text-pretty text-xl m-5 pb-5 '>{description}</p>
      </div>
    </div>
  );
};

export default Card;
