"use client";

import React, { useState, useMemo } from "react";
import HeroSection from "@/components/resources/community-hub/resource/HeroSection";
import SidebarSection from "@/components/resources/community-hub/resource/SidebarSection";
import ResourceFeedSection from "@/components/resources/community-hub/resource/ResourceFeedSection";

// --- DYNAMIC DATA CONSTANTS ---
const RESOURCES_DB = [
  {
    id: 1,
    moduleBadge: "FARM (P)",
    moduleId: "farm",
    contentType: "manuals",
    typeIcon: "doc",
    title: "Hub P: Soil Sensor Integration Guide",
    isVerified: true,
    isTrending: true,
    comments: 0,
    author: "Official UBOS",
    metaInfo: "15 min read",
    tags: ["IoT", "Hardware", "Automation"],
    rating: 4.9,
    downloads: "1.2k",
    dateAdded: new Date("2024-02-15").getTime(),
    fullDescription:
      "A comprehensive, step-by-step technical manual detailing how to physically connect and logically map generic IoT soil moisture sensors into the Hub P Farm Management interface. Includes wiring diagrams and API payload templates.",
    actionText: "Download PDF Guide",
  },
  {
    id: 2,
    moduleBadge: "FINANCIAL (O)",
    moduleId: "financial",
    contentType: "video",
    typeIcon: "video",
    title: "Optimizing Financial Reconciliation in Hub O",
    isVerified: false,
    isTrending: true,
    comments: 12,
    author: "Merit_User_88",
    metaInfo: "12:45",
    tags: ["Ledger", "API", "Accounting"],
    rating: 4.9,
    downloads: "850",
    dateAdded: new Date("2024-02-20").getTime(),
    fullDescription:
      "In this 12-minute screencast, we walk through setting up automated reconciliation rules using Hub O's matching engine. Specifically focused on handling high-volume micro-transactions across multiple fiat and crypto pairs.",
    actionText: "Watch Video",
  },
  {
    id: 3,
    moduleBadge: "SECURITY (G)",
    moduleId: "security",
    contentType: "manuals",
    typeIcon: "doc",
    title: "C23 Appendix 4: IdentityHash Implementation",
    isVerified: true,
    isTrending: false,
    comments: 4,
    author: "Official UBOS",
    metaInfo: "20 min read",
    tags: ["Compliance", "Encryption", "Audit"],
    rating: 4.8,
    downloads: "900",
    dateAdded: new Date("2024-02-18").getTime(),
    fullDescription:
      "Official documentation covering the new IdentityHash protocols mandated in the C23 update. This document outlines the cryptographic standards required for all Hub G user data storage to remain compliant.",
    actionText: "View Documentation",
  },
  {
    id: 4,
    moduleBadge: "FARM (P)",
    moduleId: "farm",
    contentType: "cases",
    typeIcon: "doc",
    title: "Automated Crop Rotation Algorithms",
    isVerified: true,
    isTrending: false,
    comments: 0,
    author: "AgriTech_Lead",
    metaInfo: "5 min read",
    tags: ["Algorithms", "Efficiency"],
    rating: 4.8,
    downloads: "900",
    dateAdded: new Date("2024-02-10").getTime(),
    fullDescription:
      "A user case study demonstrating how AgriTech Corp increased seasonal yield by 14% using Hub P's advanced crop rotation algorithms. Features real-world data sets and configuration snapshots.",
    actionText: "Read Case Study",
  },
];

export default function CommunityHubResourcePage() {
  // --- STATE ---
  const [activeModule, setActiveModule] = useState("all");
  const [activeTypes, setActiveTypes] = useState(["video", "manuals", "cases"]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All Posts");
  const [sortBy, setSortBy] = useState("Newest First");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [expandedResId, setExpandedResId] = useState(null);

  // Toggle Content Type Checkboxes
  const toggleType = (typeId) => {
    setActiveTypes((prev) =>
      prev.includes(typeId)
        ? prev.filter((t) => t !== typeId)
        : [...prev, typeId],
    );
  };

  // Toggle Expand Card
  const toggleExpand = (id) => {
    setExpandedResId((prev) => (prev === id ? null : id));
  };

  // --- FILTERING & SORTING LOGIC ---
  const processedResources = useMemo(() => {
    let result = [...RESOURCES_DB];

    // 1. Filter by Module Sidebar
    if (activeModule !== "all") {
      result = result.filter((res) => res.moduleId === activeModule);
    }

    // 2. Filter by Content Type Checkboxes
    if (activeTypes.length > 0) {
      result = result.filter((res) => activeTypes.includes(res.contentType));
    } else {
      result = []; // If nothing checked, show nothing
    }

    // 3. Filter by Tabs (All Posts, Trending, Unanswered, Certified)
    switch (activeTab) {
      case "Trending":
        result = result.filter((res) => res.isTrending);
        break;
      case "Unanswered":
        result = result.filter((res) => res.comments === 0);
        break;
      case "Certified":
        result = result.filter((res) => res.isVerified);
        break;
      case "All Posts":
      default:
        break;
    }

    // 4. Filter by Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (res) =>
          res.title.toLowerCase().includes(q) ||
          res.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          res.author.toLowerCase().includes(q),
      );
    }

    // 5. Sort Logic
    switch (sortBy) {
      case "Newest First":
        result = result.sort((a, b) => b.dateAdded - a.dateAdded);
        break;
      case "Most Popular":
        const getDlNum = (dl) =>
          dl.includes("k") ? parseFloat(dl) * 1000 : parseInt(dl);
        result = result.sort(
          (a, b) => getDlNum(b.downloads) - getDlNum(a.downloads),
        );
        break;
      case "Highest Rated":
        result = result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeModule, activeTypes, searchQuery, activeTab, sortBy]);

  return (
    <div className="w-full bg-[#F4F5F7] font-instrument-sans text-slate-900 min-h-screen">
      <HeroSection />

      <section className="py-10 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
          <SidebarSection
            activeModule={activeModule}
            setActiveModule={setActiveModule}
            setExpandedResId={setExpandedResId}
            activeTypes={activeTypes}
            toggleType={toggleType}
          />

          <ResourceFeedSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setExpandedResId={setExpandedResId}
            isSortOpen={isSortOpen}
            setIsSortOpen={setIsSortOpen}
            sortBy={sortBy}
            setSortBy={setSortBy}
            processedResources={processedResources}
            expandedResId={expandedResId}
            toggleExpand={toggleExpand}
          />
        </div>
      </section>
    </div>
  );
}
