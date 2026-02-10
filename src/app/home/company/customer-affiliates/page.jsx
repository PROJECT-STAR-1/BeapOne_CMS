"use client";

import React from "react";
import HeroSection from "@/components/company/customer-affiliates/HeroSection";
import ReferralDashboardSection from "@/components/company/customer-affiliates/ReferralDashboardSection";
import MarketingAssetsSection from "@/components/company/customer-affiliates/MarketingAssetsSection";
import CommunitySection from "@/components/company/customer-affiliates/CommunitySection";
import CtaBannerSection from "@/components/company/customer-affiliates/CtaBannerSection";
import TestimonialsSection from "@/components/company/customer-affiliates/TestimonialsSection";

export default function CustomerAffiliates() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <ReferralDashboardSection />

      <MarketingAssetsSection />

      <CommunitySection />
    </div>
  );
}
