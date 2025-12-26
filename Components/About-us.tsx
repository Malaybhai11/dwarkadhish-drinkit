"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Droplets, ShieldCheck, HeartPulse, Truck, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
    {
        icon: Droplets,
        title: "10 Stage Purification",
        description: "Multi-layered filtration system that removes even the microscopic impurities.",
        color: "from-blue-500/10 to-blue-600/5",
        iconColor: "text-blue-600",
        border: "border-blue-100/50",
    },
    {
        icon: ShieldCheck,
        title: "Double Ozonisation",
        description: "Advanced oxygen-based disinfection to ensure zero microbial presence.",
        color: "from-teal-500/10 to-teal-600/5",
        iconColor: "text-teal-600",
        border: "border-teal-100/50",
    },
    {
        icon: HeartPulse,
        title: "Essential Minerals",
        description: "Enriched with precisely balanced Magnesium, Calcium, and Potassium.",
        color: "from-rose-500/10 to-rose-600/5",
        iconColor: "text-rose-600",
        border: "border-rose-100/50",
    },
    {
        icon: Truck,
        title: "Smart Logistics",
        description: "Real-time tracked, contactless delivery system for peak freshness.",
        color: "from-amber-500/10 to-amber-600/5",
        iconColor: "text-amber-600",
        border: "border-amber-100/50",
    },
];

const stats = [
    { label: "Purity Level", value: "99.9%" },
    { label: "Daily Tests", value: "500+" },
    { label: "Active Minerals", value: "7+" },
];

const AboutUs = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <motion.div
                style={{ y }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-teal-50/30 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none"
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">

                {/* Section 1: Cinematic Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-px bg-blue-600" />
                            <span className="text-sm font-black uppercase tracking-[0.4em] text-blue-600">The Standard</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-extrabold text-black mb-8 leading-[1.1] tracking-tight">
                            Crafting the <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">Purest Essence</span>
                        </h2>

                        <p className="text-xl text-gray-500 font-light leading-relaxed mb-12 max-w-xl">
                            We don't just bottle water; we engineer hydration. Our process is a symphony of science and nature, ensuring every sip is a testament to purity.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {['Rigorous 10-Step Filtration', 'Electrolytic Balance', 'Eco-Friendly Packaging', 'Sustainable Sourcing'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="shrink-0 w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                                        <CheckCircle2 className="w-3 h-3 text-blue-600" />
                                    </div>
                                    <span className="text-sm font-bold text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-4 bg-black text-white px-10 py-5 rounded-full font-bold group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                        >
                            Explore Our Laboratory
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-square lg:aspect-auto lg:h-[700px] bg-linear-to-br from-blue-50 via-white to-blue-50/30 flex items-center justify-center p-12">
                            <motion.img
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                src="/3imgs_bg_removed.png.png"
                                alt="Pure Water Essence"
                                className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
                            />

                            {/* Floating ID Card / Stat */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-12 left-12 right-12 bg-white/40 backdrop-blur-2xl border border-white/40 p-8 rounded-3xl shadow-xl"
                            >
                                <div className="flex justify-between items-center text-blue-900">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="text-center">
                                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-1">{stat.label}</p>
                                            <p className="text-2xl font-black">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Rings */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 border border-blue-100 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 border border-teal-100 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]" />
                    </motion.div>
                </div>

                {/* Section 2: Features Grid */}
                <div className="relative">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h3 className="text-sm font-black uppercase tracking-[0.5em] text-blue-600 mb-4">The Pillars</h3>
                        <h2 className="text-4xl font-extrabold text-black">Why the world trusts Drink-It</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -12 }}
                                className={`group relative p-10 rounded-[2.5rem] bg-white border ${feature.border} shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden`}
                            >
                                {/* Background Accent */}
                                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${feature.color} blur-3xl group-hover:scale-150 transition-transform duration-700`} />

                                <div className="relative z-10">
                                    <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-8 group-hover:rotate-15 transition-transform duration-500`}>
                                        <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                                    </div>

                                    <h4 className="text-xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">
                                        {feature.title}
                                    </h4>

                                    <p className="text-gray-500 font-medium text-sm leading-relaxed mb-8">
                                        {feature.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300 group-hover:text-blue-600/40 transition-colors">
                                        <span className="w-6 h-px bg-current" />
                                        Premium Grade
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>



            </div>
        </section>
    );
};

export default AboutUs;
