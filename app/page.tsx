"use client";

import React, { useEffect, useState } from "react";
import ZoomScrollPreloader from "./components/loader"; // Use your final loader name
import HomePageContent from "./components/HomePgaes/HomePg"; // Import the new component
import CosmicOrbPreloader from "./components/loader";
import Navbar from "./components/Navbar";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loaderdata,setloaderdata] = useState("")
  // A quick check: The original files were .jpg. 
  // Please ensure these .png files exist in your /public folder!
  const loaderImages = [
    "/Gemini_Generated_Image_c73zwnc73zwnc73z_1_-removebg-preview.png",
    "/Generated_Image_September_30__2025_-_11_18PM-removebg-preview.png",
    "/Generated_Image_September_30__2025_-_11_15PM-removebg-preview.png",
  ];

  return (
    // CRITICAL: `overflow-hidden` has been removed to allow scrolling.
    <main className="bg-black w-full min-h-screen">
      {isLoading ? (
        <CosmicOrbPreloader
          image={"/Gemini_Generated_Image_c73zwnc73zwnc73z_1_-removebg-preview.png"}
          clubName="Computer Student Association"
          onLoaded={() => setIsLoading(false)}
        />
      ) : (
      <>
      <Navbar/>
      <HomePageContent />
      </>
      )}
    </main>
  );
};

export default Page;