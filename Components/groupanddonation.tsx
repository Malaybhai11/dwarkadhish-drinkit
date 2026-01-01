"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Heart, Globe, Droplets, CheckCircle2, Award, Zap, Building2, BadgeCheck, Scale, Microscope } from "lucide-react";
import Image from "next/image";

const GroupAndDonation = () => {
    const donationData =  [
        {
            size: "200 ml",
            amount: "₹0.11",
            image: "/200ml_bg_removed.png.png",
            tag: "Starter",
        },
        {
            size: "500 ml",
            amount: "₹0.11",
            image: "/500ml_bg_removed.png.png",
            tag: "Popular",
        },
        {
            size: "1 Litre",
            amount: "₹0.21",
            image: "/1ltr_bg_removed.png.png",
            tag: "Impact",
        },
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
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
            <section className="relative py-24 lg:py-32 px-6 overflow-hidden bg-[#f8fafc]/50">
                {/* Clean Geometric Accents */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-1/2 -z-10" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Content: Corporate Identity */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={stagger}
                            className="space-y-8"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
                                <Building2 className="w-4 h-4 text-blue-600" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-700">Warrior Enterprise Heritage</span>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="space-y-6">
                                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                                    Uncompromising <br />
                                    <span className="text-blue-600">Pure Grade.</span>
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                                    Drink It stands as the flagship consumer wellness achievement of <b>Warrior Enterprise</b>. Engineered to transcend standard hydration through rigorous pharmaceutical-grade standards.
                                </p>
                            </motion.div>

                            {/* Company Grade / Metrics Grid */}
                            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-4">
                                <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <BadgeCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1.5">Certification</p>
                                        <p className="text-lg font-bold text-slate-900 leading-none tracking-tight">Pure Elite Grade</p>
                                    </div>
                                </div>
                                <div className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                                        <Microscope className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1.5">Bio-Integrity</p>
                                        <p className="text-lg font-bold text-slate-900 leading-none tracking-tight">100% Verified</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 pt-6">
                                <button className="h-14 px-8 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 flex items-center gap-3 group shadow-lg shadow-blue-200">
                                    Corporate Profile
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-slate-100 flex items-center justify-center">
                                        <Scale className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Global Standard PRD-24</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Visual: Clean Product Spotlight */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative aspect-square rounded-[3rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-8 lg:p-12 overflow-hidden">
                                {/* Subtle Grid Pattern */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#1e40af 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                                <div className="relative h-full w-full flex flex-col justify-between z-10">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest leading-none">Product Category</p>
                                            <p className="text-2xl font-bold text-slate-900 tracking-tight leading-none">Official Flagship</p>
                                        </div>
                                        <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <div className="flex-1 relative my-8">
                                        <Image
                                            src="/3imgs_bg_removed.png.png"
                                            alt="Drink It Flagship"
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                            priority
                                        />
                                    </div>

                                    <div className="pt-8 border-t border-slate-50 flex justify-between items-end">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Heritage Authority</p>
                                            <p className="text-xl font-bold text-slate-900 leading-none">Warrior Foundation</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Batch ID</p>
                                            <p className="text-xl font-bold text-blue-600 leading-none font-mono">WE-2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Premium floating award */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 px-6 py-4 rounded-2xl bg-white shadow-xl border border-blue-50 flex items-center gap-4 z-20"
                            >
                                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                    <Award className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status</p>
                                    <p className="text-sm font-bold text-slate-900 leading-none">Best In Class</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Impact / Donation — Modern Professional Grid */}
            <section className="py-24 lg:py-32 px-6 bg-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
                        >
                            <Heart className="w-3 h-3 fill-current" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Global Impact Mission</span>
                        </motion.div>

                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">One Bottle, Many Lives.</h2>
                        <p className="text-lg text-slate-500 font-medium">
                            Every purchase fuels global clean water initiatives through the <span className="text-slate-900 font-bold">Rithumas Foundation</span>. Clean water is a fundamental right.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0">
                        {donationData.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 overflow-hidden flex flex-col"
                            >
                                {/* Top info */}
                                <div className="flex justify-between items-center mb-8 relative z-10">
                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest">
                                        {item.tag}
                                    </span>
                                    <span className="text-xs font-bold text-slate-300 font-mono tracking-tighter">
                                        {item.size}
                                    </span>
                                </div>

                                {/* Image content with subtle backdrop */}
                                <div className="relative h-64 mb-8 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-blue-50/30 rounded-full blur-2xl group-hover:bg-blue-100/40 transition-colors" />
                                    <Image
                                        src={item.image}
                                        alt={item.size}
                                        fill
                                        className="object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Text content */}
                                <div className="text-center space-y-6 mt-auto relative z-10">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Donation Value</p>
                                        <p className="text-4xl font-bold text-slate-900 tracking-tight">{item.amount}</p>
                                    </div>
                                    <div className="pt-6 border-t border-slate-50">
                                        <div className="flex items-center justify-center gap-2 text-blue-600 mb-2">
                                            <CheckCircle2 className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-tight">Direct Blockchain Log</span>
                                        </div>
                                        <p className="text-[10px] text-slate-400 font-medium leading-relaxed max-w-[180px] mx-auto uppercase tracking-wide">
                                            Managed by Rithumas Foundation transparency records.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trust Infrastructure */}
                    <div className="mt-20 pt-16 border-t border-slate-100">
                        <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
                            {[
                                { icon: Globe, label: "Global Presence", sub: "124 Districts" },
                                { icon: Shield, label: "Blockchain Verified", sub: "Public Ledger" },
                                { icon: Droplets, label: "Social Impact", sub: "20k+ Lives Touched" }
                            ].map((badge, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 * i }}
                                    className="flex items-center gap-4 px-4 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                                        <badge.icon className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors duration-300" />
                                    </div>
                                    <div className="space-y-0.5">
                                        <div className="text-sm font-bold text-slate-900 leading-none">{badge.label}</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{badge.sub}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GroupAndDonation;
