"use client";

import React from "react";
import HeroSection from "@/components/company/about-us/HeroSection";
import OurStorySection from "@/components/company/about-us/OurStorySection";
import MissionValuesSection from "@/components/company/about-us/MissionValuesSection";
import TestimonialSection from "@/components/company/about-us/TestimonialSection";
import LeadershipSection from "@/components/company/about-us/LeadershipSection";
import CtaFooterSection from "@/components/company/about-us/CtaFooterSection";

export default function AboutUs() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />
      <OurStorySection />
      <MissionValuesSection />
      <TestimonialSection />
      <LeadershipSection />
      <CtaFooterSection />
    </div>
  );
}
