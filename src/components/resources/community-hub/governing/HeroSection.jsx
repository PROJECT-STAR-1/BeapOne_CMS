"use client";

import React from "react";
import { Shield, MessageSquareWarning } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-10 px-6 shadow-sm z-10 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Hero Left */}
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center gap-2 text-[#1B1464] font-bold text-[10px] md:text-xs mb-2 uppercase tracking-widest">
            <Shield size={16} strokeWidth={2.5} />
            SUPERVISORY BODY
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-2 tracking-tight leading-tight">
            Community Governing Council
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed font-medium">
            Supervising community conduct, enforcing compliance, and maintaining
            the ethical fabric of the UBOS ecosystem.
          </p>
        </div>

        {/* Hero Right: File Report Link */}
        <div className="flex-shrink-0">
          <a
            href="/home/resources/community-hub/governing-page-2"
            className="bg-[#181156] text-white text-xs font-bold uppercase tracking-widest px-7 py-3 rounded-full hover:bg-[#1B1464] transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <MessageSquareWarning size={16} strokeWidth={2} /> FILE REPORT
          </a>
        </div>
      </div>
    </section>
  );
}
