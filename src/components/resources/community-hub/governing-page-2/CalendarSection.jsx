import React from "react";

export default function CalendarSection() {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm">
      <h3 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-4">
        COUNCIL CALENDAR
      </h3>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center justify-center w-9 text-center bg-slate-50 rounded-lg py-1">
            <span className="text-[8px] font-bold text-[#1B1464] uppercase tracking-widest">
              OCT
            </span>
            <span className="text-sm font-black text-slate-900 leading-none mt-0.5">
              28
            </span>
          </div>
          <div className="pt-0.5">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-tight">
              Quarterly Audit
            </h4>
            <p className="text-[10px] font-bold text-slate-400 mt-0.5">
              14:00 UTC
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center justify-center w-9 text-center bg-slate-50 rounded-lg py-1">
            <span className="text-[8px] font-bold text-[#1B1464] uppercase tracking-widest">
              NOV
            </span>
            <span className="text-sm font-black text-slate-900 leading-none mt-0.5">
              15
            </span>
          </div>
          <div className="pt-0.5">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-tight">
              Project Launch
            </h4>
            <p className="text-[10px] font-bold text-slate-400 mt-0.5">
              10:00 UTC
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex flex-col items-center justify-center w-9 text-center bg-slate-50 rounded-lg py-1">
            <span className="text-[8px] font-bold text-[#1B1464] uppercase tracking-widest">
              DEC
            </span>
            <span className="text-sm font-black text-slate-900 leading-none mt-0.5">
              01
            </span>
          </div>
          <div className="pt-0.5">
            <h4 className="text-xs font-bold text-slate-900 tracking-tight leading-tight">
              Year-End Review
            </h4>
            <p className="text-[10px] font-bold text-slate-400 mt-0.5">
              16:00 UTC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
