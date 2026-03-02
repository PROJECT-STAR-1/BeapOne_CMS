"use client";

import React from "react";
import HeroSection from "@/components/resources/support-center/HeroSection";
import OnboardingJourneySection from "@/components/resources/support-center/OnboardingJourneySection";
import PersonalizedOnboardingSection from "@/components/resources/support-center/PersonalizedOnboardingSection";
import SelfServiceHubSection from "@/components/resources/support-center/SelfServiceHubSection";
import DirectAssistanceSection from "@/components/resources/support-center/DirectAssistanceSection";

export default function SupportCenterPage() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />
      <OnboardingJourneySection />
      <PersonalizedOnboardingSection />
      <SelfServiceHubSection />
      <DirectAssistanceSection />
    </div>
  );
}
