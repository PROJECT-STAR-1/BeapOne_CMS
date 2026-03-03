"use client";

import React from "react";
import {
  Search,
  Filter,
  ChevronDown,
  ShieldCheck,
  FileText,
  Video,
  Star,
  Download,
  ChevronRight,
  MessageSquare,
  PlayCircle,
  ExternalLink,
} from "lucide-react";

const TABS = ["All Posts", "Trending", "Unanswered", "Certified"];
const SORT_OPTIONS = ["Newest First", "Most Popular", "Highest Rated"];

export default function ResourceFeedSection({
  searchQuery,
  setSearchQuery,
  activeTab,
  setActiveTab,
  setExpandedResId,
  isSortOpen,
  setIsSortOpen,
  sortBy,
  setSortBy,
  processedResources,
  expandedResId,
  toggleExpand,
}) {
  return (
    <main className="xl:col-span-9 flex flex-col gap-6">
      {/* Search Bar */}
      <div className="relative w-full">
        <Search
          className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search threads, solutions, and users"
          className="w-full bg-white border border-gray-200 text-slate-800 placeholder:text-slate-400 rounded-full py-4 pl-14 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-shadow shadow-sm font-medium font-instrument-sans"
        />
      </div>

      {/* Dynamic Tabs & Sort Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mt-2 mb-2">
        <div className="flex items-center gap-1 bg-white rounded-full p-1 border border-gray-200 shadow-sm w-full md:w-auto overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setExpandedResId(null);
              }}
              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors font-instrument-sans ${
                activeTab === tab
                  ? "bg-[#1B1464] text-white shadow-sm"
                  : "bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Functional Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 cursor-pointer hover:text-[#1B1464] bg-transparent transition-all px-2 font-instrument-sans">
            <Filter size={14} className="text-slate-400" />
            <span className="font-instrument-sans">Sort: {sortBy}</span>
            <ChevronDown
              size={14}
              className={`text-slate-400 transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isSortOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2 animate-in fade-in slide-in-from-top-2">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setIsSortOpen(false);
                    setExpandedResId(null);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-colors font-instrument-sans ${
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

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {processedResources.length > 0 ? (
          processedResources.map((res) => {
            const isExpanded = expandedResId === res.id;

            return (
              <div
                key={res.id}
                className={`bg-white border transition-colors duration-300 rounded-3xl overflow-hidden hover:shadow-md flex flex-col ${
                  isExpanded
                    ? "border-[#1B1464] shadow-sm"
                    : "border-gray-100 shadow-sm"
                }`}>
                {/* Top Image/Icon Placeholder */}
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 h-48 w-full relative flex items-center justify-center border-b border-gray-100">
                  <div className="absolute top-4 left-4 bg-[#1B1464] text-white text-[10px] font-extrabold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm z-10 font-instrument-sans">
                    {res.moduleBadge}
                  </div>

                  {res.typeIcon === "doc" ? (
                    <FileText
                      size={48}
                      strokeWidth={1.5}
                      className="text-slate-300"
                    />
                  ) : (
                    <Video
                      size={56}
                      strokeWidth={1.5}
                      className="text-slate-300 fill-slate-200"
                    />
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Title Row */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3
                      onClick={() => toggleExpand(res.id)}
                      className="text-lg font-bold text-[#1B1464] leading-tight hover:underline cursor-pointer decoration-2 underline-offset-4 font-instrument-sans">
                      {res.title}
                    </h3>
                    {res.isVerified && (
                      <ShieldCheck
                        size={18}
                        strokeWidth={2}
                        className="text-[#1B1464] flex-shrink-0 mt-1"
                      />
                    )}
                  </div>

                  {/* Author & Meta */}
                  <p className="text-xs font-bold text-slate-400 mb-4 font-instrument-sans flex items-center gap-1.5">
                    {res.author}
                    <span className="text-slate-300">•</span>
                    {res.metaInfo}
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={12} /> {res.comments}
                    </span>
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {res.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-md font-instrument-sans">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer: Rating, Downloads, Open Button */}
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 font-instrument-sans">
                        <Star
                          size={14}
                          className="text-[#FBC02D] fill-current"
                        />{" "}
                        {res.rating}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 font-instrument-sans">
                        <Download size={14} className="text-slate-400" />{" "}
                        {res.downloads}
                      </div>
                    </div>

                    {/* Dynamic OPEN/CLOSE Button */}
                    <button
                      onClick={() => toggleExpand(res.id)}
                      className={`text-xs font-bold uppercase tracking-wider flex items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors font-instrument-sans ${
                        isExpanded
                          ? "bg-[#1B1464] text-white"
                          : "text-[#1B1464] hover:bg-slate-50"
                      }`}>
                      {isExpanded ? "CLOSE" : "OPEN"}
                      <ChevronRight
                        size={16}
                        strokeWidth={2.5}
                        className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Expandable Resource Details */}
                  {isExpanded && (
                    <div className="mt-6 pt-5 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-2 font-instrument-sans">
                        Resource Summary
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-instrument-sans mb-5">
                        {res.fullDescription}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="flex-1 bg-[#1B1464] text-white flex items-center justify-center gap-2 text-xs font-bold py-3 rounded-xl hover:opacity-90 transition-opacity font-instrument-sans shadow-md">
                          {res.typeIcon === "video" ? (
                            <PlayCircle size={16} />
                          ) : (
                            <Download size={16} />
                          )}
                          {res.actionText}
                        </button>
                        <button className="bg-white border border-gray-200 text-slate-600 flex items-center justify-center gap-2 text-xs font-bold py-3 px-4 rounded-xl hover:text-[#1B1464] hover:border-[#1B1464] transition-colors font-instrument-sans">
                          <ExternalLink size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-1 md:col-span-2 text-center py-20 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <Search size={40} className="text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-700 mb-1 font-instrument-sans">
              No resources found
            </h3>
            <p className="text-sm text-slate-500 font-instrument-sans">
              Try adjusting your tabs, filters, or search query.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
