"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

const FILTERS = [
  { label: "Active", class: "bg-[#E6F4EA] text-[#1E8E3E]" },
  { label: "Upcoming", class: "bg-[#FCE8E6] text-[#C5221F]" },
  { label: "Legacy", class: "bg-[#E0E0E0] text-[#616161]" },
  { label: "Show All", class: "bg-[#1B1464] text-white" },
];

export default function SearchFilterSection({ onSearch, onFilterChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Show All");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) onSearch(query);
  };

  const handleSearchSubmit = () => {
    if (onSearch) onSearch(searchQuery);
  };

  const handleFilterClick = (filterLabel) => {
    setActiveFilter(filterLabel);
    if (onFilterChange) onFilterChange(filterLabel);
  };

  return (
    <section className="relative z-20 px-6 pt-12 pb-6 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Search Input */}
        <div className="relative max-w-full mx-auto mb-8">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search by Module, Solution, Year, Version, Jurisdiction, Status, or General Keyword"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
              className="w-full bg-[#F5F5F5] text-black placeholder:text-gray-500 rounded-full py-4 pl-8 pr-16 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-all border border-transparent"
            />
            <button
              onClick={handleSearchSubmit}
              className="absolute right-4 p-2 bg-transparent text-black transition-colors hover:text-[#1B1464] focus:outline-none"
            >
              <Send size={20} />
            </button>
          </div>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-bold text-black text-sm">
            Filters: by Status
          </span>
          {FILTERS.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => handleFilterClick(filter.label)}
              className={`px-6 py-2 rounded-full text-xs font-semibold transition-all hover:opacity-90 focus:outline-none ${filter.class} ${
                activeFilter === filter.label
                  ? "ring-2 ring-offset-2 ring-[#1B1464] shadow-md scale-105"
                  : "opacity-70"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
