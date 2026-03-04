"use client";

import React, { useState } from "react";
import HeroSection from "@/components/resources/community-hub/evolution-two/HeroSection";
import TemplatesSection from "@/components/resources/community-hub/evolution-two/TemplatesSection";
import MetricsFooterSection from "@/components/resources/community-hub/evolution-two/MetricsFooterSection";

export default function CommunityEvolutionStep2Page() {
  // State to hold the user's selected contribution type
  const [contributionType, setContributionType] = useState("technical"); // 'technical' | 'community'

  return (
    <div className="w-full bg-white font-instrument-sans antialiased text-slate-900 min-h-screen">
      {/* Pass the state to the Hero where the registration card lives */}
      <HeroSection
        contributionType={contributionType}
        setContributionType={setContributionType}
      />

      <TemplatesSection />

      <MetricsFooterSection />
    </div>
  );
}
