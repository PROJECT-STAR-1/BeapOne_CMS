"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CustomerCareSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 relative z-10 pt-24 pb-8">
      <div className="bg-[#5C50B6] rounded-[32px] relative flex flex-col md:flex-row items-center min-h-[300px]">
        <div
          className="absolute inset-0 opacity-10 rounded-[32px] overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}></div>

        <div className="relative z-10 p-10 md:p-14 text-white flex-1">
          <p className="text-[9px] font-bold tracking-[0.3em] mb-4 opacity-80 uppercase">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl font-bold mb-4 tracking-tight leading-tight">
            Can't find what you need?
          </h2>
          <p className="text-indigo-50 text-[16px] font-normal mb-8 max-w-md leading-relaxed">
            Our team is ready to provide personalized documentation or answer
            any complex technical questions you have.
          </p>
          <button className="bg-[#1B1464] text-white px-8 py-3.5 rounded-xl font-semibold text-xs flex items-center gap-3 hover:bg-[#0a0635] transition-all shadow-lg group">
            Contact an Expert{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* AGENT - Pop out head, base aligned exactly to bottom edge */}
        <div className="relative w-full md:w-[450px] flex justify-end md:static h-full">
          <div className="relative w-[340px] md:w-[460px] h-[520px] md:absolute md:bottom-0 md:right-0 z-30 pointer-events-none">
            <Image
              src="/images/faqs/CustomerSupport.svg"
              alt="Support Specialist"
              fill
              className="object-contain object-bottom scale-[1.7] md:scale-[1.8] origin-bottom translate-y-[1px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
