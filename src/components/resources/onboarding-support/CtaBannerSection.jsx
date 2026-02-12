"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, LifeBuoy } from "lucide-react";

export default function CtaBannerSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 relative z-10 pt-24 pb-8">
      <div className="bg-[#5C50B6] rounded-[32px] relative flex flex-col md:flex-row items-center min-h-[200px]">
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-10 rounded-[32px] overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}></div>

        {/* Text Content */}
        <div className="relative z-10 p-10 md:p-16 text-white flex-1 max-w-2xl">
          <p className="text-[10px] font-bold tracking-[0.3em] mb-4 opacity-80 uppercase">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight leading-tight">
            Need Personalized Onboarding?
          </h2>
          <p className="text-indigo-100 text-base font-normal mb-8 max-w-md leading-relaxed">
            Engage a{" "}
            <span className="font-bold text-white">Certified UBOS Expert</span>{" "}
            for 1:1 guidance to ensure a perfect, optimized, and fast
            deployment.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#1B1464] text-white px-6 py-3.5 rounded-xl font-semibold text-xs flex items-center gap-2 hover:bg-[#0a0635] transition-all shadow-lg">
              Contact an Expert <MessageCircle size={14} />
            </button>
            <button className="bg-white text-[#1B1464] px-6 py-3.5 rounded-xl font-semibold text-xs flex items-center gap-2 hover:bg-gray-100 transition-all shadow-lg">
              Submit a Support Ticket <LifeBuoy size={14} />
            </button>
          </div>
        </div>

        {/* IMAGE: Support Specialist Popping Out */}
        <div className="relative w-full md:w-[450px] flex justify-end md:static h-full self-end">
          <div className="relative w-[320px] md:w-[480px] h-[400px] md:h-[420px] md:absolute md:bottom-0 md:right-0 z-30 pointer-events-none">
            <Image
              src="/images/CustomerSupport.svg"
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
