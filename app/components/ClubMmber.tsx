"use client";

import React, { useState } from "react";
import Image from "next/image";
// Added Linkedin icon here
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";

const headsData = [
  { 
    id: "01", 
    name: "Mayur Sabale", 
    role: "CHAIRPERSON", 
    imageUrl: "/ch.png", 
    socials: { LinkedIn: "https://www.linkedin.com/in/mayur-sabale-829729309/" } 
  },
  { 
    id: "02", 
    name: "arnav jadhav", 
    role: "SECRETARY", 
    imageUrl: "/s3.png", 
    socials: { LinkedIn: "https://www.linkedin.com/in/arnav-jadhav-2985a4215/" } 
  },
  { 
    id: "03", 
    name: "Vikas Doifode", 
    role: "TECH LEAD", 
    imageUrl: "/t2.png", 
    socials: { LinkedIn: "https://www.linkedin.com/in/vikasdoifode/" } 
  },
  { 
    id: "04", 
    name: "dev lahrani", 
    role: "TREASURER", 
    imageUrl: "/ts1.png", 
    socials: { LinkedIn: "https://www.linkedin.com/in/dev-lahrani-05424032a/" } 
  },
  { 
    id: "05", 
    name: "KRISHNA PATIL", 
    role: "PR OFFICER", 
    imageUrl: "/pr.png", 
    socials: { LinkedIn: "https://www.linkedin.com/in/krishna-patil-6a4342288/" } 
  },
];

const MultiHeadSection = () => {
  const [index, setIndex] = useState(0);

  const nextMember = () => setIndex((prev) => (prev + 1) % headsData.length);
  const prevMember = () => setIndex((prev) => (prev - 1 + headsData.length) % headsData.length);

  const currentMember = headsData[index];

  return (
    <div className="bg-black py-4 md:py-10 min-h-screen flex flex-col">
      {/* HEADER SECTION */}
      <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none mb-2 md:mb-4">
        <span className="block overflow-hidden text-center">
          <span className="title-span block px-2 md:px-5 text-transparent bg-clip-text bg-gradient-to-b from-[#EC6F46] to-white/10">
            MEET OUR TEAM
          </span>
        </span>
      </h1>

      <section className="relative flex-grow bg-[#ec6f46] text-black overflow-hidden font-sans select-none rounded-[30px] md:rounded-[60px] m-2 md:m-6 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 md:h-6 bg-black rounded-b-3xl z-20 opacity-90" />

        <div className="max-w-[1600px] mx-auto h-full grid grid-cols-12 gap-2 md:gap-4 p-4 md:p-12 relative min-h-[700px] md:min-h-screen">
          
          {/* LEFT: Branding & Nav */}
          <div className="col-span-6 md:col-span-3 flex flex-col justify-between py-2 md:py-6 z-10 order-1 md:order-1">
            <div className="flex items-center gap-2 drop-shadow-md">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-black rounded-full flex items-center justify-center text-[#EB5C2D] font-bold italic text-sm">C</div>
              <span className="font-bold tracking-tighter text-lg md:text-2xl uppercase">CSA_Heads</span>
            </div>
            
            <nav className="hidden md:flex flex-col gap-5 mt-10">
              {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS'].map((item) => (
                <a key={item} href="#" className="text-4xl lg:text-5xl font-bold uppercase tracking-tighter hover:text-white transition-all opacity-20 hover:opacity-100">
                  {item}
                </a>
              ))}
            </nav>

        
          </div>

          {/* RIGHT: System Status & Socials */}
          <div className="col-span-6 md:col-span-3 flex flex-col justify-start md:justify-between items-end py-2 md:py-6 z-10 order-2 md:order-3">
             <div className="text-right font-mono drop-shadow-md">
              <p className="text-[8px] md:text-[10px] opacity-40 uppercase tracking-widest font-bold">Status</p>
              <p className="font-bold text-sm md:text-2xl italic tracking-tighter">ACTIVE // 0{index + 1}</p>
            </div>

            {/* Social Matrix with Icon */}
            <div className="flex flex-col items-end gap-2 md:gap-6 text-right mt-10 md:mt-20">
                <span className="font-mono text-[8px] md:text-[10px] tracking-[0.4em] opacity-40 uppercase font-bold">Socials</span>
                {Object.entries(currentMember.socials).map(([platform, url]) => (
                    <a 
                      key={platform} 
                      href={url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xl md:text-4xl font-bold uppercase tracking-tighter hover:text-white transition-colors hover:drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)] group"
                    >
                      {platform === "LinkedIn" && <Linkedin className="w-5 h-5 md:w-8 md:h-8" />}
                      <span className=" text-[20px] md:text-[23px] tracking-[0.1em] " >{platform}</span>
                    </a>
                ))}
            </div>
          </div>

          {/* CENTER: Profile Focus */}
          <div className="col-span-12 md:col-span-6 relative flex flex-col items-center justify-center md:justify-start pt-4 md:pt-20 order-3 md:order-2">
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <h2 className="text-[32vw] sm:text-[26vw] md:text-[12vw] font-bold opacity-[0.06] uppercase leading-none text-center select-none">
                  {currentMember.name.split(" ")[0]}
                </h2>
            </div>

            <div className="relative z-30 text-center mb-4 md:mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]">
                <h3 className="text-4xl md:text-7xl font-bold uppercase text-black mb-1 md:mb-2 tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)] leading-none">
                    {currentMember.name}
                </h3>
                <div className="bg-black text-[#EB5C2D] px-4 md:px-6 py-1 text-[8px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] inline-block rounded-full shadow-2xl">
                    {currentMember.role}
                </div>
            </div>

            <div className="relative w-full h-[40vh] md:h-[65vh] flex items-end justify-center group">
              <div className="relative w-full rounded-2xl h-full max-w-[280px] md:max-w-sm transition-transform duration-500">
                  <Image 
                    src={currentMember.imageUrl}
                    alt={currentMember.name}
                    fill
                    className="object-contain grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700 
                                drop-shadow-[20px_30px_30px_rgba(0,0,0,0.6)] md:drop-shadow-[30px_50px_40px_rgba(0,0,0,0.6)]"
                    priority
                  />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-10 md:top-[80%] md:-translate-y-1/2 flex justify-between z-40 px-4 md:-px-10">
              <button onClick={prevMember} className="p-3 md:p-4 bg-black text-white rounded-full shadow-2xl active:scale-75 transition-transform">
                <ChevronLeft size={24} className="md:w-8 md:h-8" />
              </button>
              <button onClick={nextMember} className="p-3 md:p-4 bg-black text-white rounded-full shadow-2xl active:scale-75 transition-transform">
                <ChevronRight size={24} className="md:w-8 md:h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="absolute bottom-0 w-full bg-black/10 py-3 flex overflow-hidden border-t border-black/5">
          <div className="flex animate-marquee whitespace-nowrap gap-12 font-mono text-[10px] font-bold uppercase tracking-[0.6em] text-black/40">
            <span>Leadership</span> <span>•</span> <span>Innovation</span> <span>•</span> <span>Technology</span> <span>•</span> <span>Community</span> <span>•</span> <span>Leadership</span> <span>•</span> <span>Innovation</span> <span>•</span> <span>Technology</span> <span>•</span> <span>Community</span>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>
    </div>
  );
};

export default MultiHeadSection;