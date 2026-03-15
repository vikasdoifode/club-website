import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EventSection = () => {
  const eventData = {
    title: "CODEVERSE",
    subtitle: "Dive into the Codeverse",
    date: "9th March 2026",
    location: "VIT Pune (Bibwewadi)",
    prizePool: "₹ 5,000",
    categories: ["Competitive Coding", "Blind Coding"],
    image: "/Poster.png", 
    social: "@vitpune_csa",
    registrationLink: "https://learner.vierp.in/choose_event_insider" 
  };

  return (
    <section id='latest-event' className="bg-black text-white py-12 md:py-24 px-4 md:px-6 overflow-hidden relative">
      {/* Background Decorative Text - Hidden on very small screens to avoid clutter */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none hidden sm:block">
        <h1 className="text-[12rem] md:text-[20rem] font-black leading-none translate-x-1/4">CSA</h1>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header - Tighter margins for mobile */}
        <div className="mb-8 md:mb-16 border-l-4 border-[#BD5C3C] pl-4 md:pl-8">
          <h2 className="text-4xl md:text-8xl  uppercase  tracking-tighter leading-[0.9]">
            Latest <br className="md:hidden" />
            <span className="text-[#BD5C3C]">Event</span>
          </h2>
          <p className="text-zinc-500 font-mono tracking-widest mt-3 uppercase text-[9px] md:text-sm">
            Technical Excellence // 2026 Edition
          </p>
        </div>

        {/* Main Grid: Single column on mobile, 12-cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
          
          {/* Poster: Takes full width on mobile with a fixed height */}
          <div className="md:col-span-5 relative group overflow-hidden rounded-2xl border border-white/10 h-[350px] sm:h-[500px] md:h-full">
            <Image 
              src={eventData.image} 
              alt="Codeverse Event" 
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            {/* Gradient Overlay for better text readability on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 md:opacity-60" />
            
            <div className="absolute bottom-5 left-5 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#BD5C3C] rounded-full animate-ping"></span>
              <span className="bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded">
                Registration Open
              </span>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 flex flex-col gap-4 md:gap-6">
            
            {/* Title Block */}
            <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-6 md:p-10 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                 <div className="h-[1px] w-8 bg-[#BD5C3C]"></div>
                 <p className="text-[#BD5C3C] font-mono text-xs font-bold uppercase tracking-[0.2em]">{eventData.date}</p>
              </div>
              <h3 className="text-4xl md:text-7xl font-black uppercase mb-4 tracking-tighter leading-none">
                {eventData.title}
              </h3>
              <p className="text-zinc-400 text-sm md:text-xl leading-relaxed font-medium">
                {eventData.subtitle}. Challenge your logic in the ultimate arena.
              </p>
            </div>

            {/* Bento Stats: Stays side-by-side even on medium phones */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-zinc-900/40 border border-white/5 p-5 md:p-8 rounded-2xl flex flex-col hover:border-[#BD5C3C]/30 transition-all">
                <span className="text-zinc-500 text-[9px] md:text-xs uppercase font-mono mb-3">Location</span>
                <p className="text-sm md:text-xl font-bold leading-tight uppercase tracking-tight">{eventData.location}</p>
              </div>
              
              <div className="bg-zinc-900/40 border border-white/5 p-5 md:p-8 rounded-2xl flex flex-col hover:border-[#BD5C3C]/30 transition-all">
                <span className="text-zinc-500 text-[9px] md:text-xs uppercase font-mono mb-3">Prizes Pool</span>
                <p className="text-xl md:text-3xl font-black text-[#BD5C3C]">{eventData.prizePool}</p>
              </div>
            </div>

            {/* CTA Section: High-contrast for mobile clicks */}
          <div className="bg-[#BD5C3C]/10 border border-[#BD5C3C]/20 p-6 md:p-8 rounded-xl md:rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="w-full sm:w-auto text-center sm:text-left">
                <p className="text-[10px] uppercase text-zinc-400 mb-2 font-mono tracking-widest">Format</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {eventData.categories.map((cat, i) => (
                    <span key={i} className="px-2 py-1 bg-black/40 text-[9px] font-bold uppercase tracking-widest border border-white/10 rounded">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
              <Link 
                href={eventData.registrationLink} 
                target="_blank"
                className="w-full sm:w-auto text-center px-10 py-4 bg-[#BD5C3C] hover:bg-white hover:text-black text-white font-black uppercase tracking-[0.2em] text-[11px] transition-all duration-300 shadow-[0_10px_20px_rgba(189,92,60,0.2)]"
              >
                Register Now
              </Link>
            </div>

          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-8 md:mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
             {/* Social link visual indicator */}
             <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-[#BD5C3C] font-bold text-xs">
                IG
             </div>
             <div className="flex flex-col">
                <span className="text-[10px] text-zinc-500 uppercase font-mono">Official Handle</span>
                <span className="text-xs font-bold">{eventData.social}</span>
             </div>
          </div>
          
          <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/80 rounded-full border border-white/5">
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-zinc-400">Slots Filling Fast</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
  