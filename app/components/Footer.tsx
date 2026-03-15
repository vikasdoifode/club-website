"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";

const enhancedImageUrl = "/IMG_7805.jpg";

const Footer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.from(".title-line-1", { y: 50, opacity: 0 }, 0.2)
      .from(".title-line-2", { y: 50, opacity: 0 }, 0.4)
      .from(".tagline", { y: 30, opacity: 0 }, 0.6)
      .from(".top-icon", { y: -20, opacity: 0, scale: 0.8 }, 0.8)
      .from(".contact-links", { y: 20, opacity: 0, scale: 0.9 }, 1);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen text-white overflow-hidden 
      rounded-tr-[80px] rounded-tl-[80px] md:rounded-tr-[200px] 
      border-t-8 border-[#EB5C2D] md:rounded-tl-[200px]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${enhancedImageUrl})` }}
      />

      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#EC6F46]/80 via-[#EC6F46]/50 to-transparent mix-blend-multiply opacity-90" />

      {/* Subtle Black Layer to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

      {/* Top-left Icon */}
      <div className="top-icon absolute top-4 left-4 md:top-6 md:left-6 z-20 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <Image
          src="/Gemini_Generated_Image_c73zwnc73zwnc73z_1_-removebg-preview.png"
          alt="Join Us"
          width={250}
          height={250}
          className="w-15 h-15 md:w-12 md:h-12"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-4 sm:p-6 md:p-8">
        <div className="flex-grow" />

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-4xl md:mb-30 lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="block overflow-hidden">
              <span className="title-line-1 inline-block">We Are The</span>
            </span>
            <span className="block text-[#EC6F46] mt-1 md:mt-2 overflow-hidden">
              <span className="title-line-2 inline-block">
                Computer Student Association
              </span>
            </span>
          </h1>
        </div>

        <div className="flex-grow" />

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-4">
          {/* Tagline */}
          <div className="tagline text-left max-w-md">
            {/* <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Empowering innovation through collaboration, learning, and
              creativity at VIT Pune.
            </p> */}
            <h1 className="md:text-6xl font-bold text-2xl text-left  ">Empowering  <br />innovation </h1>
          </div>

          {/* Contact Links */}
          <div className="contact-links flex flex-row md:flex-col items-start md:items-end gap-3">
            <a
              href="computerstudentassociation@vit.edu"
              className="flex items-center gap-2 text-gray-300 hover:text-[#EC6F46] transition-colors"
            >
              <Mail size={18} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/company/csa-vit-pune/"
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-[#EC6F46] transition-colors"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/innovsphere"
              target="_blank"
              className="flex items-center gap-2 text-gray-300 hover:text-[#EC6F46] transition-colors"
            >
              <Github size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
