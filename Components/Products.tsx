"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
    ShoppingBag,
    Star,
    ArrowRight,
    X,
    Plus,
    Minus,
    Check,
    Zap,
    ChevronRight,
    ShieldCheck,
    TrendingUp
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// DATA SYSTEM
// ─────────────────────────────────────────────────────────────

type Product = {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    tag?: string;
    details: string;
    specs: { icon: any; label: string; value: string }[];
    description_long: string;
};

const PRODUCTS: Product[] = [
    {
        id: "1ltr",
        name: "Eco-Titan 1L",
        category: "Performance",
        price: 20,
        image: "/1ltr_bg_removed.png.png",
        tag: "Best Seller",
        details: "Ultimate capacity for long-duration hydration and peak performance.",
        description_long: "The Eco-Titan 1L is engineered for those who push their limits. With its massive 1-liter capacity and advanced triple-layered insulation, it keeps your water ice-cold for up to 36 hours. The rugged exterior is designed for extreme conditions, from mountain trails to high-intensity gym sessions.",
        specs: [
            { icon: Zap, label: "Cooling", value: "36h Cold" },
            { icon: ShieldCheck, label: "Built", value: "Armor Steel" },
            { icon: TrendingUp, label: "Volume", value: "1000ml" }
        ]
    },
    {
        id: "500ml",
        name: "Urban Flow 500ml",
        category: "Everyday",
        price: 10,
        image: "/500ml_bg_removed.png.png",
        tag: "Perfect Fit",
        details: "The definitive companion for your high-intensity urban workflow.",
        description_long: "Sleek, slim, and sophisticated. The Urban Flow 500ml is designed to fit perfectly in your hand and your car's cup holder. Its dual-process powder coating provides a premium grip, while the precision-engineered cap ensures zero leaks, no matter where your day takes you.",
        specs: [
            { icon: Zap, label: "Coating", value: "Grip-Max" },
            { icon: ShieldCheck, label: "Steel", value: "316 Pro" },
            { icon: TrendingUp, label: "Volume", value: "500ml" }
        ]
    },
    {
        id: "200ml",
        name: "Pocket Hydrate 200ml",
        category: "Compact",
        price: 5,
        image: "/200ml_bg_removed.png.png",
        tag: "Travel Lite",
        details: "Zero-mass philosophy. Essential hydration at a fraction of the weight.",
        description_long: "For the minimalist on the move. The Pocket Hydrate is our most portable bottle yet. Forged with aero-grade titanium strength at a fraction of the weight, it's the perfect companion for quick sprints, travel, or keeping on your bedside table.",
        specs: [
            { icon: Zap, label: "Weight", value: "120g" },
            { icon: ShieldCheck, label: "Grade", value: "Ultra-Light" },
            { icon: TrendingUp, label: "Volume", value: "200ml" }
        ]
    }
];

const CATEGORIES = ["All Products", "Performance", "Everyday", "Compact"];

// ─────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────

