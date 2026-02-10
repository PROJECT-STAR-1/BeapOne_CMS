"use client";

import React, { useState } from "react";
import HeroSection from "@/components/resources/request-demo/HeroSection";
import ConsultationFormSection from "@/components/resources/request-demo/ConsultationFormSection";
import RecordedDemosSection from "@/components/resources/request-demo/RecordedDemosSection";
import CustomerCareSection from "@/components/faqs/CustomerCareSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function RequestDemoRegistry() {
  // Main page wrapper
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <ConsultationFormSection />

      <RecordedDemosSection />

      <CustomerCareSection />

      <TestimonialsSection />
    </div>
  );
}
