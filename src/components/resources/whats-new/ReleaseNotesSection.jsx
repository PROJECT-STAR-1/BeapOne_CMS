"use client";

import React, { useState } from "react";

// Data derived from WN3.jpg
const RELEASE_DATA = [
  {
    id: "batch4",
    plannedText: "Planned: Q4 2026 - Batch 4 Release (Hub S)",
    title: "S4: Manufacturing-as-a-Service Model is Coming Soon!",
    description:
      "**Key Highlights:** This final major batch focuses on rapid deployment capability by releasing all specialized Business Templates (Hub S), enabling quick setup for niche market operations like MaaS, WaaS, and BNPL.",
    hasImage: true,
    themeColor: "text-[#D32F2F]", // Red text
    btnColor: "bg-[#D32F2F]", // Red button
    btnHover: "hover:bg-[#b71c1c]",
    tableData: [
      {
        module: "S1: Build To Rent (BTR)",
        version: "1.0.0",
        status: "Upcoming",
        jurisdiction: "Global/NA",
      },
      {
        module: "S4: Manufacturing as a Service (MaaS)",
        version: "1.0.0",
        status: "Upcoming",
        jurisdiction: "Global",
      },
      {
        module: "S6: Buy Now Pay Later (BNPL)",
        version: "1.0.0",
        status: "Upcoming",
        jurisdiction: "Global/Financial",
      },
    ],
  },
  {
    id: "batch3",
    plannedText: "Planned: Q3 2026 - Batch 3 Release (Hub Q)",
    title: "Advance Program Management with Hub Q",
    description:
      "**Key Highlights:** Batch 3 focuses on rolling out the advanced **Syndicated Program Management (Hub Q)**, designed for community-based and decentralized production/service programs (Farm2school, Bulk Sourcing, Syndicated Housing, etc.).",
    hasImage: false,
    themeColor: "text-[#0056D2]", // Blue text
    btnColor: "bg-[#0056D2]", // Blue button
    btnHover: "hover:bg-[#0044a5]",
    tableData: [], // Data not fully visible in image
  },
];

export default function ReleaseNotesSection() {
  const [expandedModules, setExpandedModules] = useState({ batch4: true });

  const toggleModule = (id) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <div className="space-y-12">
        {RELEASE_DATA.map((release) => (
          <div
            key={release.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Header Strip */}
            <div className="bg-[#F5F5F5] px-8 py-4 border-b border-gray-200">
              <span className={`font-bold text-xs ${release.themeColor}`}>
                {release.plannedText}
              </span>
              <h2 className="text-xl font-bold text-black mt-1">
                {release.title}
              </h2>
            </div>

            <div className="p-8">
              {/* Image Placeholder (Grey Box) */}
              {release.hasImage && (
                <div className="w-full h-48 bg-[#F0F0F0] rounded-lg mb-6"></div>
              )}

              {/* Description */}
              <p
                className="text-gray-600 text-sm leading-relaxed mb-8"
                dangerouslySetInnerHTML={{
                  __html: release.description.replace(
                    /\*\*(.*?)\*\*/g,
                    '<span class="font-bold text-gray-800">$1</span>',
                  ),
                }}
              />

              {/* Divider */}
              <div className="border-t border-gray-100 my-6"></div>

              {/* Accordion Toggle */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => toggleModule(release.id)}
                  className={`font-bold text-sm flex items-center gap-2 hover:opacity-80 transition-opacity ${release.themeColor}`}>
                  {expandedModules[release.id]
                    ? "Hide Module Details"
                    : "View Module Details"}
                </button>

                <button
                  className={`px-6 py-2.5 rounded-full text-white text-xs font-semibold flex items-center gap-2 transition-colors ${release.btnColor} ${release.btnHover}`}>
                  Read Full Release Notes
                </button>
              </div>

              {/* Table Content */}
              {expandedModules[release.id] && release.tableData.length > 0 && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-wider w-[40%]">
                          MODULE
                        </th>
                        <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-wider w-[15%]">
                          VERSION
                        </th>
                        <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-wider w-[20%]">
                          STATUS
                        </th>
                        <th className="py-4 text-xs font-bold text-gray-400 uppercase tracking-wider w-[25%]">
                          JURISDICTION
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {release.tableData.map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 text-sm text-gray-600 font-medium">
                            {row.module}
                          </td>
                          <td className="py-4 text-sm text-gray-600">
                            {row.version}
                          </td>
                          <td className="py-4">
                            <span className="bg-[#FFF9C4] text-[#FBC02D] px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide">
                              {row.status}
                            </span>
                          </td>
                          <td className="py-4 text-sm text-gray-600">
                            {row.jurisdiction}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
