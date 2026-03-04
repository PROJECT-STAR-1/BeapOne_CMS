"use client";

import React from "react";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export default function SidebarSection({
  metrics,
  conductFramework,
  expandedItem,
  toggleItem,
  handleAction,
}) {
  return (
    <aside className="lg:col-span-4 flex flex-col gap-6 font-instrument-sans antialiased">
      {/* Coordination Metrics Card */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-sm">
        <h3 className="text-black font-extrabold text-[12px] uppercase tracking-widest mb-6">
          COORDINATION METRICS
        </h3>

        <div className="space-y-5">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex items-end justify-between border-b border-gray-50 pb-5 last:border-0 last:pb-0"
            >
              <div>
                <p className="text-[10px] font-bold text-slate-400 mb-1">
                  {metric.label}
                </p>
                <p className="text-lg font-bold text-slate-900 tracking-tight leading-none">
                  {metric.value}
                </p>
              </div>
              <div
                className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                  metric.isPositive
                    ? "bg-[#E8F5E9] text-[#00C853]"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Conduct Framework Card with INLINE EXPANDABLE Items */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-sm">
        <h3 className="text-black font-extrabold text-[12px] uppercase tracking-widest mb-5">
          CONDUCT FRAMEWORK
        </h3>

        <div className="space-y-3">
          {conductFramework.map((item, idx) => {
            const isExpanded = expandedItem === item.title;
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="flex flex-col border border-gray-100 rounded-2xl overflow-hidden transition-all bg-white"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleItem(item.title)}
                  className={`w-full flex items-center justify-between p-4 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1464] ${
                    isExpanded ? "bg-slate-50" : "hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={16}
                      className={
                        isExpanded ? "text-[#1B1464]" : "text-slate-600"
                      }
                    />
                    <span
                      className={`text-xs font-bold tracking-tight ${
                        isExpanded ? "text-[#1B1464]" : "text-slate-900"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`text-slate-400 transition-transform duration-300 ${
                      isExpanded
                        ? "rotate-90 text-[#1B1464]"
                        : "group-hover:text-[#1B1464]"
                    }`}
                  />
                </button>

                {/* Expanded Inline Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-gray-100 bg-slate-50 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4 mt-2">
                      {item.desc}
                    </p>
                    <button
                      onClick={() => handleAction(item.title)}
                      className="w-full bg-[#1B1464] text-white text-[10px] font-bold uppercase tracking-widest py-3 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
                    >
                      {item.actionText}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Become a Champion Card */}
      <div className="bg-[#EAEAF5] rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#1B1464]/5">
        <h3 className="text-sm font-bold text-[#1B1464] tracking-tight mb-3">
          Become a Champion
        </h3>
        <p className="text-xs text-[#1B1464]/80 leading-relaxed font-medium mb-6">
          Do you possess deep technical knowledge of a specific UBOS segment?
          The community is currently seeking Liaisons for the Hub O Spanish
          Finance segment.
        </p>
        <button
          onClick={() => handleAction("View Nomination Criteria")}
          className="text-[#1B1464] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464] rounded-sm px-1"
        >
          VIEW NOMINATION CRITERIA <ArrowUpRight size={14} strokeWidth={2.5} />
        </button>
      </div>
    </aside>
  );
}
