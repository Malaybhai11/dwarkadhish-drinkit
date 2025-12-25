"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Mail, Phone, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center">
      {/* 
        =========================================
        1. CINEMATIC BACKGROUND 
        =========================================
      */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#FAFAFA]">
        {/* Hardware-Accelerated Cinematic Zoom Layer */}
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 20,
            ease: [0.33, 1, 0.68, 1], // Custom slow ease out
          }}
          className="relative w-full h-full will-change-transform transform-gpu"
        >
          <img
            src="/Hero-bg.jpg"
            alt="Cinematic Hydration"
            className="w-full h-full object-cover object-center scale-110 md:scale-105"
            loading="eager"
            {...({ fetchpriority: "high" } as any)}
          />
        </motion.div>

        {/* Subtle Cinematic Noise (Masks artifacts and adds HD texture) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        {/* 
          PREMIUM OVERLAY SYSTEM: 
          We use zero blur to keep the HD details. 
          The side mask ensures text readability while the vertical fade grounds the scene.
        */}
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/20 to-transparent opacity-70 lg:opacity-80" />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* 
        =========================================
        2. CONTENT LAYER
        =========================================
      */}
      <div className="relative z-10 w-full px-8 lg:px-24 flex flex-col items-center lg:items-start text-center lg:text-left transform-gpu">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-bold tracking-[0.3em] text-blue-600 uppercase mb-4"
          >
            DRINK SMARTER
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-extrabold text-black leading-[1.1] mb-6"
          >
            Hydration that fuels <br className="hidden md:block" /> your focus.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-gray-500 font-light max-w-md mb-10 leading-relaxed"
          >
            Premium water bottles engineered for people who don’t compromise on
            health, clarity, and performance.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="group relative flex items-center justify-between lg:justify-start gap-4 bg-white border border-gray-100/50 text-black px-6 py-4 rounded-full shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300 w-full lg:w-max overflow-hidden"
            >
              {/* Left Icon Bubble */}
              <div className="relative flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full transition-all duration-300 group-hover:scale-105">
                <ChevronRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              <span className="font-semibold text-[15px] tracking-wide pr-4">
                Contact Our Team
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* 
        =========================================
        3. CONTACT MODAL (Slide from Bottom)
        =========================================
      */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Ultra-Smooth Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-100"
            />

            {/* Premium Editorial Drawer */}
            <motion.div
              initial={{ y: "100%", opacity: 0.5 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0.5 }}
              transition={{ type: "spring", damping: 30, stiffness: 220, mass: 0.8 }}
              className="fixed bottom-0 left-0 right-0 h-[70dvh] md:h-[60vh] bg-white/80 backdrop-blur-3xl rounded-t-[56px] shadow-[0_-30px_100px_rgba(0,0,0,0.08)] z-110 border-t border-white/50 overflow-hidden"
            >
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-blue-50/50 to-transparent pointer-events-none" />

              <div className="max-w-6xl mx-auto h-full px-8 lg:px-16 py-12 lg:py-20 flex flex-col relative">
                {/* Drag / Close Handle */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-gray-200/50 rounded-full md:hidden" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start h-full">
                  {/* Left Column: Primary Content */}
                  <div className="lg:col-span-7 space-y-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-4"
                    >
                      <span className="text-[10px] font-bold tracking-[0.4em] text-blue-600 uppercase">Direct Access</span>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.05]">
                        Engineered for elite <br className="hidden md:block" /> performance.
                      </h2>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {[
                        { icon: Mail, label: "Email Correspondence", val: "hello@drinkit.com", href: "mailto:hello@drinkit.com" },
                        { icon: Phone, label: "Direct Support Line", val: "+1 (555) 000-0000", href: "tel:+15550000000" }
                      ].map((item, i) => (
                        <motion.a
                          key={i}
                          href={item.href}
                          whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,1)" }}
                          className="group p-6 rounded-[24px] bg-white/40 border border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col gap-6"
                        >
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-12">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</p>
                            <p className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item.val}</p>
                          </div>
                        </motion.a>
                      ))}
                    </motion.div>
                  </div>

                  {/* Right Column: Brand Context */}
                  <div className="lg:col-span-5 hidden lg:flex flex-col h-full justify-between items-end text-right">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      onClick={() => setIsModalOpen(false)}
                      className="group flex items-center gap-3 py-2 px-4 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100"
                    >
                      <span className="text-[10px] font-bold tracking-tighter text-gray-400 group-hover:text-black transition-colors uppercase">Dismiss Escape key</span>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-xs">
                        <X className="w-3 h-3 text-black" />
                      </div>
                    </motion.button>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-8"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-end gap-2 mb-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Consultants Online</p>
                        </div>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-[240px] ml-auto">
                          Our hydration engineers are currently processing requests. Expect a response within 2 hours.
                        </p>
                      </div>

                      <div className="pt-8 border-t border-gray-100 flex flex-col items-end">
                        <p className="text-[10px] font-black text-black tracking-[0.6em] mb-4 uppercase">DRINK IT</p>
                        <p className="text-[11px] text-gray-400 leading-tight">
                          Jamnagar <br /> Gujarat, India
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Mobile Close Button (Floating) */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-8 right-8 md:hidden p-4 bg-gray-50 rounded-full"
              >
                <X className="w-5 h-5 text-black" />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}