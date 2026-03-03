"use client";

import React, { useState } from "react";
import HeroSection from "@/components/resources/community-hub/forum/HeroSection";
import SidebarSection from "@/components/resources/community-hub/forum/SidebarSection";
import ThreadFeedSection from "@/components/resources/community-hub/forum/ThreadFeedSection";

// Mock database of threads to demonstrate filtering, sorting, and comments
const THREADS_DB = [
  {
    id: 1,
    category: "Technical Implementation",
    votes: 156,
    title: "Optimizing Hub P Resource Latency in C23.Q1 Clusters",
    excerpt:
      "We're seeing a 15ms spike during peak synchronization phases. Has anyone tried the new C23 cache-layer bypass?",
    tags: ["#PERFORMANCE", "#HUB P", "#LATENCY"],
    isVerified: true,
    isTrending: true,
    user: "ubos_dev_99",
    merit: "M:8.2",
    time: "2h ago",
    comments: 2,
    replies: [
      {
        user: "sys_admin_pro",
        time: "1h ago",
        text: "Yes, bypassing the cache worked, but monitor your DB load. It spikes initially.",
      },
      {
        user: "ubos_dev_99",
        time: "45m ago",
        text: "Good call. I applied a rate limiter and it seems stable now. Thanks!",
      },
    ],
  },
  {
    id: 2,
    category: "Governance & Policy",
    votes: 89,
    title: "Adjusting DAO Voting Weights for Tier 2 Ecosystem Partners",
    excerpt:
      "Proposal to modify the baseline voting weight for Tier 2 nodes to ensure fairer representation across regional hubs.",
    tags: ["#GOVERNANCE", "#VOTING", "#POLICY"],
    isVerified: false,
    isTrending: false,
    user: "gov_lead_sarah",
    merit: "M:9.1",
    time: "4h ago",
    comments: 0,
    replies: [],
  },
  {
    id: 3,
    category: "Hub Troubleshooting",
    votes: 24,
    title: "Financial (O) Module: Multi-Currency Settlement Failure",
    excerpt:
      "Transactions originating from Hub APAC are failing validation at step 4. Getting Error Code: x0092A. Attached logs.",
    tags: ["#BUG", "#FINANCIAL", "#ERROR"],
    isVerified: false,
    isTrending: false,
    user: "fin_tech_jack",
    merit: "M:4.5",
    time: "1d ago",
    comments: 1,
    replies: [
      {
        user: "support_team",
        time: "12h ago",
        text: "Error x0092A usually means the exchange rate oracle timed out. Check your Hub G connection.",
      },
    ],
  },
  {
    id: 4,
    category: "Best Practices",
    votes: 312,
    title: "Ultimate Guide: Structuring Your Initial Workspace Hierarchy",
    excerpt:
      "A comprehensive breakdown of how to set up your Organizational Hierarchy (Hub B) to prevent scaling issues down the line.",
    tags: ["#SETUP", "#GUIDE", "#HUB B"],
    isVerified: true,
    isTrending: true,
    user: "master_builder",
    merit: "M:12.0",
    time: "2d ago",
    comments: 3,
    replies: [
      {
        user: "new_user_101",
        time: "1d ago",
        text: "This saved my team weeks of refactoring. Thank you!",
      },
      {
        user: "hr_manager",
        time: "20h ago",
        text: "Can this structure map directly to the HR module permissions?",
      },
      {
        user: "master_builder",
        time: "18h ago",
        text: "@hr_manager Yes, just ensure you check the 'Inherit Hub B Roles' box during setup.",
      },
    ],
  },
  {
    id: 5,
    category: "Technical Implementation",
    votes: 67,
    title: "Webhooks for External CRM Synchronization via Hub G",
    excerpt:
      "Looking for best practices on setting up 2-way sync between Salesforce and our Core User Database without hitting rate limits.",
    tags: ["#API", "#INTEGRATION", "#WEBHOOKS"],
    isVerified: true,
    isTrending: false,
    user: "api_wizard",
    merit: "M:7.7",
    time: "3d ago",
    comments: 1,
    replies: [
      {
        user: "data_guru",
        time: "2d ago",
        text: "Batch your outgoing webhooks using the C23 batching protocol. It limits it to 1 call per minute.",
      },
    ],
  },
  {
    id: 6,
    category: "Hub Troubleshooting",
    votes: 12,
    title: "Intermittent UI Glitch in the Data Import Wizard",
    excerpt:
      "When importing CSVs over 50MB, the progress bar freezes at 99% even though the backend confirms the import is complete.",
    tags: ["#UI", "#IMPORT", "#BUG"],
    isVerified: false,
    isTrending: false,
    user: "data_sam",
    merit: "M:3.2",
    time: "5h ago",
    comments: 0,
    replies: [],
  },
];

export default function CommunityHubForumPage() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("All Posts");
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);

  // Sort State
  const [sortBy, setSortBy] = useState("Newest First");
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Comments State (Array of expanded thread IDs)
  const [expandedThreads, setExpandedThreads] = useState([]);

  // --- FILTERING LOGIC ---
  let filteredThreads = THREADS_DB.filter((thread) => {
    if (
      activeCategory !== "All Categories" &&
      thread.category !== activeCategory
    )
      return false;
    if (activeTab === "Trending" && !thread.isTrending) return false;
    if (activeTab === "Unanswered" && thread.comments > 0) return false;
    if (activeTab === "Certified" && !thread.isVerified) return false;
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        thread.title.toLowerCase().includes(query) ||
        thread.excerpt.toLowerCase().includes(query) ||
        thread.tags.some((tag) => tag.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }
    return true;
  });

  // --- SORTING LOGIC ---
  filteredThreads = filteredThreads.sort((a, b) => {
    switch (sortBy) {
      case "Newest First":
        return a.id - b.id; // Mock logic: smaller ID = newer
      case "Oldest First":
        return b.id - a.id;
      case "Most Votes":
        return b.votes - a.votes;
      case "Most Comments":
        return b.comments - a.comments;
      default:
        return 0;
    }
  });

  // Data to display based on pagination
  const displayedThreads = filteredThreads.slice(0, visibleCount);

  // --- HANDLERS ---
  const handleLoadMore = () => {
    if (visibleCount < filteredThreads.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(3);
    }
  };

  const toggleComments = (threadId) => {
    setExpandedThreads(
      (prev) =>
        prev.includes(threadId)
          ? prev.filter((id) => id !== threadId) // Close it if it's already open
          : [...prev, threadId], // Open it
    );
  };

  return (
    <div className="w-full bg-white font-instrument-sans text-slate-900 min-h-screen">
      <HeroSection />

      <section className="py-12 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
          <SidebarSection
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            setVisibleCount={setVisibleCount}
            setExpandedThreads={setExpandedThreads}
          />
          <ThreadFeedSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setVisibleCount={setVisibleCount}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setExpandedThreads={setExpandedThreads}
            sortBy={sortBy}
            setSortBy={setSortBy}
            isSortOpen={isSortOpen}
            setIsSortOpen={setIsSortOpen}
            displayedThreads={displayedThreads}
            filteredThreadsLength={filteredThreads.length}
            handleLoadMore={handleLoadMore}
            expandedThreads={expandedThreads}
            toggleComments={toggleComments}
            visibleCount={visibleCount}
          />
        </div>
      </section>
    </div>
  );
}
