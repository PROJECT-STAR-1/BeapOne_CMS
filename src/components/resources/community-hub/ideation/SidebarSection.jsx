"use client";

import React from "react";
import { CheckCircle2, ChevronRight } from "lucide-react";

const WORKFLOW = [
  {
    num: "1",
    title: "Community Submission",
    desc: "Submit technical enhancements or module pivots based on field implementation.",
  },
  {
    num: "2",
    title: "Merit-Weighted Voting",
    desc: "Votes are weighted by BadgeLevel to prioritize expert technical feasibility.",
  },
  {
    num: "3",
    title: "Hub C Automation",
    desc: "Reaching 100% threshold triggers an automated Review Task in the Global Command Center.",
  },
];

const LEADERBOARD = [
  {
    rank: "1",
    user: "u/Global_Audit_01",
    ideas: "12 Ideas Accepted",
    score: "9.8",
  },
  {
    rank: "2",
    user: "u/Market_Research_2023",
    ideas: "15 Ideas Accepted",
    score: "9.5",
  },
  {
    rank: "3",
    user: "u/Product_Dev_Team",
    ideas: "10 Ideas Accepted",
    score: "9.2",
  },
];

export default function SidebarSection() {
  return (
    <aside className="xl:col-span-4 flex flex-col gap-6">
      {/* Workflow Card */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
        <h3 className="text-xs font-bold text-black uppercase tracking-widest mb-6">
          THE IDEATION WORKFLOW
        </h3>
        <div className="space-y-6">
          {WORKFLOW.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#EAEAF5] text-[#1B1464] flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
                {step.num}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard Card */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-sm">
        <h3 className="text-xs font-bold text-black uppercase tracking-widest mb-6">
          TOP ROADMAP DRIVERS
        </h3>
        <div className="space-y-4">
          {LEADERBOARD.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between group bg-slate-50/50 p-2 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 text-[#1B1464] flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm">
                  {item.rank}
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-[#1B1464] transition-colors cursor-pointer">
                    {item.user}
                  </h4>
                  <p className="text-[10px] md:text-[11px] text-slate-500 font-medium mt-0.5">
                    {item.ideas}
                  </p>
                </div>
              </div>
              <span className="text-sm font-black text-[#1B1464]">
                {item.score}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Card */}
      <div className="bg-[#EAEAF5] rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/50">
        <div className="w-10 h-10 bg-[#1B1464] rounded-xl flex items-center justify-center mb-5 shadow-md">
          <CheckCircle2 size={20} className="text-white" />
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Need a Custom Module?
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          If your organization requires a specialized segment not covered by the
          current roadmap, contact the Hub K Certification team for Private
          Segments.
        </p>
        <button className="text-[#1B1464] text-xs font-bold flex items-center gap-1.5 hover:underline uppercase tracking-widest">
          CONTACT SUPPORT <ChevronRight size={14} strokeWidth={3} />
        </button>
      </div>
    </aside>
  );
}
