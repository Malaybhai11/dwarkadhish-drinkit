"use client";

import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Send, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-white text-gray-900 pt-24 pb-12 border-t border-gray-100 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-bl from-blue-50/30 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-gray-100 pb-20">

                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div>
                            <Link href="/">
                                <img src="/logo-img.png" alt="Drink It" className="h-12 w-auto object-contain mb-8 group-hover:scale-105 transition-transform" />
                            </Link>
                            <p className="text-gray-500 text-sm leading-relaxed font-normal max-w-xs">
                                India's most trusted packaged drinking water brand. Committed to purity, hygiene, and health since 2025.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: Twitter, href: "#" }
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    whileHover={{ y: -5, backgroundColor: "#2563eb", borderColor: "#2563eb", color: "#fff" }}
                                    className="w-11 h-11 bg-white text-gray-400 rounded-xl flex items-center justify-center transition-all duration-300 border border-gray-100 shadow-xs hover:shadow-lg"
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Corporate</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Products', 'Contact Us', 'Careers', 'Media'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-300">
                                        <div className="w-0 h-px bg-blue-600 transition-all duration-500 group-hover:w-5" />
                                        <span className="text-sm font-semibold tracking-tight">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Range */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Our Range</h4>
                        <ul className="space-y-4">
                            {['250ml Premium', '500ml Active', '1 Litre Standard', '2 Litre Family', '5 Litre Jar', '20 Litre Enterprise'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-300">
                                        <div className="w-0 h-px bg-blue-600 transition-all duration-500 group-hover:w-5" />
                                        <span className="text-sm font-semibold tracking-tight">{item}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Get In Touch</h4>
                        <div className="space-y-6">
                            <motion.a
                                href="tel:9981543499"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-bold text-gray-900 tracking-tight transition-colors group-hover:text-blue-600">7698989392</span>
                            </motion.a>

                            <motion.a
                                href="mailto:contact@drinkit.com"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-bold text-gray-900 transition-colors group-hover:text-blue-600 leading-none">drinkit@gmail.com</span>
                            </motion.a>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="text-[13px] text-gray-500 font-medium leading-relaxed pt-1">
                                    Owned by Naga bhai Gojiya<br />Serving Across India
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.4em]">
                        © 2025 DRINK IT!! • BEYOND PURITY
                    </p>
                    <div className="flex gap-10">
                        {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                            <Link key={item} href="#" className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
