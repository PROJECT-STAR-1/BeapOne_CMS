"use client";

import React from "react";
import { Gavel, X, Users, Lock } from "lucide-react";

export default function ModalsSection({
  activeModal,
  selectedMotion,
  closeModal,
  handleActionConfirm,
}) {
  if (!activeModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200 font-instrument-sans antialiased"
      onClick={closeModal}
    >
      {/* 1. Review Motion Modal */}
      {activeModal === "REVIEW" && selectedMotion && (
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F0F4FF] text-[#1B1464] flex items-center justify-center shadow-sm">
                <Gavel size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-sm md:text-base font-bold text-slate-900 tracking-tight">
                  Reviewing Motion
                </h3>
                <p className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {selectedMotion.id}
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
              <span className="bg-[#EAEAF5] text-[#1B1464] text-[10px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider mb-3 inline-block">
                {selectedMotion.category}
              </span>
              <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                {selectedMotion.title}
              </h4>
              <p className="text-sm text-slate-600 font-medium">
                Please review the attached documentation securely before casting
                your council vote. Current consensus is leaning towards
                approval.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end text-xs font-bold text-slate-900">
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  CURRENT APPROVAL RATIO
                </span>
                <span className="text-[#00C853]">
                  {selectedMotion.approvalRatio}%
                </span>
              </div>
              <div className="w-full flex h-2.5 rounded-full overflow-hidden bg-slate-100">
                <div
                  className="bg-[#00C853] h-full"
                  style={{ width: `${selectedMotion.approvalRatio}%` }}
                ></div>
                <div
                  className="bg-[#D32F2F] h-full"
                  style={{ width: `${100 - selectedMotion.approvalRatio}%` }}
                ></div>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <button
                onClick={() =>
                  handleActionConfirm(
                    `[System Log]: Motion ${selectedMotion.id} Approved.`,
                  )
                }
                className="flex-1 bg-[#1B1464] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
              >
                APPROVE MOTION
              </button>
              <button
                onClick={() =>
                  handleActionConfirm(
                    `[System Log]: Motion ${selectedMotion.id} Rejected.`,
                  )
                }
                className="flex-1 bg-white border border-gray-200 text-slate-700 text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors shadow-sm"
              >
                REJECT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Nomination Procedures Modal */}
      {activeModal === "NOMINATION" && (
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EAEAF5] text-[#1B1464] flex items-center justify-center shadow-sm">
                <Users size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Nomination Procedures
                </h3>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  COUNCIL ELECTIONS
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
            <div className="p-4 border border-gray-100 rounded-xl bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-1">
                1. Minimum Merit Requirement
              </h4>
              <p className="text-xs text-slate-500">
                Candidates must hold a sustained Merit Score (M) of 8.0 or
                higher for at least 6 consecutive months.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-xl bg-slate-50">
              <h4 className="font-bold text-slate-900 mb-1">
                2. Community Endorsement
              </h4>
              <p className="text-xs text-slate-500">
                Requires digital signatures from at least 3 active Hub Champions
                or existing Council Members.
              </p>
            </div>
            <button
              onClick={() =>
                handleActionConfirm("[System Log]: Nomination Draft Initiated.")
              }
              className="w-full mt-2 bg-[#1B1464] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-sm"
            >
              START NOMINATION DRAFT
            </button>
          </div>
        </div>
      )}

      {/* 3. Request Access Modal */}
      {activeModal === "ACCESS" && (
        <div
          className="bg-[#14122D] rounded-3xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 border border-slate-700"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 text-center">
            <div className="w-14 h-14 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
              Restricted Area
            </h3>
            <p className="text-sm text-slate-400 mb-6 font-medium leading-relaxed">
              Classified archives contain sensitive audit drafts. Authentication
              requires an active BadgeLevel 9+ signature to proceed.
            </p>
            <div className="flex gap-3">
              <button
                onClick={closeModal}
                className="flex-1 bg-transparent border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 transition-colors"
              >
                CANCEL
              </button>
              <button
                onClick={() =>
                  handleActionConfirm(
                    "[System Log]: Classified Archive Authentication Requested.",
                  )
                }
                className="flex-1 bg-white text-[#14122D] text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl hover:bg-slate-200 transition-colors shadow-sm"
              >
                AUTHENTICATE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
