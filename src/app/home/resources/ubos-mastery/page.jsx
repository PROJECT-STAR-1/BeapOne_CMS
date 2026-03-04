"use client";

import React from "react";
import HeroSection from "@/components/resources/ubos-mastery/HeroSection";
import CoreCapabilitiesSection from "@/components/resources/ubos-mastery/CoreCapabilitiesSection";
import AdvantagesGridSection from "@/components/resources/ubos-mastery/AdvantagesGridSection";
import PartnerProgramSection from "@/components/resources/ubos-mastery/PartnerProgramSection";

export default function UbosMasteryPage() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />
      <CoreCapabilitiesSection />
      <AdvantagesGridSection />
      <PartnerProgramSection />
    </div>
  );
}
