"use client";

import React, { useState } from "react";
import HeroSection from "@/components/resources/community-hub-main/HeroSection";
import CollaborationSection from "@/components/resources/community-hub-main/CollaborationSection";
import CommissionStructureSection from "@/components/resources/community-hub-main/CommissionStructureSection";
import GovernanceLeadershipSection from "@/components/resources/community-hub-main/GovernanceLeadershipSection";
import CtaFooterSection from "@/components/resources/community-hub-main/CtaFooterSection";
import DiscussionBoardSection from "@/components/resources/community-hub-main/DiscussionBoardSection";

export default function CommunityHubPage() {
  const [view, setView] = useState("hub"); // "hub" or "discussion"

  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden transition-all duration-500">
      {/* Persistent Hero - Passes state down for button logic */}
      <HeroSection view={view} setView={setView} />

      {view === "hub" ? (
        <div className="animate-in fade-in duration-500">
          <CollaborationSection />
          <CommissionStructureSection />
          <GovernanceLeadershipSection />
          <CtaFooterSection />
        </div>
      ) : (
        /* The Discussion Board View replaces the other sections */
        <DiscussionBoardSection setView={setView} />
      )}
    </div>
  );
}
