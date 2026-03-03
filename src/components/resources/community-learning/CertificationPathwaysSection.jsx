"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const PATHWAY_CHECKLIST = [
  "Hub O: Financial Integrity & Settlement",
  "Hub P: Operational Logistics & Resource Flow",
  "Hub G: Security, Identity & Governance",
];

export default function CertificationPathwaysSection() {
  return (
    <section className="py-24 px-6 bg-[#F4F5F7] font-instrument-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-1.5 h-8 bg-[#1B1464]"></div>
          <h2 className="text-3xl font-bold text-black tracking-tight">
            Certification Pathways
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">
              Standardized Mastery
            </h3>
            <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg">
              The C23 Module mandates that all high-risk operations be managed
              by certified professionals. Our paths provide the necessary
              scaffolding for:
            </p>
            <ul className="space-y-4">
              {PATHWAY_CHECKLIST.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check
                    className="text-black flex-shrink-0 mt-0.5"
                    size={20}
                    strokeWidth={3}
                  />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-[400px] md:h-[400px] bg-slate-200 rounded-lg overflow-hidden shadow-md relative">
            <Image
              src="/images/CelebratingExpert.svg"
              alt="Certified Professional"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
