"use client";

import React, { useState, useEffect } from "react";
import { Search, Plus, Zap } from "lucide-react";
import ThreadCard from "./ThreadCard";

export default function DiscussionsFeed({
  filteredThreads,
  searchQuery,
  setSearchQuery,
}) {
  const INITIAL_THREAD_COUNT = 4;
  const [visibleCount, setVisibleCount] = useState(INITIAL_THREAD_COUNT);

  // Reset pagination if the search query changes
  useEffect(() => {
    setVisibleCount(INITIAL_THREAD_COUNT);
  }, [searchQuery, filteredThreads]);

  const visibleThreads = filteredThreads.slice(0, visibleCount);

  const handleLoadMore = () => setVisibleCount((prev) => prev + 4);

  const handleShowLess = () => {
    setVisibleCount(INITIAL_THREAD_COUNT);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Search Bar */}
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

      {/* Threads Container */}
      <div className="flex flex-col gap-3 mb-10 min-h-[300px]">
        {visibleThreads.length > 0 ? (
          visibleThreads.map((thread) => (
            <ThreadCard key={thread.id} thread={thread} />
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm text-slate-500 font-instrument-sans flex flex-col items-center justify-center">
            <Search size={32} className="text-slate-300 mb-3" />
            <p className="text-base font-bold text-slate-700">
              No discussions found
            </p>
            <p className="text-xs mt-1">
              Try adjusting your search or category filter.
            </p>
          </div>
        )}
      </div>

      {/* Pagination Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        {visibleCount < filteredThreads.length && (
          <button
            onClick={handleLoadMore}
            className="bg-[#1B1464] text-white px-10 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity font-instrument-sans shadow-md">
            LOAD OLDER THREADS
          </button>
        )}

        {visibleCount > INITIAL_THREAD_COUNT && (
          <button
            onClick={handleShowLess}
            className="bg-white text-[#1B1464] border-2 border-[#1B1464] px-10 py-3.5 rounded-full font-bold text-sm hover:bg-slate-50 transition-colors font-instrument-sans shadow-sm">
            SHOW LESS
          </button>
        )}
      </div>

      {/* Hub Insight Bottom Banner */}
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
              New implementation guide for Hub P just released by Global
              Council.
            </div>
          </div>
        </div>
        <button className="bg-[#1B1464] text-white px-8 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity mt-5 md:mt-0 whitespace-nowrap font-instrument-sans shadow-md">
          VIEW GUIDE
        </button>
      </div>
    </div>
  );
}
