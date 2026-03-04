"use client";

import React from "react";
import DiscussionsHeroSection from "@/components/resources/community-hub/discussions/HeroSection";
import DiscussionsBoardSection from "@/components/resources/community-hub/discussions/DiscussionsBoardSection";
import DiscussionsFooterSection from "@/components/resources/community-hub/discussions/DiscussionsFooterSection";

export default function DiscussionsPage() {
  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden transition-all duration-500">
      {/* 1. The Hero Section */}
      <DiscussionsHeroSection />

      {/* 2. The Board & Footer Wrapper  */}
      <div className="w-full bg-[#F4F5F7] py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-700 min-h-screen">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">
          {/* 3. The Interactive Board (Sidebar + Feed) */}
          <DiscussionsBoardSection />
        </div>

        {/* 4. The Footer Section */}
        <DiscussionsFooterSection />
      </div>
    </div>
  );
}