const ProductCard = ({ product, priority, onOpen }: { product: Product; priority: number; onOpen: (p: Product) => void }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        mouseX.set(mouseXPos / width - 0.5);
        mouseY.set(mouseYPos / height - 0.5);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: priority * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative cursor-pointer perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={() => onOpen(product)}
        >
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
<<<<<<< Updated upstream
                className={`relative aspect-4/5 overflow-hidden rounded-[40px] bg-linear-to-br from-[#f8fafc] via-white to-[#e2e8f0] mb-8 ring-1 ring-black/5 transform-gpu will-change-transform flex items-center justify-center ${product.id === "1ltr" ? "p-4" : "p-12"}`}
=======
                className="relative aspect-4/5 overflow-hidden rounded-[24px] md:rounded-[40px] bg-[#f2f2f2] mb-4 md:mb-8 ring-1 ring-black/5 transform-gpu will-change-transform"
>>>>>>> Stashed changes
            >
                {/* Animated Water Wave Background (Enhanced) */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            x: [0, -60, 0],
                            y: [0, 15, 0],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bottom-[-10%] left-[-20%] w-[140%] h-[60%] opacity-[0.08]"
                    >
                        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-blue-600">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.4,38.56,73.12,22.34,149.93,35.91,226.47,21.94,62.43-11.39,118.32-37,181.18-51.52,58.7-13.6,122.31-13.12,176.65,11.53V0Z" opacity=".5"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" opacity=".25"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,52.81,23.06,108.43,45.82,166.42,43.43Q1000,90,1200,60V0Z"></path>
                        </svg>
                    </motion.div>
                </div>

                {/* Subtle Ambient Light Overlay */}
                <div className="absolute inset-0 bg-radial-gradient from-white/40 to-transparent z-10 pointer-events-none" />

                {/* Ground Shadow */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 z-10" />

                {/* Tag Overlay */}
                {product.tag && (
<<<<<<< Updated upstream
                    <div className="absolute top-8 left-8 z-30 overflow-hidden rounded-full">
                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            className="bg-white/80 backdrop-blur-xl px-4 py-2 flex items-center gap-2 shadow-sm border border-black/5"
=======
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 overflow-hidden rounded-full">
                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            className="bg-white/90 backdrop-blur-xl px-3 py-1.5 md:px-4 md:py-2 flex items-center gap-2"
>>>>>>> Stashed changes
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-[8px] md:text-[9px] font-black tracking-[0.2em] text-black uppercase">
                                {product.tag}
                            </span>
                        </motion.div>
                    </div>
                )}

                {/* 
                  DYNAMIC IMAGE SCALING ENGINE:
                  Adjust these values to control the visual hierarchy.
                  The 1L bottle should significantly outsize the smaller units.
                */}
                <motion.img
                    layoutId={`img-${product.id}`}
                    src={product.image}
                    alt={product.name}
                    className={`relative z-20 w-auto object-contain transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:-translate-y-8 transform-gpu drop-shadow-[0_45px_65px_rgba(0,0,0,0.15)] 
                        ${product.id === "1ltr" ? "h-[105%] scale-110" : product.id === "500ml" ? "h-[75%]" : "h-[55%]"}`}
                    style={{ translateZ: 100 }}
                />

                {/* Magnetic Action Portal */}
<<<<<<< Updated upstream
                <div className="absolute inset-0 flex items-center justify-center translate-z-100 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 pointer-events-none z-40">
                    <div className="w-24 h-24 rounded-full bg-blue-600/20 backdrop-blur-3xl border border-blue-600/30 flex items-center justify-center flex-col shadow-2xl">
                        <Plus className="w-6 h-6 text-blue-600 mb-1" />
                        <span className="text-[8px] font-black text-blue-600 tracking-widest uppercase">Inspect</span>
=======
                <div className="absolute inset-0 flex items-center justify-center translate-z-100 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 pointer-events-none z-30">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-2xl border border-white/40 flex items-center justify-center flex-col shadow-2xl">
                        <Plus className="w-5 h-5 md:w-6 md:h-6 text-white mb-1" />
                        <span className="text-[8px] font-black text-white tracking-widest uppercase">Explore</span>
>>>>>>> Stashed changes
                    </div>
                </div>
            </motion.div>

            <div className="flex justify-between items-end px-2 md:px-4">
                <div className="space-y-0.5 md:space-y-1">
                    <p className="text-[8px] md:text-[9px] font-bold text-blue-600 uppercase tracking-[0.2em] md:tracking-[0.3em]">{product.category}</p>
                    <h3 className="text-lg md:text-2xl font-bold text-black tracking-tighter leading-none">{product.name}</h3>
                </div>
                <div className="text-right">
<<<<<<< Updated upstream
                    <p className="text-sm font-bold text-gray-300 line-through tracking-tighter mb-0.5">₹{(product.price + 500).toLocaleString()}</p>
                    <p className="text-xl font-black text-black tracking-tighter leading-none">₹{product.price.toLocaleString()}</p>
=======
                    <p className="text-xs md:text-sm font-bold text-gray-300 line-through tracking-tighter mb-0.5">₹{(product.price + 600).toLocaleString()}</p>
                    <p className="text-base md:text-xl font-black text-black tracking-tighter leading-none">₹{product.price.toLocaleString()}</p>
>>>>>>> Stashed changes
                </div>
            </div>
        </motion.div>
    );
};

// ─────────────────────────────────────────────────────────────
// MAIN SECTION
// ─────────────────────────────────────────────────────────────

export default function ProductSection() {
    const [activeTab, setActiveTab] = useState("All Products");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded] = useState(false);

    const filtered = activeTab === "All Products"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeTab);

    const handleAdd = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProduct]);

    return (
        <section id="products" className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-20 lg:pb-40 px-4 md:px-6 lg:px-24 overflow-hidden">
            {/* Editorial Header */}
            <div className="max-w-7xl mx-auto mb-16 md:mb-24 lg:mb-36">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-12 lg:gap-16">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 md:gap-3 mb-4 md:mb-8"
                        >
<<<<<<< Updated upstream
                            <div className="h-px w-12 bg-blue-600" />
                            <p className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase">Premium Collection</p>
=======
                            <div className="h-px w-8 md:w-12 bg-blue-600" />
                            <p className="text-[10px] md:text-xs font-black tracking-[0.3em] md:tracking-[0.5em] text-blue-600 uppercase">The Arsenal</p>
>>>>>>> Stashed changes
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter leading-[0.9]"
                        >
                            Designed for <br /> superior hydration.
                        </motion.h2>
                    </div>

                    {/* Luxury Navigation */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {CATEGORIES.map((cat, i) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`group relative px-4 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full text-[9px] md:text-[10px] lg:text-[11px] font-black tracking-[0.15em] md:tracking-[0.2em] uppercase transition-all duration-500
                  ${activeTab === cat ? "text-white" : "text-gray-400 hover:text-black"}`}
                            >
                                {activeTab === cat && (
                                    <motion.div
                                        layoutId="pill"
                                        className="absolute inset-0 bg-blue-600 rounded-full z-0 shadow-xl shadow-blue-200"
                                        transition={{ type: "spring", bounce: 0.1, duration: 0.7 }}
                                    />
                                )}
                                <span className="relative z-10">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid Layout - Fixed to 3 cols for 3 products */}
            <div className="max-w-7xl mx-auto">
                <motion.div
                    layout
<<<<<<< Updated upstream
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
=======
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-12 md:gap-y-24"
>>>>>>> Stashed changes
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((product, idx) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                priority={idx}
                                onOpen={(p) => {
                                    setSelectedProduct(p);
                                    setQuantity(1);
                                }}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* RE-ENGINEERED OVERLAY EXPERIENCE (NEXT LEVEL) */}
            <AnimatePresence>
                {selectedProduct && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-3xl z-[150]"
                        />

                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 35, stiffness: 220, mass: 0.8 }}
<<<<<<< Updated upstream
                            className="fixed bottom-0 left-0 right-0 top-0 md:top-[8vh] md:left-4 md:right-4 md:rounded-t-[64px] bg-white z-160 overflow-hidden"
=======
                            className="fixed bottom-0 left-0 right-0 top-0 md:top-[8vh] lg:top-[12vh] md:left-4 md:right-4 md:rounded-t-[48px] lg:md:rounded-t-[64px] bg-white z-[160] overflow-hidden"
>>>>>>> Stashed changes
                        >
                            <div className="h-full flex flex-col md:flex-row relative overflow-y-auto no-scrollbar">

                                {/* Visual Anchor (The Cinematic Half) */}
<<<<<<< Updated upstream
                                <div className="w-full md:w-[45%] h-[50vh] md:h-auto md:min-h-full bg-linear-to-br from-[#f8f8f8] to-[#efefef] relative overflow-hidden group flex items-center justify-center p-16">
                                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-1/2 h-8 bg-black/5 blur-3xl rounded-full" />
=======
                                <div className="w-full md:w-[45%] h-[40vh] md:h-full bg-[#f8f8f8] relative overflow-hidden group">
>>>>>>> Stashed changes
                                    <motion.img
                                        layoutId={`img-${selectedProduct.id}`}
                                        src={selectedProduct.image}
                                        className="w-auto h-[80%] max-w-[80%] object-contain scale-110 md:scale-100 drop-shadow-[0_30px_60px_rgba(0,0,0,0.1)]"
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                    {/* Floating Identity Label */}
                                    <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20">
                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="flex flex-col"
                                        >
                                            <span className="text-[8px] md:text-[10px] font-black text-gray-300 tracking-[0.4em] md:tracking-[0.6em] uppercase mb-1">Authentic Gear</span>
                                            <div className="flex items-center gap-2 md:gap-3">
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-600" />
                                                <h4 className="text-base md:text-xl font-bold text-black uppercase tracking-widest">{selectedProduct.id}</h4>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Exit Hook (Mobile) */}
