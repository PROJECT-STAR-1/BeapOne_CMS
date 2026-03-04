"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#1B1464] py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 font-instrument-sans leading-tight">
          Unlock Peak Performance with BEAPOne UBOS Expertise
        </h1>
        <p className="text-indigo-100 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-instrument-sans mb-10">
          As certified UBOS Experts, we transform your complex workflows into a
          comprehensive, customized Universal Business Operating System (UBOS).
        </p>
        <button className="bg-white text-[#1B1464] px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg font-instrument-sans inline-flex items-center justify-center">
          Start Maximizing Productivity Today
        </button>
      </div>
    </section>
  );
}
