"use client";

import React from "react";
import { Calendar, Plus } from "lucide-react";

export default function SubHeaderSection({ handleHostEvent }) {
  return (
    <div className="w-full bg-white border-b border-gray-200 py-4 px-6 z-20 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[#1B1464] font-extrabold text-lg tracking-tight">
          <Calendar size={22} strokeWidth={2.5} />
          BEAPOne <span className="text-slate-400 font-medium">Events</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleHostEvent}
            aria-label="Host a new event"
            className="bg-[#1B1464] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464]"
          >
            <Plus size={14} strokeWidth={3} /> HOST EVENT
          </button>
          <button
            aria-label="User Profile"
            className="w-9 h-9 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center hover:bg-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464]"
          >
            {/* Placeholder for User Avatar */}
          </button>
        </div>
      </div>
    </div>
  );
}
