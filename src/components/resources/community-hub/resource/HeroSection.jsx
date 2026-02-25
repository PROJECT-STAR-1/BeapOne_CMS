"use client";

import React from "react";
import { BookOpen, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-16 px-6 shadow-sm z-10 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-[#1B1464] font-bold text-[10px] md:text-xs mb-3 uppercase tracking-widest font-instrument-sans">
            <BookOpen size={16} strokeWidth={2.5} />
            KNOWLEDGE ECOSYSTEM
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-2 tracking-tight font-instrument-sans">
            Resource Library
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed font-instrument-sans">
            Access verified documentation and peer-reviewed C23 implementation
            guides.
          </p>
        </div>

        <div className="flex items-center bg-[#F0F4FF] rounded-xl p-1.5 pr-5 border border-[#E0E7FF] shadow-sm flex-shrink-0">
          <div className="bg-[#1B1464] text-white p-2.5 rounded-lg mr-3 shadow-md">
            <Zap size={18} className="fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-bold text-[#64748B] uppercase tracking-widest leading-none mb-1 font-instrument-sans">
              YOUR ACCESS
            </span>
            <span className="text-sm font-bold text-[#1B1464] leading-none font-instrument-sans">
              Tier 2: Certified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
