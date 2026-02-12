"use client";

import React from "react";
import HeroSection from "@/components/company/contact-us/HeroSection";
import ContactFormSection from "@/components/company/contact-us/ContactFormSection";
import DirectChannelsSection from "@/components/company/contact-us/DirectChannelsSection";
import CustomerCareSection from "@/components/faqs/CustomerCareSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function ContactUs() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <ContactFormSection />

      <DirectChannelsSection />

      <CustomerCareSection />

      <TestimonialsSection />
    </div>
  );
}
