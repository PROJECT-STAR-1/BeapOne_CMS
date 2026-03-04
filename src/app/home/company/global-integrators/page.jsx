"use client";

import React from "react";
import HeroSection from "@/components/company/global-integrators/HeroSection";
import KpiSection from "@/components/company/global-integrators/KpiSection";
import ActionHubSection from "@/components/company/global-integrators/ActionHubSection";
import ResourceLibrarySection from "@/components/company/global-integrators/ResourceLibrarySection";
import CtaFooterSection from "@/components/company/global-integrators/CtaFooterSection";

export default function PartnerPortalPage() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />
      <KpiSection />
      <ActionHubSection />
      <ResourceLibrarySection />
      <CtaFooterSection />
    </div>
  );
}
