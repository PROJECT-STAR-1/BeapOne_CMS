"use client";

import React from "react";
import HeroSection from "@/components/resources/careers/HeroSection";
import PerksSection from "@/components/resources/careers/PerksSection";
import TestimonialsSection from "@/components/resources/careers/TestimonialsSection";
import HiringProcessSection from "@/components/resources/careers/HiringProcessSection";
import OpenPositionsSection from "@/components/resources/careers/OpenPositionsSection";

export default function CareersPage() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />
      <PerksSection />
      <TestimonialsSection />
      <HiringProcessSection />
      <OpenPositionsSection />
    </div>
  );
}
