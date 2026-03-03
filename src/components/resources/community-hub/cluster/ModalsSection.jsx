"use client";

import React from "react";
import { Settings, X, FileText, Download } from "lucide-react";

export default function ModalsSection({
  activeModal,
  selectedCluster,
  closeModal,
  handleActionConfirm,
}) {
  if (!activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200 font-instrument-sans antialiased"
      onClick={closeModal}
    >
      {/* 1. Manage Sub-Group Modal */}
      {activeModal === "MANAGE" && selectedCluster && (
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] text-[#1B1464] flex items-center justify-center shadow-sm">
                <Settings size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-slate-900 tracking-tight">
                  Manage Sub-Group
                </h3>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {selectedCluster.id}
                </p>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="text-slate-400 hover:text-slate-700 bg-white border border-gray-200 rounded-full p-2 transition-colors shadow-sm"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>
          <div className="p-5 md:p-6 flex flex-col gap-5">
            <div>
              <h4 className="text-xl font-bold text-[#1B1464] tracking-tight mb-1">
                {selectedCluster.title}
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                {selectedCluster.hub}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-slate-50">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    CLUSTER HEAD
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {selectedCluster.head}
                  </span>
                </div>
                <button className="text-[#1B1464] text-[10px] font-bold uppercase tracking-widest hover:underline">
                  Reassign
                </button>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-slate-50">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    DEPUTY LEADER
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {selectedCluster.deputy}
                  </span>
                </div>
                <button className="text-[#1B1464] text-[10px] font-bold uppercase tracking-widest hover:underline">
                  Reassign
                </button>
              </div>
              <div className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-slate-50">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                    RESOURCE ALLOCATION
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {selectedCluster.resources}
                  </span>
                </div>
                <button className="text-[#1B1464] text-[10px] font-bold uppercase tracking-widest hover:underline">
                  Modify
                </button>
              </div>
            </div>

            {/* Buttons interchanged: CANCEL on the left, SAVE on the right */}
            <div className="flex gap-3 mt-2">
              <button
                onClick={closeModal}
                className="flex-1 bg-white border border-gray-200 text-slate-700 text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors shadow-sm"
              >
                CANCEL
              </button>
              <button
                onClick={() =>
                  handleActionConfirm(
                    `[System Log]: Saved configurations for ${selectedCluster.id}`,
                  )
                }
                className="flex-1 bg-[#1B1464] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. View Manual Modal */}
      {activeModal === "MANUAL" && (
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAEAF5] text-[#1B1464] flex items-center justify-center shadow-sm">
                <FileText size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Leadership Manual
                </h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  C23 PROTOCOLS
                </p>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="text-slate-400 hover:text-slate-700 bg-white border border-gray-200 rounded-full p-2 transition-colors shadow-sm"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>
          <div className="p-5 md:p-6 space-y-4 text-sm text-slate-600 font-medium">
            <p className="text-sm leading-relaxed mb-2">
              The C23 Leadership Manual outlines the standard operating
              procedures for Cluster Heads and Deputy Leaders, detailing
              election protocols, resource distribution guidelines, and dispute
              resolution frameworks.
            </p>
            <div className="p-4 border border-gray-100 rounded-xl bg-slate-50 space-y-2">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-2">
                Table of Contents
              </h4>
              <ul className="text-xs space-y-2 text-slate-500 list-disc pl-4">
                <li>Section 1: Leadership Eligibility & Merit Thresholds</li>
                <li>Section 2: Sub-Group Treasury Management</li>
                <li>Section 3: Emergency Governance Overrides</li>
              </ul>
            </div>
            <button
              onClick={() =>
                handleActionConfirm(
                  "[System Log]: Initiating Leadership Manual PDF Download.",
                )
              }
              className="w-full mt-2 bg-[#1B1464] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center gap-2"
            >
              <Download size={16} /> DOWNLOAD FULL MANUAL (PDF)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
