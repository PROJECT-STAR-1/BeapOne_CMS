"use client";

import React from "react";
import { BookOpen, Users, Network } from "lucide-react";

const DELIVERY_MODELS = [
  {
    icon: BookOpen,
    title: "Structured Batches",
    desc: "Sequential learning modules designed for foundational proficiency. Ideal for new hub operators entering the ecosystem at Baseline Merit levels.",
    themeColor: "text-[#1B1464]",
    borderColor: "border-t-[#1B1464]",
  },
  {
    icon: Users,
    title: "Collaborative Cohorts",
    desc: "Intensive, peer-to-peer learning groups focused on specific module implementations (Hub O, P, or G). Includes shared project validation.",
    themeColor: "text-[#00C853]",
    borderColor: "border-t-[#00C853]",
  },
  {
    icon: Network,
    title: "Interest Clusters",
    desc: "Self-organizing hubs of deep expertise. These clusters drive innovation in specialized verticals like Agri-IoT or Fin-Tech compliance.",
    themeColor: "text-[#D50000]",
    borderColor: "border-t-[#D50000]",
  },
];

export default function DeliveryModelsSection() {
  return (
    <section className="py-24 px-6 bg-[#F9FAFB] font-instrument-sans">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1.5 h-8 bg-[#1B1464]"></div>
          <h2 className="text-3xl font-bold text-black tracking-tight">
            Multi-Modal Delivery Models
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DELIVERY_MODELS.map((model, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow border border-gray-100 border-t-[6px] flex flex-col h-full ${model.borderColor}`}
            >
              <div className={`mb-6 ${model.themeColor}`}>
                <model.icon size={36} strokeWidth={1.5} />
              </div>
              <h3 className={`text-xl font-bold mb-4 ${model.themeColor}`}>
                {model.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {model.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
