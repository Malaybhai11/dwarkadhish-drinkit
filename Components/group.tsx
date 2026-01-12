"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Heart, Globe, Droplets, CheckCircle2, Award, Zap, Building2, BadgeCheck, Scale, Microscope, Mail, Phone, Globe as GlobeIcon, X } from "lucide-react";
import Image from "next/image";

const Group = () => {
    const [showContact, setShowContact] = useState(false);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const stagger = {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="w-full bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
            {/* SECTION 1: Professional Global Flagship */}
            <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 overflow-hidden bg-[#f8fafc]/50">
                {/* Clean Geometric Accents */}
                <div className="absolute top-0 right-0 w-1/2 sm:w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2 -z-10" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">

                        {/* Content: Corporate Identity */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                            className="space-y-6 sm:space-y-8"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 border border-blue-100">
                                <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-blue-700">Warrior Enterprise Heritage</span>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                                    Uncompromising <br />
                                    <span className="text-blue-600">Pure Grade.</span>
                                </h1>
                                <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
                                    Drink It stands as the flagship consumer wellness achievement of <b>Warrior Enterprise</b>. Engineered to transcend standard hydration through rigorous pharmaceutical-grade standards.
                                </p>
                            </motion.div>

                            {/* Company Grade / Metrics Grid */}
                            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
                                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2 sm:space-y-3">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1 sm:mb-1.5">Certification</p>
                                        <p className="text-base sm:text-lg font-bold text-slate-900 leading-none tracking-tight">Pure Elite Grade</p>
                                    </div>
                                </div>
                                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm space-y-2 sm:space-y-3">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Microscope className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1 sm:mb-1.5">Bio-Integrity</p>
                                        <p className="text-base sm:text-lg font-bold text-slate-900 leading-none tracking-tight">100% Verified</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-6 pt-6">
                                <button onClick={() => setShowContact(true)} className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-xl bg-blue-600 text-white text-sm sm:text-base font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 group shadow-lg shadow-blue-200">
                                    Place Order
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-slate-100 flex items-center justify-center">
                                        <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                                    </div>
                                    <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Global Standard PRD-24</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Visual: Clean Product Spotlight */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative mt-8 lg:mt-0"
                        >
                            <div className="relative aspect-square rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-6 sm:p-8 lg:p-12 overflow-hidden">
                                {/* Subtle Grid Pattern */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e40af 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                                <div className="relative h-full w-full flex flex-col justify-between z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-0.5 sm:space-y-1">
                                            <p className="text-[9px] sm:text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">Product Category</p>
                                            <p className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none">Official Flagship</p>
                                        </div>
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                                            <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                    </div>

                                    <div className="flex-1 relative my-6 sm:my-8">
                                        <Image
                                            src="/3imgs_bg_removed.png.png"
                                            alt="Drink It Flagship"
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            priority
                                        />
                                    </div>

                                    <div className="pt-6 sm:pt-8 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-0">
                                        <div className="space-y-0.5 sm:space-y-1">
                                            <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Heritage Authority</p>
                                            <p className="text-lg sm:text-xl font-bold text-slate-900 leading-none">Warrior Foundation</p>
                                        </div>
                                        <div className="text-left sm:text-right">
                                            <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Batch ID</p>
                                            <p className="text-lg sm:text-xl font-bold text-blue-600 leading-none font-mono">WE-2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Premium floating award */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-2 right-2 sm:-top-6 sm:-right-6 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white shadow-xl border border-blue-50 flex items-center gap-3 sm:gap-4 z-20"
                            >
                                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5 sm:mb-1">Status</p>
                                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-none">Best In Class</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Modal */}
            {showContact && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setShowContact(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowContact(false)}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5 text-slate-500" />
                        </button>

                        <div className="p-8 sm:p-10">
                            {/* Header */}
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Contact Us</h2>
                                <p className="text-slate-600">Get in touch with our team to place your order</p>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                {/* Phone */}
                                <motion.a
                                    href="tel:+919876543210"
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 hover:border-blue-300 transition-colors cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Phone</p>
                                        <p className="text-lg font-bold text-slate-900">+91 7698989392</p>
                                    </div>
                                </motion.a>

                                {/* Email */}
                                <motion.a
                                    href="mailto:hello@drinkit.com"
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100 hover:border-blue-300 transition-colors cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Email</p>
                                        <p className="text-lg font-bold text-slate-900">hello@drinkit.com</p>
                                    </div>
                                </motion.a>
                            </div>

                            {/* CTA Button */}
                            <button
                                onClick={() => setShowContact(false)}
                                className="w-full mt-8 h-12 px-6 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default Group;
