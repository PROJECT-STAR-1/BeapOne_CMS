"use client";

import React from "react";
import HeroSection from "@/components/resources/onboarding-support/HeroSection";
import OnboardingJourneySection from "@/components/resources/onboarding-support/OnboardingJourneySection";
import CtaBannerSection from "@/components/resources/onboarding-support/CtaBannerSection";
import SelfServiceSupportHubSection from "@/components/resources/onboarding-support/SelfServiceSupportHubSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function OnboardingSupport() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <OnboardingJourneySection />

      {/* UNIFIED GRADIENT BACKGROUND WRAPPER */}
      <div className="relative w-full">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 5%, #E9E6FA 20%, #5C50B6 100%)",
          }}></div>

        <CtaBannerSection />

        <SelfServiceSupportHubSection />

        <TestimonialsSection />
      </div>
    </div>
  );
}
