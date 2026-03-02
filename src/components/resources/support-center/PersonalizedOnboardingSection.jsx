"use client";

import React from "react";

export default function PersonalizedOnboardingSection() {
  return (
    <section className="py-20 px-6 bg-[#F9FAFB]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight font-instrument-sans">
          Need Personalized Onboarding?
        </h2>
        <p className="text-slate-800 text-lg mb-10 font-instrument-sans leading-relaxed">
          Engage a{" "}
          <span className="font-bold text-black">Certified UBOS Expert</span>{" "}
          for 1:1 guidance to ensure a perfect, optimized, and fast deployment.
        </p>
        <button className="bg-[#1B1464] text-white px-10 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity font-instrument-sans inline-flex items-center justify-center">
          Contact an Expert for Consulting
        </button>
      </div>
    </section>
  );
}
