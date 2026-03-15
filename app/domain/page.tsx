"use client";

import React, { useRef, useEffect, ReactElement } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Bot, Smartphone, CodeXml } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/custumCorsor';

gsap.registerPlugin(ScrollTrigger);

const domains = [
  {
    title: "WEB DEVELOPMENT",
    subtitle: "FRONT-END & BACK-END",
    description: "From client-side frameworks like React and Next.js to server-side technologies like Node.js, we cover the full stack to build modern, scalable web applications.",
    icon: <CodeXml />,
  },
  {
    title: "APP DEVELOPMENT",
    subtitle: "MOBILE-FIRST SOLUTIONS",
    description: "Focusing on creating seamless mobile experiences for both Android and iOS using modern toolkits like Flutter and React Native to bring ideas to life.",
    icon: <Smartphone />,
  },
  {
    title: "AI & ML",
    subtitle: "INTELLIGENT SYSTEMS",
    description: "Developing intelligent applications with machine learning integration, using TensorFlow, Python, and Google ML Kit to solve complex problems.",
    icon: <Bot />,
  },
  {
    title: "COMPETITIVE CODING",
    subtitle: "ALGORITHMIC EXCELLENCE",
    description: "Honing problem-solving skills and preparing for top-tier coding competitions through advanced data structures and algorithms.",
    icon: <Code />,
  }
];

const IntroSection: React.FC = () => {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const isMobile = window.innerWidth < 768;
            
            gsap.from([leftRef.current, rightRef.current], {
                opacity: 0, 
                y: 50,
                duration: 1.2, 
                stagger: 0.3,
                ease: 'expo.out',
                scrollTrigger: { 
                    trigger: sectionRef.current, 
                    start: 'top 85%', 
                    toggleActions: 'play none none reverse' 
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="max-w-6xl mx-auto px-6 md:px-16 my-16 md:my-24 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div ref={leftRef} className="text-gray-400 text-base md:text-lg leading-relaxed">
                    <p>
                        The <span className="text-[#FC8764] font-semibold drop-shadow-[0_0_10px_rgba(252,135,100,0.3)]">Computer Student Association</span> is the heart of technological creativity at our institute. We are a collective of passionate engineers who thrive on problem-solving.
                    </p>
                </div>
                <div ref={rightRef}>
                    <div className="border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-[0_0_30px_rgba(252,135,100,0.05)]">
                        <blockquote className="border-l-4 border-[#FC8764] pl-4 md:pl-6">
                            <p className="font-stylish text-lg md:text-xl italic text-white/90">
                                "To build a strong community of innovators who contribute to the digital world through code, research, and impactful projects."
                            </p>
                            <cite className="block text-[#FC8764] font-semibold mt-4 tracking-widest uppercase text-xs md:text-sm">Our Vision</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

const DomainSection: React.FC<any> = ({ title, subtitle, description, icon, isReversed, isLast }) => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const ringRef = useRef(null);
  
  // Theme specific to the image provided
  const theme = {
    text: 'text-[#FC8764]',
    bg: 'bg-[#FC8764]',
    border: 'border-[#FC8764]/30',
    glow: 'shadow-[#FC8764]/20',
    shadow: 'drop-shadow-[0_0_15px_rgba(252,135,100,0.6)]'
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
        const isMobile = window.innerWidth < 768;
        
        // Entry Animation
        gsap.from(leftContentRef.current, { 
            opacity: 0, 
            x: isReversed ? 100 : -100,
            duration: 1.2, 
            ease: 'power4.out', 
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } 
        });

        // Floating Icon Logic
        gsap.to(rightContentRef.current, { 
            y: -20, 
            duration: 2.5, 
            repeat: -1, 
            yoyo: true, 
            ease: 'sine.inOut' 
        });

        // Rotating Decorative Rings
        gsap.to(ringRef.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "linear"
        });
    }, sectionRef);
    return () => ctx.revert();
  }, [isReversed]);

  return (
    <>
      <section ref={sectionRef} className="relative py-20 md:py-32 px-6 md:px-16 overflow-hidden">
        {/* Background Radial Glow */}
        <div className={`absolute w-[500px] h-[500px] bg-[#FC8764]/5 rounded-full blur-[120px] -z-10 transition-all duration-1000 ${isReversed ? '-right-40' : '-left-40'}`}></div>
        
        <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center`}>
          
          <div ref={leftContentRef} className={`order-2 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
            <div className="space-y-4">
                <span className={`${theme.text} text-xs md:text-sm font-bold tracking-[0.4em] uppercase`}>{subtitle}</span>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter">
                    {title.split(' ').map((word: string, i: number) => (
                        <span key={i} className="block">{word}</span>
                    ))}
                </h2>
                <div className="h-1 w-20 bg-[#FC8764] rounded-full"></div>
                <div className={`mt-8 bg-zinc-900/40 border border-white/5 backdrop-blur-md p-8 rounded-2xl hover:border-[#FC8764]/40 transition-colors duration-500`}>
                    <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
                </div>
            </div>
          </div>

          <div ref={rightContentRef} className={`order-1 ${isReversed ? 'md:order-1' : 'md:order-2'} relative flex justify-center items-center h-64 md:h-96`}>
              {/* Animated Rings */}
              <div ref={ringRef} className={`absolute w-64 h-64 md:w-96 md:h-96 border border-dashed ${theme.border} rounded-full opacity-40`}></div>
              <div className={`absolute w-48 h-48 md:w-80 md:h-80 border ${theme.border} rounded-full opacity-20 scale-110`}></div>
              
              {/* Icon with Neon Shadow */}
              <div className={`relative z-10 ${theme.shadow}`}>
                {React.isValidElement(icon)
                  ? React.cloneElement(icon as React.ReactElement<any>, {
                      className: `${theme.text} w-24 h-24 md:w-40 md:h-40 stroke-[1.5px]`,
                    })
                  : null}
              </div>
          </div>
        </div>
      </section>

      {!isLast && (
        <div className="max-w-6xl mx-auto px-16">
            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        </div>
      )}
    </>
  );
};

const DomainPage = () => {
  return (
    <main className="bg-[#050505] text-white min-h-screen relative overflow-x-hidden selection:bg-[#FC8764] selection:text-black">
        {/* Modernized Background Grid */}
        <div className="fixed inset-0 h-full w-full bg-[radial-gradient(#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        <div className="relative z-10">
            <CustomCursor />
            <Navbar />
            
            <div className="pt-32 pb-16 text-center px-6">
                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic">
                    <span className="text-white">OUR CORE </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FC8764] to-[#ff5e2b] drop-shadow-[0_0_20px_rgba(252,135,100,0.4)]">
                        DOMAINS
                    </span>
                </h1>
                <p className="text-zinc-500 text-lg md:text-xl max-w-xl mx-auto font-medium">
                    Pushing the boundaries of what's possible through engineering excellence.
                </p>
            </div>
            
            <IntroSection />

            <div className="pb-32">
              {domains.map((domain, index) => (
                  <DomainSection 
                      key={index}
                      {...domain}
                      isReversed={index % 2 !== 0}
                      isLast={index === domains.length - 1}
                  />
              ))}
            </div>

            <Footer />
        </div>
    </main>
  );
};

export default DomainPage;