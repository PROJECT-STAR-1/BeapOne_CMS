"use client";

import React from "react";
import { Search, Plus } from "lucide-react";

export default function DiscussionSearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <div className="relative flex-1 bg-white rounded-full shadow-sm border border-gray-100 focus-within:ring-2 focus-within:ring-[#1B1464] transition-shadow">
        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search threads, tags, and users..."
          className="w-full bg-transparent text-black placeholder:text-slate-400 rounded-full py-3.5 pl-12 pr-6 text-sm focus:outline-none font-instrument-sans"
        />
      </div>
      <button className="bg-[#1B1464] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity font-instrument-sans flex items-center justify-center gap-2 flex-shrink-0 shadow-md">
        <Plus size={18} /> START THREAD
      </button>
    </div>
  );
}
