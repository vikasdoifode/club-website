"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function AboutTeam() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1.4 },
    });

    // Animate elements with a subtle "staggered reveal"
    tl.from(".reveal-item", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      clearProps: "all"
    });
    
    // Subtle breathing effect for the background glow
    gsap.to(".bg-glow", {
      scale: 1.2,
      opacity: 0.4,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative min-h-[80vh]  flex flex-col items-center justify-center px-6 py-5 overflow-hidden text-center"
    >
      {/* Centered Background Glow */}
      <div className="bg-glow absolute w-[500px] h-[500px] bg-[#EC6F46]/10 blur-[120px] rounded-full z-0" />

      <div className="relative z-10 max-w-4xl w-full space-y-8">
        
        {/* Top Tag */}
        <div className="reveal-item">
          <span className="text-[#EC6F46] font-mono text-[15px] uppercase tracking-[0.6em] border border-[#EC6F46]/30 px-4 py-1.5 rounded-full">
            Our Mission
          </span>
        </div>

        {/* Main Centered Heading */}
        <div className="reveal-item overflow-hidden">
           <h1 className="text-5xl md:text-8xl font-medium text-[#EC6F46] tracking-tighter leading-[1.1]">
              <span className="block overflow-hidden">
                <span className="title-span block">Engineering the</span>
              </span>
              <span className="block overflow-hidden">
                <span className="title-span block text-transparent bg-clip-text bg-gradient-to-b from-[#EC6F46] to-white/40 italic">
                  Digital Frontier
                </span>
              </span>
            </h1>
        </div>

        {/* Centered Description */}
        <div className="reveal-item max-w-2xl mx-auto">
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            We are a collective of student developers bridging the gap between 
            curiosity and mastery. Through collaboration, we turn complex 
            challenges into <span className="text-white font-normal">elegant solutions</span>.
          </p>
        </div>

        {/* Minimal Stats Row */}
        <div className="reveal-item flex justify-center items-center gap-12 pt-8 border-t border-white/5">
          {[
            { label: "Since", val: "2024" },
            { label: "Community", val: "Global" },
            { label: "Culture", val: "Open Source" }
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">{item.label}</p>
              <p className="text-white text-sm font-medium italic">{item.val}</p>
            </div>
          ))}
        </div>

        {/* Professional Minimal Button */}
        <div className="reveal-item pt-6">
          <button className="px-10 py-3 bg-white text-black font-bold text-[10px] uppercase tracking-[0.2em] rounded-full hover:bg-[#EC6F46] hover:text-white transition-colors duration-300 shadow-xl shadow-white/5">
            Join Movement
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;