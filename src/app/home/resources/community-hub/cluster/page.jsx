"use client";

import React, { useState, useMemo } from "react";
import ModalsSection from "@/components/resources/community-hub/cluster/ModalsSection";
import HeroSection from "@/components/resources/community-hub/cluster/HeroSection";
import ClusterFeedSection from "@/components/resources/community-hub/cluster/ClusterFeedSection";
import SidebarSection from "@/components/resources/community-hub/cluster/SidebarSection";

// --- DYNAMIC DATA CONSTANTS ---

const CLUSTERS_DB = [
  {
    id: "C-FIN",
    title: "Financial Hub Cluster",
    hub: "Hub O Integration",
    head: "Elena_Vance",
    deputy: "Marcus_T",
    resources: "4.2M UB",
    healthScore: 98,
    healthColor: "bg-[#00C853]",
  },
  {
    id: "C-DEV",
    title: "Farm Management Group",
    hub: "Hub P Logistics",
    head: "Sustain_Agri_ES",
    deputy: "David_C",
    resources: "2.5M UB",
    healthScore: 92,
    healthColor: "bg-[#FFB300]",
  },
  {
    id: "C-SEC",
    title: "Security & Governance",
    hub: "Hub G Identity",
    head: "Commander_Root",
    deputy: "Sarah_J",
    resources: "1.5M UB",
    healthScore: 100,
    healthColor: "bg-[#00C853]",
  },
];

const TOP_CLUSTERS = [
  { name: "Financial Hub", change: "+14.2%", isPositive: true },
  { name: "Security G", change: "+8.9%", isPositive: true },
  { name: "Public Sector", change: "-2.1%", isPositive: false },
];

const RECENT_ACTIVITY = [
  { user: "Marcus_T", action: "APPOINTED DEPUTY", time: "2h ago" },
  { user: "Sophia_M", action: "PROMOTED TO SENIOR", time: "1h ago" },
  { user: "Liam_B", action: "JOINED TEAM", time: "30m ago" },
];

export default function CommunityClusterLeadersPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // --- MODAL STATES ---
  const [activeModal, setActiveModal] = useState(null); // 'MANAGE' | 'MANUAL' | null
  const [selectedCluster, setSelectedCluster] = useState(null);

  const filteredClusters = useMemo(() => {
    if (!searchQuery.trim()) return CLUSTERS_DB;
    const q = searchQuery.toLowerCase();
    return CLUSTERS_DB.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.hub.toLowerCase().includes(q) ||
        c.head.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  // --- HANDLERS ---
  const openManageModal = (cluster) => {
    setSelectedCluster(cluster);
    setActiveModal("MANAGE");
  };

  const openManualModal = () => {
    setActiveModal("MANUAL");
  };

  const closeModal = () => {
    setActiveModal(null);
    setTimeout(() => setSelectedCluster(null), 200); // Clear after animation
  };

  const handleActionConfirm = (actionMessage) => {
    console.log(actionMessage);
    closeModal();
  };

  return (
    <div className="w-full bg-[#F4F5F7] font-instrument-sans antialiased text-slate-900 min-h-screen relative">
      <ModalsSection
        activeModal={activeModal}
        selectedCluster={selectedCluster}
        closeModal={closeModal}
        handleActionConfirm={handleActionConfirm}
      />

      <HeroSection />

      <section className="py-8 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
          <ClusterFeedSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            viewMode={viewMode}
            setViewMode={setViewMode}
            filteredClusters={filteredClusters}
            openManageModal={openManageModal}
          />

          <SidebarSection
            topClusters={TOP_CLUSTERS}
            recentActivity={RECENT_ACTIVITY}
            openManualModal={openManualModal}
          />
        </div>
      </section>
    </div>
  );
}
