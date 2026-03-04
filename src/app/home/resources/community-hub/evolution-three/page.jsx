"use client";

import React, { useState } from "react";
import HeroSection from "@/components/resources/community-hub/evolution-three/HeroSection";
import TemplatesSection from "@/components/resources/community-hub/evolution-three/TemplatesSection";
import MetricsFooterSection from "@/components/resources/community-hub/evolution-three/MetricsFooterSection";

export default function CommunityEvolutionStep3Page() {
  const [identityName, setIdentityName] = useState("");
  const [hubFocus, setHubFocus] = useState("Financial (Hub O)");

  return (
    <div className="w-full bg-white font-instrument-sans antialiased text-slate-900 min-h-screen">
      {/* Pass the state to the Hero where the registration card lives */}
      <HeroSection
        identityName={identityName}
        setIdentityName={setIdentityName}
        hubFocus={hubFocus}
        setHubFocus={setHubFocus}
      />

      <TemplatesSection />

      <MetricsFooterSection />
    </div>
  );
}
