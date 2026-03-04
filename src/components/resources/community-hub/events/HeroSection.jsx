"use client";

import React from "react";
import { Radio, PlaySquare } from "lucide-react";

export default function HeroSection({ handleJoinLiveStream }) {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-10 px-6 shadow-sm z-10 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
        {/* Hero Left */}
        <div className="flex-1 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-[#E3F2FD] text-[#0277BD] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-4">
            <Radio size={12} strokeWidth={2.5} className="animate-pulse" />
            LIVE & GLOBAL
          </div>

          {/* Updated Heading: Font thickness reduced to font-bold, "Sync" colored to match the right card */}
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 tracking-tight leading-tight">
            Global <span className="text-[#181156]">Sync</span> <br /> Portal
          </h1>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium max-w-lg">
            View and register for past, present, and future events. Integrated
            streaming and resource archiving ensure maximum participation.
          </p>
        </div>

        {/* Hero Right: Live Session Card */}
        <div className="bg-[#181156] rounded-3xl p-6 md:p-8 text-white w-full lg:w-[480px] shadow-xl flex-shrink-0 relative overflow-hidden">
          {/* Faint Background Icon */}
          <PlaySquare
            className="absolute -right-6 -bottom-6 w-48 h-48 text-white/5 pointer-events-none"
            strokeWidth={1}
          />

          <div className="relative z-10">
            <div className="text-[9px] font-bold text-white/70 uppercase tracking-widest mb-4">
              HAPPENING NOW
            </div>

            <h3 className="text-lg md:text-xl font-bold text-white mb-6 tracking-tight leading-snug">
              C23.v4 Deployment Masterclass
            </h3>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              {/* Overlapping Avatars & Watching Count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-[#181156]"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-[#181156]"></div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-[#181156]"></div>
                </div>
                <span className="text-xs font-bold text-white tracking-wide">
                  +1.4k watching
                </span>
              </div>

              {/* Join Button */}
              <button
                onClick={handleJoinLiveStream}
                aria-label="Join Live Stream"
                className="w-full sm:w-auto bg-white text-[#181156] text-[10px] font-bold uppercase tracking-widest py-3 px-6 rounded-full hover:bg-slate-100 transition-colors shadow-sm text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                JOIN STREAM
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
