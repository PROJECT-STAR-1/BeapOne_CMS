"use client";

import React from "react";
import {
  CheckSquare,
  ArrowUpRight,
  Users,
  CheckCircle,
  Info,
} from "lucide-react";

export default function SidebarSection({ members }) {
  return (
    <aside className="xl:col-span-4 flex flex-col gap-6">
      {/* Conduct Framework Card */}
      <div className="bg-[#181156] rounded-2xl p-6 shadow-sm">
        <h3 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">
          CONDUCT FRAMEWORK
        </h3>
        <div className="space-y-2.5">
          <button className="w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-white text-xs font-bold py-3.5 px-4 rounded-xl flex items-center justify-between transition-colors shadow-sm">
            <div className="flex items-center gap-2.5">
              <CheckSquare size={14} className="text-white/60" />
              <span>Code of Ethics v2.3</span>
            </div>
            <ArrowUpRight size={14} className="text-white/60" />
          </button>
          <button className="w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-white text-xs font-bold py-3.5 px-4 rounded-xl flex items-center justify-between transition-colors shadow-sm">
            <div className="flex items-center gap-2.5">
              <CheckSquare size={14} className="text-white/60" />
              <span>Technical Compliance Standards</span>
            </div>
            <ArrowUpRight size={14} className="text-white/60" />
          </button>
          <button className="w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-white text-xs font-bold py-3.5 px-4 rounded-xl flex items-center justify-between transition-colors shadow-sm">
            <div className="flex items-center gap-2.5">
              <CheckSquare size={14} className="text-white/60" />
              <span>Dispute Resolution Protocol</span>
            </div>
            <ArrowUpRight size={14} className="text-white/60" />
          </button>
        </div>
      </div>

      {/* Supervising Members Card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
        <h3 className="text-[10px] font-bold text-black uppercase tracking-widest mb-5">
          SUPERVISING MEMBERS
        </h3>
        <div className="space-y-4">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#EAEAF5] text-[#1B1464] flex items-center justify-center font-bold flex-shrink-0">
                  <Users size={14} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#1B1464] transition-colors tracking-tight">
                    {member.name}
                  </h4>
                  <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                    {member.role}
                  </p>
                </div>
              </div>
              <span className="text-[9px] font-black text-[#D32F2F] bg-[#FFEBEE] px-2 py-0.5 rounded">
                {member.merit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Anonymous Reporting Card */}
      <div className="bg-[#FCE8EB] rounded-2xl p-6 shadow-sm border border-red-100">
        <div className="w-8 h-8 bg-[#D32F2F] rounded-lg flex items-center justify-center mb-4 shadow-sm">
          <CheckCircle size={16} className="text-white" />
        </div>
        <h3 className="text-base font-bold text-[#D32F2F] mb-2 tracking-tight">
          Anonymous Reporting
        </h3>
        <p className="text-xs text-[#D32F2F]/80 leading-relaxed mb-5 font-medium">
          Reports filed through this portal are end-to-end encrypted. Your
          identity is protected by Hub G's Zero-Knowledge proofs unless you
          choose to disclose it.
        </p>
        <button className="text-[#D32F2F] text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 hover:opacity-80 transition-opacity">
          READ PRIVACY GUARANTEE <Info size={12} strokeWidth={2.5} />
        </button>
      </div>
    </aside>
  );
}
