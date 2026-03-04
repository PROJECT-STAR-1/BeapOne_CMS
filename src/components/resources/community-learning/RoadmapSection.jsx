"use client";

import React from "react";

const ROADMAP_STEPS = [
  {
    step: "01",
    title: "Enrollment",
    desc: "Select your module path and join a cohort.",
  },
  {
    step: "02",
    title: "Mastery",
    desc: "Complete batches and attend live training.",
  },
  {
    step: "03",
    title: "Assessment",
    desc: "Submit projects for grading and peer review.",
  },
  {
    step: "04",
    title: "Validation",
    desc: "Enter the Official Registry & gain Merit.",
  },
];

export default function RoadmapSection() {
  return (
    <section className="py-24 px-6 bg-white font-instrument-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-16 md:mb-24">
          <div className="w-1.5 h-8 bg-[#1B1464]"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            The Certification Roadmap
          </h2>
        </div>

        <div className="relative w-full">
          <div className="w-full relative h-[150px] md:h-[250px] flex items-center">
            {/* Horizontal Center Line */}
            <div className="absolute left-0 right-0 h-1 bg-[#B3D4FF] z-0"></div>

            {/* Flex Grid for Nodes - Spaced evenly and perfectly centered */}
            <div className="relative z-10 w-full flex justify-between items-center px-4 sm:px-12 md:px-24">
              {ROADMAP_STEPS.map((step, idx) => {
                const isTop = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className="relative flex flex-col items-center justify-center"
                  >
                    {/* Timeline Node Ring */}
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-[#FFB300] bg-white z-10 relative"></div>

                    {/* Text Container */}
                    <div
                      className={`absolute w-[80px] sm:w-[120px] md:w-48 text-center left-1/2 -translate-x-1/2 ${isTop ? "bottom-8 md:bottom-12" : "top-8 md:top-12"}`}
                    >
                      <h4 className="font-bold text-[11px] sm:text-sm md:text-lg text-black mb-1">
                        {step.step}. {step.title}
                      </h4>
                      <p className="text-[9px] sm:text-[10px] md:text-xs text-slate-500 leading-tight md:leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
