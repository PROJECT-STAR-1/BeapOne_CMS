"use client";

import React from "react";
import {
  Filter,
  Layers,
  BarChart2,
  Tractor,
  Shield,
  CheckSquare,
  Square,
} from "lucide-react";

const MODULES = [
  { id: "all", name: "All Modules", icon: Layers },
  { id: "financial", name: "Financial (O)", icon: BarChart2 },
  { id: "farm", name: "Farm Mgmt (P)", icon: Tractor },
  { id: "security", name: "Security", icon: Shield },
];

const CONTENT_TYPES = [
  { id: "video", label: "Video Tutorials" },
  { id: "manuals", label: "Tech Manuals" },
  { id: "cases", label: "User Case Studies" },
];

export default function SidebarSection({
  activeModule,
  setActiveModule,
  setExpandedResId,
  activeTypes,
  toggleType,
}) {
  return (
    <aside className="xl:col-span-3 flex flex-col gap-6">
      {/* Filter Modules Box */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2 font-instrument-sans">
          <Filter size={14} /> FILTER MODULES
        </h3>
        <ul className="space-y-1.5">
          {MODULES.map((mod) => {
            const isActive = activeModule === mod.id;
            return (
              <li
                key={mod.id}
                onClick={() => {
                  setActiveModule(mod.id);
                  setExpandedResId(null);
                }}
                className={`flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition-colors font-instrument-sans ${
                  isActive
                    ? "bg-[#1B1464] text-white shadow-md"
                    : "text-slate-800 hover:bg-slate-50 hover:text-[#1B1464]"
                }`}>
                <mod.icon size={18} />
                <span className="text-sm font-bold font-instrument-sans">
                  {mod.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Content Type Box */}
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
        <h3 className="text-[11px] font-bold text-black uppercase tracking-widest mb-5 font-instrument-sans">
          CONTENT TYPE
        </h3>
        <ul className="space-y-4">
          {CONTENT_TYPES.map((type) => {
            const isChecked = activeTypes.includes(type.id);
            return (
              <li
                key={type.id}
                onClick={() => toggleType(type.id)}
                className="flex items-center gap-3 cursor-pointer group">
                {isChecked ? (
                  <CheckSquare size={18} className="text-[#1B1464]" />
                ) : (
                  <Square
                    size={18}
                    className="text-slate-300 group-hover:text-[#1B1464] transition-colors"
                  />
                )}
                <span
                  className={`text-sm font-bold transition-colors font-instrument-sans ${isChecked ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"}`}>
                  {type.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
