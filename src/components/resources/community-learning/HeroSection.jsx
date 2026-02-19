"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white py-16 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[300px]">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-6 font-instrument-sans">
          Community Learning & Certifications
        </h1>
        <p className="text-slate-800 text-lg md:text-xl leading-relaxed mb-10 font-instrument-sans">
          Empowering the UBOS Meritocracy through Structured Knowledge Delivery
        </p>
        <p className="text-black text-xs md:text-sm font-bold tracking-widest uppercase font-instrument-sans">
          BEAPONE UBOS C23 MODULE PROVISIONS
        </p>
      </div>
    </section>
  );
}
