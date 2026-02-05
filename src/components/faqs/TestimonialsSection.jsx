"use client";

import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Trusted by Leading Businesses Worldwide
        </h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto font-normal">
          Our clients achieve remarkable results and transform their operations
          with BEAPONE UBOS. Hear directly from them
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/95 backdrop-blur-md p-12 rounded-[32px] shadow-sm flex flex-col justify-between border border-white">
          <div>
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className={`${
                    i < 4 ? "fill-[#F5A623] text-[#F5A623]" : "text-[#F5A623]"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-700 text-[19px] leading-relaxed mb-10 font-medium">
              "BEAPONE UBOS transformed our supply chain visibility, allowing us
              to reduce stockouts by 15% and improve on-time delivery
              significantly."
            </p>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-lg">Jane Doe</p>
            <p className="text-sm text-gray-500 mt-1">
              Supply Chain Director, Global Retail Co.
            </p>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-md p-12 rounded-[32px] shadow-sm flex flex-col justify-between border border-white">
          <div>
            <div className="flex gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className={`${
                    i < 4 ? "fill-[#F5A623] text-[#F5A623]" : "text-[#F5A623]"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-700 text-[19px] leading-relaxed mb-10 font-medium">
              "The flexibility of BEAPONE's e-commerce fulfillment options
              allowed us to scale rapidly without compromising on customer
              experience."
            </p>
          </div>
          <div>
            <p className="font-bold text-gray-900 text-lg">John Smith</p>
            <p className="text-sm text-gray-500 mt-1">
              CEO, Online Brands Inc.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-12">
        <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 text-white hover:bg-[#5C50B6] hover:border-[#5C50B6] transition-all duration-300 shadow-sm">
          <ChevronLeft size={24} />
        </button>
        <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/40 bg-white/10 text-white hover:bg-[#5C50B6] hover:border-[#5C50B6] transition-all duration-300 shadow-sm">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
