"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const ONBOARDING_STEPS = [
  {
    id: 1,
    number: "1",
    title: "Initial Workspace Setup",
    desc: (
      <>
        Create your primary workspace, define your foundational{" "}
        <span className="font-bold text-black">
          Organizational Hierarchy (Hub B)
        </span>
        , and set up core administrative users (Hub G).
      </>
    ),
    btnText: "Start Setup Guide",
    themeColor: "bg-[#1B1464]",
    titleColor: "text-[#1B1464]",
    borderColor: "border-[#1B1464]",
    numberColor: "text-[#1B1464]",
  },
  {
    id: 2,
    number: "2",
    title: "Hub Configuration & Data Import",
    desc: (
      <>
        Select and configure your necessary modules (e.g., Financial O, PPPM K).
        Migrate existing data via API or designated import tools (Hub G/O).
      </>
    ),
    btnText: "View Import Tools",
    themeColor: "bg-[#00C853]",
    titleColor: "text-[#00C853]",
    borderColor: "border-[#00C853]",
    numberColor: "text-[#00C853]",
  },
  {
    id: 3,
    number: "3",
    title: "Training & Go-Live",
    desc: (
      <>
        Certify your team via the{" "}
        <span className="font-bold text-black">Community Learning Hub</span> and
        deploy your customized workflows. Go-live begins after internal testing
        and validation.
      </>
    ),
    btnText: "See Onboarding Path",
    themeColor: "bg-[#D50000]",
    titleColor: "text-[#D50000]",
    borderColor: "border-[#D50000]",
    numberColor: "text-[#D50000]",
  },
];

export default function OnboardingJourneySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-12 tracking-tight font-instrument-sans">
          Your 3-Step Onboarding Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ONBOARDING_STEPS.map((step) => (
            <div
              key={step.id}
              className={`relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full overflow-hidden`}>
              {/* Background Number Watermark */}
              <div
                className={`absolute -top-4 right-4 text-[120px] font-black opacity-[0.05] leading-none pointer-events-none select-none font-instrument-sans ${step.numberColor}`}>
                {step.number}
              </div>

              <h3
                className={`text-xl font-bold mb-4 font-instrument-sans relative z-10 ${step.titleColor}`}>
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-instrument-sans relative z-10">
                {step.desc}
              </p>
              <button
                className={`w-full py-3.5 rounded-full text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-instrument-sans relative z-10 ${step.themeColor}`}>
                {step.btnText} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
