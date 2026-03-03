"use client";

import React from "react";
import { Radio, Cpu, Users, Globe, Database, Star } from "lucide-react";

export default function ChampionsFeedSection({
  liaisons,
  viewMode,
  setViewMode,
  handleAction,
}) {
  return (
    <main className="lg:col-span-8 flex flex-col gap-6 font-instrument-sans antialiased">
      {/* Live Developer Bridge Card */}
      <div className="bg-[#181156] rounded-[2rem] p-8 md:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[240px]">
        {/* Background Watermark Icon */}
        <Cpu
          className="absolute -right-8 -bottom-8 w-64 h-64 text-white/5 pointer-events-none"
          strokeWidth={1}
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-[10px] font-bold text-white/80 uppercase tracking-widest mb-6">
            <Radio size={14} className="animate-pulse text-[#FFB300]" /> LIVE
            DEVELOPER BRIDGE
          </div>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Architectural Sync: Hub O Refactor
          </h2>

          <p className="text-sm text-white/80 font-medium leading-relaxed max-w-2xl mb-8">
            Core Devs are currently pushing C23.v4.1 updates to the Canary
            Segment. Champions are needed to supervise resource migration for
            Spanish SME nodes.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            onClick={() => handleAction("Join Sync Room")}
            className="bg-white text-[#181156] text-[11px] font-bold uppercase tracking-widest py-3.5 px-8 rounded-full hover:bg-slate-100 transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white w-fit"
          >
            JOIN SYNC ROOM
          </button>
          <span className="text-[11px] font-medium text-white/60 uppercase tracking-widest">
            12 CHAMPIONS CURRENTLY IN SESSION
          </span>
        </div>
      </div>

      {/* Active Liaisons Header Row */}
      <div className="flex items-center justify-between mt-4 mb-2">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm tracking-tight uppercase">
          <Users size={18} strokeWidth={2.5} />
          ACTIVE LIAISONS
        </div>

        {/* View Mode Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            title="Grid View"
            className={`p-2.5 rounded-xl transition-colors border ${
              viewMode === "grid"
                ? "bg-white border-gray-200 text-[#1B1464] shadow-sm"
                : "bg-transparent border-transparent text-slate-400 hover:text-slate-700"
            }`}
          >
            <Globe size={18} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            title="List View"
            className={`p-2.5 rounded-xl transition-colors border ${
              viewMode === "list"
                ? "bg-white border-gray-200 text-[#1B1464] shadow-sm"
                : "bg-transparent border-transparent text-slate-400 hover:text-slate-700"
            }`}
          >
            <Database size={18} />
          </button>
        </div>
      </div>

      {/* Liaisons Grid */}
      <div
        className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
      >
        {liaisons.map((liaison) => (
          <div
            key={liaison.id}
            className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow relative min-h-[220px]"
          >
            {/* Top Row: Icon & Badge */}
            <div className="flex justify-between items-start mb-6">
              <Star size={32} className="text-slate-300 fill-current" />
              <div
                className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md ${liaison.statusColor}`}
              >
                {liaison.status}
              </div>
            </div>

            {/* Name & Role */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#1B1464] tracking-tight mb-1.5">
                {liaison.name}
              </h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                {liaison.role}
              </p>
            </div>

            {/* Bottom Stats */}
            <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-50">
              <div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  PROJECTS
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {liaison.projects}
                </div>
              </div>
              <div className="text-right">
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                  MERIT
                </div>
                <div className="text-sm font-bold text-[#1B1464]">
                  {liaison.merit}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
