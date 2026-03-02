"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const MEDIA_ASSETS = [
  {
    title: "Logos & Icons Pack",
    size: "Download .Zip (10mb)",
    borderColor: "!border-l-[#1B1464]",
    textColor: "text-[#1B1464]",
  },
  {
    title: "Executive Headshots",
    size: "Download .Zip (15mb)",
    borderColor: "!border-l-[#00C853]",
    textColor: "text-[#00C853]",
  },
  {
    title: "Brand Guidelines (PDF)",
    size: "Download .Zip (8mb)",
    borderColor: "!border-l-[#D50000]",
    textColor: "text-[#D50000]",
  },
];

const KEY_STATS = [
  { label: "Founded:", value: "2024" },
  { label: "HQ Location:", value: "Global Hub (Remote)" },
  { label: "Active Hubs:", value: "15+" },
  { label: "Multi-Currency:", value: "20+" },
  { label: "Uptime (SLA):", value: "99.9%" },
];

const MEDIA_COVERAGE = [
  {
    title: "TechCrunch: Future of ERP",
    action: "Read Article",
    borderColor: "!border-l-[#1B1464]",
    textColor: "text-[#1B1464]",
  },
  {
    title: "Forbes: AI in Business",
    action: "Read Article",
    borderColor: "!border-l-[#00C853]",
    textColor: "text-[#00C853]",
  },
  {
    title: "Harvard Business Review: Digital Transformation",
    action: "Read Article",
    borderColor: "!border-l-[#D50000]",
    textColor: "text-[#D50000]",
  },
];

export default function MediaKitSection() {
  return (
    <section className="py-16 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black tracking-tight font-instrument-sans">
            Media Kit & Quick Facts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Column 1: Media Assets */}
          <div className="w-full">
            <h3 className="text-xl font-bold text-[#1B1464] mb-3 font-instrument-sans">
              Download Media Assets
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed font-instrument-sans">
              High-resolution logos, brand guidelines, and official executive
              photography.
            </p>
            <div className="space-y-4">
              {MEDIA_ASSETS.map((asset, idx) => (
                <div
                  key={idx}
                  className={`bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex justify-between items-center border-l-[6px] ${asset.borderColor}`}>
                  <span className="font-bold text-black text-sm font-instrument-sans">
                    {asset.title}
                  </span>
                  <button
                    className={`text-xs font-bold font-instrument-sans hover:opacity-70 ${asset.textColor}`}>
                    {asset.size}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Key Statistics */}
          <div className="w-full">
            <h3 className="text-xl font-bold text-[#1B1464] mb-3 font-instrument-sans">
              UBOS Key Statistics
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed font-instrument-sans">
              Essential facts for reporters, updated quarterly.
            </p>
            <div className="bg-white rounded-xl py-2 px-6 border border-gray-100 shadow-sm border-l-[6px] !border-l-[#1B1464]">
              <div className="flex flex-col">
                {KEY_STATS.map((stat, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-3.5 border-b border-gray-200 last:border-b-0">
                    <span className="font-bold text-black text-sm font-instrument-sans">
                      {stat.label}
                    </span>
                    <span className="text-sm font-bold text-[#1B1464] font-instrument-sans">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Media Coverage */}
          <div className="w-full">
            <h3 className="text-xl font-bold text-[#1B1464] mb-3 font-instrument-sans">
              Media Coverage & Thought Leadership
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed font-instrument-sans">
              See where UBOS is shaping the conversation on global operations.
            </p>
            <div className="space-y-4">
              {MEDIA_COVERAGE.map((coverage, idx) => (
                <div
                  key={idx}
                  className={`bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex justify-between items-center border-l-[6px] ${coverage.borderColor}`}>
                  <span className="font-bold text-black text-sm font-instrument-sans pr-4">
                    {coverage.title}
                  </span>
                  <button
                    className={`flex items-center gap-1 text-xs font-bold whitespace-nowrap font-instrument-sans hover:opacity-70 ${coverage.textColor}`}>
                    {coverage.action} <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
