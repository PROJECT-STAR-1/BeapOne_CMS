"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Boxes, Lightbulb } from "lucide-react";

const ROUTE_MAP = {
  forums: "/home/resources/community-hub/forum",
  resources: "#",
  ideation: "/home/resources/community-hub/ideation",
};

const COLLABORATION_CARDS = [
  {
    id: "forums",
    icon: MessageSquare,
    title: "Forums & Q&A Boards",
    desc: "Centralized, searchable space to ask technical questions, discuss implementation best practices, and collaborate on UBOS solutions.",
    themeColor: "text-[#1B1464]",
    borderColor: "border-t-[6px] !border-t-[#1B1464]",
  },
  {
    id: "resources",
    icon: Boxes,
    title: "Curated Resource Library",
    desc: (
      <>
        Access official documentation, video tutorials, and user-generated
        content covering every module, from{" "}
        <span className="font-bold text-black">Financial (O)</span> to{" "}
        <span className="font-bold text-black">Farm Management (P)</span>.
      </>
    ),
    themeColor: "text-[#00C853]",
    borderColor: "border-t-[6px] !border-t-[#00C853]",
  },
  {
    id: "ideation",
    icon: Lightbulb,
    title: "Ideation & Product Feedback",
    desc: "Submit, vote on, and track product ideas for future UBOS features and module enhancements. Drive the platform roadmap directly.",
    themeColor: "text-[#D50000]",
    borderColor: "border-t-[6px] !border-t-[#D50000]",
  },
];

export default function CollaborationSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 tracking-tight font-instrument-sans">
          Collaboration & Knowledge Sharing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COLLABORATION_CARDS.map((card, idx) => {
            const resolvedPath = ROUTE_MAP[card.id] || "#";
            return (
              <Link
                key={card.id || idx}
                href={resolvedPath}
                className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-gray-100 overflow-hidden ${card.borderColor}`}>
                <div className={`mb-4 ${card.themeColor}`}>
                  <card.icon size={32} strokeWidth={1.5} />
                </div>
                <h3
                  className={`text-xl font-bold mb-3 font-instrument-sans ${card.themeColor}`}>
                  {card.title}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed flex-grow font-instrument-sans">
                  {card.desc}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
