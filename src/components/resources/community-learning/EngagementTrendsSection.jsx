"use client";

import React from "react";

export default function EngagementTrendsSection() {
  return (
    <section className="py-20 px-6 bg-[#F8F9FA] font-instrument-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-8 bg-[#1B1464]"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Certification Engagement Trends
          </h2>
        </div>

        <div className="w-full relative pt-8 pb-4">
          <div className="w-full h-[300px] relative">
            <svg
              viewBox="0 0 1000 300"
              className="w-full h-full drop-shadow-sm"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="wave-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,150 C100,160 150,80 250,110 C350,140 400,240 500,160 C600,80 650,180 750,110 C850,40 900,100 1000,90 L1000,300 L0,300 Z"
                fill="url(#wave-grad)"
              />
              <path
                d="M0,150 C100,160 150,80 250,110 C350,140 400,240 500,160 C600,80 650,180 750,110 C850,40 900,100 1000,90"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="3"
              />
            </svg>
          </div>

          <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 mt-4 px-4 uppercase tracking-wider">
            <span>Q1 2025</span>
            <span>Q2 2025</span>
            <span>Q3 2025</span>
            <span>Q4 2025</span>
            <span>Q5 2025</span>
            <span>Q6 2025</span>
          </div>
        </div>

        <p className="text-center text-slate-600 text-sm font-medium mt-10">
          Annual growth in certified proficiency shows a 140% increase since the
          C23 module deployment.
        </p>
      </div>
    </section>
  );
}
