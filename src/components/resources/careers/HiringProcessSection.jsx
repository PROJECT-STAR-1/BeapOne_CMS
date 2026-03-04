"use client";

import React from "react";

const HIRING_PROCESS = [
  {
    number: "1.",
    title: "Application Review",
    desc: "ATS review and screening by hiring manager (1-2 days).",
    themeColor: "text-[#1B1464]",
    borderColor: "border-t-[#1B1464]",
  },
  {
    number: "2.",
    title: "Initial Interview",
    desc: "Culture fit and role alignment call (30 mins).",
    themeColor: "text-[#00C853]",
    borderColor: "border-t-[#00C853]",
  },
  {
    number: "3.",
    title: "Technical Deep Dive",
    desc: "Hub-specific skills assessment or competency interview.",
    themeColor: "text-[#D50000]",
    borderColor: "border-t-[#D50000]",
  },
  {
    number: "4.",
    title: "Offer & Onboarding",
    desc: "Offer extension followed by guided UBOS Onboarding.",
    themeColor: "text-[#FBC02D]",
    borderColor: "border-t-[#FBC02D]",
  },
];

export default function HiringProcessSection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB] border-t-2 border-gray-200">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 tracking-tight font-instrument-sans">
          Our Hiring Process: Transparency First
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIRING_PROCESS.map((step, idx) => (
            <div
              key={idx}
              className={`bg-[#F4F5F7] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 border-t-[6px] text-center flex flex-col justify-center h-full ${step.borderColor}`}>
              <div
                className={`text-3xl font-black mb-2 font-instrument-sans ${step.themeColor}`}>
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-black mb-2 font-instrument-sans">
                {step.title}
              </h3>
              <p
                className={`text-xs font-bold leading-relaxed font-instrument-sans ${step.themeColor}`}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
