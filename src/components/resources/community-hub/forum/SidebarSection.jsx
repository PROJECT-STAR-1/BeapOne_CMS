"use client";

import React from "react";
import { Trophy, Code, Shield, Info, CheckCircle2, Layers } from "lucide-react";

const CATEGORIES = [
  { name: "All Categories", count: 4680, icon: Layers },
  { name: "Technical Implementation", count: 1240, icon: Code },
  { name: "Governance & Policy", count: 450, icon: Shield },
  { name: "Hub Troubleshooting", count: 890, icon: Info },
  { name: "Best Practices", count: 2100, icon: CheckCircle2 },
];

export default function SidebarSection({
  activeCategory,
  setActiveCategory,
  setVisibleCount,
  setExpandedThreads,
}) {
  return (
    <aside className="space-y-6">
      {/* Dynamic Categories Card */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
          CORE CATEGORIES
        </h3>
        <ul className="space-y-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <li
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  setVisibleCount(3); // Reset pagination on filter change
                  setExpandedThreads([]); // Close open comments when switching filters
                }}
                className={`flex items-center justify-between group cursor-pointer p-2.5 rounded-lg transition-colors ${
                  isActive ? "bg-slate-100" : "hover:bg-slate-50"
                }`}>
                <div className="flex items-center gap-3">
                  <cat.icon
                    size={18}
                    className={`${
                      isActive
                        ? "text-[#1B1464]"
                        : "text-slate-500 group-hover:text-[#1B1464]"
                    }`}
                  />
                  <span
                    className={`text-sm font-bold ${
                      isActive
                        ? "text-[#1B1464]"
                        : "text-slate-700 group-hover:text-[#1B1464]"
                    }`}>
                    {cat.name}
                  </span>
                </div>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-md ${
                    isActive
                      ? "bg-[#1B1464] text-white"
                      : "bg-slate-100 text-slate-400"
                  }`}>
                  {cat.count}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Expert Status Card */}
      <div className="bg-[#1B1464] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg min-h-[200px] flex flex-col justify-center">
        <Trophy
          className="absolute -right-4 -bottom-4 text-white opacity-5 w-32 h-32 rotate-[-15deg]"
          strokeWidth={1}
        />
        <h3 className="text-xs font-bold text-white/70 uppercase tracking-widest mb-3 relative z-10">
          EXPERT STATUS
        </h3>
        <p className="text-lg font-bold leading-relaxed mb-6 relative z-10">
          Reach <span className="text-[#00C853]">BadgeLevel 7.0</span> to unlock
          direct mentorship channels.
        </p>
        <div className="flex items-center gap-2 relative z-10">
          <div className="w-2 h-2 rounded-full bg-[#00C853]"></div>
          <span className="text-xs font-bold text-white">
            12 Experts Online
          </span>
        </div>
      </div>
    </aside>
  );
}
