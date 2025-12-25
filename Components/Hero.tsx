"use client";

import React, { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useTransform, 
} from "framer-motion";
import { ArrowRight, Mail, Phone, X, Star } from "lucide-react";

// --- Configuration ---
const CONTACT_INFO = {
  email: "hello@drinkit.com",
  phone: "+1 (555) 000-0000"
};

// --- Animations ---
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0 }, // Instant
  },
};

const textItemVariants = {
  hidden: { y: 15, opacity: 0, filter: "blur(2px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }, 
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 1.5, ease: "easeOut" } 
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 350, damping: 25 }
  },
  exit: { opacity: 0, scale: 0.98, y: 5, transition: { duration: 0.2 } }
};

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const [isImageReady, setIsImageReady] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 100]); 

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] max-h-[1080px] overflow-hidden bg-white flex items-center">
      
      {/* =========================================
          1. BACKGROUND TEXTURE (Subtle)
      ========================================= */}
      <div className="absolute inset-0 w-full h-full bg-[#FAFAFA]">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-50/40 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* =========================================
          2. THE IMAGE (Positioned BEHIND text)
      ========================================= */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        {/* POSITIONING LOGIC: 
            - Right aligned
            - Overlaps the center
            - Hidden on small mobile to allow text readability, visible on larger screens
        */}
        <div className="absolute top-[10%] bottom-[10%] right-[-10%] md:right-[-5%] w-[110%] md:w-[75%] lg:w-[65%] flex items-center justify-center">
             <motion.img
                initial="hidden"
                animate={isImageReady ? "visible" : "hidden"}
                variants={imageVariants}
                src="/final-bg.png"
                alt="Drink It Bottle"
                onLoad={() => setIsImageReady(true)}
                loading="eager"
                className="w-full h-full object-contain drop-shadow-2xl opacity-90"
            />
        </div>

        {/* THE GRADIENT MASK (The "More Better" Part):
            This gradient goes from Solid White (Left) -> Semi-Transparent (Middle) -> Transparent (Right).
            It ensures the text on the left sits on a readable background, while the image bleeds through on the right.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/70 to-transparent w-[80%] md:w-[60%]" />
      </motion.div>


      {/* =========================================
          3. TEXT CONTENT (Positioned ON TOP)
      ========================================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 w-full h-full flex items-center">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-3xl pt-12"
        >
          {/* Badge */}
          <motion.div variants={textItemVariants} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-100 bg-white/60 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066CC]"></span>
            </span>
            <span className="text-[11px] font-bold tracking-widest text-slate-600 uppercase">New 2025 Series</span>
          </motion.div>

          {/* Headline - "God Level" Typography */}
          <motion.h1 variants={textItemVariants} className="text-5xl sm:text-6xl lg:text-[82px] font-bold tracking-tighter text-slate-900 leading-[1.05] mb-6 drop-shadow-sm">
            Hydration that <br className="hidden sm:block" />
            <span className="text-[#0066CC]">moves with you.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={textItemVariants} className="text-lg sm:text-[20px] text-slate-700 leading-relaxed mb-10 max-w-lg font-medium tracking-tight mix-blend-hard-light">
            Precision-engineered hydration tools designed for the modern workflow. 
            Pure utility meets premium aesthetic.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={textItemVariants} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setOpen(true)}
              className="group relative h-12 sm:h-14 px-8 rounded-xl bg-[#0066CC] text-white font-bold text-[15px] shadow-[0_10px_20px_-5px_rgba(0,102,204,0.3)] hover:shadow-[0_20px_30px_-5px_rgba(0,102,204,0.4)] transition-all duration-300 flex items-center gap-2 overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
            </motion.button>

            <motion.button
              whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.98 }}
              className="h-12 sm:h-14 px-8 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 font-bold text-[15px] shadow-sm hover:border-slate-300 transition-all duration-300 flex items-center"
            >
              View Collection
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={textItemVariants} className="mt-12 flex items-center gap-4">
            <div className="flex -space-x-3">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-200 shadow-sm" style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 15})`, backgroundSize: 'cover' }}/>
               ))}
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-500 gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Trusted by 500+ Pros</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================
          4. MODAL
      ========================================= */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[60]"
            />
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-md relative"
            >
              <div className="bg-white/80 backdrop-blur-2xl rounded-[32px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden p-2">
                <div className="bg-white/60 rounded-[24px] p-1 border border-white/50">
                    <div className="flex items-center justify-between p-6 pb-2">
                        <div>
                        <h3 className="text-xl font-bold text-slate-900">Get in touch</h3>
                        <p className="text-sm text-slate-500 font-medium">Direct line to our sales team.</p>
                        </div>
                        <button onClick={() => setOpen(false)} className="p-2 bg-slate-100/50 hover:bg-slate-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-slate-700" />
                        </button>
                    </div>
                    
                    <div className="p-4 space-y-3">
                        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0066CC] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</div>
                                <div className="text-base font-bold text-slate-900">{CONTACT_INFO.email}</div>
                            </div>
                        </a>
                        <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer">
                            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone</div>
                                <div className="text-base font-bold text-slate-900">{CONTACT_INFO.phone}</div>
                            </div>
                        </a>
                    </div>
                </div>
              </div>
            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}