"use client";

import React from "react";
import {
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  FileText,
} from "lucide-react";

export default function SidebarSection({
  setShowPathsModal,
  displayedResources,
  archivedResourcesLength,
  showAllResources,
  setShowAllResources,
}) {
  return (
    <aside className="xl:col-span-4 flex flex-col gap-6 font-instrument-sans antialiased">
      {/* Official Registry Card */}
      <div className="bg-[#F0F0F8] border border-gray-200/60 rounded-3xl p-6 shadow-sm">
        <div className="w-10 h-10 bg-[#1B1464] rounded-xl flex items-center justify-center mb-5 shadow-md text-white">
          <CheckCircle2 size={20} strokeWidth={2.5} />
        </div>
        <h3 className="text-base font-bold text-black mb-2 tracking-tight">
          Official Registry
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">
          Search the global source of truth for all UBOS certifications and
          talent verification.
        </p>

        <div className="space-y-3">
          <button className="w-full bg-white border border-gray-200 text-slate-700 text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-xl flex items-center justify-between hover:border-[#1B1464] hover:text-[#1B1464] transition-colors shadow-sm">
            VALIDATE MEMBER <ExternalLink size={16} />
          </button>

          {/* Functional EXPLORE PATHS Button */}
          <button
            onClick={() => setShowPathsModal(true)}
            className="w-full bg-white border border-gray-200 text-slate-700 text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-xl flex items-center justify-between hover:border-[#1B1464] hover:text-[#1B1464] transition-colors shadow-sm"
          >
            EXPLORE PATHS <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Archived Resources Card */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        <h3 className="text-[11px] font-bold text-black uppercase tracking-widest mb-6">
          ARCHIVED RESOURCES
        </h3>
        <div className="space-y-5 transition-all duration-300">
          {displayedResources.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 group cursor-pointer animate-in fade-in slide-in-from-top-2"
            >
              <div className="text-slate-300 group-hover:text-[#1B1464] transition-colors mt-0.5">
                <FileText size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#1B1464] transition-colors mb-1 leading-tight tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {item.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Functional VIEW ALL RESOURCES Button */}
        {archivedResourcesLength > 3 && (
          <button
            onClick={() => setShowAllResources(!showAllResources)}
            className="w-full mt-6 text-center text-[10px] font-bold text-slate-400 hover:text-[#1B1464] uppercase tracking-widest transition-colors pt-4 border-t border-gray-50 flex items-center justify-center gap-1"
          >
            {showAllResources ? "SHOW LESS RESOURCES" : "VIEW ALL RESOURCES"}
          </button>
        )}
      </div>
    </aside>
  );
}
