"use client";

import React from "react";
import { Zap } from "lucide-react";

export default function DiscussionInsightBanner() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between shadow-sm mt-auto">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-[#1B1464] flex-shrink-0">
          <Zap size={20} className="fill-current" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 font-instrument-sans">
            HUB INSIGHT
          </div>
          <div className="text-black font-bold text-sm md:text-base font-instrument-sans">
            New implementation guide for Hub P just released by Global Council.
          </div>
        </div>
      </div>
      <button className="bg-[#1B1464] text-white px-8 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity mt-5 md:mt-0 whitespace-nowrap font-instrument-sans shadow-md">
        VIEW GUIDE
      </button>
    </div>
  );
}
