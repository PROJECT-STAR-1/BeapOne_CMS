"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const LEADERSHIP = [
  {
    name: "Alice Chen",
    role: "Clicks / Conversions",
    desc: "Expert in Global Financial Systems and Hub O Compliance. Driven by a passion for simplifying complex tax laws.",
    bgColor: "bg-[#1B1464]", // Dark Blue
  },
  {
    name: "Ben Carter",
    role: "CTO & Head of Core Systems (Hub G)",
    desc: "Architected the UBOS universal data model and the multi-tenant framework, ensuring 99.9% uptime.",
    bgColor: "bg-[#00C853]", // Green
  },
  {
    name: "Clara Diaz",
    role: "VP of Vertical Solutions",
    desc: "Specializes in industry-specific demands, leading development for Hub P (Farm Management) and Hub J (Manufacturing).",
    bgColor: "bg-[#D50000]", // Red
  },
  {
    name: "Marcus Jin",
    role: "Head of Certified Experts & BPC",
    desc: "Oversees the network of consultants, ensuring all custom workflow (Hub C6) and BPC implementations meet high standards.",
    bgColor: "bg-[#FBC02D]", // Yellow
    textColor: "text-black", // Dark text for yellow card
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-24 px-6 bg-[#1B2132]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-instrument-sans">
            The Leadership Behind the UBOS Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {LEADERSHIP.map((leader, idx) => (
            <div
              key={idx}
              className={`${leader.bgColor} rounded-2xl p-6 text-center flex flex-col items-center h-full hover:scale-[1.02] transition-transform duration-300`}>
              {/* Avatar Placeholder */}
              <div className="w-32 h-32 bg-black/10 rounded-full mb-6" />

              {/* Content */}
              <h3
                className={`text-lg font-bold mb-1 font-instrument-sans ${
                  leader.textColor || "text-white"
                }`}>
                {leader.name}
              </h3>
              <p
                className={`text-xs font-extrabold mb-3 opacity-90 whitespace-nowrap font-instrument-sans ${
                  leader.textColor || "text-white"
                }`}>
                {leader.role}
              </p>
              <p
                className={`text-xs leading-relaxed opacity-90 font-instrument-sans ${
                  leader.textColor || "text-blue-50"
                }`}>
                {leader.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-[#242A4A] text-white px-8 py-3 rounded-lg font-bold text-sm border border-white/10 hover:bg-[#2f365f] transition-colors flex items-center gap-2 font-instrument-sans">
            See Our Company Culture & Careers <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
