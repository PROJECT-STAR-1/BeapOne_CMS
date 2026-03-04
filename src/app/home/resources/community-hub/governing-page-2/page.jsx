"use client";

import React, { useState } from "react";
import HeroSection from "@/components/resources/community-hub/governing-page-2/HeroSection";
import StatsSection from "@/components/resources/community-hub/governing-page-2/StatsSection";
import MotionsSection from "@/components/resources/community-hub/governing-page-2/MotionsSection";
import StrategicPillarsSection from "@/components/resources/community-hub/governing-page-2/StrategicPillarsSection";
import RepresentativesSection from "@/components/resources/community-hub/governing-page-2/RepresentativesSection";
import CalendarSection from "@/components/resources/community-hub/governing-page-2/CalendarSection";
import ArchivesSection from "@/components/resources/community-hub/governing-page-2/ArchivesSection";
import GovernanceModals from "@/components/resources/community-hub/governing-page-2/GovernanceModals";

export default function CommunityGovernancePage() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedMotion, setSelectedMotion] = useState(null);

  const openReviewModal = (motion) => {
    setSelectedMotion(motion);
    setActiveModal("REVIEW");
  };

  const closeModal = () => {
    setActiveModal(null);
    setTimeout(() => setSelectedMotion(null), 200);
  };

  const handleActionConfirm = (actionMessage) => {
    console.log(actionMessage);
    closeModal();
  };

  return (
    <div className="w-full bg-[#F4F5F7] font-instrument-sans antialiased text-slate-900 min-h-screen relative">
      {/* Modals Logic Container */}
      <GovernanceModals
        activeModal={activeModal}
        selectedMotion={selectedMotion}
        closeModal={closeModal}
        handleActionConfirm={handleActionConfirm}
      />

      <HeroSection />

      <section className="py-8 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Feed Area */}
          <main className="lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
            <StatsSection />
            <MotionsSection openReviewModal={openReviewModal} />
            <StrategicPillarsSection />
          </main>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 xl:col-span-3 flex flex-col gap-5">
            <RepresentativesSection
              onNominationClick={() => setActiveModal("NOMINATION")}
            />
            <CalendarSection />
            <ArchivesSection onAccessClick={() => setActiveModal("ACCESS")} />
          </aside>
        </div>
      </section>
    </div>
  );
}
