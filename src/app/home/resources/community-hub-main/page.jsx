"use client";

import React from "react";
import HeroSection from "@/components/resources/community-hub-main/HeroSection";
import CollaborationSection from "@/components/resources/community-hub-main/CollaborationSection";
import CommissionStructureSection from "@/components/resources/community-hub-main/CommissionStructureSection";
import GovernanceLeadershipSection from "@/components/resources/community-hub-main/GovernanceLeadershipSection";
import CtaFooterSection from "@/components/resources/community-hub-main/CtaFooterSection";

export default function CommunityHubPage() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />
      <CollaborationSection />
      <CommissionStructureSection />
      <GovernanceLeadershipSection />
      <CtaFooterSection />
    </div>
  );
}
