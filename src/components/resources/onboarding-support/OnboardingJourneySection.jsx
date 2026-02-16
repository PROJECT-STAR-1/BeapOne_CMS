"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

// Data derived from ONB2.jpg
const ONBOARDING_STEPS = [
  {
    title: "Initial Workspace Setup",
    description:
      "Create your primary workspace, define your foundational **Organizational Hierarchy (Hub B)**, and set up core administrative users (Hub G).",
    buttonText: "Start Setup Guide",
    topBorderColor: "#1B1464", // Dark Blue
    btnColor: "bg-[#1B1464]",
  },
  {
    title: "Hub Configuration & Data Import",
    description:
      "Select and configure your necessary modules (e.g., Financial O, PPPM K). Migrate existing data via API or designated import tools (Hub G/O).",
    buttonText: "View Import Tools",
    topBorderColor: "#00C853", // Green
    btnColor: "bg-[#00C853]",
  },
  {
    title: "Training & Go-Live",
    description:
      "Certify your team via the **Community Learning Hub** and deploy your customized workflows. Go-live begins after internal testing and validation.",
    buttonText: "Access Training Courses",
    topBorderColor: "#D50000", // Red
    btnColor: "bg-[#D50000]",
  },
];

export default function OnboardingJourneySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
          Your 3-Step Onboarding Journey
        </h2>
        <p className="text-slate-600 text-lg max-w-3xl mx-auto">
          Progress through modular courses covering foundational skills to
          specialized UBOS Hub Mastery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ONBOARDING_STEPS.map((step, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full border-t-[8px]"
            style={{ borderTopColor: step.topBorderColor }}>
            <h3 className="text-2xl font-bold text-black mb-4">{step.title}</h3>
            <p
              className="text-slate-600 mb-10 leading-relaxed text-[15px] flex-grow"
              dangerouslySetInnerHTML={{
                __html: step.description.replace(
                  /\*\*(.*?)\*\*/g,
                  '<span class="font-bold text-black">$1</span>',
                ),
              }}
            />
            <button
              className={`w-full py-4 px-6 rounded-lg text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md ${step.btnColor}`}>
              {step.buttonText} <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
