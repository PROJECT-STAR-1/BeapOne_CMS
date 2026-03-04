"use client";

import React from "react";
import { CheckSquare, ChevronDown } from "lucide-react";

export default function SidebarSection({
  segments,
  activeSegments,
  toggleSegment,
  handleResetFilters,
  activePractice,
  setActivePractice,
  setVisibleCount,
  setExpandedJobId,
}) {
  return (
    <aside className="xl:col-span-3 flex flex-col gap-6">
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-instrument-sans">
            FILTER BY
          </h3>
          <button
            onClick={handleResetFilters}
            className="text-[11px] font-bold text-[#1B1464] hover:underline font-instrument-sans"
          >
            Reset
          </button>
        </div>

        <div className="mb-6">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 font-instrument-sans">
            SEGMENT CONTEXT
          </h4>
          <ul className="space-y-3.5">
            {segments.map((seg) => {
              const isChecked = activeSegments.includes(seg.id);
              return (
                <li
                  key={seg.id}
                  onClick={() => toggleSegment(seg.id)}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  {isChecked ? (
                    <div className="bg-[#1B1464] rounded border border-[#1B1464] w-4 h-4 flex items-center justify-center">
                      <CheckSquare size={14} className="text-white" />
                    </div>
                  ) : (
                    <div className="rounded border border-slate-300 w-4 h-4 group-hover:border-[#1B1464] transition-colors" />
                  )}
                  <span
                    className={`text-sm font-bold transition-colors font-instrument-sans ${
                      isChecked
                        ? "text-slate-900"
                        : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {seg.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 font-instrument-sans">
            INDUSTRY PRACTICE
          </h4>
          <div className="relative cursor-pointer">
            {/* Functional Dropdown */}
            <select
              value={activePractice}
              onChange={(e) => {
                setActivePractice(e.target.value);
                setVisibleCount(3);
                setExpandedJobId(null);
              }}
              className="w-full appearance-none bg-slate-50 border border-gray-200 text-slate-800 text-sm font-bold rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-[#1B1464] transition-shadow font-instrument-sans cursor-pointer hover:bg-slate-100"
            >
              <option value="all">All Practices</option>
              <option value="audit">Audit & Compliance</option>
              <option value="data">Data Science</option>
              <option value="hardware">Hardware Integration</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none"
              size={16}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#1B1464] rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
        <h3 className="text-lg font-bold mb-3 font-instrument-sans leading-snug">
          Post Your Professional Request
        </h3>
        <p className="text-xs text-white/80 leading-relaxed mb-6 font-instrument-sans font-medium">
          Leverage the collective merit of the C23 community to secure your next
          move.
        </p>
        <button className="w-full bg-white text-[#1B1464] text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:bg-slate-100 transition-colors font-instrument-sans shadow-md">
          SUBMIT REQUEST
        </button>
      </div>
    </aside>
  );
}
