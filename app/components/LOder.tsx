"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const DinoAnimation: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      const tl = gsap.timeline({ paused: true, repeat: -1, defaults: { ease: "linear" } });

      // Move 100px to the right
      tl.to(imageRef.current, {
        x: 100,
        duration: 10, // Adjust duration for walking speed
      });

      // Subtle up-and-down walking motion
      tl.to(
        imageRef.current,
        {
          y: "-5px",
          duration: 0.5,
          yoyo: true,
          repeat: 19, // Approximate repeat to match duration
          ease: "sine.inOut",
        },
        0
      );

      // Start/stop animation based on scroll
      ScrollTrigger.create({
        trigger: imageRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => tl.play(),
        onEnterBack: () => tl.play(),
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
      });
    }
  }, []);

  return (
    <div className="relative w-full h-24 overflow-hidden flex items-center top-10 bg-gray-200">
      <Image
        ref={imageRef}
        width={250}
          height={250}
        src="/Gemini_Generated_Image_5ku2vn5ku2vn5ku2-removebg-preview.png"
        alt="Dino"
        className="h-10 absolute left-0"
      />
    </div>
  );
};

export default DinoAnimation;
