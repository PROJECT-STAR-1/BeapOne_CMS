"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function FooterStatsSection({ handleViewCalendar }) {
  return (
    <div className="border-t border-gray-200 pt-8 mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex items-center">
        <div className="pr-6 md:pr-10 border-r border-gray-200">
          <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none mb-1">
            420+
          </div>
          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
            ARCHIVED SESSIONS
          </div>
        </div>
        <div className="pl-6 md:pl-10">
          <div className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-none mb-1">
            12k
          </div>
          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
            ACTIVE LEARNERS
          </div>
        </div>
      </div>

      <a
        href="#"
        onClick={handleViewCalendar}
        aria-label="View Full Ecosystem Calendar"
        className="text-[11px] font-bold text-[#1B1464] uppercase tracking-widest flex items-center gap-1.5 hover:underline transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464] rounded-sm px-1"
      >
        VIEW FULL ECOSYSTEM CALENDAR <ArrowRight size={16} strokeWidth={2.5} />
      </a>
    </div>
  );
}
