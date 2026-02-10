"use client";

import React from "react";
import HeroSection from "@/components/faqs/HeroSection";
import QuickNavigationSection from "@/components/faqs/QuickNavigationSection";
import FaqAccordionSection from "@/components/faqs/FaqAccordionSection";
import CustomerCareSection from "@/components/faqs/CustomerCareSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function BeaponeFAQs() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <QuickNavigationSection />

      <FaqAccordionSection />
   
        <CustomerCareSection />

       <TestimonialsSection />
    </div>
  );
}
