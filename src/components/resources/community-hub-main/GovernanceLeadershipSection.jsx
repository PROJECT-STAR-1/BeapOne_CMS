"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const GOVERNANCE_CARDS = [
  {
    title: "Events Management Portal",
    desc: (
      <>
        View and register for{" "}
        <span className="font-bold text-black">
          past, present, and future events
        </span>{" "}
        (webinars, local meetups). Integrated live streaming and resource
        archiving ensure maximum participation.
      </>
    ),
    linkText: "View Event Calendar",
    themeColor: "text-[#1B1464]",
    borderColor: "border-l-[6px] !border-l-[#1B1464]",
  },
  {
    title: "Voting & Elections Resource",
    desc: (
      <>
        Secure system for community-wide voting on critical issues and the{" "}
        <span className="font-bold text-black">
          election of leadership positions
        </span>{" "}
        (1, 2, 3, or 4-year cycles). Includes the{" "}
        <span className="font-bold text-black">
          Governance Documentation Repository
        </span>
        .
      </>
    ),
    linkText: "Access Voting Hub",
    themeColor: "text-[#00C853]",
    borderColor: "border-l-[6px] !border-l-[#00C853]",
  },
  {
    title: "Community Governing Council",
    desc: "Elected body responsible for overall community operations, major activities, and financial resource management, ensuring long-term sustainability and strategic alignment.",
    themeColor: "text-[#D50000]",
    borderColor: "border-l-[6px] !border-l-[#D50000]",
  },
  {
    title: "Accountability Committee",
    desc: "Regulates and supervises member activities and community conduct, ensuring compliance with community rules and promoting a safe, ethical, and positive environment.",
    themeColor: "text-[#FBC02D]",
    borderColor: "border-l-[6px] !border-l-[#FBC02D]",
  },
];

const SUB_COMMUNITY_CARDS = [
  {
    title: "Community Champions",
    desc: "Facilitate high-level interaction and resource flow across the entire UBOS ecosystem. Act as key liaisons between the community and the platform developers.",
    themeColor: "text-[#1B1464]",
    borderColor: "border-l-[6px] !border-l-[#1B1464]",
  },
  {
    title: "Cluster & Group Leaders",
    desc: (
      <>
        Elected or appointed leaders, deputy leaders, and{" "}
        <span className="font-bold text-black">resource champions</span> who
        manage specialized sub-groups (e.g., Financial Hub Cluster, Farm
        Management Group).
      </>
    ),
    themeColor: "text-[#00C853]",
    borderColor: "border-l-[6px] !border-l-[#00C853]",
  },
  {
    title: "Council Committees",
    desc: "Sub-committees formed under the Governing Council to focus on specific mandates like finance, events management, or rules enforcement.",
    themeColor: "text-[#D50000]",
    borderColor: "border-l-[6px] !border-l-[#D50000]",
  },
];

export default function GovernanceLeadershipSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section: Governance & Leadership */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10 tracking-tight font-instrument-sans">
            Community Governance & Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GOVERNANCE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-gray-100 overflow-hidden ${card.borderColor}`}>
                <h3
                  className={`text-lg font-bold mb-3 font-instrument-sans ${card.themeColor}`}>
                  {card.title}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed flex-grow font-instrument-sans mb-6">
                  {card.desc}
                </p>
                {card.linkText && (
                  <button
                    className={`w-fit font-bold text-sm flex items-center gap-2 hover:opacity-70 transition-opacity font-instrument-sans mt-auto ${card.themeColor}`}>
                    {card.linkText} <ArrowRight size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Sub-Community & Champion Network */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-10 tracking-tight font-instrument-sans">
            Sub-Community & Champion Network
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUB_COMMUNITY_CARDS.map((card, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-gray-100 overflow-hidden ${card.borderColor}`}>
                <h3
                  className={`text-lg font-bold mb-3 font-instrument-sans ${card.themeColor}`}>
                  {card.title}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed flex-grow font-instrument-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
