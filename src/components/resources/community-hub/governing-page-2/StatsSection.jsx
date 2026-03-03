import React from "react";
import { Gavel, Target, Users } from "lucide-react";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Stat 1 */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[100px]">
        <div className="w-8 h-8 rounded-lg bg-[#F0F4FF] text-[#1B1464] flex items-center justify-center mb-3">
          <Gavel size={16} strokeWidth={2.5} />
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
            ACTIVE MOTIONS
          </div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
              12
            </div>
            <div className="text-xs font-bold text-slate-500">3 Pending</div>
          </div>
        </div>
      </div>

      {/* Stat 2 */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[100px]">
        <div className="w-8 h-8 rounded-lg bg-[#E8F5E9] text-[#00C853] flex items-center justify-center mb-3">
          <Target size={16} strokeWidth={2.5} />
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
            STRATEGIC ALIGNMENT
          </div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
              94%
            </div>
            <div className="text-xs font-bold text-slate-500">KPI Score</div>
          </div>
        </div>
      </div>

      {/* Stat 3 */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col justify-between min-h-[100px]">
        <div className="w-8 h-8 rounded-lg bg-[#FFEBEE] text-[#D32F2F] flex items-center justify-center mb-3">
          <Users size={16} strokeWidth={2.5} />
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
            QUORUM STATUS
          </div>
          <div className="flex items-end justify-between">
            <div className="text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
              Active
            </div>
            <div className="text-xs font-bold text-slate-500">100% Att.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
