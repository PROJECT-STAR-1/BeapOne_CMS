"use client";

import React from "react";

export default function QuickNavigationSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 relative z-20 mt-6">
      <div className="bg-white p-12 text-center rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">
          Quick Navigation by Topic
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { id: "A/B/G", sub: "Core Systems & Org" },
            { id: "O", sub: "Financial Management" },
            { id: "K", sub: "PPPM & Workflow" },
            { id: "P/M/CWM", sub: "Industry Verticals" },
            { id: "S", sub: "Business Templates" },
            { id: "Partners", sub: "Consulting & Program" },
          ].map((item, idx) => (
            <button
              key={idx}
              className="bg-[#1B1464] hover:bg-[#251b8a] text-white rounded-[16px] py-6 px-4 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-md">
              <span className="text-xl font-semibold mb-1">{item.id}</span>
              <span className="text-[13px] font-normal opacity-80 leading-tight">
                {item.sub}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
