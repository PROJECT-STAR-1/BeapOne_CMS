"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#1B1464] py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 font-instrument-sans leading-tight">
          Careers: Solve the World's Hardest Business Problems
        </h1>
        <p className="text-indigo-100 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-instrument-sans mb-10">
          Join the team architecting the Universal Business Operating System—the
          single platform managing multi-country, multi-currency complexity.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white text-[#1B1464] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg font-instrument-sans">
            View Open Positions
          </button>
          <button className="bg-transparent border border-white text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white/10 transition-colors font-instrument-sans">
            Join Our Talent Network
          </button>
        </div>
      </div>
    </section>
  );
}
