"use client";

import React, { useState } from "react";
import { Wallet, Calendar, Gavel } from "lucide-react";
import HeroSection from "@/components/resources/community-hub/committee/HeroSection";
import MainFeedSection from "@/components/resources/community-hub/committee/MainFeedSection";
import SidebarSection from "@/components/resources/community-hub/committee/SidebarSection";

// --- DYNAMIC DATA CONSTANTS ---

const COMMITTEES_DB = [
  {
    id: "SC-FIN-01",
    title: "Finance & Audit Committee",
    desc: "Quarterly resource review and treasury integrity verification.",
    lead: "Marcus_T",
    budgetBurn: 92,
    members: "5 Specialists",
    themeColor: "border-[#1B1464]",
    iconBg: "bg-[#F0F4FF]",
    iconColor: "text-[#1B1464]",
    Icon: Wallet,
  },
  {
    id: "SC-EVE-04",
    title: "Events & Engagement",
    desc: "Coordination of the Annual UBOS Symposium and regional meetups.",
    lead: "Marcus_T",
    budgetBurn: 92,
    members: "5 Specialists",
    themeColor: "border-[#00C853]",
    iconBg: "bg-[#E8F5E9]",
    iconColor: "text-[#00C853]",
    Icon: Calendar,
  },
  {
    id: "SC-RUL-02",
    title: "Rules & Enforcement",
    desc: "Updating C23 ethical bylaws and overseeing the Accountability Committee.",
    lead: "Marcus_T",
    budgetBurn: 92,
    members: "5 Specialists",
    themeColor: "border-[#D32F2F]",
    iconBg: "bg-[#FFEBEE]",
    iconColor: "text-[#D32F2F]",
    Icon: Gavel,
  },
];

const NEXT_SESSIONS = [
  {
    title: "Finance & Audit Committee",
    time: "Oct 24, 14:00",
    iconBg: "bg-[#F0F4FF]",
    iconColor: "text-[#1B1464]",
    Icon: Wallet,
  },
  {
    title: "Events & Engagement",
    time: "Oct 24, 14:00",
    iconBg: "bg-[#E8F5E9]",
    iconColor: "text-[#00C853]",
    Icon: Calendar,
  },
  {
    title: "Rules & Enforcement",
    time: "Oct 24, 14:00",
    iconBg: "bg-[#FFEBEE]",
    iconColor: "text-[#D32F2F]",
    Icon: Gavel,
  },
];

const CONDUCT_FRAMEWORK = [
  {
    category: "FINANCE",
    title: "Q3 Fiscal Integrity Report",
    type: "PDF Document",
    size: "2.4 MB",
  },
  {
    category: "EVENT",
    title: "SME Grant Distribution v2",
    type: "Framework Doc",
    size: "1.1 MB",
  },
  {
    category: "RULES",
    title: "Conduct Bylaw Amendment",
    type: "Policy Draft",
    size: "840 KB",
  },
];

export default function CommunityCommitteePage() {
  // --- INLINE EXPANSION STATE ---
  const [expandedItem, setExpandedItem] = useState(null);

  // --- HANDLERS ---
  const toggleItem = (itemName) => {
    setExpandedItem((prev) => (prev === itemName ? null : itemName));
  };

  const handleActionConfirm = (actionMessage) => {
    console.log(actionMessage);
  };

  return (
    <div className="w-full bg-[#F4F5F7] font-instrument-sans antialiased text-slate-900 min-h-screen">
      <HeroSection />

      <section className="py-8 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <MainFeedSection committees={COMMITTEES_DB} />

          <SidebarSection
            nextSessions={NEXT_SESSIONS}
            conductFramework={CONDUCT_FRAMEWORK}
            expandedItem={expandedItem}
            toggleItem={toggleItem}
            handleActionConfirm={handleActionConfirm}
          />
        </div>
      </section>
    </div>
  );
}
