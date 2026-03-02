"use client";

import React from "react";
import HeroSection from "@/components/resources/community-hub/evolution/HeroSection";
import TemplatesSection from "@/components/resources/community-hub/evolution/TemplatesSection";
import MetricsFooterSection from "@/components/resources/community-hub/evolution/MetricsFooterSection";

export default function CommunityEvolutionPage() {
  return (
    <div className="w-full bg-white font-instrument-sans antialiased text-slate-900 min-h-screen">
      <HeroSection />

      <TemplatesSection />

      <MetricsFooterSection />
    </div>
  );
}
