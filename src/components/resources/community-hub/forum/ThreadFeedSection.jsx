"use client";

import React, { useRef, useEffect } from "react";
import {
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  CheckCircle2,
  Clock,
  Send,
} from "lucide-react";

const TABS = ["All Posts", "Trending", "Unanswered", "Certified"];
const SORT_OPTIONS = [
  "Newest First",
  "Oldest First",
  "Most Votes",
  "Most Comments",
];

export default function ThreadFeedSection({
  searchQuery,
  setSearchQuery,
  setVisibleCount,
  activeTab,
  setActiveTab,
  setExpandedThreads,
  sortBy,
  setSortBy,
  isSortOpen,
  setIsSortOpen,
  displayedThreads,
  filteredThreadsLength,
  handleLoadMore,
  expandedThreads,
  toggleComments,
  visibleCount,
}) {
  const sortDropdownRef = useRef(null);

  // Close sort dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target)
      ) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsSortOpen]);

  return (
    <main className="lg:col-span-3 flex flex-col gap-6">
      {/* Functional Search Bar */}
      <div className="relative w-full">
        <Search
          className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
          size={20}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setVisibleCount(3);
          }}
          placeholder="Search threads, solutions, and users"
          className="w-full bg-white border border-gray-200 text-slate-800 placeholder:text-slate-400 rounded-full py-4 pl-14 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-all font-medium shadow-sm"
        />
      </div>

      {/* Filters & Dynamic Sort Dropdown */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setVisibleCount(3);
                setExpandedThreads([]);
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors border ${
                activeTab === tab
                  ? "bg-slate-100 text-[#1B1464] border-slate-200"
                  : "bg-transparent text-slate-500 border-transparent hover:bg-slate-50"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Functional Sort Dropdown */}
        <div className="relative" ref={sortDropdownRef}>
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 text-xs font-bold text-slate-500 cursor-pointer hover:text-[#1B1464] bg-transparent border border-transparent hover:border-gray-200 px-3 py-1.5 rounded-lg transition-all">
            <Filter size={14} />
            <span>Sort: {sortBy}</span>
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${
                isSortOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isSortOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2 animate-in fade-in slide-in-from-top-2">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setIsSortOpen(false);
                    setVisibleCount(3);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors ${
                    sortBy === option
                      ? "bg-slate-50 text-[#1B1464]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#1B1464]"
                  }`}>
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Dynamic Thread Cards */}
      <div className="space-y-4 min-h-[400px]">
        {displayedThreads.length > 0 ? (
          displayedThreads.map((thread) => {
            const isExpanded = expandedThreads.includes(thread.id);

            return (
              <div
                key={thread.id}
                className={`bg-white border transition-colors duration-300 rounded-2xl p-4 sm:p-5 flex flex-col hover:shadow-md ${
                  isExpanded ? "border-[#1B1464] shadow-sm" : "border-gray-200"
                }`}>
                {/* Main Thread Content (Row) */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 group">
                  {/* Merit Counter */}
                  <div className="flex sm:flex-col items-center justify-center gap-1 sm:gap-0 bg-slate-50 sm:bg-transparent rounded-lg sm:rounded-none px-3 py-1 sm:px-0 sm:py-0 w-fit sm:w-12 text-center sm:border-r sm:border-gray-100 sm:pr-5 h-fit">
                    <button className="text-slate-400 hover:text-[#1B1464] transition-colors">
                      <ChevronUp size={20} strokeWidth={3} />
                    </button>
                    <span className="text-base sm:text-lg font-bold text-[#1B1464] leading-none my-1">
                      {thread.votes}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                      MERIT
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    {/* Header: Tags & Verified Badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {thread.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#EAEAF5] text-[#1B1464] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                      {thread.isVerified && (
                        <span className="bg-[#E8F5E9] text-[#00C853] text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider flex items-center gap-1">
                          <CheckCircle2 size={12} /> Verified Sol.
                        </span>
                      )}
                    </div>

                    {/* Title & Excerpt */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1.5 group-hover:text-[#1B1464] transition-colors leading-tight">
                      {thread.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3 line-clamp-2">
                      {thread.excerpt}
                    </p>

                    {/* Footer Meta */}
                    <div className="flex flex-wrap items-center justify-between border-t border-gray-50 pt-3 mt-auto">
                      <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-700">
                            {thread.user.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-slate-700">{thread.user}</span>
                          <span className="text-[#1B1464]">{thread.merit}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} /> {thread.time}
                        </div>
                      </div>

                      {/* Interactive Comment Button */}
                      <button
                        onClick={() => toggleComments(thread.id)}
                        className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                          isExpanded
                            ? "text-[#1B1464] bg-blue-50"
                            : "text-slate-500 hover:bg-[#EAEAF5] hover:text-[#1B1464]"
                        }`}>
                        <MessageSquare size={14} />
                        {thread.comments}{" "}
                        {thread.comments === 1 ? "Comment" : "Comments"}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable Comments Section */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-gray-100 pl-0 sm:pl-[68px] animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="space-y-3 mb-4">
                      {thread.replies.length > 0 ? (
                        thread.replies.map((reply, rIdx) => (
                          <div
                            key={rIdx}
                            className="bg-slate-50 p-3.5 rounded-xl flex gap-3">
                            <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[10px] font-bold text-slate-700 flex-shrink-0">
                              {reply.user.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold text-slate-800">
                                  {reply.user}
                                </span>
                                <span className="text-[10px] font-medium text-slate-400">
                                  {reply.time}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 leading-relaxed">
                                {reply.text}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-xs text-slate-400 italic px-2">
                          No comments yet. Be the first to start the discussion!
                        </p>
                      )}
                    </div>

                    {/* Reply Input */}
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Write a reply..."
                        className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#1B1464] transition-shadow"
                      />
                      <button className="bg-[#1B1464] text-white p-2.5 rounded-lg hover:bg-opacity-90 transition-opacity">
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          // Empty State
          <div className="text-center py-20 border border-gray-100 rounded-2xl bg-slate-50">
            <Search size={40} className="text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-700 mb-1">
              No threads found
            </h3>
            <p className="text-sm text-slate-500">
              Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </div>

      {/* Dynamic Load More / Show Less Button */}
      {filteredThreadsLength > 3 && (
        <div className="text-center pt-6 pb-4">
          <button
            onClick={handleLoadMore}
            className="text-sm font-bold text-slate-500 hover:text-[#1B1464] transition-colors">
            {visibleCount < filteredThreadsLength
              ? "Load More Implementation Logs"
              : "Show Less Implementation Logs"}
          </button>
        </div>
      )}
    </main>
  );
}
