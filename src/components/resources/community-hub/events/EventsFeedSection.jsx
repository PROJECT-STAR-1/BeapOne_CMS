"use client";

import React from "react";
import {
  Search,
  Users,
  Video,
  MapPin,
  Download,
  Share2,
  Calendar,
} from "lucide-react";

export default function EventsFeedSection({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  filteredEvents,
  handleEventAction,
  handleShareEvent,
  handleHostEvent,
}) {
  return (
    <div className="flex flex-col gap-8">
      {/* Controls: Tabs & Search */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Tabs */}
        <div className="flex items-center bg-white rounded-xl p-1 border border-gray-200 shadow-sm flex-shrink-0">
          {["UPCOMING", "PAST", "ALL"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`px-6 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1464] ${
                activeTab === tab
                  ? "bg-[#1B1464] text-white shadow-sm"
                  : "bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-[380px]">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search webinars or local meetups"
            aria-label="Search events"
            className="w-full bg-white border border-gray-200 text-slate-800 placeholder:text-slate-400 rounded-full py-3 pl-11 pr-5 text-xs focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-shadow shadow-sm font-medium"
          />
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Search Empty State */}
        {filteredEvents.length === 0 && (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 py-16 flex flex-col items-center justify-center bg-white border-2 border-dashed border-gray-200 rounded-3xl min-h-[320px]">
            <Search size={40} className="text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-700 tracking-tight mb-2">
              No events found
            </h3>
            <p className="text-sm text-slate-500 font-medium text-center max-w-sm">
              We couldn't find any events matching "
              <span className="text-slate-800">{searchQuery}</span>". Try
              adjusting your filters or search terms.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("ALL");
              }}
              className="mt-6 text-[11px] font-bold text-[#1B1464] uppercase tracking-widest hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464] rounded-sm"
            >
              CLEAR FILTERS
            </button>
          </div>
        )}

        {/* Map through Filtered Events */}
        {filteredEvents?.map((event) => {
          // Dynamic Theme Mapping
          const borderTopColor =
            event.theme === "blue"
              ? "border-t-[#1B1464]"
              : event.theme === "green"
                ? "border-t-[#00C853]"
                : "border-t-[#94A3B8]";

          const iconBgColor =
            event.theme === "blue"
              ? "bg-[#1B1464]"
              : event.theme === "green"
                ? "bg-[#00C853]"
                : "bg-[#94A3B8]";

          const ActionIcon = event.icon === "video" ? Video : MapPin;

          return (
            <div
              key={event.id}
              className={`bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 border-t-4 ${borderTopColor} p-6 md:p-8 flex flex-col min-h-[320px]`}
            >
              {/* Top Row: Icon & Attendees */}
              <div className="flex justify-between items-start mb-6">
                <div
                  className={`w-12 h-12 rounded-xl ${iconBgColor} text-white flex items-center justify-center shadow-sm`}
                >
                  <ActionIcon size={20} strokeWidth={2} />
                </div>
                <div
                  className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold"
                  aria-label={`${event.attendees} attendees`}
                >
                  <Users size={14} /> {event.attendees}
                </div>
              </div>

              {/* Tagline */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {event.tag}
                </span>
                {event.isLive && (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                    LIVE
                  </span>
                )}
              </div>

              {/* Title & Desc */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 tracking-tight leading-tight">
                {event.title}
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8 flex-1">
                {event.desc}
              </p>

              {/* Bottom Row: Button & Share */}
              <div className="flex items-center gap-4 mt-auto">
                <button
                  onClick={() => handleEventAction(event)}
                  aria-label={`${event.actionText} for ${event.title}`}
                  className={`flex-1 text-[10px] font-bold uppercase tracking-widest py-3.5 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    event.theme === "slate"
                      ? "bg-[#EAEAF5] text-[#1B1464] hover:bg-[#d8d8e9] focus-visible:ring-[#1B1464]"
                      : "bg-black text-white hover:bg-gray-800 focus-visible:ring-black"
                  }`}
                >
                  {event.theme === "slate" ? (
                    <span className="flex items-center justify-center gap-2">
                      <Download size={14} /> {event.actionText}
                    </span>
                  ) : (
                    event.actionText
                  )}
                </button>
                {event.theme !== "slate" && (
                  <button
                    onClick={() => handleShareEvent(event.id)}
                    aria-label={`Share ${event.title}`}
                    className="w-12 h-12 flex-shrink-0 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center text-[#1B1464] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464]"
                  >
                    <Share2 size={16} strokeWidth={2.5} />
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {/* Host a Local Meetup Card (Always visible at the end of the grid) */}
        <div
          role="button"
          tabIndex={0}
          onClick={handleHostEvent}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleHostEvent();
          }}
          aria-label="Host a local meetup"
          className="border-2 border-dashed border-slate-300 bg-white/50 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer min-h-[320px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464]"
        >
          <Calendar
            size={32}
            className="text-[#94A3B8] mb-4 group-hover:text-[#1B1464] transition-colors"
            strokeWidth={1.5}
          />
          <h3 className="text-sm font-bold text-[#64748B] group-hover:text-[#1B1464] mb-2 uppercase tracking-widest transition-colors">
            HOST A LOCAL MEETUP
          </h3>
          <p className="text-xs text-slate-400 font-medium">
            Drive innovation in your city.
          </p>
        </div>
      </div>
    </div>
  );
}
