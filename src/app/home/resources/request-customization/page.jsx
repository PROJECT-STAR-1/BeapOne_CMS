"use client";

import React from "react";
import HeroSection from "@/components/resources/request-customization/HeroSection";
import CustomizationTypesSection from "@/components/resources/request-customization/CustomizationTypesSection";
import RequirementsFormSection from "@/components/resources/request-customization/RequirementsFormSection";
import CustomerCareSection from "@/components/faqs/CustomerCareSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function RequestCustomization() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <CustomizationTypesSection />

      <RequirementsFormSection />

      <CustomerCareSection />

      <TestimonialsSection />
    </div>
  );
}
