"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const RESOURCES = [
  {
    tag: "Product Collateral",
    title: "UBOS Q1 2026 Feature Deck",
    desc: "Includes new Hub P (Verticals) slides.\n(Content_Type: Presentation)",
    btnText: "Download Co-Brandable",
    themeColor: "bg-[#1B1464]",
    titleColor: "text-[#1B1464]",
    borderColor: "!border-l-[#1B1464]",
  },
  {
    tag: "Marketing Assets",
    title: "Q4 Campaign: Multi-Currency Email Kit",
    desc: "5 pre-written email sequences (Content_Type: EmailTemplate).",
    btnText: "Download Templates",
    themeColor: "bg-[#00C853]",
    titleColor: "text-[#00C853]",
    borderColor: "!border-l-[#00C853]",
  },
  {
    tag: "Legal/Compliance",
    title: "Partner Agreement & Compliance Checklist",
    desc: "Ensure adherence to agreement terms and tax compliance (A2.7 5.0).",
    btnText: "View Document",
    themeColor: "bg-[#D50000]",
    titleColor: "text-[#D50000]",
    borderColor: "!border-l-[#D50000]",
  },
  {
    tag: "Enablement",
    title: "Webinar-in-a-Box: PPPM (Hub K)",
    desc: "Promotional materials and slides for your local Hub K webinar.",
    btnText: "Get Webinar Kit",
    themeColor: "bg-[#FBC02D]",
    titleColor: "text-[#FBC02D]",
    borderColor: "!border-l-[#FBC02D]",
  },
];

export default function ResourceLibrarySection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-3 tracking-tight font-instrument-sans">
            Channel Marketing & Sales Resource Library
          </h2>
          <p className="text-slate-700 text-sm font-instrument-sans">
            Access co-brandable collateral and the latest product updates.
            Content access is controlled by your{" "}
            <span className="font-bold">Platinum</span> tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESOURCES.map((resource, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-gray-100 border-l-[6px] ${resource.borderColor}`}>
              <div className="text-xs font-bold text-slate-500 mb-3 font-instrument-sans tracking-wide">
                {resource.tag}
              </div>
              <h3
                className={`text-lg font-bold mb-4 font-instrument-sans leading-tight ${resource.titleColor}`}>
                {resource.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-8 flex-grow whitespace-pre-line font-instrument-sans">
                {resource.desc}
              </p>
              <button
                className={`w-fit px-6 py-2.5 rounded-full text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-instrument-sans ${resource.themeColor}`}>
                {resource.btnText} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
