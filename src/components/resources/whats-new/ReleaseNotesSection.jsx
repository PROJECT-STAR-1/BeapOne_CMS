"use client";

import React, { useState } from "react";

export default function ReleaseNotesSection({ notes = [] }) {
  const [expandedModules, setExpandedModules] = useState({ batch4: true });

  const toggleModule = (id) => {
    setExpandedModules((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Safe parser for bold text formatting without dangerouslySetInnerHTML
  const renderFormattedDescription = (text) => {
    if (!text) return null;
    const parts = text.split(/\*\*(.*?)\*\*/g);

    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className="font-bold text-gray-800">
          {part}
        </strong>
      ) : (
        <span key={index}>{part}</span>
      ),
    );
  };

  if (notes.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          No releases found
        </h3>
        <p className="text-slate-500">
          Try adjusting your filters or search terms.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 pt-6 pb-16 bg-white">
      <div className="space-y-12">
        {notes.map((release) => (
          <div
            key={release.id}
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
          >
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
              {/* Image Placeholder */}
              {release.hasImage && (
                <div className="w-full h-48 bg-[#F0F0F0] rounded-lg mb-6"></div>
              )}

              {/* Formatted Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {renderFormattedDescription(release.description)}
              </p>

              <div className="border-t border-gray-100 my-6"></div>

              {/* Accordion Controls */}
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => toggleModule(release.id)}
                  className={`font-bold text-sm flex items-center gap-2 hover:opacity-80 transition-opacity ${release.themeColor}`}
                >
                  {expandedModules[release.id]
                    ? "Hide Module Details"
                    : "View Module Details"}
                </button>

                <button
                  className={`px-6 py-2.5 rounded-full text-white text-xs font-semibold flex items-center gap-2 transition-colors ${release.btnColor} ${release.btnHover}`}
                >
                  Read Full Release Notes
                </button>
              </div>

              {/* Data Table */}
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
                          className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50 transition-colors"
                        >
                          <td className="py-4 text-sm text-gray-600 font-medium">
                            {row.module}
                          </td>
                          <td className="py-4 text-sm text-gray-600">
                            {row.version}
                          </td>
                          <td className="py-4">
                            <span
                              className={`px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide
                                ${row.status === "Active" ? "bg-[#E6F4EA] text-[#1E8E3E]" : ""}
                                ${row.status === "Upcoming" ? "bg-[#FCE8E6] text-[#C5221F]" : ""}
                                ${row.status === "Legacy" ? "bg-[#E0E0E0] text-[#616161]" : ""}
                                ${!["Active", "Upcoming", "Legacy"].includes(row.status) ? "bg-[#FFF9C4] text-[#FBC02D]" : ""}
                              `}
                            >
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
