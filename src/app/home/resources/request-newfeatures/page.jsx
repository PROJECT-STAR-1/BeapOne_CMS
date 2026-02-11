"use client";

import React from "react";
import HeroSection from "@/components/resources/request-newfeatures/HeroSection";
import FeatureSubmissionSection from "@/components/resources/request-newfeatures/FeatureSubmissionSection";
import CustomerCareSection from "@/components/faqs/CustomerCareSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function RequestNewFeatures() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <FeatureSubmissionSection />

      <CustomerCareSection />

      <TestimonialsSection />
    </div>
  );
}
