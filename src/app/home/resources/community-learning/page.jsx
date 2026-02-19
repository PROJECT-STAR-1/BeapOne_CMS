"use client";

import React from "react";
import HeroSection from "@/components/resources/community-learning/HeroSection";
import LearningArchitectureSection from "@/components/resources/community-learning/LearningArchitectureSection";
import DeliveryModelsSection from "@/components/resources/community-learning/DeliveryModelsSection";
import CertificationPathwaysSection from "@/components//resources/community-learning/CertificationPathwaysSection";
import TierMatrixSection from "@/components/resources/community-learning/TierMatrixSection";
import CtaFooterSection from "@/components/resources/community-learning/CtaFooterSection";

export default function CommunityCertificationPage() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />
      <LearningArchitectureSection />
      <DeliveryModelsSection />
      <CertificationPathwaysSection />
      <TierMatrixSection />
      <CtaFooterSection />
    </div>
  );
}
