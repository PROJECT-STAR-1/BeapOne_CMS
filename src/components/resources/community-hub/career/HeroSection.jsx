"use client";

import React from "react";
import { Briefcase } from "lucide-react";

export default function HeroSection({
  tabs,
  activeTab,
  setActiveTab,
  setVisibleCount,
  setExpandedJobId,
}) {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-16 px-6 shadow-sm z-10 relative">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-extrabold text-black mb-2 tracking-tight font-instrument-sans flex items-center gap-3">
            <Briefcase size={28} className="text-[#1B1464]" strokeWidth={2.5} />
            Career & Volunteer Services
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed font-instrument-sans ml-10">
            Matching UBOS professionals with high-impact opportunities.
          </p>
        </div>

        <div className="flex items-center bg-white rounded-xl p-1 border border-gray-200 shadow-sm flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setVisibleCount(3); // Reset visible count on tab change
                setExpandedJobId(null); // Reset expansions
              }}
              className={`px-6 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all font-instrument-sans ${
                activeTab === tab
                  ? "bg-[#1B1464] text-white shadow-md"
                  : "bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
