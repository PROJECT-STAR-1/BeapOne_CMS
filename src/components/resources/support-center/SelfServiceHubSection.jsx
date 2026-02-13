"use client";

import React from "react";
import {
  ArrowRight,
  FileText,
  HelpCircle,
  MessageSquare,
  Layers,
} from "lucide-react";

const SELF_SERVICE_CARDS = [
  {
    icon: FileText,
    title: "Official Documentation",
    desc: (
      <>
        Search the{" "}
        <span className="font-bold text-black">Document Management (G5)</span>{" "}
        repository for technical manuals and guides for every UBOS module.
      </>
    ),
    btnText: "View Library",
    themeColor: "bg-[#1B1464]",
    titleColor: "text-[#1B1464]",
    borderColor: "!border-l-[#1B1464]",
  },
  {
    icon: HelpCircle,
    title: "FAQs & Knowledge Base",
    desc: "Instant answers to common questions about platform features, billing, and troubleshooting (Hub C9).",
    btnText: "Find Answers",
    themeColor: "bg-[#00C853]",
    titleColor: "text-[#00C853]",
    borderColor: "!border-l-[#00C853]",
  },
  {
    icon: MessageSquare,
    title: "Community Forums",
    desc: "Collaborate with fellow users and UBOS Champions for peer-to-peer support and best practice sharing.",
    btnText: "Join Discussion",
    themeColor: "bg-[#D50000]",
    titleColor: "text-[#D50000]",
    borderColor: "!border-l-[#D50000]",
  },
  {
    icon: Layers,
    title: "Release Notes & Updates",
    desc: "Stay current on the latest features, module rollouts, and version control updates.",
    btnText: "View Changelog",
    themeColor: "bg-[#FBC02D]",
    titleColor: "text-[#FBC02D]",
    borderColor: "!border-l-[#FBC02D]",
  },
];

export default function SelfServiceHubSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold text-center text-black mb-12 tracking-tight font-instrument-sans">
          The Self-Service Support Hub
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SELF_SERVICE_CARDS.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-gray-100 border-l-[6px] ${card.borderColor}`}>
              <div className={`mb-5 ${card.titleColor}`}>
                <card.icon size={32} strokeWidth={1.5} />
              </div>
              <h3
                className={`text-xl font-bold mb-4 font-instrument-sans leading-tight ${card.titleColor}`}>
                {card.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-instrument-sans">
                {card.desc}
              </p>
              <button
                className={`w-fit px-6 py-2.5 rounded-full text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-instrument-sans ${card.themeColor}`}>
                {card.btnText} <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
