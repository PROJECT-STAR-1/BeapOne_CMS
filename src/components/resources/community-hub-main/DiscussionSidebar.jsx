"use client";

import React from "react";
import { Filter, ChevronRight, TrendingUp } from "lucide-react";

export default function DiscussionSidebar({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6">
      {/* Categories Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center justify-between px-4 pb-4 mb-2 border-b border-gray-50">
          <span className="text-xs font-bold text-slate-400 tracking-wider uppercase font-instrument-sans">
            Categories
          </span>
          <Filter
            size={16}
            className="text-slate-400 cursor-pointer hover:text-[#1B1464]"
          />
        </div>
        <ul className="flex flex-col gap-1">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <li
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl cursor-pointer transition-colors ${
                  isActive
                    ? "bg-[#1B1464] text-white shadow-md"
                    : "text-slate-700 hover:bg-slate-50"
                }`}>
                <span className="font-bold text-sm font-instrument-sans">
                  {category}
                </span>
                {isActive && <ChevronRight size={18} />}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Hot Topics Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp size={18} className="text-slate-400" />
          <span className="text-xs font-bold text-slate-400 tracking-wider uppercase font-instrument-sans">
            Hot Topics
          </span>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="text-sm font-bold text-black cursor-pointer hover:text-[#1B1464] font-instrument-sans leading-snug">
            SME Grant Template Release
          </li>
          <li className="text-sm font-bold text-black cursor-pointer hover:text-[#1B1464] font-instrument-sans leading-snug">
            Cross-border Tax Compliance v2
          </li>
          <li className="text-sm font-bold text-black cursor-pointer hover:text-[#1B1464] font-instrument-sans leading-snug">
            Irrigation Automation Logic
          </li>
        </ul>
      </div>
    </div>
  );
}
