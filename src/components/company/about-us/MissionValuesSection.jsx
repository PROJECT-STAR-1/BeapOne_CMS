"use client";

import React from "react";

const STATS = [
  { value: "15+", label: "Clicks / Conversions", color: "text-[#1B1464]" },
  {
    value: "100K+",
    label: "Global Tasks Managed (Hub N)",
    color: "text-[#00C853]",
  },
  {
    value: "99.9%",
    label: "Platform Uptime (SLA G)",
    color: "text-[#D50000]",
  },
  {
    value: "20+",
    label: "Supported Currencies & Jurisdictions",
    color: "text-[#FBC02D]",
  },
];

export default function MissionValuesSection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-tight font-instrument-sans">
            Our Commitment: Mission, Vision, Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-[6px] border-[#1B1464]">
            <h3 className="text-xl font-bold text-[#1B1464] mb-4 font-instrument-sans">
              Our Mission
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-instrument-sans">
              To provide every organization, regardless of size or geographic
              complexity, with a single, reliable Universal Business Operating
              System (UBOS) to automate, manage, and scale their entire
              workflow.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-[6px] border-[#00C853]">
            <h3 className="text-xl font-bold text-[#00C853] mb-4 font-instrument-sans">
              Our Vision
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-instrument-sans">
              To become the global standard for business management, enabling a
              future where operational friction is eliminated and organizational
              energy is focused entirely on growth and innovation.
            </p>
          </div>
          {/* Values */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border-t-[6px] border-[#D50000]">
            <h3 className="text-xl font-bold text-[#D50000] mb-4 font-instrument-sans">
              Our Core Values
            </h3>
            <ul className="text-slate-600 text-sm leading-relaxed space-y-2 font-instrument-sans">
              <li>
                <span className="font-bold text-black">Innovation:</span>{" "}
                Relentless pursuit of a simpler, integrated solution.
              </li>
              <li>
                <span className="font-bold text-black">Trust:</span>{" "}
                Uncompromising security and data integrity (Hub G).
              </li>
              <li>
                <span className="font-bold text-black">Expertise:</span>{" "}
                Empowering users through Certified Consulting.
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Row */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black tracking-tight font-instrument-sans">
            Trust & Milestones
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 text-center shadow-sm border-b-[6px]"
              style={{
                borderColor:
                  stat.color === "text-[#1B1464]"
                    ? "#1B1464"
                    : stat.color === "text-[#00C853]"
                      ? "#00C853"
                      : stat.color === "text-[#D50000]"
                        ? "#D50000"
                        : "#FBC02D",
              }}>
              <div
                className={`text-4xl font-extrabold mb-2 ${stat.color} font-instrument-sans`}>
                {stat.value}
              </div>
              <div className="text-base font-extrabold text-black tracking-wide font-instrument-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
