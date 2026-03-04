"use client";

import React from "react";
import { Zap, UserPlus } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-10 px-6 shadow-sm z-10 relative font-instrument-sans antialiased">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Hero Left */}
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center gap-1.5 text-[#1B1464] font-bold text-[10px] md:text-xs mb-2 uppercase tracking-widest">
            <Zap size={16} strokeWidth={2.5} className="fill-current" />
            STRATEGIC LIAISONS
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-2 tracking-tight leading-tight">
            Cluster & Group Leaders
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed font-medium">
            The strategic leads and resource champions managing the UBOS
            ecosystem's <br className="hidden md:block" />
            specialized sub-groups.
          </p>
        </div>

        {/* Hero Right: Action Button */}
        <div className="flex-shrink-0">
          <button className="bg-[#1B1464] text-white text-xs font-bold uppercase tracking-widest px-7 py-3.5 rounded-full hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464]">
            <UserPlus size={16} strokeWidth={2.5} /> Appoint Leader
          </button>
        </div>
      </div>
    </section>
  );
}
