'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const ArrowDownIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="text-[#ec6f46] mt-4"
  >
    <path d="M12 5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 12L12 19L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="text-[#ec6f46]"
  >
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 15L15 9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 9H15V14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClubHeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

      tl.from(imageRef.current, { x: 100, opacity: 0 })
        .from(textRef.current, { y: 50, opacity: 0, stagger: 0.2 }, "-=0.6")
        .from(buttonRef.current, { y: 30, opacity: 0, scale: 0.8 }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white mt-10 relative flex flex-col items-center justify-center min-h-screen overflow-hidden   p-6"
    >
      {/* Decorative left-side dots */}
      <div className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col items-center space-y-4 md:flex">
        <div className="flex flex-col items-center space-y-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-gray-600"></div>
          ))}
        </div>
        <ArrowDownIcon />
      </div>

      {/* Bottom-left icon */}
      <div className="absolute bottom-6 left-6">
        <AnalyticsIcon />
      </div>

      {/* Right-side vertical text */}
      <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col items-center space-y-16 [writing-mode:vertical-rl] md:flex">
        <a href="#" className="rotate-180 text-sm tracking-widest text-[#ec6f46] transition-colors hover:text-white">
          Club Events
        </a>
        <a href="#" className="rotate-180 text-sm font-bold text-[#ec6f46] transition-colors hover:text-white">
          CSA
        </a>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto grid max-w-screen-xl grid-cols-1 lg:grid-cols-2 items-center gap-12 justify-evenly md:gap-20">
        
        {/* Left Column: Club Image */}
        <div ref={imageRef} className="flex items-center justify-center">
          <Image
            src="/Gemini_Generated_Image_ukazrdukazrdukaz(1).png"
            alt="Computer Student Association Event"
            width={450}
            height={550}
            priority
            className="object-contain rounded-4xl shadow-lg"
          />
        </div>

        {/* Right Column: Text Content */}
        <div ref={textRef} className="flex flex-col justify-center text-center lg:text-left space-y-6">
          <h1 className="text-6xl text-[#ec6f46]  leading-tight tracking-tighter sm:text-7xl md:text-8xl">
            We <br />
            <span className="font-medium text-gray-500">improve</span> <br />
            every day
          </h1>
          <p className="mx-auto md:mx-0 max-w-md text-gray-300 text-lg">
            Join us in workshops, tech talks, and hands-on sessions.  
            We nurture creativity, collaboration, and coding excellence for every student.
          </p>

          {/* Static Button below text */}
        </div>

      </div>
         <div className='flex justify-center items-center mt-5'> <button
            
            className="mt-6  w-max bg-[#ec6f46] text-black font-semibold px-10 py-4 rounded-3xl text-lg shadow-xl hover:bg-[#e4640f] transition-all duration-300"
          >
            Find All Events
          </button></div>
    </section>
  );
};

export default ClubHeroSection;
