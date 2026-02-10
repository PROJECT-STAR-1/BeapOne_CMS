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

      <CtaBannerSection />

      <TestimonialsSection />
    </div>
  );
}
