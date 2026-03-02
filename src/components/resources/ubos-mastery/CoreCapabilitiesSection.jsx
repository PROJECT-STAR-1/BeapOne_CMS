"use client";

import React from "react";
import { Network, FileText, Settings } from "lucide-react";

const CORE_CAPABILITIES = [
  {
    icon: Network,
    title: "Streamline Workflows",
    desc: "We eliminate bottlenecks, design lean processes, and structure your UBOS workspace for maximum operational speed and clarity.",
    themeColor: "text-[#1B1464]",
    borderColor: "border-t-[#1B1464]",
  },
  {
    icon: FileText,
    title: "Document Processes",
    desc: "Convert tacit knowledge into explicit, easily accessible documentation directly within your UBOS, ensuring consistent execution and faster onboarding.",
    themeColor: "text-[#00C853]",
    borderColor: "border-t-[#00C853]",
  },
  {
    icon: Settings,
    title: "Automate Tasks",
    desc: "Leverage the UBOS automation engine to handle repetitive tasks, reducing manual effort and allowing your team to focus on high-value work.",
    themeColor: "text-[#D50000]",
    borderColor: "border-t-[#D50000]",
  },
];

export default function CoreCapabilitiesSection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight font-instrument-sans mb-3">
            The BEAPOne Advantage: UBOS Mastery
          </h2>
          <p className="text-slate-600 text-sm font-instrument-sans">
            We don't just configure software; we build your comprehensive,
            efficient operating system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_CAPABILITIES.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-[6px] flex flex-col items-center text-center h-full ${item.borderColor}`}>
              <div className={`mb-4 ${item.themeColor}`}>
                <item.icon size={40} strokeWidth={1.5} />
              </div>
              <h3
                className={`text-xl font-bold mb-3 font-instrument-sans ${item.themeColor}`}>
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow font-instrument-sans">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
