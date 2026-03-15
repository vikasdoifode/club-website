"use client";
import React from "react";

const Agent = () => {
  const columnImages = [
    "We're excited to welcome Mr. Suhas Desai, Chief Technology Officer at CyberNxt, as our expert sp.jpg",
    "Our team secured 1st Place at the National-Level Hackathon organized by Mozilla Club MITACSC! 🐮webp.webp",
    "IMG_7801.jpg",
    "IMG_7805.jpg",
  ];

  const renderColumn = () => (
    <div className="flex flex-col gap-4 animate-scroll-down">
      {[...columnImages, ...columnImages, ...columnImages].map((src, i) => (
        <div key={i} className="relative w-full h-64 md:h-80 overflow-hidden rounded-sm border border-white/20">
          <img 
            src={src} 
            /* INCREASED BRIGHTNESS & ADDED CONTRAST */
            className="w-full h-full object-cover grayscale brightness-150 contrast-125 transition-all duration-500 hover:grayscale-0" 
            alt="gallery" 
          />
          <div className="absolute bottom-2 left-2 bg-black/80 text-[8px] px-1 text-white font-bold uppercase tracking-tighter">
            Creative TD
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      {/* - Increased opacity from 50 to 80 so images are much clearer
          - Kept the angle and scale
      */}
      <div className="relative w-[120%] h-[120%] -left-[10%] -top-[10%] grid grid-cols-2 md:grid-cols-3 gap-4 transform -skew-y-12 scale-110 opacity-80 transition-opacity duration-1000">
        {renderColumn()}
        {renderColumn()}
        {renderColumn()}
      </div>

      {/* COLOR GRADE: 
          Reduced opacity from 80 to 60 to prevent the orange from washing out the image details.
      */}
      <div className="absolute inset-0 bg-[#ec6f46] mix-blend-multiply opacity-60 pointer-events-none"></div>
      
      {/* LIGHT SOURCE:
          Changed the radial gradient to "screen" mode to act like a spotlight in the center.
      */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,111,70,0.15)_0%,transparent_70%)] mix-blend-screen pointer-events-none"></div>
      
      {/* DARK VIGNETTE: Keeps the edges cinematic */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_90%)] opacity-70 pointer-events-none"></div>
    </div>
  );
};

export default Agent;