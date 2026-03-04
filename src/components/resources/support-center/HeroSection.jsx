"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#1B1464] py-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 font-instrument-sans">
          Your UBOS Onboarding & Support Center
        </h1>
        <p className="text-indigo-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-instrument-sans">
          Guided setup, comprehensive resources, and expert support to ensure
          your success with the Universal Business Operating System.
        </p>
      </div>
    </section>
  );
}
