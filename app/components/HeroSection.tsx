"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Agent from "./Image";

const HeroSection = () => {
  const main = useRef(null);
const handleScroll = () => {
    // Make sure your EventSection has id="latest-event"
    const eventSection = document.getElementById("latest-event");
    if (eventSection) {
      eventSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1.5 } });

      tl.from(".hero-bg", { opacity: 0, filter: "grayscale(100%)", scale: 1.1, duration: 2 })
        .from(".big-title span", { 
          y: 200, 
          rotate: 5, 
          stagger: 0.1, 
          opacity: 0 
        }, "-=1.5")
        .from(".sub-info", { opacity: 0, y: 20 }, "-=0.8")
        .from(".cta-line", { width: 0, transformOrigin: "left" }, "-=1");
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={main} className="relative min-h-screen w-full bg-[#0a0a0a] flex flex-col justify-center items-center overflow-hidden">
      
      {/* 1. Subtle Background Image */}
      <div className="hero-bg absolute inset-0 z-0 opacity-40">
        <Agent />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      {/* 2. Massive Background Text (Watermark Style) */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.09] z-10">
        <h2 className="text-[30vw] font-black text-[#fff] leading-none tracking-tighter">CSA</h2>
      </div>

      {/* 3. Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        
        <h1 className="big-title text-white text-[10vw] md:text-[8vw] font-black leading-[0.8] tracking-[-0.05em] uppercase">
          <span className="block">TEACHING</span>
          <span className="block text-[#ec6f46] ">EXCELLENCE.</span>
        </h1>

        <div className="sub-info mt-12 flex flex-col items-center">
          <p className="text-gray-400 text-sm md:text-lg max-w-lg font-light tracking-wide leading-relaxed">
            We don't follow trends. We set the standard. <br/>
            The core hub for <span className="text-white border-b border-[#ec6f46]">Technical Mastery</span>.
          </p>

        {/* --- HIGH VISIBILITY CTA --- */}
{/* --- AUTO-HIGHLIGHTING CTA --- */}
{/* --- EXCLUSIVE CLUB BUTTON WITH CIRCULAR LOADER --- */}
<button 
  onClick={() => document.getElementById("latest-event")?.scrollIntoView({ behavior: "smooth" })}
  className="reveal-item group relative mt-12 flex items-center transition-all active:scale-95 px-2 py-2"
>
  {/* 1. THE CIRCULAR LOADER BORDER */}
  {/* This svg creates the rotating orange stroke around the button */}
  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
    <rect
      x="0" y="0" 
      width="100%" height="100%"
      fill="none"
      stroke="#BD5C3C"
      strokeWidth="2"
      strokeDasharray="100 300"
      className="animate-[dash_3s_linear_infinite] opacity-60 group-hover:opacity-100"
      rx="4"
    />
  </svg>

  {/* 2. THE MAIN BODY (Glassmorphism) */}
  <div className="relative z-10 bg-zinc-900/60 backdrop-blur-xl border border-white/5 px-10 py-5 rounded-sm flex flex-col items-start overflow-hidden transition-all duration-500 group-hover:bg-[#BD5C3C]/5">
    
    {/* Background Scan Line */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

    {/* Metadata Text */}


    {/* Main Button Text */}
    <div className="flex items-center gap-4">
      <span className="text-white text-sm md:text-lg font-black uppercase italic tracking-[0.5em] group-hover:text-[#BD5C3C] transition-colors">
        New Event
      </span>
      
      {/* Small Arrow that appears on hover */}
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-[#BD5C3C] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
        <path d="M8.14645 3.14645L12.8536 7.85355" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  </div>

  {/* 3. CORNER ACCENT (Unique Design) */}
  <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#BD5C3C] opacity-50 group-hover:opacity-100 transition-opacity" />

  {/* Custom CSS for the Dash Animation */}
  <style jsx>{`
    @keyframes dash {
      from {
        stroke-dashoffset: 400;
      }
      to {
        stroke-dashoffset: 0;
      }
    }
  `}</style>
</button>
        </div>
      </div>

  

    </div>
  );
};

export default HeroSection;