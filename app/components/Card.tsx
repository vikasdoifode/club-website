"use client";
import type { LucideIcon } from "lucide-react";
import React, { useRef, useLayoutEffect, ReactElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Bot, ShieldCheck, Server, ArrowRight, CodeXml, Smartphone } from "lucide-react";
import { useRouter } from "next/navigation";
interface Domain {
  id: number,
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  tag: string;
}

gsap.registerPlugin(ScrollTrigger);

// Custom type for the style object to allow CSS variables
interface CardStyle extends React.CSSProperties {
  "--accent"?: string;
}

const domainData: Domain[] = [
  { id: 1, icon: Code, title: "Competitive Programming", description: "Mastering logic and efficiency under pressure.", color: "#ec6f46", tag: "Logic_Hq" },
  { id: 2, icon: Bot, title: "AI & Machine Learning", description: "Architecting the future of intelligent systems.", color: "#46a7ec", tag: "Neural_Net" },
  { id: 4, icon: CodeXml, title: "Web Development", description: "Building high-performance immersive interfaces.", color: "#46ec98", tag: "Stack_Dev" },
  { id: 5, icon: Smartphone, title: "App Development", description: "Mobile-first engineering for the modern user.", color: "#e046ec", tag: "Mob_Arch" },
];


const HorizontalScroller: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const nav = useRouter();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const isMobile = window.innerWidth < 768;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: isMobile ? 0.5 : 1,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      gsap.to(".scanner-line", {
        y: isMobile ? 300 : 400,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black text-white overflow-hidden font-sans">
      <div className="h-screen flex flex-col justify-center relative">

        {/* Header */}
        <div className="px-6 md:px-10 mb-8 md:mb-16 max-w-[1400px] w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center md:px-10 gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#ec6f46] animate-pulse rounded-full"></span>
              <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 uppercase">System Segments</span>
            </div>

             <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none mb-2 md:mb-4">
        <span className="block overflow-hidden text-center">
          <span className="title-span block px-2 md:px-5 text-transparent bg-clip-text bg-gradient-to-b from-[#EC6F46] to-white/10">
            CLUB CORE DOMAINS
          </span>
        </span>
      </h1>
          </div>
          <button
            onClick={() => nav.push("/domain")}
            className="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
          >
            <span className="font-mono text-[10px] md:text-sm tracking-widest">EXPLORE_ALL</span>
            <div className="p-2 md:p-3 border border-zinc-800 rounded-full group-hover:border-[#ec6f46] transition-colors">
              <ArrowRight size={16} />
            </div>
          </button>
        </div>

        {/* The Track */}
        <div ref={trackRef} className="flex flex-nowrap w-max gap-6 md:gap-10 px-[8vw]">
          {domainData.map((domain, index) => (
            <div
              key={domain.id}
              className="relative flex-shrink-0 w-[280px] h-[380px] md:w-[350px] md:h-[450px] bg-zinc-950 border border-zinc-800 p-px group overflow-hidden"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 92%, 92% 100%, 0 100%)",
                "--accent": domain.color
              } as CardStyle}
            >
              <div className="scanner-line absolute top-0 left-0 w-full h-[1px] bg-[var(--accent)] opacity-30 z-20 pointer-events-none"></div>

              <div className="relative h-full w-full bg-[#0a0a0a] p-6 md:p-8 border border-zinc-900 flex flex-col justify-between group-hover:border-[var(--accent)]/40 transition-all duration-500">

                <div className="flex justify-between items-start">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 text-[var(--accent)] transition-transform duration-500">
                    <domain.icon size={24} />
                  </div>
                  <div className="text-right font-mono">
                    <p className="text-[8px] text-zinc-600 uppercase">UID</p>
                    <p className="text-[10px] text-zinc-400">00{index + 1}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight group-hover:text-[var(--accent)] transition-colors">
                    {domain.title}
                  </h3>
                  <div className="h-[1px] w-12 bg-zinc-800 mb-3 group-hover:w-full transition-all duration-700 group-hover:bg-[var(--accent)]"></div>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {domain.description}
                  </p>
                </div>

                <div className="flex justify-between items-end">
                  <div className="font-mono text-[9px] text-zinc-700">
                    <p>STATUS: <span className="text-[var(--accent)]">ACTIVE</span></p>
                    <p>#{domain.tag}</p>
                  </div>
                  <ArrowRight size={14} className="text-zinc-700 group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#ec6f46]/5 blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default HorizontalScroller;