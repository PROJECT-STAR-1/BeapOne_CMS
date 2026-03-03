"use client";

import React from "react";

const TIER_MATRIX = [
  {
    level: "Associate",
    focus: "Baseline Hub Operations",
    prereq: "User Registration",
    impact: "+0.5 Merit",
  },
  {
    level: "Associate",
    focus: "Baseline Hub Operations",
    prereq: "User Registration",
    impact: "+0.5 Merit",
  },
  {
    level: "Associate",
    focus: "Baseline Hub Operations",
    prereq: "User Registration",
    impact: "+0.5 Merit",
  },
  {
    level: "Associate",
    focus: "Baseline Hub Operations",
    prereq: "User Registration",
    impact: "+0.5 Merit",
  },
];

export default function TierMatrixSection() {
  return (
    <section className="py-24 px-6 bg-white font-instrument-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1.5 h-8 bg-[#1B1464]"></div>
          <h2 className="text-3xl font-bold text-black tracking-tight">
            Certification Tier Matrix
          </h2>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-[#1B1464] text-white">
                <th className="py-5 px-6 font-bold text-sm w-1/4">
                  Tier Level
                </th>
                <th className="py-5 px-6 font-bold text-sm w-1/4">
                  Core Focus
                </th>
                <th className="py-5 px-6 font-bold text-sm w-1/4">
                  Pre-requisites
                </th>
                <th className="py-5 px-6 font-bold text-sm w-1/4">
                  BadgeLevel Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {TIER_MATRIX.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-100 last:border-0 ${idx % 2 === 0 ? "bg-[#F9FAFB]" : "bg-[#F2F3F6]"}`}
                >
                  <td className="py-5 px-6 text-sm text-black font-medium">
                    {row.level}
                  </td>
                  <td className="py-5 px-6 text-sm text-black font-medium">
                    {row.focus}
                  </td>
                  <td className="py-5 px-6 text-sm text-black font-medium">
                    {row.prereq}
                  </td>
                  <td className="py-5 px-6 text-sm text-black font-medium">
                    {row.impact}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
