"use client";

import React from "react";
import HeroSection from "@/components/resources/certifications/HeroSection";
import VerificationInputSection from "@/components/resources/certifications/VerificationInputSection";
import StructuredLearningPathsSection from "@/components/resources/certifications/StructuredLearningPathsSection";
import CtaBannerSection from "@/components/resources/certifications/CtaBannerSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function LearningCertificationRegistry() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <VerificationInputSection />

      <StructuredLearningPathsSection />

      <CtaBannerSection />

      <TestimonialsSection />
    </div>
  );
}
