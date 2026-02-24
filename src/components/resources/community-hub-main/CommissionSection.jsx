"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ROUTE_MAP = {
  certifications: "#",
  careers: "#",
};

const COMMISSION_CARDS = [
  {
    id: "certifications",
    title: "Community Learning & Certifications",
    desc: (
      <>
        Access structured learning content delivered in{" "}
        <span className="font-bold text-black">
          batches, cohorts, or interest clusters
        </span>
        . Includes{" "}
        <span className="font-bold text-black">webinar resources</span>, live
        training, grading, and direct links to the{" "}
        <span className="font-bold text-black">
          Official UBOS Certification Registry
        </span>
        .
      </>
    ),
    linkText: "Explore Certification Paths",
    themeColor: "text-[#1B1464]",
    borderColor: "border-t-[6px] !border-t-[#1B1464]",
  },
  {
    id: "careers",
    title: "Career & Volunteer Services",
    desc: (
      <div className="space-y-3">
        <p>
          <span className="font-bold text-black">Community Job Boards:</span>{" "}
          Post openings filtered by{" "}
          <span className="font-bold text-black">
            segment, sector, industry, and professional practice
          </span>
          .
        </p>
        <p>
          <span className="font-bold text-black">Job Request Boards:</span>{" "}
          Members post requests for assistance in securing opportunities.
        </p>
        <p>
          <span className="font-bold text-black">Volunteer Services:</span>{" "}
          Match members with{" "}
          <span className="font-bold text-black">just causes</span> and social
          impact projects promoted by the community.
        </p>
      </div>
    ),
    linkText: "View Current Openings",
    themeColor: "text-[#1B1464]",
    titleColor: "text-[#00C853]",
    borderColor: "border-t-[6px] !border-t-[#00C853]",
  },
];

export default function CommissionSection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-left text-black mb-12 tracking-tight font-instrument-sans">
          Commission Structure & Multi-Currency Payouts
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COMMISSION_CARDS.map((card, idx) => {
            const resolvedPath = ROUTE_MAP[card.id] || "#";
            return (
              <Link
                key={card.id || idx}
                href={resolvedPath}
                className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-gray-100 overflow-hidden ${card.borderColor}`}>
                <h3
                  className={`text-2xl font-bold mb-6 font-instrument-sans ${card.titleColor || card.themeColor}`}>
                  {card.title}
                </h3>
                <div className="text-slate-600 text-[15px] leading-relaxed mb-10 flex-grow font-instrument-sans">
                  {card.desc}
                </div>
                <div
                  className={`w-fit font-bold text-sm flex items-center justify-center gap-2 group-hover:opacity-70 transition-opacity font-instrument-sans ${card.themeColor}`}>
                  {card.linkText} <ArrowRight size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
