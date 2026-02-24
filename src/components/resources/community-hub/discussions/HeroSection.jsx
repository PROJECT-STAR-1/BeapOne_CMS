"use client";

import React from "react";

export default function DiscussionsHeroSection() {
  return (
    <section className="relative w-full bg-[#1B1464] py-16 px-6 overflow-hidden transition-all duration-500">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 font-instrument-sans leading-tight">
          The Global UBOS Community Hub
        </h1>
        <p className="text-indigo-100 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-instrument-sans mb-10">
          Connect with experts, share solutions, and drive innovation across all
          UBOS modules and industry verticals.
        </p>
      </div>
    </section>
  );
}
