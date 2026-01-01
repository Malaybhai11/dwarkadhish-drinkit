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
        <section id="about" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <motion.div
                style={{ y }}
                className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-50/50 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"
            />
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
                className="absolute bottom-1/4 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-teal-50/30 rounded-full blur-[80px] md:blur-[100px] -translate-x-1/2 pointer-events-none"
            />

            <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-10">

                {/* Section 1: Cinematic Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center mb-20 md:mb-32 lg:mb-40">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <span className="w-8 md:w-12 h-px bg-blue-600" />
                            <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-600">The Standard</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-black mb-6 md:mb-8 leading-[1.1] tracking-tight">
                            Crafting the <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-teal-500">Purest Essence</span>
                        </h2>

                        <p className="text-base md:text-lg lg:text-xl text-gray-500 font-light leading-relaxed mb-8 md:mb-12 max-w-xl">
                            We don't just bottle water; we engineer hydration. Our process is a symphony of science and nature, ensuring every sip is a testament to purity.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                            {['Rigorous 10-Step Filtration', 'Electrolytic Balance', 'Eco-Friendly Packaging', 'Sustainable Sourcing'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 md:gap-3">
                                    <div className="shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-blue-50 flex items-center justify-center">
                                        <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-600" />
                                    </div>
                                    <span className="text-xs md:text-sm font-bold text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center gap-3 md:gap-4 bg-black text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-sm md:text-base font-bold group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 w-full sm:w-auto justify-center sm:justify-start"
                        >
                            Explore Our Laboratory
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
<<<<<<< Updated upstream
                        <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-square lg:aspect-auto lg:h-[700px] bg-linear-to-br from-blue-50 via-white to-blue-50/30 flex items-center justify-center p-12">
                            <motion.img
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                src="/3imgs_bg_removed.png.png"
=======
                        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-square lg:aspect-auto lg:h-[700px]">
                            <img
                                src="/about-splash.png"
>>>>>>> Stashed changes
                                alt="Pure Water Essence"
                                className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
                            />

                            {/* Floating ID Card / Stat */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
<<<<<<< Updated upstream
                                className="absolute bottom-12 left-12 right-12 bg-white/40 backdrop-blur-2xl border border-white/40 p-8 rounded-3xl shadow-xl"
                            >
                                <div className="flex justify-between items-center text-blue-900">
=======
                                className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 bg-white/10 backdrop-blur-2xl border border-white/20 p-4 md:p-8 rounded-2xl md:rounded-3xl"
                            >
                                <div className="flex justify-between items-center text-white gap-2">
>>>>>>> Stashed changes
                                    {stats.map((stat, i) => (
                                        <div key={i} className="text-center flex-1">
                                            <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider md:tracking-widest opacity-60 mb-0.5 md:mb-1">{stat.label}</p>
                                            <p className="text-lg md:text-2xl font-black">{stat.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Rings */}
                        <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 w-40 h-40 md:w-64 md:h-64 border border-blue-100 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-40 h-40 md:w-64 md:h-64 border border-teal-100 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]" />
                    </motion.div>
                </div>

                {/* Section 2: Features Grid */}
                <div className="relative">
                    <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
                        <h3 className="text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-blue-600 mb-3 md:mb-4">The Pillars</h3>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black">Why the world trusts Drink-It</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -12 }}
                                className={`group relative p-6 md:p-8 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white border ${feature.border} shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden`}
                            >
                                {/* Background Accent */}
                                <div className={`absolute -top-16 -right-16 md:-top-24 md:-right-24 w-32 h-32 md:w-48 md:h-48 bg-linear-to-br ${feature.color} blur-3xl group-hover:scale-150 transition-transform duration-700`} />

                                <div className="relative z-10">
                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-6 md:mb-8 group-hover:rotate-15 transition-transform duration-500`}>
                                        <feature.icon className={`w-6 h-6 md:w-7 md:h-7 ${feature.iconColor}`} />
                                    </div>

                                    <h4 className="text-lg md:text-xl font-bold text-black mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">
                                        {feature.title}
                                    </h4>

                                    <p className="text-gray-500 font-medium text-sm leading-relaxed mb-6 md:mb-8">
                                        {feature.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-wider md:tracking-widest text-gray-300 group-hover:text-blue-600/40 transition-colors">
                                        <span className="w-4 md:w-6 h-px bg-current" />
                                        Premium Grade
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

<<<<<<< Updated upstream


=======
>>>>>>> Stashed changes
            </div>
        </section>
    );
};

export default AboutUs;