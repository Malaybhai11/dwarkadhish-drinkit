"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, ChevronDown, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.reload();
  };

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[200] transition-all duration-500 bg-white border-b",
        isScrolled
          ? "py-3 shadow-sm border-gray-100"
          : "py-5 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* --- Logo --- */}
        <div className="flex-shrink-0">
          <Link href="/" onClick={handleHomeClick} className="flex items-center">
            <img src="/logo-img.png" alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
        </div>

        {/* --- Navigation Links --- */}
        <div className="hidden md:flex items-center gap-12">
          {['Home', 'About-us', 'Products'].map((item) => (
            <button
              key={item}
              onClick={item === 'Home' ? handleHomeClick : () => handleScrollToSection(item.toLowerCase().replace('-us', ''))}
              className="group relative py-1"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 group-hover:text-black transition-colors duration-300">
                {item}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-500 ease-in-out" />
            </button>
          ))}
        </div>

        {/* --- Contact Portal --- */}
        <div className="relative">
          <button
            onClick={() => setShowContact(!showContact)}
            className={cn(
              "flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 px-7 py-3 rounded-full border border-gray-100",
              showContact
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-white text-black hover:border-black shadow-xs hover:shadow-md"
            )}
          >
            {showContact ? "Close" : "Contact us"}
            {showContact ? <X size={14} /> : <Mail size={14} />}
          </button>

          {/* Contact Dropdown */}
          {showContact && (
            <div className="absolute top-full right-0 mt-4 w-72 bg-white border border-gray-100 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] p-8 flex flex-col gap-6 transform-gpu animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Mail size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Connect via Email</span>
                    <a href="mailto:hello@drinkit.com" className="text-sm font-bold text-black hover:text-blue-600 transition-colors">hello@drinkit.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <Phone size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Direct Line</span>
                    <a href="tel:+15550000000" className="text-sm font-bold text-black hover:text-blue-600 transition-colors">+1 (555) 000-0000</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* --- Mobile Minimal Links --- */}
      <div className="md:hidden flex space-x-10 justify-center mt-4 border-t border-gray-50 pt-3">
        {['Home', 'About-us', 'Products'].map((item) => (
          <button
            key={item}
            onClick={item === 'Home' ? handleHomeClick : () => handleScrollToSection(item.toLowerCase().replace('-us', ''))}
            className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 active:text-black"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}