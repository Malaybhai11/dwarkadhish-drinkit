"use client";

import Image from "next/image";
import Navbar from "@/Components/Nav-bar";
import HeroSection from "@/Components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="py-20">

        <HeroSection />
      </section>
    </>
  );
}
