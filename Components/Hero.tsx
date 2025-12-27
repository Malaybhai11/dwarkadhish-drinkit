"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Mail, Phone, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] lg:h-screen overflow-hidden flex items-center"
    >
      {/* ================= 1. BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#FAFAFA]">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: [0.33, 1, 0.68, 1] }}
          className="relative w-full h-full will-change-transform transform-gpu"
        >
          <img
            src="/Hero-bg.jpg"
            alt="Cinematic Hydration"
            className="w-full h-full object-cover object-[73%_center] sm:object-[65%_center] lg:object-center scale-110 md:scale-105"
            loading="eager"
            {...({ fetchpriority: "high" } as any)}
          />
        </motion.div>

        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/20 to-transparent opacity-70 lg:opacity-80" />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* ================= 2. CONTENT ================= */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-24 flex flex-col items-center lg:items-start text-center lg:text-left transform-gpu py-8 sm:py-0">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-blue-600 uppercase mb-3 sm:mb-4"
          >
            DRINK SMARTER
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-[1.1] mb-4 sm:mb-6"
          >
            Hydration that fuels
            <br className="hidden sm:block" /> your focus.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-black font-light max-w-md mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed px-4 sm:px-0"
          >
            Premium water bottles engineered for people who don't compromise on
            health, clarity, and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-auto px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="group relative flex items-center justify-between gap-3 bg-white border border-gray-100/50 text-black px-5 sm:px-6 py-3 sm:py-4 rounded-full shadow-md hover:shadow-xl hover:bg-gray-50 transition-all duration-300 lg:w-max mx-auto lg:mx-0 "
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition" />
              </div>
              <span className="font-semibold text-sm sm:text-[15px] tracking-wide pr-2 sm:pr-4">
                Contact Our Team
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ================= 3. MODAL ================= */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-md z-[90]"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="fixed bottom-0 left-0 right-0 h-[90dvh] sm:h-[85dvh] md:h-[75vh] lg:h-[60vh] bg-white/80 backdrop-blur-3xl rounded-t-[40px] sm:rounded-t-[56px] shadow-[0_-30px_100px_rgba(0,0,0,0.08)] z-[100] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 sm:p-4 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Modal Content */}
              <div className="h-full overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12">
                <div className="max-w-4xl mx-auto">
                  
                  {/* Header */}
                  <div className="mb-8 sm:mb-10 md:mb-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
                    >
                      <span className="w-8 sm:w-12 h-px bg-blue-600" />
                      <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-blue-600">
                        Get In Touch
                      </span>
                    </motion.div>

                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-3 sm:mb-4"
                    >
                      Let's start a <br className="hidden sm:block" />
                      conversation
                    </motion.h2>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm sm:text-base md:text-lg text-gray-500 font-light max-w-2xl"
                    >
<<<<<<< Updated upstream
                      {[
                        { icon: Mail, label: "Email Correspondence", val: "drinkit@gmail.com", href: "mailto:drinkit@gmail.com" },
                        { icon: Phone, label: "Direct Support Line", val: "7698989392", href: "tel:7698989392" }
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
                            <p className="text-lg font-bold text-black group-hover:text-blue-600 transition-colors  tracking-tight">{item.val}</p>
                          </div>
                        </motion.a>
                      ))}
                    </motion.div>
=======
                      Our team is ready to help you find the perfect hydration solution for your lifestyle.
                    </motion.p>
>>>>>>> Stashed changes
                  </div>

                  {/* Contact Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
                    
                    {/* Email Card */}
                    <motion.a
                      href="mailto:hello@drinkit.com"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-gray-100/50 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-32 h-32 sm:w-48 sm:h-48 bg-linear-to-br from-blue-500/10 to-blue-600/5 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="relative z-10">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-linear-to-br from-blue-500/10 to-blue-600/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-500">
                          <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                          Email Us
                        </h3>

                        <p className="text-sm text-gray-500 font-medium mb-4 sm:mb-6">
                          Drop us a line anytime
                        </p>

                        <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
                          <span>hello@drinkit.com</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </motion.a>

                    {/* Phone Card */}
                    <motion.a
                      href="tel:+1234567890"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-gray-100/50 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-32 h-32 sm:w-48 sm:h-48 bg-linear-to-br from-teal-500/10 to-teal-600/5 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                      
                      <div className="relative z-10">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-linear-to-br from-teal-500/10 to-teal-600/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-500">
                          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                          Call Us
                        </h3>

                        <p className="text-sm text-gray-500 font-medium mb-4 sm:mb-6">
                          Available Mon-Fri, 9AM-6PM
                        </p>

                        <div className="flex items-center gap-2 text-sm font-bold text-teal-600">
                          <span>+1 (234) 567-890</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </motion.a>

                  </div>

                  {/* Additional Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] bg-gray-50 border border-gray-100"
                  >
                    <p className="text-xs sm:text-sm text-gray-400 font-medium">
                      Response time: <span className="text-gray-600 font-bold">Within 24 hours</span>
                    </p>
                  </motion.div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}