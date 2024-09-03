import React from 'react'
import Link from 'next/link';


const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Adrian Zavala</h1>
      <p className="text-center mb-6">
        <a href="mailto:adrian@adrianzavala.com" className="text-blue-500 underline">adrian@zavaladrian.com</a> | 
        <a href="tel:+17087049864" className="text-blue-500 underline ml-2">(708) 704-9864</a> 
      </p>
      <p className="text-center text-blue-500 underline mb-12">
        <a href="http://adrianzavala.dev" target="_blank" rel="noopener noreferrer">adrianzavala.dev</a>
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Objective</h2>
        <p>
          Motivated front-end developer with a strong foundation in JavaScript, React, CSS, and Tailwind, complemented by a unique background in restaurant management. Recently completed the Full Stack Honors Certification program at Nucamp, and developed a successful web page for my restaurants. Eager to leverage my technical skills and management experience in a dynamic development team.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Front-end Development: JavaScript, React, HTML5, CSS3, Tailwind CSS, Bootstrap</li>
          <li>Web Development: Responsive Design, Cross-Browser Compatibility, RESTful APIs, Version Control (Git)</li>
          <li>UI/UX Design: User-Centered Design, Wire-framing, Prototyping, Accessibility Standards</li>
          <li>Project Management: Team Leadership, Time Management, Customer Service, Inventory Control</li>
          <li>Tools: VS Code, Git, GitHub, npm</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">El Faro 2, Riverside, IL</h3>
              <p className="italic">Restaurant Manager + Webmaster</p> 
              <p> December 2019 – Present</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Promoted to manager to lead operations of the newly opened second location, El Faro 2.</li>
                    <li>Successfully expanded the restaurant menu to online delivery for the first time, increasing revenue by 25%.</li>
                    <li>Developed and launched both restaurants' first web page, improving online presence and customer engagement.</li>
                </ul>
          </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">El Faro, Riverside, IL</h3>
          <p className="italic">Restaurant Team Member</p> <p> June 2009 – November 2019</p>
          <ul className="list-disc list-inside ml-4">
            <li>Started as a team member, learning all aspects of restaurant operations, from customer service to inventory management.</li>
            <li>Contributed to maintaining high standards of food quality and customer satisfaction, resulting in a loyal customer base.</li>
          </ul>
        </div>

       
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Nucamp Coding Bootcamp</h3>
          <p className="italic">Full Stack Honors Certification</p> 
          <p> March 2023 - November 2023</p>
          <ul className="list-disc list-inside ml-4">
            <li>Comprehensive program covering HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.</li>
            <li>Developed multiple projects, including a custom web page for El Faro 2, showcased on <a href="http://adrianzavala.dev" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">adrianzavala.dev</a>.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold">Eastern Illinois University</h3>
          <p className="italic">B.A. in Psychology </p>
           <p>August 2008- December 2012</p>
          <ul className="list-disc list-inside ml-4">
            <li>Alumni of a music organization called Tau Beta Sigma, which held multiple offices including Vice President of New Membership that held responsibilities of leadership of the chapter.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        
          <div className="mb-4">
          <h3 className="text-xl font-semibold">2k-detail Website</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Developed a responsive and user-friendly website for a car detailing company using Next.js, Tailwind CSS, Framer Motion, and Emailjs to display the company's services and to submit a form to schedule appointments with their choices of services.</li>
            <li>
              <span className='font-bold'>Technology used:</span> Nextjs, React, Tailwind CSS, and Framer Motion
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold">El Faro Website</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Developed a responsive and user-friendly website for El Faro 2 using React, Tailwind CSS, and Framer Motion, enhancing the restaurant’s digital footprint and improving customer interaction.</li>
            <li>
              <span className='font-bold'>Technology used:</span> Nextjs, React, Tailwind CSS, and Framer Motion
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Anime Watchlist</h3>
          <p className="italic">Full Stack Honors Project - Nucamp Coding Bootcamp</p>
          <ul className="list-disc list-inside ml-4">
            <li>Developed a dynamic and interactive Anime Watchlist application using React, Framer Motion, and Tailwind CSS to create a seamless and engaging user interface.</li>
            <li>Implemented Firebase for authentication, enabling users to create accounts, log in, and manage their personalized watchlists.</li>
            <li>Utilized Firebase’s real-time database to allow users to save and retrieve their favorite anime shows across sessions.</li>
            <li>
              <span className='font-bold'>Technology used:</span> React, Tailwind CSS, Formik Axio, and Firebase 
            </li>
          </ul>
        </div>
      </section>
      <footer className="text-center">
        <p className="italic">References available upon request.</p>
      </footer>
      <footer className="text-center mt-8">
        <a
          href="/Adrian_Zavala_Resume.pdf" 
          download
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors"
        >
          Download Resume
        </a>
        <Link href="/" legacyBehavior>
          <a className="inline-block bg-gray-500 text-white px-6 py-3 ml-4 rounded-lg shadow hover:bg-gray-600 transition-colors mt-2 mr-4 tablet:mt-0 tablet:mr-0">
            Back to Homepage
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default Resume;
