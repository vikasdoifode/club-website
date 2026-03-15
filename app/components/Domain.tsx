"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { 
  BsRobot, BsCodeSlash, BsCpu, 
  BsShieldLock, BsDatabase, BsLayers 
} from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

// Defined interface to replace implicit 'any'
interface Domain {
  icon: React.ReactNode;
  name: string;
  tagline: string;
  desc: string;
}

const domains: Domain[] = [
  { icon: <BsRobot />, name: "AI & ML", tagline: "Intel Cell", desc: "Neural Networks & Deep Learning." },
  { icon: <BsCodeSlash />, name: "Web Dev", tagline: "Dev Wing", desc: "Full-stack web architectures." },
  { icon: <BsCpu />, name: "IoT", tagline: "Hardware", desc: "Robotics & Smart Systems." },
  { icon: <BsShieldLock />, name: "Cyber", tagline: "Security", desc: "Ethical hacking & Defense." },
  { icon: <BsDatabase />, name: "Data", tagline: "Analytics", desc: "Big data & Visualization." },
  { icon: <BsLayers />, name: "Cloud", tagline: "DevOps", desc: "CI/CD & Infrastructure." }
];

const ClubsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".reveal-up", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
    })
    .from(".orbit-visual", {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out"
    }, "-=0.8");

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24  overflow-hidden gap-16"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-[#EC6F46]/10 blur-[100px] md:blur-[130px] rounded-full pointer-events-none" />

      {/* Left Content */}
      <div className="flex-1 z-20 space-y-8 text-center lg:text-left">
        <div className="space-y-4">
          <span className="reveal-up inline-block text-[#EC6F46] font-mono text-xs uppercase tracking-[0.4em]">
            Technical Ecosystem
          </span>
          <h2 className="reveal-up text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EC6F46] to-orange-300 italic font-light">Domains</span>
          </h2>
        </div>

        <p className="reveal-up text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
          A specialized ecosystem built for <span className="text-white font-medium">innovation</span>.
        </p>

        <div className="reveal-up pt-4">
          <Link 
            href="/domain" 
            className="group relative inline-flex items-center gap-4 px-8 md:px-10 py-3 md:py-4 rounded-full border border-white/10 text-white text-[10px] uppercase tracking-[0.3em] transition-all hover:border-[#EC6F46]"
          >
            <span className="relative z-10 font-bold">Explore All</span>
            <div className="absolute inset-0 bg-white/5 group-hover:bg-[#EC6F46] transition-colors duration-500 rounded-full" />
          </Link>
        </div>
      </div>

      {/* Circular Orbit Visual */}
      <div className="flex-1 flex justify-center items-center relative orbit-visual h-[450px] sm:h-[600px] lg:h-[800px] w-full">
        
        <div className="absolute w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] border border-white/5 rounded-full" />
               
        <div className="relative w-full h-full animate-orbit flex items-center justify-center">
            {domains.map((domain, index) => {
                const angle = (360 / domains.length) * index;
                return (
                  <div 
                    key={index}
                    className="absolute"
                    style={{ transform: `rotate(${angle}deg) translateY(-260px)` }}
                  >
                    <div className="animate-orbit-reverse">
                        <div className="relative group cursor-pointer">
                            <div className="absolute -inset-2 bg-[#EC6F46]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
                            
                            <div className="relative flex flex-col items-center justify-center text-center w-44 h-44 md:w-45 md:h-45 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-[#EC6F46]/50 p-6">
                                
                                <div className="flex items-center justify-center w-12 h-12 mb-3 bg-black border border-[#EC6F46]/40 rounded-full text-[#EC6F46] text-xl">
                                    {domain.icon}
                                </div>
                                
                                <div className="flex flex-col items-center">
                                    <span className="text-[8px] text-[#EC6F46] font-mono font-bold uppercase tracking-wider mb-1">{domain.tagline}</span>
                                    <h4 className="text-white text-sm font-bold tracking-tight mb-1">{domain.name}</h4>
                                    <p className="text-[9px] text-gray-500 leading-tight max-w-[100px]">{domain.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                );
            })}
        </div>

        <div className="absolute z-10 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#EC6F46]/10 blur-[40px] md:blur-[80px] rounded-full animate-pulse" />
            <Image
              width={200}
              height={200}
              src="/logo.ico"
              alt="Logo"
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_rgba(236,111,70,0.3)]"
            />
        </div>
      </div>

      <style jsx>{`
        :root {
          --orbit-radius: -150px;
        }
        @media (min-width: 640px) {
          :root { --orbit-radius: -220px; }
        }
        @media (min-width: 1024px) {
          :root { --orbit-radius: -280px; }
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit { animation: orbit 40s linear infinite; }
        .animate-orbit-reverse { animation: orbit 40s linear infinite reverse; }
        
        .orbit-visual:hover .animate-orbit,
        .orbit-visual:hover .animate-orbit-reverse { animation-play-state: paused; }
      `}</style>
    </section>
  );
};

export default ClubsSection;