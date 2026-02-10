"use client";

import React from "react";
import HeroSection from "@/components/resources/whats-new/HeroSection";
import SearchFilterSection from "@/components/resources/whats-new/SearchFilterSection";
import ReleaseNotesSection from "@/components/resources/whats-new/ReleaseNotesSection";
import CtaBannerSection from "@/components/resources/whats-new/CtaBannerSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function WhatsNewRegistry() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <SearchFilterSection />

      <ReleaseNotesSection />

      {/* UNIFIED GRADIENT BACKGROUND WRAPPER */}
      <div className="relative w-full">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 5%, #E9E6FA 20%, #5C50B6 100%)",
          }}></div>

        <CtaBannerSection />

        <TestimonialsSection />
      </div>
    </div>
  );
}
