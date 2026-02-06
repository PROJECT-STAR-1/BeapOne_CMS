"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CtaBannerSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 relative z-10 pt-12 pb-8">
      {/* Reduced min-height from 350px to 280px to keep the card small */}
      <div className="bg-[#50469C] rounded-[32px] relative flex flex-col md:flex-row items-center min-h-[280px] shadow-2xl overflow-visible">
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 rounded-[32px] overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}></div>

        {/* Text Content - Reduced padding */}
        <div className="relative z-10 p-8 md:p-12 text-white flex-1 max-w-xl">
          <p className="text-[9px] font-bold tracking-[0.3em] mb-3 opacity-80 uppercase">
            GET IN TOUCH
          </p>
          {/* Reduced font size slightly */}
          <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight leading-tight">
            Ready to Master the Universal System?
          </h2>
          <p className="text-indigo-100 text-sm font-normal mb-6 max-w-md leading-relaxed">
            Formal training ensures you leverage the full power of every BEAPone
            UBOS Hub.
          </p>
          <button className="bg-[#1B1464] text-white px-6 py-3 rounded-xl font-semibold text-xs flex items-center gap-3 hover:bg-[#0a0635] transition-all shadow-lg group">
            Register for Training{" "}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* IMAGE: Customer Support Specialist Popping Out */}
        <div className="relative w-full md:w-[450px] flex justify-end md:static h-full self-end">
          <div className="relative w-[340px] md:w-[460px] h-[520px] md:absolute md:bottom-0 md:right-0 z-30 pointer-events-none">
            <Image
              src="/images/CustomerSupport.svg"
              alt="Support Specialist"
              fill
              // Large scale preserved
              className="object-contain object-bottom scale-[1.7] md:scale-[1.8] origin-bottom translate-y-[1px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
