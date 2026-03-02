"use client";

import React from "react";
import {
  Clock,
  ChevronRight,
  BarChart2,
  FileText,
  FolderOpen,
  Download,
} from "lucide-react";

export default function SidebarSection({
  nextSessions,
  conductFramework,
  expandedItem,
  toggleItem,
  handleActionConfirm,
}) {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-6 font-instrument-sans antialiased">
      {/* Next Sessions Card */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6 text-black font-extrabold text-[11px] uppercase tracking-widest">
          <Clock size={16} strokeWidth={2.5} className="text-slate-400" />
          NEXT SESSIONS
        </div>

        <div className="space-y-6">
          {nextSessions.map((session, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${session.iconBg} ${session.iconColor}`}
              >
                <session.Icon size={18} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-tight">
                  {session.title}
                </h4>
                <p className="text-[10px] font-bold text-slate-400 mt-1">
                  {session.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conduct Framework Card with INLINE EXPANDABLE Items */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-sm">
        <h3 className="text-black font-extrabold text-[11px] uppercase tracking-widest mb-5">
          CONDUCT FRAMEWORK
        </h3>

        <div className="space-y-3 mb-5">
          {conductFramework.map((item, idx) => {
            const isExpanded = expandedItem === item.title;

            return (
              <div
                key={idx}
                className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden transition-all bg-white"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleItem(item.title)}
                  className={`w-full flex justify-between items-center p-4 transition-colors text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1464] ${isExpanded ? "bg-slate-50" : "hover:bg-slate-50"}`}
                >
                  <div>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-widest block mb-0.5 transition-colors ${isExpanded ? "text-[#1B1464]" : "text-slate-400 group-hover:text-[#1B1464]"}`}
                    >
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`text-slate-400 transition-transform duration-300 ${isExpanded ? "rotate-90 text-[#1B1464]" : "group-hover:text-[#1B1464]"}`}
                  />
                </button>

                {/* Expanded Inline Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-gray-100 bg-slate-50 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-2 text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-2 mt-2">
                      <FileText size={12} />
                      <span>{item.type}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 mx-1"></span>
                      <span>{item.size}</span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                      Contains sensitive frameworks regarding the{" "}
                      <strong>{item.category}</strong> guidelines. Strictly for
                      internal review.
                    </p>
                    <button
                      onClick={() =>
                        handleActionConfirm(
                          `[System Log]: Downloading ${item.title}...`,
                        )
                      }
                      className="w-full bg-[#1B1464] text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2"
                    >
                      <Download size={14} /> DOWNLOAD
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Inline Expandable BROWSE REPOSITORY */}
        <div className="pt-4 border-t border-gray-100">
          <button
            onClick={() => toggleItem("REPOSITORY")}
            className={`w-full border-2 rounded-xl py-3.5 text-[10px] font-bold uppercase tracking-widest transition-all text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1464] ${
              expandedItem === "REPOSITORY"
                ? "border-[#1B1464] bg-[#F0F4FF] text-[#1B1464] shadow-sm"
                : "border-slate-100 text-slate-900 hover:border-[#1B1464] hover:text-[#1B1464] hover:bg-slate-50"
            }`}
          >
            {expandedItem === "REPOSITORY"
              ? "CLOSE REPOSITORY"
              : "BROWSE REPOSITORY"}
          </button>

          {expandedItem === "REPOSITORY" && (
            <div className="mt-3 p-5 border border-[#1B1464]/20 rounded-2xl bg-[#F0F4FF] animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex items-center gap-2 mb-2">
                <FolderOpen size={16} className="text-[#1B1464]" />
                <h4 className="font-bold text-[#1B1464] text-xs">
                  Secure Vault Access
                </h4>
              </div>
              <p className="text-xs text-[#1B1464]/80 mb-4 leading-relaxed font-medium">
                Navigating to the repository requires your session to be fully
                authenticated. Interactions within the vault are logged for
                transparency.
              </p>
              <button
                onClick={() =>
                  handleActionConfirm(
                    "[System Log]: Redirecting to Full Repository Dashboard...",
                  )
                }
                className="w-full bg-[#1B1464] text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
              >
                ENTER REPOSITORY
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mandate KPIs Card */}
      <div className="bg-[#EAEAF5] rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#1B1464]/5">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-[#1B1464] w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-sm">
            <BarChart2 size={16} strokeWidth={2.5} />
          </div>
          <h3 className="text-[#1B1464] font-extrabold text-[11px] uppercase tracking-widest">
            MANDATE KPIS
          </h3>
        </div>

        <p className="text-sm text-[#1B1464]/80 leading-relaxed font-medium mb-6">
          Council committees are currently hitting 92% of their defined
          milestones for the C23.Q3 cycle.
        </p>

        <div className="w-full h-2 bg-[#1B1464]/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1B1464] rounded-full"
            style={{ width: "92%" }}
          ></div>
        </div>
      </div>
    </aside>
  );
}
