"use client";

import React from "react";
import HeroSection from "@/components/resources/community-learning/HeroSection";
import LearningArchitectureSection from "@/components/resources/community-learning/LearningArchitectureSection";
import DeliveryModelsSection from "@/components/resources/community-learning/DeliveryModelsSection";
import CertificationPathwaysSection from "@/components/resources/community-learning/CertificationPathwaysSection";
import TierMatrixSection from "@/components/resources/community-learning/TierMatrixSection";
import IntegratedFormatsSection from "@/components/resources/community-learning/IntegratedFormatsSection";
import EngagementTrendsSection from "@/components/resources/community-learning/EngagementTrendsSection";
import CommunityImpactSection from "@/components/resources/community-learning/CommunityImpactSection";
import RoadmapSection from "@/components/resources/community-learning/RoadmapSection";
import NextStepsSection from "@/components/resources/community-learning/NextStepsSection";

export default function CommunityCertificationPage() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />
      <LearningArchitectureSection />
      <DeliveryModelsSection />
      <CertificationPathwaysSection />
      <TierMatrixSection />
      <IntegratedFormatsSection />
      <EngagementTrendsSection />
      <CommunityImpactSection />
      <RoadmapSection />
      <NextStepsSection />
    </div>
  );
}
