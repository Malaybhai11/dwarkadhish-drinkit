'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, ChevronRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Animation Variants ---
const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.95, display: 'none' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    display: 'block',
    transition: { duration: 0.2, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: 5,
    transition: { duration: 0.15 }
  }
};

const mobileMenuVariants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.04, 0.62, 0.23, 0.98],
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  closed: { opacity: 0, x: -10 },
  open: { opacity: 1, x: 0 }
};

// --- Sub-Components ---

const NavLink = ({ children, href, onClick }: { children: React.ReactNode; href?: string; onClick?: () => void }) => {
  const Wrapper = href ? Link : 'button';
  const props = href ? { href } : { onClick, type: 'button' as const };

  return (
    // @ts-ignore
    <Wrapper
      {...props}
      className="relative group px-2 py-1 text-sm font-medium text-gray-600 transition-colors hover:text-[#1E88E5]"
    >
      {children}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#1E88E5] transition-all duration-300 ease-out group-hover:w-full" />
    </Wrapper>
  );
};

// --- Main Component ---

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white backdrop-blur-md border-b border-gray-100/50 shadow-sm"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">

          {/* --- LEFT: Brand --- */}
          <div className="flex-shrink-0 cursor-pointer group">
            <Link href="/" aria-label="Home" className="flex items-center gap-3">
              <img
                src="/image.png"
                alt="Drink It Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />

            </Link>
          </div>

          {/* --- CENTER: Desktop Links --- */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink onClick={handleScrollToAbout}>About Us</NavLink>
          </div>

          {/* --- RIGHT: CTA (Desktop) --- */}
          <div className="hidden md:flex items-center relative">
            <div
              className="relative"
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "px-6 py-2.5 rounded-lg text-sm font-semibold text-white",
                  "bg-[#1E88E5] shadow-md hover:shadow-lg transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-[#1E88E5] focus:ring-offset-2"
                )}
              >
                Contact Us
              </motion.button>

              {/* Hover Dropdown */}
              <AnimatePresence>
                {isContactHovered && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 overflow-hidden"
                    style={{ transformOrigin: "top right" }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-default">
                        <div className="p-2 bg-blue-50 rounded-full text-[#1E88E5]">
                          <Mail size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email</span>
                          <span className="text-sm font-medium text-gray-800">hello@drinkit.com</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-default">
                        <div className="p-2 bg-blue-50 rounded-full text-[#1E88E5]">
                          <Phone size={18} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Phone</span>
                          <span className="text-sm font-medium text-gray-800">+1 (555) 000-0000</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* --- RIGHT: Mobile Hamburger --- */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-gray-600 hover:text-[#1E88E5] focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-6">

              {/* Navigation Links */}
              <div className="space-y-4">
                <motion.div variants={itemVariants}>
                  <Link
                    href="/"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center justify-between text-lg font-medium text-gray-800 hover:text-[#1E88E5]"
                  >
                    Home
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                </motion.div>
                <motion.div variants={itemVariants}>
                  <button
                    onClick={handleScrollToAbout}
                    className="flex w-full items-center justify-between text-lg font-medium text-gray-800 hover:text-[#1E88E5]"
                  >
                    About Us
                    <ChevronRight size={16} className="text-gray-400" />
                  </button>
                </motion.div>
              </div>

              <div className="w-full h-[1px] bg-gray-100" />

              {/* Embedded Contact Info for Mobile */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-sm font-semibold text-[#1E88E5] uppercase tracking-wider">Get in touch</h3>
                <a href="mailto:hello@drinkit.com" className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                  <Mail size={18} />
                  <span>hello@drinkit.com</span>
                </a>
                <a href="tel:+15550000000" className="flex items-center gap-3 text-gray-600 hover:text-gray-900">
                  <Phone size={18} />
                  <span>+1 (555) 000-0000</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}