"use client";

import React from "react";
import { Users, Lock, ChevronRight } from "lucide-react";

export default function SidebarSection({ setActiveModal }) {
  return (
    <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-5 font-instrument-sans antialiased">
      {/* Current Representatives Card */}
      <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
        <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          CURRENT REPRESENTATIVES
        </h3>

        <div className="space-y-4 mb-5">
          {/* Rep 1 */}
          <div className="flex items-center justify-between group">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F0F4FF] text-[#1B1464] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users size={14} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-tight">
                  Dr. Elena Vance
                </h4>
                <p className="text-[9px] font-bold text-[#1B1464] uppercase tracking-widest mt-0.5 mb-0.5">
                  CHAIRPERSON
                </p>
                <p className="text-[10px] font-medium text-slate-500">
                  Term: Dec 2026
                </p>
              </div>
            </div>
            <span className="text-[11px] font-black text-[#1B1464]">
              M: 9.9
            </span>
          </div>

          {/* Rep 2 */}
          <div className="flex items-center justify-between group">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F0F4FF] text-[#1B1464] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users size={14} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-tight">
                  Mr. Thomas Reed
                </h4>
                <p className="text-[9px] font-bold text-[#1B1464] uppercase tracking-widest mt-0.5 mb-0.5">
                  INNOVATION LEAD
                </p>
                <p className="text-[10px] font-medium text-slate-500">
                  Term: Nov 2025
                </p>
              </div>
            </div>
            <span className="text-[11px] font-black text-[#1B1464]">
              M: 8.7
            </span>
          </div>

          {/* Rep 3 */}
          <div className="flex items-center justify-between group">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F0F4FF] text-[#1B1464] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Users size={14} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-tight">
                  Ms. Laura Chen
                </h4>
                <p className="text-[9px] font-bold text-[#1B1464] uppercase tracking-widest mt-0.5 mb-0.5">
                  CFO STRATEGY
                </p>
                <p className="text-[10px] font-medium text-slate-500">
                  Term: Jan 2024
                </p>
              </div>
            </div>
            <span className="text-[11px] font-black text-[#1B1464]">
              M: 9.2
            </span>
          </div>
        </div>

        {/* Functional Nomination Button */}
        <button
          onClick={() => setActiveModal("NOMINATION")}
          className="w-full border-2 border-dashed border-gray-200 text-slate-400 text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest hover:border-[#1B1464] hover:text-[#1B1464] hover:bg-slate-50 transition-colors text-center"
        >
          NOMINATION PROCEDURES
        </button>
      </div>

      {/* Council Calendar Card */}
      <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
        <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">
          COUNCIL CALENDAR
        </h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center justify-center w-9 text-center bg-slate-50 rounded-lg py-1">
              <span className="text-[8px] font-bold text-[#1B1464] uppercase tracking-widest">
                OCT
              </span>
              <span className="text-sm font-black text-slate-900 leading-none mt-0.5">
                28
              </span>
            </div>
            <div className="pt-0.5">
              <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-tight">
                Quarterly Audit
              </h4>
              <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                14:00 UTC
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center justify-center w-9 text-center bg-slate-50 rounded-lg py-1">
              <span className="text-[8px] font-bold text-[#1B1464] uppercase tracking-widest">
                NOV
              </span>
              <span className="text-sm font-black text-slate-900 leading-none mt-0.5">
                15
              </span>
            </div>
            <div className="pt-0.5">
              <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-tight">
                Project Launch
              </h4>
              <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                10:00 UTC
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center justify-center w-9 text-center bg-slate-50 rounded-lg py-1">
              <span className="text-[8px] font-bold text-[#1B1464] uppercase tracking-widest">
                DEC
              </span>
              <span className="text-sm font-black text-slate-900 leading-none mt-0.5">
                01
              </span>
            </div>
            <div className="pt-0.5">
              <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-tight">
                Year-End Review
              </h4>
              <p className="text-[10px] font-bold text-slate-400 mt-0.5">
                16:00 UTC
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Classified Archives Card */}
      <div className="bg-[#181156] rounded-3xl p-5 shadow-sm text-white">
        <div className="flex flex-col gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <Lock size={14} className="text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="text-xs font-bold mb-1 tracking-tight uppercase tracking-widest">
              CLASSIFIED ARCHIVES
            </h3>
            <p className="text-[10px] text-white/60 leading-relaxed font-medium mb-4">
              Internal council deliberations and audit drafts. Access restricted
              to BadgeLevel 9+.
            </p>
            {/* Functional Access Button */}
            <button
              onClick={() => setActiveModal("ACCESS")}
              className="text-white text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 hover:text-white/80 transition-opacity bg-white/10 w-max px-3 py-1.5 rounded-lg"
            >
              REQUEST ACCESS <ChevronRight size={12} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
