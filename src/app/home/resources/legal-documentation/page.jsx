"use client";

import React from "react";
import HeroSection from "@/components/resources/legal-documentation/HeroSection";
import LegalDocumentViewerSection from "@/components/resources/legal-documentation/LegalDocumentViewerSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function LegalDocumentation() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <LegalDocumentViewerSection />

      <TestimonialsSection />
    </div>
  );
}
