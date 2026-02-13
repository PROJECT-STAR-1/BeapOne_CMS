"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const DIRECT_ASSISTANCE = [
  {
    title: "UBOS Help Desk (G7)",
    desc: (
      <>
        For technical bugs, platform issues, or quick administrative questions.
        This service is managed by the{" "}
        <span className="font-bold text-black">
          Core Platform Services (Hub G)
        </span>{" "}
        team.
      </>
    ),
    bullets: [
      <>
        <span className="font-bold text-black">Support Hours:</span> 24/7
        Priority Support (for Premium Subscriptions)
      </>,
      <>
        <span className="font-bold text-black">Response Time:</span> Target
        2-hour response for critical issues.
      </>,
    ],
    btnText: "Submit a Support Ticket",
    themeColor: "bg-[#1B1464]",
    titleColor: "text-[#1B1464]",
    borderColor: "!border-t-[#1B1464]",
  },
  {
    title: "Certified UBOS Expert Consultation",
    desc: "For strategic advice, workflow optimization, Hub customization, and long-term project planning (BPC Solution Management - A2-3).",
    bullets: [
      <>
        <span className="font-bold text-black">Service Type:</span>{" "}
        Personalized, paid, long-term consulting.
      </>,
      <>
        <span className="font-bold text-black">Focus:</span> Business Process
        Management, Optimization, and Automation.
      </>,
    ],
    btnText: "Find an Expert",
    themeColor: "bg-[#00C853]",
    titleColor: "text-[#00C853]",
    borderColor: "!border-t-[#00C853]",
  },
];

export default function DirectAssistanceSection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      {/* Widened container to 1400px to stretch cards */}
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-12 tracking-tight font-instrument-sans">
          Need Direct Assistance?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIRECT_ASSISTANCE.map((item, idx) => (
            <div
              key={idx}
              // Removed flex-grow on inner content, reduced padding slightly, tightened margins
              className={`bg-white rounded-xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 border-t-[6px] flex flex-col justify-start ${item.borderColor}`}>
              <h3
                className={`text-2xl font-bold mb-3 font-instrument-sans ${item.titleColor}`}>
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 font-instrument-sans">
                {item.desc}
              </p>
              <ul className="space-y-2 mb-6">
                {item.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="text-slate-600 text-sm font-instrument-sans flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <button
                // Reduced height from py-3.5 to py-2.5 and pushed to mt-auto in case cards stretch slightly
                className={`w-fit px-8 py-2.5 rounded-full text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-instrument-sans mt-auto ${item.themeColor}`}>
                {item.btnText} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
