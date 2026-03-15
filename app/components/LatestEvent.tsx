"use client";

import React from 'react';
import Image from 'next/image';

interface FeaturedEventProps {
  eventTitle: string;
  eventDescription: string;
  imageUrl: string;
  speakerName: string;
  speakerTitle: string;
  logoUrl?: string;
  link?: string;
}

const FeaturedEventImage: React.FC<FeaturedEventProps> = ({
  eventTitle,
  eventDescription,
  imageUrl,
  speakerName,
  speakerTitle,
  logoUrl,
  link = '#'
}) => {
  return (
    <section className="bg-black  sm:py-5 inset-0 bg-gradient-to-t from-black via-black/70 to-transparent  px-4 sm:px-8 md:px-1Z flex mb-20 md:mb-10 flex-col justify-center items-center">
      <div className="w-full text-center  sm:mb-12">
      
           <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-none mb-2 md:mb-4">
        <span className="block overflow-hidden text-center">
          <span className="title-span block px-2 md:px-5 text-transparent bg-clip-text bg-gradient-to-b from-[#EC6F46] to-white/10">
            LATEST EVENT
          </span>
        </span>
      </h1>
      </div>
      {/* UPDATED: Changed rounding for the curved container effect. */}
      {/* We use a large radius for the top corners and a smaller one for the bottom. */}
      <div className="w-full max-w-7xl relative border-3 border-amber-50   rounded-2xl md:rounded-[50px] overflow-hidden shadow-2xl bg-gray-900">
        
        {/* Background Image */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[450px] xl:h-[750px]">
          <Image
            src={imageUrl}
            alt={eventTitle}
            layout="fill"
            objectFit="cover"
            priority
            className="transition-transform duration-700 ease-in-out"
          />

          {/* Existing Overlay (from bottom up) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-transparent"></div>

          {/* ================================================ */}
          {/* ====== START: NEWLY ADDED OVERLAY LINE ======= */}
          {/* ================================================ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          {/* ================================================ */}
          {/* ======= END: NEWLY ADDED OVERLAY LINE ======== */}
          {/* ================================================ */}

          {/* Logo (optional) */}
          {logoUrl && (
            <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-black/50 rounded-full flex items-center justify-center p-1 sm:p-2 backdrop-blur-sm">
              <Image
                src={logoUrl}
                alt="Event Logo"
                width={80}
                height={80}
                objectFit="contain"
              />
            </div>
          )}

          {/* Event Details Box (Top Aligned) */}
          <div className="absolute top-4 sm:top-10 md:top-5 left-4 sm:left-6 md:left-8 max-w-[90%] sm:max-w-[70%] lg:max-w-[75%] bg-black/0 p-4 sm:p-6 md:p-5 md:rounded-[50px]  border-2  border-[#EB5C2D]  rounded-lg  rounded-bt-xl backdrop-blur-sm  md:mb-10">
            <h2 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold leading-tight mb-3 sm:mb-4">
              {eventTitle}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              {eventDescription}
            </p>

            {/* Speaker Info */}
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden mr-3 sm:mr-4 border-2 border-[#EB5C2D]">
                <Image
                  src="/image.png" // Replace with speaker image
                  alt={speakerName}
                  width={56}
                  height={56}
                  objectFit="cover"
                />
              </div>
              <div>
                <p className="text-gray-200 font-semibold text-sm sm:text-base md:text-lg">{speakerName}</p>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">{speakerTitle}</p>
              </div>
            </div>

        
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventImage;