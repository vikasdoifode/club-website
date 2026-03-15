"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

gsap.registerPlugin(TextPlugin);

interface CosmicOrbPreloaderProps {
  image: string; // Single image URL
  clubName: string;
  onLoaded: () => void;
}

const STAR_COUNT = 400;

const CosmicOrbPreloader: React.FC<CosmicOrbPreloaderProps> = ({ image, clubName, onLoaded }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null); // Wrapper for Next.js Image
  const clubNameRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const scrollProgress = useRef(0);
  const smoothedScroll = useRef(0);
  const [isExiting, setIsExiting] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  useEffect(() => {
    const stars = loaderRef.current?.querySelectorAll<HTMLDivElement>(".star");

    gsap.set(loaderRef.current, { perspective: 1000 });
    gsap.set(sceneRef.current, { transformStyle: "preserve-3d", z: -1200 });
    gsap.set(imageWrapperRef.current, { z: 50, rotationX: -10 });
    gsap.set(clubNameRef.current, { y: 160, z: 80, rotationX: -30 });

    gsap.to(textRef.current, { duration: 2, text: "SCROLL TO EXPLORE", ease: "none", delay: 0.5 });

    const updateAnimation = () => {
      smoothedScroll.current += (scrollProgress.current - smoothedScroll.current) * 0.1;
      const progress = smoothedScroll.current;

      setScrollPercent(Math.round(progress * 100));

      const zPos = progress < 0.8
        ? gsap.utils.mapRange(0, 0.8, -1200, 300, progress)
        : gsap.utils.mapRange(0.8, 1, 300, 1800, progress);
      gsap.set(sceneRef.current, { z: zPos });

      // ✅ CHANGE 1: Replaced image rotation with a zoom (scale) effect on scroll.
      const imageScale = gsap.utils.mapRange(0, 0.8, 1, 1.5, progress); // Zooms in as it gets closer
      gsap.set(imageWrapperRef.current, { scale: imageScale });

      const nameTilt = gsap.utils.mapRange(0, 1, -30, 15, progress);
      gsap.set(clubNameRef.current, { rotationX: nameTilt });

      stars?.forEach((star) => {
        const speed = parseFloat(star.dataset.speed || "1");
        gsap.set(star, { y: progress * 200 * speed });
      });

      if (progress > 0.995 && !isExiting) setIsExiting(true);
    };

    gsap.ticker.add(updateAnimation);

    const handleWheel = (e: WheelEvent) => {
      const next = scrollProgress.current + e.deltaY * 0.001;
      scrollProgress.current = Math.max(0, Math.min(1, next));
    };

    let startTouchY = 0;
    const handleTouchStart = (e: TouchEvent) => (startTouchY = e.touches[0].clientY);
    const handleTouchMove = (e: TouchEvent) => {
      const deltaY = startTouchY - e.touches[0].clientY;
      const next = scrollProgress.current + deltaY * 0.002;
      scrollProgress.current = Math.max(0, Math.min(1, next));
      startTouchY = e.touches[0].clientY;
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    const rings = sceneRef.current?.querySelectorAll<HTMLDivElement>(".energy-ring");
    rings?.forEach((ring, i) => {
      // ✅ CHANGE 2: Made the rings rotate on X and Y axes for a 3D orbital effect ("gol gol ghuma").
      gsap.to(ring, {
        rotationX: i % 2 === 0 ? 360 : -360,
        rotationY: i % 2 !== 0 ? 360 : -360,
        duration: 10 + i * 5, // Slower, more majestic rotation
        repeat: -1,
        ease: "linear",
      });
      gsap.to(ring, {
        scale: 1.05,
        duration: 2 + i,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });

    stars?.forEach((star) => {
      gsap.to(star, { opacity: Math.random() * 0.7 + 0.3, duration: Math.random() * 1.5 + 0.5, repeat: -1, yoyo: true });
    });

    return () => {
      gsap.ticker.remove(updateAnimation);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isExiting, onLoaded]);

  useEffect(() => {
    if (isExiting) {
      gsap.to(loaderRef.current, { opacity: 0, duration: 0.5, onComplete: onLoaded });
    }
  }, [isExiting, onLoaded]);

  return (
    // ... JSX is the same, no changes needed here ...
    <div ref={loaderRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden select-none">
      {/* Stars */}
      <div className="absolute inset-0">
        {Array.from({ length: STAR_COUNT }).map((_, i) => (
          <div
            key={i}
            className="star absolute rounded-full bg-orange-400"
            data-speed={Math.random() * 0.5 + 0.25}
            // style={{
            //   width: `${Math.random() * 2 + 1}px`,
            //   height: `${Math.random() * 2 + 1}px`,
            //   top: `${Math.random() * 100}%`,
            //   left: `${Math.random() * 100}%`,
            // }}
          />
        ))}
      </div>

      {/* Scene */}
      <div ref={sceneRef} className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]" style={{ transformStyle: "preserve-3d" }}>
        {/* Energy Rings */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-[#EC6F46]/50 energy-ring"
            style={{ transform: `translateZ(${i * 20}px)` }}
          />
        ))}

        {/* Logo Image */}
        <div ref={imageWrapperRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%]">
          <Image
            src={image}
            alt={`${clubName} Logo`}
            fill
            priority
            className="object-contain drop-shadow-[0_0_25px_#EC6F46]"
          />
        </div>

        {/* Club Name */}
        <div ref={clubNameRef} className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-[#EB5C2D] font-bold text-2xl md:text-2xl tracking-[0.2em] uppercase">
            {clubName}
          </h1>
        </div>
      </div>

      {/* Scroll Percentage */}
      <div className="absolute bottom-20 text-white font-mono tracking-widest text-lg md:text-xl mb-10">
        {scrollPercent}%
      </div>

      {/* Instruction Text */}
      <div className="absolute bottom-16 text-center text-white font-mono tracking-widest text-lg md:text-xl">
        <span ref={textRef}></span>
      </div>
    </div>
  );
};

export default CosmicOrbPreloader;