"use client";

import React from "react";
import { Lightbulb, TrendingUp, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-8 px-6 shadow-sm z-10 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Hero Text */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-2 text-[#1B1464] font-bold text-xs mb-3 uppercase tracking-widest">
            <Lightbulb size={16} strokeWidth={2.5} />
            PRODUCT ROADMAP
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-3 tracking-tight">
            Ideation & Feedback
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Drive the UBOS evolution. Submit features, vote on enhancements, and
            track progress from concept to C23 deployment.
          </p>
        </div>

        {/* Hero Stats Card */}
        <div className="bg-[#0B0F19] rounded-2xl p-6 text-white w-full lg:w-[400px] shadow-lg relative overflow-hidden flex-shrink-0">
          <TrendingUp
            className="absolute top-4 right-4 w-20 h-20 text-white/5"
            strokeWidth={1}
          />

          <div className="relative z-10">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
              ROADMAP VELOCITY
            </div>

            <div className="flex justify-between items-end mb-2">
              <span className="font-bold text-base">C23.Q1 Deployment</span>
              <span className="font-bold text-lg flex items-center gap-1">
                <ArrowUpRight size={18} className="text-slate-400" /> 82%
              </span>
            </div>

            <div className="w-full h-1.5 bg-white/10 rounded-full mb-6 overflow-hidden">
              <div className="h-full bg-indigo-600 rounded-full w-[82%]"></div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
              <div>
                <div className="text-xl font-bold mb-1">14</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  SHIPPED
                </div>
              </div>
              <div>
                <div className="text-xl font-bold mb-1">28</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  IN DEV
                </div>
              </div>
              <div>
                <div className="text-xl font-bold mb-1">156</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                  PENDING
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
