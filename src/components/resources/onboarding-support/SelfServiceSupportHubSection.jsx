"use client";

import React from "react";
import { Zap, ArrowRight } from "lucide-react";

// Data
const SUPPORT_HUB_CARDS = [
  {
    title: "Official Documentation",
    description:
      "Search the **Document Management (G5)** repository for technical manuals and guides for every UBOS module.",
    buttonText: "View Library",
    topBorderColor: "#1B1464", // Dark Blue
    btnColor: "bg-[#1B1464]",
  },
  {
    title: "FAQs & Knowledge Base",
    description:
      "Instant answers to common questions about platform features, billing, and troubleshooting (Hub C9).",
    buttonText: "Find Answers",
    topBorderColor: "#00C853", // Green
    btnColor: "bg-[#00C853]",
  },
  {
    title: "Community Forums",
    description:
      "Collaborate with fellow users and UBOS Champions for peer-to-peer support and best practice sharing.",
    buttonText: "Join Discussion",
    topBorderColor: "#D50000", // Red
    btnColor: "bg-[#D50000]",
  },
  {
    title: "Release Notes & Updates",
    description:
      "Stay current on the latest features, module rollouts, and version control updates.",
    buttonText: "View Changelog",
    topBorderColor: "#FBC02D", // Yellow
    btnColor: "bg-[#FBC02D]",
  },
];

export default function SelfServiceSupportHubSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
          The Self-Service Support Hub
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUPPORT_HUB_CARDS.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full border-t-[6px]"
            style={{ borderTopColor: card.topBorderColor }}>
            <div className="w-10 h-10 rounded-full bg-[#1B1464] flex items-center justify-center mb-4 text-white">
              <Zap size={20} />
            </div>
            <h3 className="text-lg font-bold text-black mb-3">{card.title}</h3>
            <p
              className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: card.description.replace(
                  /\*\*(.*?)\*\*/g,
                  '<span class="font-bold text-slate-800">$1</span>',
                ),
              }}
            />
            <button
              className={`w-full py-3 px-4 rounded-full text-white font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all ${card.btnColor}`}>
              {card.buttonText} <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
