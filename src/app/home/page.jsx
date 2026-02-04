"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Hero from "@/components/home/Hero";
import SystemCapabilitiesSection from "@/components/home/SystemCapabilitiesSection";
import ModulesSection from "@/components/home/ModulesSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/home/PricingSection";

export default function BeaponeHero() {
  return (
    <div>
      <Hero />
      <SystemCapabilitiesSection />
      <ModulesSection />
      <SolutionsSection />
      <TestimonialsSection />
      <PricingSection />
    </div>
  );
}
