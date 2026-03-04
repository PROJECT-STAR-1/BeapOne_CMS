import React from "react";
import { Clock, Briefcase } from "lucide-react";

const MOTIONS_LIST = [
  {
    id: "M-2024-08",
    category: "FINANCIAL",
    title: "C23.Q3 Infrastructure Fund Allocation",
    timeLeft: "24h left",
    author: "Marcus Thorne",
    approvalRatio: 75,
  },
  {
    id: "M-2024-09",
    category: "GOVERNANCE",
    title: "Adjusting Tier 2 Quorum Thresholds",
    timeLeft: "2d left",
    author: "Dr. Elena Vance",
    approvalRatio: 60,
  },
  {
    id: "M-2024-10",
    category: "SECURITY",
    title: "Deprecation of Legacy Auth Endpoints",
    timeLeft: "5h left",
    author: "Security Council",
    approvalRatio: 92,
  },
];

export default function MotionsSection({ openReviewModal }) {
  return (
    <div className="flex flex-col gap-4">
      {MOTIONS_LIST.map((motion) => (
        <div
          key={motion.id}
          className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 shadow-sm"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="bg-[#EAEAF5] text-[#1B1464] text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                {motion.id}
              </span>
              <span className="bg-[#F0F4FF] text-[#1B1464] text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                {motion.category}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 tracking-tight">
              {motion.title}
            </h3>
            <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
              <span className="flex items-center gap-1">
                <Clock size={12} /> {motion.timeLeft}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase size={12} /> {motion.author}
              </span>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-3 min-w-[200px]">
            <div className="w-full flex flex-col gap-1.5">
              <div className="flex justify-between items-end text-xs font-bold text-slate-900">
                <span className="text-[9px] uppercase tracking-widest text-slate-500">
                  APPROVAL RATIO
                </span>
                <span>{motion.approvalRatio}%</span>
              </div>
              <div className="w-full flex h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="bg-[#00C853] h-full"
                  style={{ width: `${motion.approvalRatio}%` }}
                ></div>
                <div
                  className="bg-[#D32F2F] h-full"
                  style={{ width: `${100 - motion.approvalRatio}%` }}
                ></div>
              </div>
            </div>
            <button
              onClick={() => openReviewModal(motion)}
              className="w-full md:w-auto bg-white border border-gray-200 text-slate-900 text-[10px] font-bold uppercase tracking-widest py-2.5 px-6 rounded-full hover:border-[#1B1464] hover:text-[#1B1464] transition-colors"
            >
              REVIEW MOTION
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
