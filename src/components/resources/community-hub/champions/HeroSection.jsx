"use client";

import React from "react";
import { Zap, RefreshCw } from "lucide-react";

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
          <h1 className="text-2xl md:text-4xl font-bold text-black mb-2 tracking-tight leading-tight">
            Community Champions
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed font-medium max-w-2xl">
            The high-level architects of resource flow. Bridging the gap between
            the UBOS user base and the core engineering teams.
          </p>
        </div>

        {/* Hero Right: Ecosystem Flow Pill */}
        <div className="flex-shrink-0 bg-[#0B0F19] rounded-3xl p-5 md:px-6 md:py-4 text-white shadow-lg flex items-center gap-5">
          <div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
              ECOSYSTEM FLOW
            </p>
            <h3 className="text-xl font-bold tracking-tight">4.2 TB/s</h3>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white text-[#0B0F19] flex items-center justify-center shadow-sm">
            <RefreshCw size={20} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
