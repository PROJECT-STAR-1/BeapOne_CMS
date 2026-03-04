"use client";

import React from "react";
import HeroSection from "@/components/resources/news-room/HeroSection";
import PressReleasesSection from "@/components/resources/news-room/PressReleasesSection";
import MediaKitSection from "@/components/resources/news-room/MediaKitSection";
import PressContactsSection from "@/components/resources/news-room/PressContactsSection";

export default function NewsroomPage() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />
      <PressReleasesSection />
      <MediaKitSection />
      <PressContactsSection />
    </div>
  );
}
