"use client";

import React from "react";

export default function NextStepsSection() {
  return (
    <section className="w-full font-instrument-sans">
      {/* Quote Block */}
      <div className="bg-[#F4F5F7] py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto relative">
          <div className="text-[#FFB300] text-6xl font-serif absolute -top-8 -left-4 opacity-80">
            “
          </div>
          <p className="text-2xl md:text-3xl text-slate-700 font-medium italic leading-relaxed mb-8 relative z-10">
            True merit is forged in the fire of continuous learning and
            validated by peer-vetted standards.
          </p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            — UBOS GOVERNANCE COUNCIL MANDATE
          </p>
        </div>
      </div>

      {/* Next Steps CTA Block */}
      <div className="bg-white pt-24 pb-16 flex flex-col items-center">
        <div className="max-w-2xl mx-auto text-center px-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight mb-6">
            Next Steps?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Ready to elevate your Merit score and master the UBOS ecosystem?
            Register today to access your personalized learning dashboard.
          </p>
        </div>

        <a
          href="#"
          className="w-full bg-[#1B1464] text-white py-6 md:py-8 font-bold text-sm md:text-base uppercase tracking-widest hover:bg-[#150f4f] transition-colors text-center shadow-md block"
        >
          START YOUR JOURNEY
        </a>

        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-8">
          WWW.BEAPONE-UBOS.COM/LEARNING
        </p>
      </div>
    </section>
  );
}
