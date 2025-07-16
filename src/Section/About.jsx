import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const About = () => {

 useGSAP(() => {
  const screenWidth = window.innerWidth;

  // 👉 Don't run animations on mobile (less than 768px)
  if (screenWidth < 768) return;

  const moveDistance = -500;

  gsap.fromTo(
    '.profile-img',
    { y: 50, opacity: 0, scale: 0.8 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'power1.inOut',
      onComplete: () => {
        const tl = gsap.timeline();
        tl.to('.profile-image', {
          x: moveDistance,
          ease: 'power1.inOut',
          duration: 0.5,
        })
        .to('.great', {
          x: moveDistance,
          ease: 'power1.inOut',
          duration: 0.5,
        })
        .to('.about', {
          y: -200,
          ease: 'power1.inOut',
          duration: 0.5,
        })
        .to('.project', {
          y: -230
        })
      },
    }
  );
}, []);





  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-3xl mx-auto profile">
      {/* Profile Image Section */}
      <div className="flex justify-center mt-12 sm:mt-20 profile-image">
        <div className="bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 p-0.5 sm:p-1 rounded-full">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/images/IMG_0296.jpeg"
              alt="Great Efekodo"
              className="w-full h-full object-cover profile-img"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-8 text-center ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 great">
          Great Efekodo
        </h1>

        <div className="space-y-6 about">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            A passionate web developer skilled in HTML, CSS, JavaScript, React, and Java.
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 ">
            I love building modern, responsive, and accessible websites and applications that deliver great user experiences. Whether it's frontend design or backend logic, I'm always excited to learn and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;