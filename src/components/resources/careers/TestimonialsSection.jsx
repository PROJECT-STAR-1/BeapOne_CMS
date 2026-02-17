"use client";

import React from "react";

const TESTIMONIALS = [
  {
    quote: `"Working on the Financial Hub (Hub O) means I'm constantly solving real multi-currency challenges. The team trusts me to lead the APAC compliance rollout, giving me unmatched autonomy."`,
    initials: "JS",
    name: "Jane Smith",
    role: "Financial Hub Developer | Remote, Sydney",
    themeColor: "bg-[#1B1464]",
    borderColor: "border-l-[#1B1464]",
    textColor: "text-[#1B1464]",
  },
  {
    quote: `"The emphasis on BPC and Certified Experts is real. I transitioned from a Project Manager (Hub K) to a Core Systems Trainer (Hub G), all fully supported by the company's internal learning program."`,
    initials: "TK",
    name: "Tom Kudo",
    role: "UBOS Trainer & Consultant | London, UK",
    themeColor: "bg-[#00C853]",
    borderColor: "border-l-[#00C853]",
    textColor: "text-[#00C853]",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB] border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 tracking-tight font-instrument-sans">
          Hear From the Team
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TESTIMONIALS.map((test, idx) => (
            <div
              key={idx}
              className={`bg-[#F4F5F7] rounded-2xl p-10 md:p-12 shadow-sm hover:shadow-md transition-shadow border border-gray-100 border-l-[6px] flex flex-col justify-between h-full ${test.borderColor}`}>
              <p className="text-slate-700 text-lg leading-relaxed mb-10 font-medium font-instrument-sans">
                {test.quote}
              </p>
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ${test.themeColor}`}>
                  {test.initials}
                </div>
                <div>
                  <h4
                    className={`text-base font-bold font-instrument-sans ${test.textColor}`}>
                    {test.name}
                  </h4>
                  <p className="text-slate-500 text-xs font-instrument-sans mt-0.5">
                    {test.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
