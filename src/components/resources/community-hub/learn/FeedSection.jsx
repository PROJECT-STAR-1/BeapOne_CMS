"use client";

import React from "react";
import Image from "next/image";
import { Search, Trophy, Users, ChevronRight, FileText } from "lucide-react";

export default function FeedSection({
  tabs,
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  setVisibleCount,
  displayedCourses,
  processedCoursesLength,
  handleLoadMoreToggle,
  visibleCount,
}) {
  return (
    <main className="xl:col-span-8 flex flex-col gap-6 font-instrument-sans antialiased">
      {/* Search & Tabs Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Dynamic Search Bar */}
        <div className="relative flex-1 w-full">
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
            }}
            placeholder="Find a batch or cluster..."
            className="w-full bg-white border border-gray-200 text-slate-800 placeholder:text-slate-400 rounded-full py-4 pl-14 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-shadow shadow-sm font-medium"
          />
        </div>

        {/* Tabs */}
        <div className="flex items-center bg-white rounded-full p-1 border border-gray-200 shadow-sm w-full md:w-auto overflow-x-auto flex-shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setVisibleCount(3);
              }}
              className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
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

      {/* Course Cards Feed */}
      <div className="flex flex-col gap-5 min-h-[500px]">
        {displayedCourses.length > 0 ? (
          displayedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row min-h-[220px]"
            >
              {/* Left: Next.js Image Box */}
              <div className="w-full md:w-1/3 relative h-48 md:h-auto border-r border-gray-50 flex-shrink-0 bg-slate-100">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 bg-white text-black text-[10px] font-extrabold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm">
                  {course.type}
                </div>
              </div>

              {/* Right: Content Area */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Title & Merit Row */}
                <div className="flex justify-between items-start mb-1.5 gap-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight cursor-pointer hover:text-[#1B1464] transition-colors tracking-tight">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[#00C853] bg-[#E8F5E9] px-2.5 py-1 rounded font-bold text-[11px] flex-shrink-0">
                    <Trophy size={14} className="fill-current" />{" "}
                    {course.meritReward}
                  </div>
                </div>

                {/* Author & Enrolled Info */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-8">
                  <Users size={14} /> {course.author}{" "}
                  <span className="mx-1">•</span> {course.enrolled} Enrolled
                </div>

                {/* Progress Bar Area */}
                <div className="mb-6 mt-auto">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      COURSE PROGRESS
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      {course.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1B1464] rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Footer Row: Resume Action & Icon */}
                <div className="flex items-center justify-between border-t border-gray-50 pt-4">
                  <button className="text-[#1B1464] text-xs font-bold uppercase tracking-wider flex items-center gap-1 hover:underline transition-all">
                    {course.progress === 100
                      ? "REVIEW COURSE"
                      : "RESUME COURSE"}{" "}
                    <ChevronRight size={16} strokeWidth={2.5} />
                  </button>
                  <div className="text-slate-300 hover:text-slate-500 cursor-pointer transition-colors">
                    <FileText size={20} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-24 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <Search size={40} className="text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-700 mb-1 tracking-tight">
              No courses found
            </h3>
            <p className="text-sm text-slate-500 font-medium">
              Adjust your search or tab filters to find what you need.
            </p>
          </div>
        )}
      </div>

      {/* Load More Button */}
      {processedCoursesLength > 3 && (
        <div className="text-center pt-2 pb-4">
          <button
            onClick={handleLoadMoreToggle}
            className="text-sm font-bold text-[#1B1464] flex items-center gap-1 mx-auto hover:opacity-80 transition-opacity"
          >
            {visibleCount < processedCoursesLength
              ? "Load More Courses"
              : "Show Less Courses"}
            <ChevronRight
              size={16}
              className={
                visibleCount >= processedCoursesLength
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
