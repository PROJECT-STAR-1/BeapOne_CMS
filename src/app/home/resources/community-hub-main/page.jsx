"use client";

import React from "react";

import HeroSection from "@/components/resources/community-hub-main/HeroSection";
import CollaborationSection from "@/components/resources/community-hub-main/CollaborationSection";
import CommissionSection from "@/components/resources/community-hub-main/CommissionSection";
import GovernanceSection from "@/components/resources/community-hub-main/GovernanceSection";
import CtaSection from "@/components/resources/community-hub-main/CtaFooterSection";

export default function CommunityHubPage() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden transition-all duration-500">
      <HeroSection />
      <CollaborationSection />
      <CommissionSection />
      <GovernanceSection />
      <CtaSection />
    </div>
  );
}
