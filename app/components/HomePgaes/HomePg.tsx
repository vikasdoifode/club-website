"use client";

import React from "react";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import AboutTeam from "../AboutTeam";
import HorizontalScroller from "../Card";
import Footer from "../Footer";
import CustomCursor from "../custumCorsor";
import ClubsSection from "../Domain";
import ClubMembersSection from "../ClubMmber";
import FeaturedEventImage from "../LatestEvent";
import AutoIncrementPage from "../EventsVlues";
import TeamCounterSection from "../EventsVlues";
import Events from "../EventLookUp";
import EventSection from "../Event2";

// Import all your sections here
const latestEventData = {
  eventTitle: "ML Unplugged: Hands-on Workshop",
  eventDescription: "CSA VIT Pune presents a hands-on workshop with industry expert Sankar Patnaik from JP Morgan Chase and Citi.",
  imageUrl: "/IMG_7805.jpg", // Path to your event image
  speakerName: "Sankar Patnaik",
  speakerTitle: "Former @ JP Morgan Chase, Citi",
  logoUrl: "/Gemini_Generated_Image_c73zwnc73zwnc73z_1_-removebg-preview.png", // Optional: Path to your club or event logo
  link: "https://example.com/ml-unplugged-registration", // Optional: Link to registration/event page
};


const HomePageContent = () => {
  return (
    <div className="animate-fadeIn">

      <CustomCursor />
      <HeroSection />
      <AboutTeam />
      <ClubsSection />
      <HorizontalScroller />
      <Events />
      <EventSection/>
      {/* Render the new FeaturedEventImage component here */}

      <FeaturedEventImage {...latestEventData} />

      <ClubMembersSection />
      <TeamCounterSection />
      <Footer />
    </div>
  );
};

export default HomePageContent;