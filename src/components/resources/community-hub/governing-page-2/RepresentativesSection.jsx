import React from "react";
import { Users } from "lucide-react";

export default function RepresentativesSection({ onNominationClick }) {
  return (
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
          <span className="text-[11px] font-black text-[#1B1464]">M: 9.9</span>
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
          <span className="text-[11px] font-black text-[#1B1464]">M: 8.7</span>
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
          <span className="text-[11px] font-black text-[#1B1464]">M: 9.2</span>
        </div>
      </div>

      <button
        onClick={onNominationClick}
        className="w-full border-2 border-dashed border-gray-200 text-slate-400 text-[10px] font-bold py-2.5 rounded-xl uppercase tracking-widest hover:border-[#1B1464] hover:text-[#1B1464] hover:bg-slate-50 transition-colors text-center"
      >
        NOMINATION PROCEDURES
      </button>
    </div>
  );
}
