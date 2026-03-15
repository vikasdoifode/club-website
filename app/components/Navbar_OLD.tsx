// "use client";

// import Image from 'next/image';
// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X } from 'lucide-react';
// import { gsap } from 'gsap';

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const logoRef = useRef(null);
//   const linksRef = useRef([]);
//   const mobileMenuRef = useRef(null);

//   // Desktop Animation
//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

//     tl.from(logoRef.current, { x: -100, opacity: 0 })
//       .from(
//         linksRef.current,
//         { x: 100, opacity: 0, stagger: 0.1 },
//         "-=0.8"
//       );
//   }, []);

//   // Mobile Menu Animation
//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       gsap.fromTo(
//         mobileMenuRef.current,
//         { y: -50, opacity: 0 },
//         { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
//       );
//     }
//   }, [isMobileMenuOpen]);

//   const menuLinks = [
//     { name: "Home", href: "#home" },
//     { name: "Clubs", href: "#clubs" },
//     { name: "Events", href: "#events" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-4 left-0 right-0 z-50 md:px-18  px-6">
//       <div className="w-full md:w-[100%]  backdrop-blur-md shadow-md rounded-4xl px-1 md:px-3 py-2  border-[#ec6f46] flex items-center justify-between">
//         {/* Left Logo + Text */}
//         <div  className="flex items-center space-x-3">
//           <div className="rounded-full border-2 border-amber-50 justify-center items-center  p-1 transition-transform duration-700 hover:scale-110">
//             <Image
//               src="/logo.ico"
//               alt="Logo"
//               width={40}
//               height={40}
//               className="rounded-full transition-transform duration-700 hover:rotate-[360deg]"
//             />
//           </div>
//           <h1 className="text-lg sm:text-xl font-semibold text-white">
//             Computer Student <span className="text-[#ec6f46]">Association</span>
//           </h1>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6 text-white">
//           {menuLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.href}
             
//               className="hover:text-yellow-400 transition-colors duration-300"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
//             {isMobileMenuOpen ? (
//               <X size={28} className="text-white" />
//             ) : (
//               <Menu size={28} className="text-white" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div
//           ref={mobileMenuRef}
//           className="md:hidden w-[90%] mx-auto bg-[#ec6f46] backdrop-blur-md px-6 py-4 space-y-4 flex flex-col rounded-xl mt-2"
//         >
//           {menuLinks.map((link, index) => (
//             <a
//               key={index}
//               href={link.href}
//               className="hover:text-[#ec6f46] transition-colors duration-300"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
