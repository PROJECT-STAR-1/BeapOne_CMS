"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

// Data derived from LCR3.jpg
const LEARNING_PATHS = [
  {
    id: "user",
    title: "UBOS Certified User",
    description:
      "Validates foundational knowledge of task management (N), documentation (G5), and basic operation of the Business Operations Hub (C).",
    details: [
      { label: "Focus", value: "Day-to-day use, basic workflow." },
      { label: "Modules", value: "N1, N4, C1, G5." },
      { label: "Target", value: "All employees." },
    ],
    buttonText: "Start Learning Path",
    topBorderColor: "#0056D2", // Blue
    btnColor: "bg-[#0056D2]",
  },
  {
    id: "specialist",
    title: "UBOS Certified Specialist",
    description:
      "Validates deep expertise in a chosen Hub. Available specializations include Financial (O), Projects (K), and Supply Chain (M).",
    details: [
      {
        label: "Focus",
        value: "Advanced configuration, reporting, automation.",
      },
      {
        label: "Modules",
        value: "O9, O10, K6, K10, M2, M4 (Choose one Hub).",
      },
      { label: "Target", value: "Department Leads, Analysts." },
    ],
    buttonText: "View Specializations",
    topBorderColor: "#5CB85C", // Green
    btnColor: "bg-[#5CB85C]",
  },
  {
    id: "expert",
    title: "Official UBOS Expert",
    description:
      "The highest level. Certification requires passing the Expert exam and demonstrating proficiency in workspace design (B) and full-stack implementation.",
    details: [
      { label: "Focus", value: "System architecture, BPC, monetization." },
      {
        label: "Modules",
        value: "A2, B2, C6, G6 (Comprehensive Exam).",
      },
      {
        label: "Target",
        value: "Official Consultants, UBOS Solution Partners.",
      },
    ],
    buttonText: "Apply for Exam",
    topBorderColor: "#D81B60", // Magenta
    btnColor: "bg-[#D81B60]",
  },
];

export default function StructuredLearningPathsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
          Structured Learning Paths
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Progress through modular courses covering foundational skills to
          specialized UBOS Hub Mastery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LEARNING_PATHS.map((path) => (
          <div
            key={path.id}
            // Added border-t-[8px] for thickness
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col h-full group border-t-[8px]"
            // Inline style ensures the specific color overrides any Tailwind defaults
            style={{ borderTopColor: path.topBorderColor }}>
            <h3 className="text-2xl font-bold text-black mb-4">{path.title}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed text-[15px]">
              {path.description}
            </p>

            <div className="space-y-3 mb-10 flex-grow">
              {path.details.map((detail, idx) => (
                <div key={idx} className="flex gap-2 text-sm items-start">
                  <span className="mt-2 text-slate-400 text-[8px]">●</span>
                  <div>
                    <span className="font-bold text-black mr-1">
                      {detail.label}:
                    </span>
                    <span className="text-slate-600">{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-4 px-6 rounded-lg text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md group-hover:scale-[1.02] ${path.btnColor}`}>
              {path.buttonText} <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
