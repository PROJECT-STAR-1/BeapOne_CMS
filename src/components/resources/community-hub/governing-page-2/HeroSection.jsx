import React from "react";
import { Shield, TrendingUp } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-10 px-6 shadow-sm">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center gap-2 text-[#1B1464] font-bold text-[10px] uppercase tracking-widest mb-2">
            <Shield size={16} strokeWidth={2.5} /> EXECUTIVE GOVERNANCE
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-2 tracking-tight">
            Community Governing Council
          </h1>
          <p className="text-slate-500 text-sm font-medium">
            The elected body ensuring UBOS's operational integrity, financial
            sustainability, and roadmap adherence.
          </p>
        </div>
        <div className="bg-[#0B0F19] rounded-2xl p-5 text-white w-full lg:w-[320px] shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">
              TREASURY BALANCE
            </span>
            <span className="border border-[#00C853] text-[#00C853] text-[8px] font-extrabold px-2 py-0.5 rounded uppercase">
              AUDITED
            </span>
          </div>
          <h3 className="text-2xl font-extrabold text-white mb-1.5">
            €4,820,150.00
          </h3>
          <div className="flex items-center gap-1 text-[10px] font-bold text-[#00C853]">
            <TrendingUp size={12} strokeWidth={3} /> +2.4% from last quarter
          </div>
        </div>
      </div>
    </section>
  );
}
