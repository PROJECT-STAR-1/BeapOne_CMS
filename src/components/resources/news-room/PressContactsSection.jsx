"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const CONTACTS = [
  {
    category: "Corporate & Financial News",
    name: "Liam Jones, Head of PR",
    topics:
      "Topics: Funding, Acquisitions, Executive Commentary, Financial Hub (O).",
    btnText: "Email Liam Jones",
    themeColor: "bg-[#1B1464]",
    borderColor: "!border-t-[#1B1464]",
    titleColor: "text-[#1B1464]",
  },
  {
    category: "Product & Technical Inquiries",
    name: "Maya Singh, Product Comms Lead",
    topics:
      "Topics: Hub Launches (P, J, K), API, Integrations, Security (Hub G).",
    btnText: "Email Maya Singh",
    themeColor: "bg-[#00C853]",
    borderColor: "!border-t-[#00C853]",
    titleColor: "text-[#00C853]",
  },
];

export default function PressContactsSection() {
  return (
    <section className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black mb-3 tracking-tight font-instrument-sans">
            Media & Press Contacts
          </h2>
          <p className="text-slate-600 text-sm font-instrument-sans">
            Please direct your inquiry to the appropriate representative based
            on your topic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONTACTS.map((contact, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 border-t-[6px] ${contact.borderColor}`}>
              <h3
                className={`text-lg font-bold mb-4 font-instrument-sans ${contact.titleColor}`}>
                {contact.category}
              </h3>
              <h4 className="text-base font-bold text-black mb-2 font-instrument-sans">
                {contact.name}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-instrument-sans">
                {contact.topics}
              </p>
              <button
                className={`px-8 py-2.5 rounded-full text-white font-bold text-sm flex items-center justify-center gap-2 mx-auto hover:opacity-90 transition-opacity font-instrument-sans ${contact.themeColor}`}>
                {contact.btnText} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
