"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const ACTION_HUB = [
  {
    title: "Register New Lead / Deal",
    desc: "Secure your attribution and pipeline protection immediately. Syncs with A1 BSS CRM.",
    btnText: "Learn About Multi-Tenancy",
    themeColor: "bg-[#1B1464]",
    titleColor: "text-[#1B1464]",
    borderColor: "border-t-[#1B1464]",
    link: "/comingSoon",
  },
  {
    title: "Marketing Development Funds (MDF)",
    desc: (
      <>
        Available Balance:{" "}
        <span className="text-[#00C853] font-bold">$7,500 USD</span>. Apply for
        funding for your next local campaign (A2.7 6.4.3).
      </>
    ),
    btnText: "Explore BPC Solutions",
    themeColor: "bg-[#00C853]",
    titleColor: "text-[#00C853]",
    borderColor: "border-t-[#00C853]",
    link: "/comingSoon",
  },
  {
    title: "Certification Status (Hub O)",
    desc: (
      <>
        Current Status:{" "}
        <span className="text-[#D50000] font-bold">
          Certified Implementer (Hub O)
        </span>
        . Unlock Gold Tier benefits with the next module.
      </>
    ),
    btnText: "See Onboarding Path",
    themeColor: "bg-[#D50000]",
    titleColor: "text-[#D50000]",
    borderColor: "border-t-[#D50000]",
    link: "/home/company/global-integrators/partnerOnboarding", 
  },
];
export default function ActionHubSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl font-bold text-black mb-10 tracking-tight font-instrument-sans">
          Action Hub & Enablement Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACTION_HUB.map((hub, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-t-[6px] border border-gray-100 flex flex-col h-full ${hub.borderColor}`}>
              <h3
                className={`text-xl font-bold mb-4 font-instrument-sans ${hub.titleColor}`}>
                {hub.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow font-instrument-sans">
                {hub.desc}
              </p>
              <Link
  href={hub.link}
  className={`w-full py-3.5 rounded-full text-white font-bold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-instrument-sans ${hub.themeColor}`}
>
  {hub.btnText} <ArrowRight size={16} />
</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
