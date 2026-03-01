"use client";

import React from "react";
import { Activity, Zap, Shield, CheckCircle } from "lucide-react";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Stat 1: Ethical Uptime */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[120px]">
        <div className="flex justify-between items-start mb-3">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            ETHICAL UPTIME
          </span>
          <Activity size={16} className="text-[#1B1464]" />
        </div>
        <div>
          <div className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2.5">
            99.8%
          </div>
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-[#00C853] rounded-full w-[99.8%]"></div>
          </div>
        </div>
      </div>

      {/* Stat 2: Avg Resolution */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[120px]">
        <div className="flex justify-between items-start mb-3">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            AVG RESOLUTION
          </span>
          <Zap size={16} className="text-[#00C853]" />
        </div>
        <div>
          <div className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
            14.2h
          </div>
          <div className="text-[9px] font-bold text-slate-500">
            -2.4h from last month
          </div>
        </div>
      </div>

      {/* Stat 3: Compliance Rate */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[120px]">
        <div className="flex justify-between items-start mb-3">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
            COMPLIANCE RATE
          </span>
          <div className="w-5 h-5 border border-[#D32F2F] rounded text-[#D32F2F] flex items-center justify-center">
            <Shield size={10} strokeWidth={2.5} />
          </div>
        </div>
        <div>
          <div className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
            100%
          </div>
          <div className="text-[9px] font-bold text-[#00C853] flex items-center gap-1">
            <CheckCircle size={10} /> All Audits Passed
          </div>
        </div>
      </div>
    </div>
  );
}
