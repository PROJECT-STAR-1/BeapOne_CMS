"use client";

import React from "react";
import { Settings, Grid, Layers, Box } from "lucide-react";

// Data derived from RFC2.jpg
const CUSTOMIZATION_TYPES = [
  {
    title: "Workflow & BPC",
    description: "Tailoring Hub C6/A2-1 to unique business processes.",
    topBorderColor: "#1B1464", // Dark Blue
    icon: <Settings size={24} className="text-[#1B1464]" />,
  },
  {
    title: "Module Integration",
    description:
      "Connecting UBOS Hubs (M, O, K) with external systems via API.",
    topBorderColor: "#00C853", // Green
    icon: <Grid size={24} className="text-[#00C853]" />,
  },
  {
    title: "Multi-Dimensional Setup",
    description:
      "Bespoke configuration for multi-currency, multi-tenant instances.",
    topBorderColor: "#D50000", // Red
    icon: <Layers size={24} className="text-[#D50000]" />,
  },
  {
    title: "Vertical/Niche App",
    description:
      "Bespoke configuration for multi-currency, multi-tenant instances.",
    topBorderColor: "#FBC02D", // Yellow
    icon: <Box size={24} className="text-[#FBC02D]" />,
  },
];

export default function CustomizationTypesSection() {
  return (
    <section className="relative z-20 px-6 py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4 tracking-tight">
            What Type of Customization Do You Need?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMIZATION_TYPES.map((type, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full border-t-[6px]"
              style={{ borderTopColor: type.topBorderColor }}>
              <div className="mb-4">{type.icon}</div>
              <h3 className="text-xl font-bold text-[#1B1464] mb-4">
                {type.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {type.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
