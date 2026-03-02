"use client";

import React from "react";

const KPIS = [
  {
    title: "Attributed Revenue (A2.7 Metric)",
    value: "$150,000 USD",
    subtitle: "Total sales linked via Channel Attribution Logic.",
    valueColor: "text-[#1B1464]",
    borderColor: "border-t-[#1B1464]",
  },
  {
    title: "Current Earnings (A2.7 4.0)",
    value: "$22,500 USD",
    subtitle: (
      <span className="text-[#00C853] font-bold">
        Pending payment. Next Payout: Jan 31.
      </span>
    ),
    valueColor: "text-[#00C853]",
    borderColor: "border-t-[#00C853]",
  },
  {
    title: "Open Deals (A2.7 3.0)",
    value: "5",
    subtitle: (
      <span className="text-[#D50000] font-bold">
        Active opportunities registered by you.
      </span>
    ),
    valueColor: "text-[#D50000]",
    borderColor: "border-t-[#D50000]",
  },
  {
    title: "Deal Conversion Rate",
    value: "12.0%",
    subtitle: (
      <span className="text-[#FBC02D] font-bold">
        Your historical Lead-to-Sale efficiency.
      </span>
    ),
    valueColor: "text-[#FBC02D]",
    borderColor: "border-t-[#FBC02D]",
  },
];

export default function KpiSection() {
  return (
    <section className="py-16 px-6 bg-[#F4F5F7]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold text-black mb-8 tracking-tight font-instrument-sans">
          Key Performance Indicators (YTD)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {KPIS.map((kpi, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-t-[6px] border border-gray-100 overflow-hidden ${kpi.borderColor}`}>
              <h3 className="text-sm font-extrabold text-slate-700 mb-3 font-instrument-sans tracking-wide truncate">
                {kpi.title}
              </h3>
              <div
                className={`text-2xl lg:text-3xl font-extrabold mb-2 font-instrument-sans tracking-tight truncate ${kpi.valueColor}`}>
                {kpi.value}
              </div>
              <div className="text-xs text-slate-600 font-instrument-sans font-bold truncate">
                {kpi.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
