"use client";

import React from "react";
import {
  Search,
  TrendingUp,
  HeartHandshake,
  CheckCircle2,
  Star,
  ChevronRight,
  LineChart,
  User,
  Heart,
  Globe,
  Users,
  Send,
} from "lucide-react";

export default function FeedSection({
  searchQuery,
  setSearchQuery,
  setVisibleCount,
  setExpandedJobId,
  activeTab,
  displayedItems,
  currentList,
  visibleCount,
  expandedJobId,
  toggleExpandJob,
  handleLoadMoreToggle,
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
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setVisibleCount(3);
            setExpandedJobId(null);
          }}
          placeholder="Search openings by segment, professional practice, or merit requirements..."
          className="w-full bg-white border border-gray-200 text-slate-800 placeholder:text-slate-400 rounded-full py-4 pl-14 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-shadow shadow-sm font-medium font-instrument-sans"
        />
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#F0F4FF] flex items-center justify-center text-[#1B1464]">
            <LineChart size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-instrument-sans mb-0.5">
              ACTIVE ROLES
            </div>
            <div className="text-xl font-bold text-slate-900 font-instrument-sans">
              1,240
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center text-[#00C853]">
            <HeartHandshake size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-instrument-sans mb-0.5">
              IMPACT HOURS
            </div>
            <div className="text-xl font-bold text-slate-900 font-instrument-sans">
              42k+
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[#FFEBEE] flex items-center justify-center text-[#D32F2F]">
            <CheckCircle2 size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-instrument-sans mb-0.5">
              AVG. MERIT REQ
            </div>
            <div className="text-xl font-bold text-slate-900 font-instrument-sans">
              6.4
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Feed Based on Tab */}
      <div className="flex flex-col gap-4 min-h-[400px]">
        {displayedItems.length > 0 ? (
          displayedItems.map((item) => {
            // --- RENDER JOB CARD ---
            if (activeTab === "JOBS") {
              const isExpanded = expandedJobId === item.id;

              return (
                <div
                  key={item.id}
                  className={`bg-white border transition-colors duration-300 rounded-2xl p-4 flex flex-col shadow-sm hover:shadow-md relative overflow-hidden ${
                    isExpanded ? "border-[#1B1464]" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F5F7] border border-gray-200 flex items-center justify-center text-[#1B1464] flex-shrink-0">
                      <TrendingUp size={20} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start w-full gap-3">
                        <div>
                          <h3
                            onClick={() => toggleExpandJob(item.id)}
                            className="text-base font-bold text-slate-900 font-instrument-sans leading-tight mb-0.5 hover:text-[#1B1464] cursor-pointer transition-colors"
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs font-medium text-slate-500 font-instrument-sans">
                            {item.company} <span className="mx-1.5">•</span>{" "}
                            {item.location}
                          </p>
                        </div>
                        <div className="bg-slate-100 text-slate-500 text-[9px] font-extrabold px-2 py-1 rounded uppercase tracking-wider font-instrument-sans whitespace-nowrap hidden sm:block">
                          {item.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4 ml-0 md:ml-12">
                    <span className="bg-[#EAEAF5] text-[#1B1464] text-[9px] font-extrabold px-2 py-1 rounded uppercase tracking-wider font-instrument-sans">
                      {item.segment}
                    </span>
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-50 border border-slate-100 text-[#1B1464] text-[9px] font-bold px-2 py-1 rounded font-instrument-sans"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="bg-slate-100 text-slate-500 text-[9px] font-extrabold px-2 py-1 rounded uppercase tracking-wider font-instrument-sans sm:hidden">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50 ml-0 md:ml-12">
                    <div className="text-sm font-bold text-slate-900 font-instrument-sans">
                      {item.salary}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-xs font-bold text-slate-500 font-instrument-sans">
                        <Star
                          size={12}
                          className="text-[#F57F17]"
                          strokeWidth={2.5}
                        />{" "}
                        Merit: {item.meritReq}
                      </div>
                      {/* Functional OPEN/CLOSE Button */}
                      <button
                        onClick={() => toggleExpandJob(item.id)}
                        className={`text-[11px] font-bold uppercase tracking-wider flex items-center gap-0.5 transition-colors font-instrument-sans whitespace-nowrap rounded-md px-2 py-1 ${
                          isExpanded
                            ? "bg-[#1B1464] text-white"
                            : "text-[#1B1464] hover:bg-slate-50 hover:underline"
                        }`}
                      >
                        {isExpanded ? "CLOSE" : "OPEN"}
                        <ChevronRight
                          size={14}
                          strokeWidth={2.5}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Expandable Area for Jobs */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-gray-100 ml-0 md:ml-12 animate-in fade-in slide-in-from-top-2 duration-300">
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-instrument-sans">
                        Role Description
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-instrument-sans mb-4 font-medium">
                        {item.fullDescription}
                      </p>
                      <button className="bg-[#1B1464] text-white text-xs font-bold px-5 py-2.5 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity font-instrument-sans">
                        Apply via UBOS Profile <Send size={14} />
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            // --- RENDER REQUEST CARD ---
            if (activeTab === "REQUESTS") {
              return (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#EAEAF5] flex items-center justify-center text-[#1B1464] font-bold flex-shrink-0">
                        <User size={16} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-bold text-slate-900 text-sm font-instrument-sans">
                            {item.user}
                          </span>
                          <span className="bg-[#F0F4FF] text-[#1B1464] text-[9px] font-bold px-1.5 py-0.5 rounded font-instrument-sans">
                            {item.merit}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium font-instrument-sans">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-[11px] text-slate-400 font-bold font-instrument-sans mt-0.5">
                      {item.time}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 italic mb-4 font-instrument-sans font-medium leading-relaxed">
                    {item.quote}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-1">
                    <div className="flex gap-1.5 flex-wrap">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-50 border border-slate-100 text-slate-600 text-[9px] font-bold px-2 py-1 rounded-md font-instrument-sans"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-[#1B1464] text-[11px] font-bold uppercase tracking-wider hover:underline transition-all font-instrument-sans whitespace-nowrap">
                      OFFER ASSISTANCE
                    </button>
                  </div>
                </div>
              );
            }

            // --- RENDER VOLUNTEER CARD ---
            if (activeTab === "VOLUNTEER") {
              return (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-1.5 text-[#00C853] text-[9px] font-bold uppercase tracking-wider font-instrument-sans">
                      <Heart
                        size={12}
                        className="fill-current text-[#00C853]"
                      />{" "}
                      {item.cause}
                    </div>
                    {item.urgency && (
                      <span className="border border-[#00C853] text-[#00C853] text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider font-instrument-sans">
                        {item.urgency}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-instrument-sans leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 font-instrument-sans mb-4">
                    {item.initiative}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-slate-500 font-instrument-sans mb-4">
                    <div className="flex items-center gap-1">
                      <Globe size={14} /> {item.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} /> {item.roles}
                    </div>
                  </div>

                  <button className="w-full mt-auto bg-[#1B1464] text-white text-[11px] font-bold uppercase tracking-widest py-2.5 rounded-full hover:opacity-90 transition-opacity font-instrument-sans shadow-sm">
                    PLEDGE SERVICES
                  </button>
                </div>
              );
            }

            return null;
          })
        ) : (
          <div className="text-center py-20 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <Search size={40} className="text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-700 mb-1 font-instrument-sans">
              No listings found
            </h3>
            <p className="text-sm text-slate-500 font-instrument-sans">
              Try adjusting your filters or search query.
            </p>
          </div>
        )}
      </div>

      {/* Dynamic Load More / Show Less Button */}
      {currentList.length > 3 && (
        <div className="text-center pt-4 pb-4">
          <button
            onClick={handleLoadMoreToggle}
            className="text-sm font-bold text-[#1B1464] flex items-center gap-1 mx-auto hover:opacity-80 transition-opacity font-instrument-sans"
          >
            {visibleCount < currentList.length
              ? "Load More Results"
              : "Show Less Results"}
            <ChevronRight
              size={16}
              className={
                visibleCount >= currentList.length
                  ? "-rotate-90 transition-transform"
                  : "rotate-90 transition-transform"
              }
            />
          </button>
        </div>
      )}
    </main>
  );
}
