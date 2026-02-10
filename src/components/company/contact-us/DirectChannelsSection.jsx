"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const DIRECT_CHANNELS = [
  {
    title: "Sales & Platform Demos",
    description:
      "Book a session to explore how UBOS hubs can solve your specific multi-location, multi-currency challenges.",
    buttonText: "Request a Live Demo",
    topBorderColor: "#1B1464", // Dark Blue
    btnColor: "bg-[#1B1464]",
  },
  {
    title: "Hub Configuration & Data Import",
    description:
      "Select and configure your necessary modules (e.g., Financial O, PPPM K). Migrate existing data via API or designated import tools (Hub G/O).",
    buttonText: "Go to Support Hub",
    topBorderColor: "#00C853", // Green
    btnColor: "bg-[#00C853]",
  },
  {
    title: "Training & Go-Live",
    description:
      "Certify your team via the **Community Learning Hub** and deploy your customized workflows. Go-live begins after internal testing and validation.",
    buttonText: "Find a Consultant",
    topBorderColor: "#D50000", // Red
    btnColor: "bg-[#D50000]",
  },
];

const REGIONAL_HUBS = [
  {
    title: "Global Headquarters",
    details: [
      "123 Universal Plaza, Tech City, Global Zone",
      "Email: info@beaponeubos.com",
      "Phone: +1 (555) UBOS-TECH",
    ],
    topBorderColor: "#1B1464", // Dark Blue
  },
  {
    title: "EMEA Operations Hub",
    details: [
      "Regional support for Europe, Middle East, and Africa.",
      "Email: emea@beaponeubos.com",
      "Local Currency: EUR, GBP, USD",
    ],
    topBorderColor: "#00C853", // Green
  },
  {
    title: "APAC Operations Hub",
    details: [
      "Regional support for Asia Pacific, including Australia and India.",
      "Email: apac@beaponeubos.com",
      "Local Currency: AUD, SGD, JPY",
    ],
    topBorderColor: "#D50000", // Red
  },
];

export default function DirectChannelsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-black mb-4 tracking-tight">
          Explore Direct Channels & Global Presence
        </h2>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {DIRECT_CHANNELS.map((channel, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full border-t-[8px]"
            style={{ borderTopColor: channel.topBorderColor }}>
            <h3 className="text-xl font-bold text-[#1B1464] mb-4">
              {channel.title}
            </h3>
            <p
              className="text-slate-600 mb-8 leading-relaxed text-sm flex-grow"
              dangerouslySetInnerHTML={{
                __html: channel.description.replace(
                  /\*\*(.*?)\*\*/g,
                  '<span class="font-bold text-black">$1</span>',
                ),
              }}
            />
            <button
              className={`w-full py-3 px-6 rounded-full text-white font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-md ${channel.btnColor}`}>
              {channel.buttonText} <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Regional Hubs */}
      <div className="text-left mb-10">
        <h2 className="text-3xl font-bold text-black tracking-tight">
          Global Headquarters & Regional Hubs
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REGIONAL_HUBS.map((hub, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 flex flex-col h-full border-t-[4px]"
            style={{ borderTopColor: hub.topBorderColor }}>
            <h3 className="text-xl font-bold text-[#1B1464] mb-6">
              {hub.title}
            </h3>
            <div className="space-y-4 text-sm text-slate-600">
              {hub.details.map((detail, dIdx) => (
                <p
                  key={dIdx}
                  className="leading-relaxed border-b border-gray-50 last:border-0 pb-2 last:pb-0">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