<<<<<<< Updated upstream
                                    <button onClick={() => setSelectedProduct(null)} className="md:hidden absolute top-8 right-8 p-4 bg-white/80 backdrop-blur-xl rounded-full z-50 shadow-lg">
                                        <X className="w-6 h-6 text-black" />
=======
                                    <button onClick={() => setSelectedProduct(null)} className="md:hidden absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-xl rounded-full z-50">
                                        <X className="w-5 h-5 text-black" />
>>>>>>> Stashed changes
                                    </button>
                                </div>

                                {/* Content Anchor (The Editorial Half) */}
<<<<<<< Updated upstream
                                <div className="grow p-8 md:p-16 lg:p-24 relative flex flex-col justify-start">

                                    {/* Dismiss Controller (Desktop) */}
                                    <button onClick={() => setSelectedProduct(null)} className="hidden md:flex absolute top-12 right-12 items-center gap-4 group cursor-pointer z-50">
                                        <span className="text-[10px] font-black tracking-[0.4em] text-gray-300 group-hover:text-black transition-colors uppercase">Close View</span>
                                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:rotate-90">
                                            <X size={16} className="text-black group-hover:text-white" />
                                        </div>
                                    </button>

                                    <div className="max-w-3xl w-full mx-auto md:mx-0 pt-8 md:pt-0">
