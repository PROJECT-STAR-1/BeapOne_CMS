"use client";

import React from "react";
import { Medal, Boxes, Award, HeartHandshake } from "lucide-react";

const PERKS = [
  {
    icon: Medal,
    title: "Competitive Compensation",
    desc: "Performance-based compensation and stock options for all full-time employees, rewarding the risk-takers.",
    themeColor: "text-[#1B1464]",
    borderColor: "border-t-[#1B1464]",
  },
  {
    icon: Boxes,
    title: "Remote-First Model",
    desc: "Enjoy true work-life flexibility with our global, remote-first policy and asynchronous tools (Hub C/G).",
    themeColor: "text-[#00C853]",
    borderColor: "border-t-[#00C853]",
  },
  {
    icon: Award,
    title: "UBOS Certification & Training",
    desc: "Generous budget for external training, plus mandatory, fully sponsored Official UBOS Expert Certification.",
    themeColor: "text-[#D50000]",
    borderColor: "border-t-[#D50000]",
  },
  {
    icon: HeartHandshake,
    title: "Global Wellness Program",
    desc: "Comprehensive health benefits, mental health resources, and generous paid time off (PTO) in every region.",
    themeColor: "text-[#FBC02D]",
    borderColor: "border-t-[#FBC02D]",
  },
];

export default function PerksSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 tracking-tight font-instrument-sans">
          Your Growth, Our Guarantee
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PERKS.map((perk, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow border-t-[6px] border border-gray-100 flex flex-col items-center text-center h-full ${perk.borderColor}`}>
              <div className={`mb-6 ${perk.themeColor}`}>
                <perk.icon size={36} strokeWidth={1.5} />
              </div>
              <h3
                className={`text-xl font-bold mb-4 font-instrument-sans ${perk.themeColor}`}>
                {perk.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow font-instrument-sans">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
