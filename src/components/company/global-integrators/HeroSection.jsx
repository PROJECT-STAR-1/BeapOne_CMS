"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white py-10 px-6 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-2 font-instrument-sans">
            Welcome, Global Integrators Ltd.!
          </h1>
          <p className="text-slate-700 text-lg font-instrument-sans leading-relaxed">
            Your central hub for channel enablement and{" "}
            <br className="hidden md:block" /> performance tracking.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="bg-[#1B1464] text-white px-8 py-2 rounded-full font-bold text-sm font-instrument-sans shadow-md">
            Platinum
          </div>
          <div className="text-black text-lg mt-2 font-medium font-instrument-sans">
            Lagos Region
          </div>
        </div>
      </div>
    </section>
  );
}
