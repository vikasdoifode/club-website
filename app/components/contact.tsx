"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Instagram } from "lucide-react";
import toast, {Toaster} from "react-hot-toast"
const ContactPage = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      );
    }
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Sending...")
    try {
      const response = await fetch("https://formspree.io/f/mpwykazq", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target as HTMLFormElement),
      });
      
      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      setStatus("⚠️ Network error. Please try again later.");
    }
  };

  return (
    <section className="pt-40 pb-24 px-6 flex flex-col items-center justify-start bg-gradient-to-b from-black via-[#1a0e0b] to-black">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'orange', // orange background
            color: 'white',       // white text
            padding: '16px',
            borderRadius: '8px',
            fontWeight: 'bold',
          },
        }}
      />
      {/* Your app content */}
  
      <h1
        className="text-5xl font-extrabold mb-4 text-white tracking-tight"
        ref={headingRef}
      >
        Get in Touch
      </h1>
      <p
        className="text-center mb-14 max-w-2xl text-gray-300 leading-relaxed"
        ref={descRef}
      >
        Have ideas, questions, or collaborations in mind? Drop us a message —
        we’d love to connect and bring your thoughts to life.
      </p>

      <div className="w-full max-w-3xl bg-black/60 backdrop-blur-lg border border-orange-500/40 rounded-3xl p-10 shadow-[0_0_40px_rgba(236,111,70,0.25)] transition-all hover:shadow-[0_0_55px_rgba(236,111,70,0.35)] duration-500">
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/5 border border-orange-500/40 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 rounded-xl bg-white/5 border border-orange-500/40 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all duration-300"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white/5 border border-orange-500/40 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all duration-300"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-4 rounded-xl bg-white/5 border border-orange-500/40 text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 resize-none h-36 transition-all duration-300"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-400 hover:to-orange-300 text-black font-semibold py-3 rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(236,111,70,0.45)] active:scale-95 transition-all duration-300"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-3 text-center text-gray-300 animate-fadeIn">
              {status}
            </p>
          )}
        </form>

        <div className="flex justify-center mt-10 space-x-8 text-white">
          <a
            href="https://github.com/kiran04-code/CSA/tree/main/app"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition-transform duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={34} />
          </a>
          <a
            href="https://linkedin.com/in/csa_vit_pune"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition-transform duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={34} />
          </a>
          <a
            href="https://instagram.com/vitpune_csa"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-400 transition-transform duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={34} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
