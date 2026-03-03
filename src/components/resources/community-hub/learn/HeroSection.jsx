"use client";

import React from "react";
import { Users, Award, Zap, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-16 px-6 shadow-sm z-10 relative font-instrument-sans antialiased">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Hero Left: Text & Stats */}
        <div className="flex-1 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-4 tracking-tight leading-tight">
            Master the <span className="text-[#1B1464]">Ecosystem</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
            Structured learning paths delivered via batches, collaborative
            cohorts, or specialized interest clusters.
          </p>

          {/* Stat Cards */}
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm flex-1 min-w-[200px]">
              <div className="text-slate-400">
                <Users size={24} strokeWidth={2} />
              </div>
              <div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  ACTIVE LEARNERS
                </div>
                <div className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  14.2k
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm flex-1 min-w-[200px]">
              <div className="text-slate-400">
                <Award size={24} strokeWidth={2} />
              </div>
              <div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  CERTIFICATIONS ISSUED
                </div>
                <div className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  8,402
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm flex-1 min-w-[200px]">
              <div className="text-slate-400">
                <Zap size={24} strokeWidth={2} />
              </div>
              <div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  AVERAGE MERIT GAIN
                </div>
                <div className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                  +1.4
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right: Live Now Card */}
        <div className="bg-[#0B0F19] rounded-3xl p-8 text-white w-full lg:w-[420px] shadow-xl flex-shrink-0 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
              LIVE NOW
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight tracking-tight">
            Advanced Hub O Ledger Auditing
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-8 font-medium">
            Join the Council Technical team for a live training session on C23
            settlement logic.
          </p>

          <button className="w-full bg-[#1B1464] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 shadow-md">
            ENTER SESSION <Play size={14} className="fill-current" />
          </button>
        </div>
      </div>
    </section>
  );
}
