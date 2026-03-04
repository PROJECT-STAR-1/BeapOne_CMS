"use client";

import React from "react";
import { Trophy, ArrowRightLeft, ChevronRight } from "lucide-react";

export default function SidebarSection({
  topClusters,
  recentActivity,
  openManualModal,
}) {
  return (
    <aside className="xl:col-span-4 flex flex-col gap-6 font-instrument-sans antialiased">
      {/* Top Cluster Card */}
      <div className="bg-[#0B0F19] rounded-3xl p-6 md:p-8 text-white shadow-xl">
        <div className="flex items-center gap-2 mb-6">
          <Trophy size={18} className="text-[#FFB300]" strokeWidth={2.5} />
          <h3 className="text-[11px] font-bold uppercase tracking-widest">
            TOP CLUSTER
          </h3>
        </div>

        <div className="space-y-4">
          {topClusters.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0"
            >
              <span className="text-xs font-bold text-white/90 tracking-tight">
                {item.name}
              </span>
              <span
                className={`text-[10px] font-bold ${
                  item.isPositive ? "text-[#00E676]" : "text-[#FF1744]"
                }`}
              >
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Conduct Framework (Recent Activity) Card */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
        <h3 className="text-[11px] font-bold text-black uppercase tracking-widest mb-6">
          CONDUCT FRAMEWORK
        </h3>

        <div className="space-y-5">
          {recentActivity.map((activity, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mt-0.5">
                <ArrowRightLeft size={14} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 tracking-tight mb-0.5">
                  {activity.user}
                </h4>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                  {activity.action}
                </p>
                <p className="text-[10px] font-medium text-slate-400">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Functional Leadership Manual Card */}
      <div className="bg-[#EAEAF5] rounded-3xl p-6 md:p-8 shadow-sm border border-[#1B1464]/5 flex flex-col justify-between items-start">
        <div>
          <h3 className="text-xs font-bold text-[#1B1464] uppercase tracking-widest mb-3">
            LEADERSHIP MANUAL
          </h3>
          <p className="text-sm text-[#1B1464]/80 leading-relaxed font-medium mb-6">
            Review the C23 standards for resource distribution and cluster
            election protocols.
          </p>
        </div>
        <button
          onClick={openManualModal}
          className="text-[#1B1464] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464] rounded-sm px-1"
        >
          VIEW MANUAL <ChevronRight size={14} strokeWidth={3} />
        </button>
      </div>
    </aside>
  );
}
