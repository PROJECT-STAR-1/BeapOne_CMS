"use client";

import React from "react";
import { User } from "lucide-react";

export default function MetricsFooterSection() {
  return (
    <section className="w-full pb-16 px-6 font-instrument-sans antialiased">
      <div className="max-w-[1200px] mx-auto">
        {/* Separation Line */}
        <div className="w-full h-px bg-gray-100 mb-10"></div>

        {/* Footer Stats Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Overlapping Avatars */}
          <div className="flex items-center -space-x-3">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-14 h-14 rounded-full bg-[#EAEAF5] border-2 border-white flex items-center justify-center text-[#1B1464] shadow-sm relative z-10"
              >
                <User size={24} strokeWidth={2} />
              </div>
            ))}
            <div className="w-14 h-14 rounded-full bg-[#1B1464] border-2 border-white flex items-center justify-center text-white text-[11px] font-extrabold shadow-sm relative z-20">
              +42k
            </div>
          </div>

          {/* Metrics Block */}
          <div className="bg-white border border-gray-100 rounded-2xl px-6 md:px-10 py-5 shadow-sm flex flex-wrap items-center gap-6 md:gap-10 divide-x divide-gray-100">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                420+
              </span>
              <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest">
                AVG. TIME SAVED
              </span>
            </div>

            <div className="flex flex-col pl-6 md:pl-10">
              <span className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                18
              </span>
              <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest">
                ACTIVE HUBS
              </span>
            </div>

            <div className="flex flex-col pl-6 md:pl-10">
              <span className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                98%
              </span>
              <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest">
                SUCCESS RATE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