=======
                                <div className="grow p-6 md:p-12 lg:p-24 xl:p-32 overflow-y-auto no-scrollbar relative flex items-start md:items-center">

                                    {/* Dismiss Controller (Desktop) */}
                                    <button onClick={() => setSelectedProduct(null)} className="hidden md:flex absolute top-8 right-8 lg:top-16 lg:right-16 items-center gap-3 md:gap-4 group cursor-pointer z-50">
                                        <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] text-gray-300 group-hover:text-black transition-colors uppercase">Terminate View</span>
                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:rotate-90">
                                            <X size={14} className="md:w-4 md:h-4 text-black group-hover:text-white" />
                                        </div>
                                    </button>

                                    <div className="max-w-3xl w-full mt-4 md:mt-0">
>>>>>>> Stashed changes
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.8 }}
<<<<<<< Updated upstream
                                            className="space-y-10"
                                        >
                                            {/* Identity Row */}
                                            <div className="space-y-4">
                                                <span className="text-xs font-black text-blue-600 uppercase tracking-[0.5em] block">{selectedProduct.category}</span>
                                                <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-none">{selectedProduct.name}</h2>
                                                <div className="flex items-center gap-6 pt-2">
                                                    <div className="flex items-center gap-2">
                                                        <Star size={14} className="fill-blue-600 text-blue-600" />
                                                        <span className="text-sm font-black text-black uppercase tracking-widest">4.9 Review</span>
=======
                                            className="space-y-6 md:space-y-12"
                                        >
                                            {/* Identity Row */}
                                            <div className="space-y-2 md:space-y-4">
                                                <span className="text-[10px] md:text-xs font-black text-blue-600 uppercase tracking-[0.3em] md:tracking-[0.5em] block">{selectedProduct.category}</span>
                                                <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-black tracking-tighter leading-none">{selectedProduct.name}</h2>
                                                <div className="flex items-center gap-4 md:gap-6 pt-2 md:pt-4">
                                                    <div className="flex items-center gap-1.5 md:gap-2">
                                                        <Star size={12} className="md:w-3.5 md:h-3.5 fill-blue-600 text-blue-600" />
                                                        <span className="text-xs md:text-sm font-black text-black uppercase tracking-wider md:tracking-widest">4.9 Review</span>
>>>>>>> Stashed changes
                                                    </div>
                                                    <div className="w-px h-3 md:h-4 bg-gray-200" />
                                                    <span className="text-xs md:text-sm font-bold text-green-600 uppercase tracking-wider md:tracking-widest">In Stock</span>
                                                </div>
                                            </div>

                                            {/* Editorial Context */}
<<<<<<< Updated upstream
                                            <div className="space-y-6 max-w-xl">
                                                <p className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight italic">{selectedProduct.details}</p>
=======
                                            <div className="space-y-3 md:space-y-6 max-w-xl">
                                                <p className="text-lg md:text-2xl font-bold text-black tracking-tight leading-tight italic">{selectedProduct.details}</p>
>>>>>>> Stashed changes
                                                <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed">{selectedProduct.description_long}</p>
                                            </div>

                                            {/* Specification Engine */}
