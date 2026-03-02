"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const PROGRAM_BENEFITS = [
  {
    title: "Credibility",
    desc: "Increase your business's trustworthiness with the official badge.",
  },
  {
    title: "Promotion",
    desc: "Get your services promoted to the vast BEAPOne UBOS customer base and on the partner directory.",
  },
  {
    title: "Resources",
    desc: "Access partner portals, marketing collateral, and business development resources.",
  },
  {
    title: "Early Access",
    desc: "Participate in Beta Testing and receive early release notes.",
  },
  {
    title: "Tools",
    desc: "Get a free sandbox account for experimentation and development.",
  },
];

const ELIGIBILITY = [
  {
    title: "1. Passion for Productivity",
    desc: "Increase your business's trustworthiness with the official badge.",
  },
  {
    title: "2. Expertise & Experience",
    desc: "Proven experience in successfully implementing UBOS services and optimizing workflows for multiple clients.\n\nThis includes developing robust UBOS service offerings.",
  },
  {
    title: "3. Business Size (Ideal Candidate)",
    desc: "The ideal consultant has less than 10 full-time employees AND generates less than $1M in annual revenue.",
  },
];

export default function PartnerProgramSection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB] border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight font-instrument-sans mb-3">
            Join the Ecosystem: Become an Official UBOS Consultant
          </h2>
          <p className="text-slate-600 text-sm font-instrument-sans">
            Are you a productivity expert? Accelerate your business by joining
            the BEAPOne UBOS Partner Program.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card: Program Benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-l-[8px] border-l-[#1B1464] flex flex-col h-full">
            <h3 className="text-2xl font-bold text-[#1B1464] mb-6 font-instrument-sans">
              Program Benefits
            </h3>
            <div className="space-y-4 flex-grow">
              {PROGRAM_BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-[#1B1464] flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <p className="text-slate-700 text-sm font-instrument-sans leading-relaxed">
                    <span className="font-bold text-black">
                      {benefit.title}:
                    </span>{" "}
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Eligibility & Requirements */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 border-l-[8px] border-l-[#00C853] flex flex-col h-full">
            <h3 className="text-2xl font-bold text-[#00C853] mb-6 font-instrument-sans">
              Eligibility & Requirements
            </h3>

            <div className="space-y-3 flex-grow">
              {ELIGIBILITY.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-lg p-4 bg-white">
                  <h4 className="text-sm font-bold text-[#00C853] mb-1 font-instrument-sans">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line font-instrument-sans">
                    {item.desc}
                  </p>
                </div>
              ))}

              <p className="text-xs font-bold text-black mt-4 font-instrument-sans">
                If your organization exceeds these thresholds, please check out
                the BEAPOne UBOS Solution Partner Program instead.
              </p>
            </div>

            <button className="bg-[#00C853] text-white px-8 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity font-instrument-sans flex items-center justify-center gap-2 w-fit mt-6">
              Apply to Become Official <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
