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
        id: "p1",
        name: "HydraCore Elite",
        category: "Performance",
        price: 1899,
        image: "https://images.unsplash.com/photo-1602143407151-11115cdbf69c?auto=format&fit=crop&q=80&w=1200",
        tag: "Top Rated",
        details: "Aerospace-grade vacuum insulation meets architectural glass purity.",
        description_long: "The HydraCore Elite isn't just a bottle; it's a precision instrument. Engineered with our proprietary triple-walled vacuum system, it maintains thermal integrity longer than any standard vessel on the market.",
        specs: [
            { icon: Zap, label: "Thermal", value: "24h Cold" },
            { icon: ShieldCheck, label: "Purity", value: "BPA-Free" },
            { icon: TrendingUp, label: "Volume", value: "750ml" }
        ]
    },
    {
        id: "p2",
        name: "Titanium Air",
        category: "Ultra Light",
        price: 3299,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=1200",
        tag: "New Arrival",
        details: "Zero-mass philosophy. Titanium strength at a fraction of the weight.",
        description_long: "Forged for the minimalist. The Titanium Air reduces every gram to ensure your focus remains on the movement, not the gear. It represents the pinnacle of metallurgical engineering in hydration.",
        specs: [
            { icon: Zap, label: "Weight", value: "180g" },
            { icon: ShieldCheck, label: "Grade", value: "TA1 Ti" },
            { icon: TrendingUp, label: "Volume", value: "500ml" }
        ]
    },
    {
        id: "p3",
        name: "Arctic Steel",
        category: "Insulated",
        price: 2499,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200",
        details: "The definitive companion for the high-intensity workflow.",
        description_long: "Constructed with dual-process powder coating, the Arctic Steel is built to withstand both the boardroom and the basecamp. Its unique grip texture ensures security in any performance environment.",
        specs: [
            { icon: Zap, label: "Coating", value: "Grip-Max" },
            { icon: ShieldCheck, label: "Steel", value: "316 Pro" },
            { icon: TrendingUp, label: "Volume", value: "1.0L" }
        ]
    },
    {
        id: "p4",
        name: "Carbon Origin",
        category: "Limited Edition",
        price: 4599,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1200",
        tag: "Exclusive",
        details: "Hand-laid carbon fiber. Unrivaled aesthetics and structural rigidity.",
        description_long: "A limited series masterpiece. Each Carbon Origin features a unique fiber weave pattern, hand-inspected at our labs. It's the intersection of high-fashion aesthetics and extreme engineering.",
        specs: [
            { icon: Zap, label: "Build", value: "6k Carbon" },
            { icon: ShieldCheck, label: "Impact", value: "Vibration" },
            { icon: TrendingUp, label: "Volume", value: "650ml" }
        ]
    },
];

