"use client";

import React from "react";
import { Zap, Plus } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-10 px-6 shadow-sm z-10 relative font-instrument-sans antialiased">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Hero Left */}
        <div>
          <div className="flex items-center gap-1.5 text-[#1B1464] font-bold text-[10px] md:text-xs mb-2 uppercase tracking-widest">
            <Zap size={16} strokeWidth={2.5} className="fill-current" />
            GOVERNING COUNCIL BRANCHES
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-black tracking-tight leading-tight">
            Council Committees
          </h1>
        </div>

        {/* Hero Right: Actions */}
        <div className="flex flex-wrap items-center gap-3">
          <button className="bg-[#EAEAF5] text-[#1B1464] text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-slate-200 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464]">
            View All Chapters
          </button>
          <button className="bg-[#1B1464] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464]">
            <Plus size={16} strokeWidth={3} /> Propose Committee
          </button>
        </div>
      </div>
    </section>
  );
}
