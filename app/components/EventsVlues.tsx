'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CounterItem {
  label: string;
  targetValue: number;
  increment: number;
  currentValue: number;
}

const initialCountersData: Omit<CounterItem, 'currentValue'>[] = [
  { label: 'Club Coordinators', targetValue: 12, increment: 1 },
  { label: 'Team Heads', targetValue: 8, increment: 1 },
  { label: 'Project Leads', targetValue: 20, increment: 1 },
  { label: 'Active Members', targetValue: 150, increment: 5 },
];

const animationSpeed = 40;

const TeamCounterSection: React.FC = () => {
  const [counters, setCounters] = useState<CounterItem[]>(
    initialCountersData.map(c => ({ ...c, currentValue: 0 }))
  );

  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Start animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!startAnimation) return;

    const interval = setInterval(() => {
      setCounters(prevCounters => {
        const allDone = prevCounters.every(c => c.currentValue === c.targetValue);
        if (allDone) {
          clearInterval(interval);
          return prevCounters;
        }

        return prevCounters.map(counter => {
          if (counter.currentValue < counter.targetValue) {
            const newValue = counter.currentValue + counter.increment;
            return { ...counter, currentValue: Math.min(newValue, counter.targetValue) };
          }
          return counter;
        });
      });
    }, animationSpeed);

    return () => clearInterval(interval);
  }, [startAnimation]);

  return (
    <main
      ref={sectionRef}
      className="flex flex-col bg-red items-center justify-center min-h-[50vh] bg-transparent text-white text-center  px-4 py-16"
    >
      <h1 className="mb-12 text-4xl md:text-5xl font-bold tracking-tight">
        Meet Our <span className="text-[#ec6f46]">Team Strength</span>
        <h1 className='text-[18px] mt-3'>The true power lies in a team that dreams, builds, and succeeds together</h1>
      </h1>

      <div className="flex flex-wrap justify-center gap-10 md:gap-16">
        {counters.map(counter => (
          <div
            key={counter.label}
            className="min-w-[150px] text-center transition-transform duration-500 hover:scale-105"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#ec6f46] mb-2">
              {counter.currentValue.toLocaleString()}
            </h2>
            <p className="text-gray-300 uppercase tracking-widest text-sm md:text-base">
              {counter.label}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TeamCounterSection;
