"use client";

import React from "react";
import { Scale, Eye, ChevronRight, FileText, CheckCircle } from "lucide-react";

export default function LedgerSection({
  ledgerTab,
  handleTabSwitch,
  displayedCases,
  expandedCaseId,
  toggleCaseDetails,
  currentListLength,
  visibleCount,
  handleLoadMoreToggle,
}) {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm tracking-tight uppercase">
          <Scale size={16} className="text-slate-400" />
          ACTIVE COMPLIANCE LEDGER
        </div>

        {/* Ledger Tabs */}
        <div className="flex items-center bg-white rounded-xl p-1 border border-gray-200 shadow-sm flex-shrink-0">
          <button
            onClick={() => handleTabSwitch("ACTIVE")}
            className={`px-5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
              ledgerTab === "ACTIVE"
                ? "bg-[#181156] text-white shadow-sm"
                : "bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            ACTIVE
          </button>
          <button
            onClick={() => handleTabSwitch("RESOLVED")}
            className={`px-5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
              ledgerTab === "RESOLVED"
                ? "bg-[#181156] text-white shadow-sm"
                : "bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            RESOLVED
          </button>
        </div>
      </div>

      {/* Ledger Feed */}
      <div className="flex flex-col gap-3">
        {displayedCases.length > 0 ? (
          displayedCases.map((item) => {
            const isExpanded = expandedCaseId === item.id;

            return (
              <div
                key={item.id}
                className={`bg-white border transition-all duration-300 rounded-3xl p-4 md:p-5 flex flex-col shadow-sm hover:shadow-md ${
                  isExpanded ? "border-[#181156]" : "border-gray-100"
                }`}
              >
                {/* Top Summary Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${item.severityColor}`}
                      >
                        {item.severity}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>
                    <h3
                      onClick={() => toggleCaseDetails(item.id)}
                      className="text-lg md:text-xl font-bold text-slate-900 mb-1 tracking-tight cursor-pointer hover:text-[#181156] transition-colors"
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-medium leading-snug">
                      {item.desc}
                    </p>
                  </div>

                  {/* Right: Meta & Actions */}
                  <div className="flex flex-col md:items-end gap-3 border-t md:border-t-0 md:border-l border-gray-50 pt-3 md:pt-0 md:pl-5 min-w-[180px]">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <Eye size={14} /> Case ID: {item.id}
                    </div>
                    <div className="flex flex-col md:items-end gap-0.5">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        CURRENT STATUS
                      </span>
                      <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                        <span
                          className={`w-2 h-2 rounded-full ${item.statusColor}`}
                        ></span>
                        {item.status}
                      </div>
                    </div>
                    <button
                      onClick={() => toggleCaseDetails(item.id)}
                      className="text-[#1B1464] text-[11px] font-bold uppercase tracking-widest flex items-center gap-1 hover:underline transition-all mt-1"
                    >
                      {isExpanded ? "CLOSE DETAILS" : "VIEW FULL DETAILS"}
                      <ChevronRight
                        size={14}
                        strokeWidth={2.5}
                        className={`transition-transform duration-300 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Expanded Full Details Area */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <FileText size={14} /> Investigation Notes
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {item.fullDetails}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <CheckCircle size={28} className="text-slate-300 mx-auto mb-2" />
            <h3 className="text-base font-bold text-slate-700 mb-1 tracking-tight">
              No cases found
            </h3>
            <p className="text-sm text-slate-500 font-medium">
              The compliance ledger is clear.
            </p>
          </div>
        )}
      </div>

      {/* Dynamic Load More / Show Less Button */}
      {currentListLength > 3 && (
        <div className="text-center pt-3 pb-2">
          <button
            onClick={handleLoadMoreToggle}
            className="text-sm font-bold text-[#1B1464] flex items-center gap-1 mx-auto hover:opacity-80 transition-opacity"
          >
            {visibleCount < currentListLength
              ? "Load More Results"
              : "Show Less Results"}
            <ChevronRight
              size={16}
              className={
                visibleCount >= currentListLength
                  ? "-rotate-90 transition-transform"
                  : "rotate-90 transition-transform"
              }
            />
          </button>
        </div>
      )}
    </div>
  );
}
