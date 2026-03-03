"use client";

import React from "react";

const INTEGRATED_FORMATS = [
  {
    title: "Live Webinars",
    desc: "Bi-weekly technical sessions with core platform developers and architects.",
    themeColor: "text-[#1B1464]",
    borderColor: "border-t-[#1B1464]",
  },
  {
    title: "Cohort Training",
    desc: "Immersive group projects that mirror real-world UBOS implementation challenges.",
    themeColor: "text-[#00C853]",
    borderColor: "border-t-[#00C853]",
  },
  {
    title: "Rigorous Grading",
    desc: "Automated and peer-reviewed assessments to ensure technical accountability.",
    themeColor: "text-[#D32F2F]",
    borderColor: "border-t-[#D32F2F]",
  },
];

export default function IntegratedFormatsSection() {
  return (
    <section className="py-20 px-6 bg-white font-instrument-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1.5 h-8 bg-[#1B1464]"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Integrated Learning Formats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INTEGRATED_FORMATS.map((format, idx) => (
            <div
              key={idx}
              className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm border-t-4 ${format.borderColor} flex flex-col text-center hover:shadow-md transition-shadow`}
            >
              <div className="w-full h-40 bg-[#F4F5F7] rounded-xl mb-6"></div>
              <h3 className={`text-xl font-bold mb-3 ${format.themeColor}`}>
                {format.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed px-2">
                {format.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