const CATEGORIES = ["All Products", "Performance", "Ultra Light", "Insulated"];

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
                className="relative aspect-4/5 overflow-hidden rounded-[40px] bg-[#f2f2f2] mb-8 ring-1 ring-black/5 transform-gpu will-change-transform"
            >
                {/* Tag Overlay */}
                {product.tag && (
                    <div className="absolute top-8 left-8 z-20 overflow-hidden rounded-full">
                        <motion.div
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            className="bg-white/90 backdrop-blur-xl px-4 py-2 flex items-center gap-2"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                            <span className="text-[9px] font-black tracking-[0.2em] text-black uppercase">
                                {product.tag}
                            </span>
                        </motion.div>
                    </div>
                )}

                {/* Shadow Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.img
                    layoutId={`img-${product.id}`}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110 transform-gpu"
                    style={{ translateZ: 50 }}
                />

                {/* Magnetic Action Portal */}
                <div className="absolute inset-0 flex items-center justify-center translate-z-100 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100 pointer-events-none z-30">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-2xl border border-white/40 flex items-center justify-center flex-col shadow-2xl">
                        <Plus className="w-6 h-6 text-white mb-1" />
                        <span className="text-[8px] font-black text-white tracking-widest uppercase">Explore</span>
                    </div>
                </div>
            </motion.div>

            <div className="flex justify-between items-end px-4">
                <div className="space-y-1">
                    <p className="text-[9px] font-bold text-blue-600 uppercase tracking-[0.3em]">{product.category}</p>
                    <h3 className="text-2xl font-bold text-black tracking-tighter leading-none">{product.name}</h3>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-gray-300 line-through tracking-tighter mb-0.5">₹{(product.price + 600).toLocaleString()}</p>
                    <p className="text-xl font-black text-black tracking-tighter leading-none">₹{product.price.toLocaleString()}</p>
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

    return (
        <section id="products" className="bg-white pt-12 pb-24 md:pt-20 md:pb-40 px-6 lg:px-24 overflow-hidden">
            {/* Editorial Header */}
            <div className="max-w-7xl mx-auto mb-24 md:mb-36">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="h-px w-12 bg-blue-600" />
                            <p className="text-xs font-black tracking-[0.5em] text-blue-600 uppercase">The Arsenal</p>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-6xl font-bold text-black tracking-tighter leading-[0.9]"
                        >
                            Precision tools for <br /> superior hydration.
                        </motion.h2>
                    </div>

                    {/* Luxury Navigation */}
                    <div className="flex flex-wrap gap-3">
                        {CATEGORIES.map((cat, i) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`group relative px-8 py-4 rounded-full text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-500
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

            {/* Grid Layout */}
            <div className="max-w-7xl mx-auto">
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24"
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
                            className="fixed inset-0 bg-black/50 backdrop-blur-3xl z-150"
                        />

                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 35, stiffness: 220, mass: 0.8 }}
                            className="fixed bottom-0 left-0 right-0 top-0 md:top-[12vh] md:left-4 md:right-4 md:rounded-t-[64px] bg-white z-160 overflow-hidden"
                        >
                            <div className="h-full flex flex-col md:flex-row relative">

                                {/* Visual Anchor (The Cinematic Half) */}
                                <div className="w-full md:w-[45%] h-[50vh] md:h-full bg-[#f8f8f8] relative overflow-hidden group">
                                    <motion.img
                                        layoutId={`img-${selectedProduct.id}`}
                                        src={selectedProduct.image}
                                        className="w-full h-full object-cover scale-110 md:scale-100"
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                    {/* Floating Identity Label */}
                                    <div className="absolute top-12 left-12 z-20">
                                        <motion.div
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="flex flex-col"
                                        >
                                            <span className="text-[10px] font-black text-gray-300 tracking-[0.6em] uppercase mb-1">Authentic Gear</span>
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-blue-600" />
                                                <h4 className="text-xl font-bold text-black uppercase tracking-widest">{selectedProduct.id}</h4>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Exit Hook (Mobile) */}
                                    <button onClick={() => setSelectedProduct(null)} className="md:hidden absolute top-8 right-8 p-4 bg-white/80 backdrop-blur-xl rounded-full z-50">
                                        <X className="w-6 h-6 text-black" />
                                    </button>
                                </div>

                                {/* Content Anchor (The Editorial Half) */}
                                <div className="grow p-10 md:p-24 lg:p-32 overflow-y-auto no-scrollbar relative flex items-center">

                                    {/* Dismiss Controller (Desktop) */}
                                    <button onClick={() => setSelectedProduct(null)} className="hidden md:flex absolute top-16 right-16 items-center gap-4 group cursor-pointer z-50">
                                        <span className="text-[10px] font-black tracking-[0.4em] text-gray-300 group-hover:text-black transition-colors uppercase">Terminate View</span>
                                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:rotate-90">
                                            <X size={16} className="text-black group-hover:text-white" />
                                        </div>
                                    </button>

                                    <div className="max-w-3xl w-full">
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 0.8 }}
                                            className="space-y-12"
                                        >
                                            {/* Identity Row */}
                                            <div className="space-y-4">
                                                <span className="text-xs font-black text-blue-600 uppercase tracking-[0.5em] block">{selectedProduct.category}</span>
                                                <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-none">{selectedProduct.name}</h2>
                                                <div className="flex items-center gap-6 pt-4">
                                                    <div className="flex items-center gap-2">
                                                        <Star size={14} className="fill-blue-600 text-blue-600" />
                                                        <span className="text-sm font-black text-black uppercase tracking-widest">4.9 Review</span>
                                                    </div>
                                                    <div className="w-px h-4 bg-gray-200" />
                                                    <span className="text-sm font-bold text-green-600 uppercase tracking-widest">In Stock</span>
                                                </div>
                                            </div>

                                            {/* Editorial Context */}
                                            <div className="space-y-6 max-w-xl">
                                                <p className="text-2xl font-bold text-black tracking-tight leading-tight italic">{selectedProduct.details}</p>
                                                <p className="text-lg text-gray-500 font-medium leading-relaxed">{selectedProduct.description_long}</p>
                                            </div>

                                            {/* Specification Engine */}
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 lg:gap-8 py-10 border-y border-gray-100">
                                                {selectedProduct.specs.map((spec, i) => (
                                                    <div key={i} className="flex flex-col gap-1 p-4 md:p-0">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                                                <spec.icon className="w-3.5 h-3.5 text-blue-600" />
                                                            </div>
                                                            <span className="text-[10px] font-black text-gray-300 tracking-widest uppercase">{spec.label}</span>
                                                        </div>
                                                        <span className="text-lg font-bold text-black uppercase tracking-tight ml-11 md:ml-0">{spec.value}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Execution Row */}
                                            <div className="flex flex-col sm:flex-row items-center gap-8 pt-8">
                                                {/* Precision Stepper */}
                                                <div className="flex items-center bg-gray-50 rounded-full px-6 py-4 w-full sm:w-auto border border-gray-100 shadow-sm">
                                                    <motion.button whileTap={{ scale: 0.8 }} onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Minus size={18} /></motion.button>
                                                    <span className="w-16 text-center font-black text-xl tracking-tighter text-black">{quantity}</span>
                                                    <motion.button whileTap={{ scale: 0.8 }} onClick={() => setQuantity(q => q + 1)} className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Plus size={18} /></motion.button>
                                                </div>

                                                {/* Core CTA */}
                                                <button
                                                    onClick={handleAdd}
                                                    disabled={added}
                                                    className={`group relative grow h-[80px] rounded-full overflow-hidden transition-all duration-700
                            ${added ? "bg-green-600 scale-[0.98]" : "bg-black hover:bg-blue-600 shadow-2xl shadow-black/20"}`}
                                                >
                                                    <AnimatePresence mode="wait">
                                                        {added ? (
                                                            <motion.div
                                                                key="added"
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                className="absolute inset-0 flex items-center justify-center gap-3 text-white font-black uppercase tracking-widest"
                                                            >
                                                                <Check size={20} /> Identity Stored
                                                            </motion.div>
                                                        ) : (
                                                            <motion.div
                                                                key="normal"
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                className="absolute inset-0 flex items-center justify-between px-10 text-white"
                                                            >
                                                                <div className="flex flex-col items-start leading-none">
                                                                    <span className="text-[10px] font-black tracking-[0.4em] opacity-40 uppercase mb-1">Secure Transaction</span>
                                                                    <span className="text-2xl font-black tracking-tighter uppercase whitespace-nowrap">Acquire — ₹{(selectedProduct.price * quantity).toLocaleString()}</span>
                                                                </div>
                                                                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </button>
                                            </div>

                                            <div className="flex items-center gap-4 text-gray-300 pt-4">
                                                <div className="flex items-center gap-2">
                                                    <ShieldCheck className="w-4 h-4" />
                                                    <span className="text-[9px] font-black tracking-widest uppercase">2-Year Int. Warranty</span>
                                                </div>
                                                <div className="w-px h-3 bg-gray-100" />
                                                <div className="flex items-center gap-2">
                                                    <Zap className="w-4 h-4" />
                                                    <span className="text-[9px] font-black tracking-widest uppercase">Global Expedited Ship</span>
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
