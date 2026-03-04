"use client";

import React, { useState } from "react";
import { Layers, Code, MessageSquare } from "lucide-react";
import HeroSection from "@/components/resources/community-hub/champions/HeroSection";
import ChampionsFeedSection from "@/components/resources/community-hub/champions/ChampionsFeedSection";
import SidebarSection from "@/components/resources/community-hub/champions/SidebarSection";

// --- DYNAMIC DATA CONSTANTS ---

const LIAISONS_DB = [
  {
    id: "LIA-01",
    name: "Commander_Root",
    role: "LEAD LIAISON • HUB G (SECURITY)",
    projects: 5,
    merit: 9.7,
    status: "AVAILABLE",
    statusColor: "text-[#00C853] bg-[#E8F5E9]",
  },
  {
    id: "LIA-02",
    name: "Jenna_Storm",
    role: "PROJECT MANAGER • HUB A (DEVELOPMENT)",
    projects: 3,
    merit: 8.5,
    status: "IN DEEP SYNC",
    statusColor: "text-[#FF8F00] bg-[#FFF3E0]",
  },
  {
    id: "LIA-03",
    name: "Alex_Torres",
    role: "TEAM LEAD • HUB B (DESIGN)",
    projects: 7,
    merit: 9.2,
    status: "AVAILABLE",
    statusColor: "text-[#00C853] bg-[#E8F5E9]",
  },
];

const METRICS = [
  {
    label: "Community Feedbacks Synced",
    value: "1,420",
    change: "+12%",
    isPositive: true,
  },
  {
    label: "Dev Response Velocity",
    value: "2.4h",
    change: "-18%",
    isPositive: false,
  },
  {
    label: "Cross-Hub Allocations",
    value: "842",
    change: "+15%",
    isPositive: true,
  },
];

const CONDUCT_FRAMEWORK = [
  {
    id: "consensus",
    title: "Consensus Room",
    icon: Layers,
    desc: "Secure environment for high-level architectural voting and protocol agreements.",
    actionText: "ENTER ROOM",
  },
  {
    id: "api",
    title: "API Early Access",
    icon: Code,
    desc: "Beta access to upcoming C23 endpoints for integration testing and feedback.",
    actionText: "VIEW ENDPOINTS",
  },
  {
    id: "liaison",
    title: "Direct Liaison Desk",
    icon: MessageSquare,
    desc: "Priority communication channel for urgent Hub-specific node migrations.",
    actionText: "OPEN DESK",
  },
];

export default function CommunityChampionsPage() {
  const [viewMode, setViewMode] = useState("grid");

  // --- INLINE EXPANSION STATE ---
  const [expandedItem, setExpandedItem] = useState(null);

  // --- HANDLERS ---
  const handleAction = (actionName) => {
    console.log(`[System Log]: Action triggered - ${actionName}`);
  };

  const toggleItem = (itemName) => {
    setExpandedItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <div className="w-full bg-[#F4F5F7] font-instrument-sans antialiased text-slate-900 min-h-screen">
      <HeroSection />

      <section className="py-8 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <ChampionsFeedSection
            liaisons={LIAISONS_DB}
            viewMode={viewMode}
            setViewMode={setViewMode}
            handleAction={handleAction}
          />

          <SidebarSection
            metrics={METRICS}
            conductFramework={CONDUCT_FRAMEWORK}
            expandedItem={expandedItem}
            toggleItem={toggleItem}
            handleAction={handleAction}
          />
        </div>
      </section>
    </div>
  );
}
