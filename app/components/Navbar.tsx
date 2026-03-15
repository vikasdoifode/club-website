'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CSALogo from '../../public/logo.svg'; 
import Link from 'next/link';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Domains', href: '/domain' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '/Contacts' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const lastScrollYRef = useRef(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleToggle = () => {
    setIsAnimating(true);
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      setRotationAngle(currentY * 0.5);

      // Auto-hide on scroll down
      if (currentY > lastScrollYRef.current + 10) {
        if (isOpen) setIsOpen(false);
      } 
      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <header className="fixed top-6 md:top-12 inset-x-0 px-4 md:px-12 z-[100] pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-start gap-3 md:gap-6 pointer-events-auto">
        
        {/* Logo / Toggle Button */}
        <div className="relative flex-shrink-0">
          {!isOpen && (
            <button
              onClick={handleToggle}
              className="absolute -top-10 left-0 w-max py-1 px-3 rounded-full bg-black/90 border border-[#ec6f46]/50 text-[9px] uppercase tracking-widest text-[#ec6f46] animate-bounce"
            >
              Menu
            </button>
          )}
          
          <button
            onClick={handleToggle}
            onAnimationEnd={() => setIsAnimating(false)}
            className={`w-12 h-12 md:w-16 md:h-16 bg-black rounded-full border-2 border-[#ec6f46] flex items-center justify-center hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(236,111,70,0.3)] transition-all duration-300 ${
              isAnimating ? 'animate-[spin-once_0.7s_ease-in-out]' : ''
            }`}
          >
            <Image
              src={CSALogo}
              alt="Logo"
              width={30}
              height={30}
              className="rounded-full md:w-[40px] md:h-[40px]"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            />
          </button>
        </div>

        {/* Links Navigation */}
        <nav
          className={`flex items-center h-12 md:h-16 bg-black/80 backdrop-blur-lg border border-[#ec6f46]/40 rounded-full shadow-[0_0_30px_rgba(236,111,70,0.2)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${
            isOpen 
              ? 'px-5 md:px-8 opacity-100 translate-x-0 w-auto max-w-[calc(100vw-80px)] md:max-w-4xl' 
              : 'px-0 opacity-0 -translate-x-4 pointer-events-none max-w-0 border-none'
          }`}
        >
          {/* Mobile: Horizontal scrollable area if links are many */}
          <div className="flex items-center space-x-6 md:space-x-10 overflow-x-auto no-scrollbar">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#ec6f46] transition-colors duration-300 font-bold text-xs md:text-sm whitespace-nowrap uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;