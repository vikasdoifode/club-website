"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect if the user is on a touch device (mobile/tablet)
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    if (isTouch) return; // Skip adding cursor logic for mobile

    const cursor = cursorRef.current;
    if (!cursor) return;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [role='button'], input, select")) {
        gsap.to(cursor, {
          scale: 1.5,
          backgroundColor: "#ffffff",
          mixBlendMode: "difference",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [role='button'], input, select")) {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "#EC6F46",
          mixBlendMode: "normal",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  // Do not render the cursor on mobile/touch devices
  if (isTouchDevice) return null;

  return (
    <>
      <style>{`body, a, button, * { cursor: none; }`}</style>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-14 h-14 hidden md:flex rounded-full bg-[#EC6F46] items-center justify-center pointer-events-none z-[9999]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M6 18L18 6M18 6V17M18 6H7"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;