<<<<<<< Updated upstream
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 py-8 border-y border-gray-100">
                                                {selectedProduct.specs.map((spec, i) => (
                                                    <div key={i} className="flex flex-col gap-1">
                                                        <div className="flex items-center gap-3 mb-1">
                                                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                                                <spec.icon className="w-3.5 h-3.5 text-blue-600" />
=======
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-1 lg:gap-8 py-6 md:py-10 border-y border-gray-100">
                                                {selectedProduct.specs.map((spec, i) => (
                                                    <div key={i} className="flex flex-col gap-1 p-0 md:p-4 lg:p-0">
                                                        <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-2">
                                                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                                                <spec.icon className="w-3 h-3 md:w-3.5 md:h-3.5 text-blue-600" />
>>>>>>> Stashed changes
                                                            </div>
                                                            <span className="text-[9px] md:text-[10px] font-black text-gray-300 tracking-wider md:tracking-widest uppercase">{spec.label}</span>
                                                        </div>
<<<<<<< Updated upstream
                                                        <span className="text-lg font-bold text-black uppercase tracking-tight ml-11 md:ml-11">{spec.value}</span>
=======
                                                        <span className="text-base md:text-lg font-bold text-black uppercase tracking-tight ml-9 md:ml-11 lg:ml-0">{spec.value}</span>
>>>>>>> Stashed changes
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Execution Row */}
<<<<<<< Updated upstream
                                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
=======
                                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:gap-8 pt-4 md:pt-8">
>>>>>>> Stashed changes
                                                {/* Precision Stepper */}
                                                <div className="flex items-center justify-center bg-gray-50 rounded-full px-4 py-3 md:px-6 md:py-4 w-full sm:w-auto border border-gray-100 shadow-sm">
                                                    <motion.button whileTap={{ scale: 0.8 }} onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Minus size={16} className="md:w-[18px] md:h-[18px]" /></motion.button>
                                                    <span className="w-12 md:w-16 text-center font-black text-lg md:text-xl tracking-tighter text-black">{quantity}</span>
                                                    <motion.button whileTap={{ scale: 0.8 }} onClick={() => setQuantity(q => q + 1)} className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Plus size={16} className="md:w-[18px] md:h-[18px]" /></motion.button>
                                                </div>

                                                {/* Core CTA */}
                                                <button
                                                    onClick={handleAdd}
                                                    disabled={added}
<<<<<<< Updated upstream
                                                    className={`group relative grow h-[72px] rounded-full overflow-hidden transition-all duration-700
=======
                                                    className={`group relative grow h-[64px] md:h-[80px] rounded-full overflow-hidden transition-all duration-700
>>>>>>> Stashed changes
                            ${added ? "bg-green-600 scale-[0.98]" : "bg-black hover:bg-blue-600 shadow-2xl shadow-black/20"}`}
                                                >
                                                    <AnimatePresence mode="wait">
                                                        {added ? (
                                                            <motion.div
                                                                key="added"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="absolute inset-0 flex items-center justify-center gap-2 md:gap-3 text-white font-black uppercase tracking-wider md:tracking-widest text-sm md:text-base"
                                                            >
                                                                <Check size={18} className="md:w-5 md:h-5" /> Identity Stored
                                                            </motion.div>
                                                        ) : (
                                                            <motion.div
                                                                key="normal"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                className="absolute inset-0 flex items-center justify-between px-6 md:px-10 text-white"
                                                            >
                                                                <div className="flex flex-col items-start leading-none">
<<<<<<< Updated upstream
                                                                    <span className="text-[10px] font-black tracking-[0.4em] opacity-40 uppercase mb-1">Secure Transaction</span>
                                                                    <span className="text-xl md:text-2xl font-black tracking-tighter uppercase whitespace-nowrap">Acquire — ₹{(selectedProduct.price * quantity).toLocaleString()}</span>
=======
                                                                    <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] md:tracking-[0.4em] opacity-40 uppercase mb-1">Secure Transaction</span>
                                                                    <span className="text-lg md:text-2xl font-black tracking-tighter uppercase whitespace-nowrap">Acquire — ₹{(selectedProduct.price * quantity).toLocaleString()}</span>
>>>>>>> Stashed changes
                                                                </div>
                                                                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-2" />
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </button>
                                            </div>

<<<<<<< Updated upstream
                                            <div className="flex items-center gap-4 text-gray-300 pt-0">
                                                <div className="flex items-center gap-2">
                                                    <ShieldCheck className="w-3.5 h-3.5" />
                                                    <span className="text-[9px] font-black tracking-widest uppercase">2-Year Warranty</span>
                                                </div>
                                                <div className="w-px h-3 bg-gray-100" />
                                                <div className="flex items-center gap-2">
                                                    <Zap className="w-3.5 h-3.5" />
                                                    <span className="text-[9px] font-black tracking-widest uppercase">Fast Shipping</span>
=======
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 text-gray-300 pt-2 md:pt-4">
                                                <div className="flex items-center gap-1.5 md:gap-2">
                                                    <ShieldCheck className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                                    <span className="text-[8px] md:text-[9px] font-black tracking-wider md:tracking-widest uppercase">2-Year Int. Warranty</span>
                                                </div>
                                                <div className="hidden sm:block w-px h-3 bg-gray-100" />
                                                <div className="flex items-center gap-1.5 md:gap-2">
                                                    <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                                    <span className="text-[8px] md:text-[9px] font-black tracking-wider md:tracking-widest uppercase">Global Expedited Ship</span>
>>>>>>> Stashed changes
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-100 {
          transform: translateZ(100px);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}