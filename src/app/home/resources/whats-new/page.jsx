"use client";

import React, { useState } from "react";
import HeroSection from "@/components/resources/whats-new/HeroSection";
import SearchFilterSection from "@/components/resources/whats-new/SearchFilterSection";
import ReleaseNotesSection from "@/components/resources/whats-new/ReleaseNotesSection";
import CtaBannerSection from "@/components/resources/whats-new/CtaBannerSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

// Static data payload
const RELEASE_DATA = [
  {
    id: "batch4",
    plannedText: "Planned: Q4 2026 - Batch 4 Release (Hub S)",
    title: "S4: Manufacturing-as-a-Service Model is Coming Soon!",
    description:
      "**Key Highlights:** This final major batch focuses on rapid deployment capability by releasing all specialized Business Templates (Hub S), enabling quick setup for niche market operations like MaaS, WaaS, and BNPL.",
    hasImage: true,
    themeColor: "text-[#D32F2F]",
    btnColor: "bg-[#D32F2F]",
    btnHover: "hover:bg-[#b71c1c]",
    tableData: [
      {
        module: "S1: Build To Rent (BTR)",
        version: "1.0.0",
        status: "Upcoming",
        jurisdiction: "Global/NA",
      },
      {
        module: "S4: Manufacturing as a Service (MaaS)",
        version: "1.0.0",
        status: "Upcoming",
        jurisdiction: "Global",
      },
      {
        module: "S6: Buy Now Pay Later (BNPL)",
        version: "1.0.0",
        status: "Active",
        jurisdiction: "Global/Financial",
      },
    ],
  },
  {
    id: "batch3",
    plannedText: "Planned: Q3 2026 - Batch 3 Release (Hub Q)",
    title: "Advance Program Management with Hub Q",
    description:
      "**Key Highlights:** Batch 3 focuses on rolling out the advanced **Syndicated Program Management (Hub Q)**, designed for community-based and decentralized production/service programs (Farm2school, Bulk Sourcing, Syndicated Housing, etc.).",
    hasImage: false,
    themeColor: "text-[#0056D2]",
    btnColor: "bg-[#0056D2]",
    btnHover: "hover:bg-[#0044a5]",
    tableData: [
      {
        module: "Q1: Farm2School Syndication",
        version: "2.1.0",
        status: "Active",
        jurisdiction: "Global",
      },
    ],
  },
  {
    id: "legacy1",
    plannedText: "Deployed: Q1 2024 - Foundation Release",
    title: "Legacy Authentication Protocol Deprecation",
    description:
      "**Key Highlights:** Complete transition from v1 to v2 authentication protocols. The legacy framework is maintained purely for archival reference and backwards compatibility in specific on-premise environments.",
    hasImage: false,
    themeColor: "text-[#616161]",
    btnColor: "bg-[#616161]",
    btnHover: "hover:bg-[#424242]",
    tableData: [
      {
        module: "G1: Core Identity Auth",
        version: "1.2.4",
        status: "Legacy",
        jurisdiction: "Global",
      },
      {
        module: "G3: Basic RBAC Engine",
        version: "1.1.0",
        status: "Legacy",
        jurisdiction: "EU/NA",
      },
    ],
  },
];

export default function WhatsNewRegistry() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Show All");

  // Core filtering logic
  const filteredNotes = RELEASE_DATA.map((release) => {
    const searchLower = searchQuery.toLowerCase();

    const filteredTable = release.tableData.filter((row) => {
      const matchesStatus =
        activeFilter === "Show All" || row.status === activeFilter;
      const matchesSearch =
        searchQuery === "" ||
        row.module.toLowerCase().includes(searchLower) ||
        row.version.toLowerCase().includes(searchLower) ||
        row.jurisdiction.toLowerCase().includes(searchLower);

      return matchesStatus && matchesSearch;
    });

    const parentMatchesSearch =
      searchQuery === "" ||
      release.title.toLowerCase().includes(searchLower) ||
      release.description.toLowerCase().includes(searchLower);

    if (
      (parentMatchesSearch && activeFilter === "Show All") ||
      filteredTable.length > 0
    ) {
      return { ...release, tableData: filteredTable };
    }

    return null;
  }).filter(Boolean);

  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 overflow-x-hidden">
      <HeroSection />

      <SearchFilterSection
        onSearch={setSearchQuery}
        onFilterChange={setActiveFilter}
      />

      <ReleaseNotesSection notes={filteredNotes} />

      <CtaBannerSection />
      <TestimonialsSection />
    </div>
  );
}
