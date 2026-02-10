"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

// Data derived from WN2.jpg
const FILTERS = [
  { label: "Active", class: "bg-[#E6F4EA] text-[#1E8E3E]" }, // Light Green
  { label: "Upcoming", class: "bg-[#FCE8E6] text-[#C5221F]" }, // Light Pink/Red
  { label: "Legacy", class: "bg-[#E0E0E0] text-[#616161]" }, // Gray
  { label: "Show All", class: "bg-[#1B1464] text-white" }, // Dark Blue
];

export default function SearchFilterSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative z-20 px-6 py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Search Bar */}
        <div className="relative max-w-full mx-auto mb-8">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search by Module, Solution, Year, Version, Jurisdiction, Status, or General Keyword"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F5F5F5] text-black placeholder:text-gray-500 rounded-full py-4 pl-8 pr-16 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-all border border-transparent"
            />
            <button className="absolute right-4 p-2 bg-transparent text-black transition-colors">
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-bold text-black text-sm">
            Filters: by Status
          </span>
          {FILTERS.map((filter, idx) => (
            <button
              key={idx}
              className={`px-6 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-90 ${filter.class}`}>
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
