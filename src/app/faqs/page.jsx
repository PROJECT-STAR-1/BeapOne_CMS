"use client";

import React from "react";
import HeroSection from "@/components/faqs/HeroSection";
import QuickNavigationSection from "@/components/faqs/QuickNavigationSection";
import FaqAccordionSection from "@/components/faqs/FaqAccordionSection";
import CustomerCareSection from "@/components/faqs/CustomerCareSection";
import TestimonialsSection from "@/components/faqs/TestimonialsSection";

export default function BeaponeFAQs() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <QuickNavigationSection />

      <FaqAccordionSection />

      {/* UNIFIED BACKGROUND FOR SECTIONS 4 & 5 */}
      <div className="relative w-full">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 5%, #E9E6FA 20%, #5C50B6 100%)",
          }}></div>

        <CustomerCareSection />

        <TestimonialsSection />
      </div>
    </div>
  );
}
