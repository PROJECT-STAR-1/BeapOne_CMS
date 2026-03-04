"use client";

import React, { useState } from "react";
import DiscussionsSidebar from "./DiscussionsSidebar";
import DiscussionsFeed from "./DiscussionsFeed";

// --- MOCK DATA ---
const DISCUSSION_CATEGORIES = [
  "All Discussions",
  "Financial (O)",
  "Farm Management (P)",
  "Governance (G)",
  "Ecosystem API",
];

const DISCUSSION_THREADS = [
  {
    id: 1,
    category: "Financial (O)",
    time: "2h ago",
    title: "Optimizing Hub O Transaction Throughput for Q1",
    tags: ["#Performance", "#Treasury"],
    author: "Fintech_Lead",
    initial: "F",
    likes: 124,
    comments: 48,
  },
  {
    id: 2,
    category: "Farm Management (P)",
    time: "5h ago",
    title: "Irrigation Automation Logic for Multi-Crop Zones",
    tags: ["#Automation", "#IoT"],
    author: "Agri_Expert",
    initial: "A",
    likes: 89,
    comments: 32,
  },
  {
    id: 3,
    category: "Governance (G)",
    time: "1d ago",
    title: "Voting Rights Configuration for Tier 2 Members",
    tags: ["#Permissions", "#DAO"],
    author: "Gov_Admin",
    initial: "G",
    likes: 210,
    comments: 115,
  },
  {
    id: 4,
    category: "Ecosystem API",
    time: "2d ago",
    title: "Webhooks for External CRM Sync Issues",
    tags: ["#API", "#Integration"],
    author: "Dev_Sam",
    initial: "D",
    likes: 45,
    comments: 12,
  },
  {
    id: 5,
    category: "Financial (O)",
    time: "3d ago",
    title: "Cross-border Tax Compliance v2 Updates",
    tags: ["#Tax", "#Compliance"],
    author: "Tax_Guru",
    initial: "T",
    likes: 156,
    comments: 89,
  },
  {
    id: 6,
    category: "Farm Management (P)",
    time: "4d ago",
    title: "Best Practices for Soil Moisture Sensor Calibration",
    tags: ["#Hardware", "#Sensors"],
    author: "GreenThumb",
    initial: "G",
    likes: 72,
    comments: 18,
  },
  {
    id: 7,
    category: "Ecosystem API",
    time: "5d ago",
    title: "Deprecation Notice: Legacy Auth Endpoints (v1.2)",
    tags: ["#Security", "#Updates"],
    author: "Platform_Eng",
    initial: "P",
    likes: 310,
    comments: 64,
  },
  {
    id: 8,
    category: "Governance (G)",
    time: "1w ago",
    title: "Draft Proposal: Quarterly Community Town Halls",
    tags: ["#Events", "#Planning"],
    author: "Comm_Lead",
    initial: "C",
    likes: 405,
    comments: 82,
  },
];

export default function DiscussionsBoardSection() {
  // Global Board State
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Discussions");

  // Filter Logic
  const filteredThreads = DISCUSSION_THREADS.filter((thread) => {
    const matchesCategory =
      activeCategory === "All Discussions" ||
      thread.category === activeCategory;

    const matchesSearch =
      thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      thread.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <DiscussionsSidebar
        categories={DISCUSSION_CATEGORIES}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <DiscussionsFeed
        filteredThreads={filteredThreads}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </>
  );
}
