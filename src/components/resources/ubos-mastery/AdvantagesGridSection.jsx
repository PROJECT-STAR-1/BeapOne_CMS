"use client";

import React from "react";
import {
  User,
  Cast,
  Hexagon,
  Globe,
  ShieldCheck,
  InfinityIcon,
} from "lucide-react";

const ADVANTAGES = [
  {
    icon: User,
    title: "Personalized 1:1 Service",
    desc: "Dedicated, direct support tailored precisely to your team's size and complexity.",
    themeColor: "text-[#1B1464]",
    borderColor: "border-t-[#1B1464]",
  },
  {
    icon: Cast,
    title: "Broad Industry Expertise",
    desc: "Leverage consultants with proven success across a wide range of industry sectors.",
    themeColor: "text-[#00C853]",
    borderColor: "border-t-[#00C853]",
  },
  {
    icon: Hexagon,
    title: "Custom Solutions",
    desc: "Workflows and systems are built from the ground up to fit your exact business objectives.",
    themeColor: "text-[#D50000]",
    borderColor: "border-t-[#D50000]",
  },
  {
    icon: Globe,
    title: "Global Communication",
    desc: "Access to a network of consultants supporting over 20 languages globally.",
    themeColor: "text-[#FBC02D]",
    borderColor: "border-t-[#FBC02D]",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Vetted",
    desc: "Work with professionals who have been rigorously vetted and approved by the BEAPOne UBOS Program.",
    themeColor: "text-[#1B1464]",
    borderColor: "border-t-[#1B1464]",
  },
  {
    icon: InfinityIcon,
    title: "Flexible Timelines",
    desc: "Consulting arrangements and deliverables designed to fit your unique schedule and deadlines.",
    themeColor: "text-[#00C853]",
    borderColor: "border-t-[#00C853]",
  },
];

export default function AdvantagesGridSection() {
  return (
    <section className="py-16 px-6 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border-t-[6px] border border-gray-100 flex flex-col h-full ${adv.borderColor}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className={`${adv.themeColor}`}>
                  <adv.icon size={24} strokeWidth={2} />
                </div>
                <h3
                  className={`text-lg font-bold font-instrument-sans ${adv.themeColor}`}>
                  {adv.title}
                </h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow font-instrument-sans pl-9">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
