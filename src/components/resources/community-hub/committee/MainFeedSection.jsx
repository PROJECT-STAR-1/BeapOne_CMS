"use client";

import React from "react";
import { TrendingUp, Target, ChevronRight } from "lucide-react";

export default function MainFeedSection({ committees }) {
  return (
    <main className="lg:col-span-8 flex flex-col gap-6 font-instrument-sans antialiased">
      {/* Top Dark Stats Bar */}
      <div className="bg-[#0B0F19] rounded-[2rem] px-8 py-7 text-white flex flex-col sm:flex-row justify-between sm:items-center gap-6 sm:gap-4 shadow-xl">
        <div className="flex flex-col">
          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">
            ACTIVE SUB-COMMITTEES
          </span>
          <span className="text-2xl md:text-3xl font-extrabold leading-none tracking-tight">
            08
          </span>
        </div>

        {/* Divider for desktop */}
        <div className="hidden sm:block w-px h-12 bg-white/10"></div>

        <div className="flex flex-col">
          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">
            TOTAL MANDATES MET
          </span>
          <span className="text-2xl md:text-3xl font-extrabold leading-none tracking-tight">
            142
          </span>
        </div>

        {/* Divider for desktop */}
        <div className="hidden sm:block w-px h-12 bg-white/10"></div>

        <div className="flex flex-col">
          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">
            AVG. FREQUENCY
          </span>
          <span className="text-2xl md:text-3xl font-extrabold leading-none tracking-tight text-[#00E676] flex items-center gap-1.5">
            94.8% <TrendingUp size={20} strokeWidth={3} />
          </span>
        </div>
      </div>

      {/* Header: Operational Mandate */}
      <div className="flex items-center gap-2 mt-4 mb-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
        <Target size={16} strokeWidth={2.5} /> OPERATIONAL MANDATE
      </div>

      {/* Committees List */}
      <div className="flex flex-col gap-5">
        {committees.map((committee, idx) => (
          <div
            key={idx}
            className={`bg-white border-2 ${committee.themeColor} rounded-[2rem] p-6 md:p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}
          >
            {/* Top Row: Icon, Titles & Status Badge */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="flex items-start gap-4 md:gap-5">
                <div
                  className={`w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center ${committee.iconBg} ${committee.iconColor} shadow-sm`}
                >
                  <committee.Icon size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-widest mb-1.5">
                    {committee.id}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight mb-1.5 leading-none">
                    {committee.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium">
                    {committee.desc}
                  </p>
                </div>
              </div>
              {/* Status Badge */}
              <div className="bg-[#0B0F19] text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg flex-shrink-0">
                MANDATE ACTIVE
              </div>
            </div>

            {/* Bottom Row: Lead, Budget, Members, Action */}
            <div className="flex flex-wrap items-end justify-between gap-6 pt-2">
              {/* Committee Lead */}
              <div className="min-w-[120px]">
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-1">
                  COMMITTEE LEAD
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {committee.lead}
                </span>
              </div>

              {/* Budget Burn */}
              <div className="w-full sm:w-40 flex-shrink-0">
                <div className="flex justify-between items-end mb-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                    BUDGET BURN
                  </span>
                  <span className="text-[10px] font-extrabold text-slate-900 leading-none">
                    {committee.budgetBurn}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1B1464] rounded-full"
                    style={{ width: `${committee.budgetBurn}%` }}
                  ></div>
                </div>
              </div>

              {/* Members */}
              <div className="min-w-[100px]">
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block mb-1">
                  MEMBERS
                </span>
                <span className="text-sm font-bold text-slate-900">
                  {committee.members}
                </span>
              </div>

              {/* Action Button */}
              <button className="text-[#1B1464] font-bold text-[11px] uppercase tracking-widest flex items-center gap-1 hover:underline ml-auto">
                OPEN DASHBOARD <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
