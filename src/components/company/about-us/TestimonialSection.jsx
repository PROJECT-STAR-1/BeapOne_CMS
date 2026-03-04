"use client";

import React from "react";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 border-l-[6px] border-l-[#1B1464]">
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className="fill-[#F5A623] text-[#F5A623]"
              />
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium font-instrument-sans">
            "Implementing UBOS was the only way we could reconcile our global GL
            (Hub O) and project costs (Hub K) across five different currencies.
            The unified system is a game-changer for compliance."
          </p>
          <div>
            <p className="font-bold text-black text-base font-instrument-sans">
              John Smith
            </p>
            <p className="text-sm text-slate-500 font-instrument-sans">
              CEO, Global Manufacturing Group (Hub J)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
