"use client";

import Navbar from "@/Components/Nav-bar";
import HeroSection from "@/Components/Hero";
import ProductSection from "@/Components/Products";
import AboutUs from "@/Components/About-us";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main>
        <HeroSection />
        <ProductSection />
        <AboutUs />
      </main>

      <Footer />
    </div>
  );
}
