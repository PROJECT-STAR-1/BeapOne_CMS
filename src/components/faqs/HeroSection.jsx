"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#030B1A] pt-32 pb-24 px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1B1464_0%,_transparent_50%)] opacity-60"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-6xl font-bold text-white tracking-tight mb-6">
          FAQs
        </h1>
        <p className="text-white text-sm font-medium flex items-center gap-2">
          Product Overview <span className="opacity-40">/</span>{" "}
          <span className="font-bold">FAQs</span>
        </p>
      </div>
    </section>
  );
}
