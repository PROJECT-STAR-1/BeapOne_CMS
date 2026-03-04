"use client";

import React from "react";
import { GraduationCap } from "lucide-react";

export default function SubHeaderSection() {
  return (
    <div className="w-full bg-white border-b border-gray-200 py-4 px-6 z-20 relative font-instrument-sans antialiased">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[#1B1464] font-extrabold text-lg tracking-tight">
          <GraduationCap size={24} strokeWidth={2.5} />
          UBOS LEARN
        </div>
        <div className="flex items-center gap-6">
          <button className="text-xs font-bold text-slate-600 hover:text-[#1B1464] uppercase tracking-widest transition-colors">
            MY TRANSCRIPT
          </button>
          <button className="bg-[#1B1464] text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-sm">
            REGISTER SEARCH
          </button>
        </div>
      </div>
    </div>
  );
}