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

      <CtaBannerSection />

      <SelfServiceSupportHubSection />

      <TestimonialsSection />
    </div>
  );
}
