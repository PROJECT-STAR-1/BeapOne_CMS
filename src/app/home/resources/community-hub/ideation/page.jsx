"use client";

import React, { useState, useMemo } from "react";
import HeroSection from "@/components/resources/community-hub/ideation/HeroSection";
import SidebarSection from "@/components/resources/community-hub/ideation/SidebarSection";
import IdeaFeedSection from "@/components/resources/community-hub/ideation/IdeaFeedSection";

// --- FULL DYNAMIC DATABASE ---
// Restored all 7 items and added a 'replies' array to power the chat functionality
const INITIAL_IDEAS_DB = [
  {
    id: 1,
    votes: 1240,
    status: "UNDER REVIEW",
    module: "FINANCIAL (O)",
    category: "Compliance",
    roi: "High ROI",
    title: "Cross-Module Automated Tax Reconciliation (Hub O + ES Segment)",
    excerpt:
      "Proposed logic to automatically map Hub O ledger entries to Spanish regional tax compliance templates using C23 Appendix 4 standards.",
    fullDescription:
      "Currently, users in the ES segment have to manually export ledger entries and reconcile them against regional tax codes. This proposal introduces an automated cron job that runs nightly, mapping the entries via the C23 Appendix 4 API directly into the required compliance formats. Expected to save finance teams 15 hours per week.",
    user: "FinTech_Lead_ES",
    merit: "M:8.4",
    comments: 2,
    threshold: 83,
    isTrending: true,
    timestamp: new Date("2024-02-15T10:00:00").getTime(),
    replies: [
      {
        id: 101,
        user: "Audit_Pro",
        time: "1d ago",
        text: "This is desperately needed. The current manual export is prone to human error.",
      },
      {
        id: 102,
        user: "Dev_Core",
        time: "12h ago",
        text: "We are currently reviewing the C23 Appendix 4 API limits for this to ensure it scales.",
      },
    ],
  },
  {
    id: 2,
    votes: 3150,
    status: "APPROVED",
    module: "FARM MANAGEMENT (P)",
    category: "IoT Sync",
    roi: "High ROI",
    title: "Real-Time Soil Moisture Sync with Hub P Irrigation Triggers",
    excerpt:
      "Integrate standard generic IoT soil sensors directly into Hub P to automatically trigger irrigation schedules without third-party middleware.",
    fullDescription:
      "By establishing a direct WebSocket connection between Hub P and common IoT sensor APIs (e.g., generic MQTT brokers), we can eliminate the reliance on Zapier/Make. This will reduce latency from 5 minutes to 200ms, preventing crop over-watering and saving massive amounts of water resources globally.",
    user: "Agri_Innovator",
    merit: "M:9.2",
    comments: 1,
    threshold: 100,
    isTrending: true,
    timestamp: new Date("2024-01-20T14:30:00").getTime(),
    replies: [
      {
        id: 201,
        user: "Farm_Techie",
        time: "3d ago",
        text: "Will this support MQTT protocols out of the box?",
      },
    ],
  },
  {
    id: 3,
    votes: 890,
    status: "IN DEV",
    module: "GOVERNANCE (G)",
    category: "Permissions",
    roi: "Medium ROI",
    title: "Granular Role-Based Access Control (RBAC) Templates for Tier 2",
    excerpt:
      "Create a library of default RBAC templates for mid-sized organizations to speed up the onboarding process in Hub G.",
    fullDescription:
      "Tier 2 partners are spending an average of 4 days configuring Hub G permissions from scratch. Providing 5 standard industry templates (Finance, Healthcare, Retail, Education, Logistics) out-of-the-box will cut onboarding time by 80%.",
    user: "Security_Sam",
    merit: "M:7.8",
    comments: 1,
    threshold: 100,
    isTrending: false,
    timestamp: new Date("2024-02-18T09:15:00").getTime(),
    replies: [
      {
        id: 301,
        user: "Onboarding_Team",
        time: "2d ago",
        text: "We can provide the base JSON structures for the Retail template if needed to speed this up.",
      },
    ],
  },
  {
    id: 4,
    votes: 45,
    status: "NEW",
    module: "ECOSYSTEM API",
    category: "Webhooks",
    roi: "Low ROI",
    title: "Add Webhook Support for Custom Module Deployment Events",
    excerpt:
      "Allow developers to subscribe to events related to the compilation and deployment of custom private modules via the CLI.",
    fullDescription:
      "We need a way for our internal CI/CD pipelines (GitHub Actions) to know when a custom UBOS module has successfully passed compilation and is live. A simple HTTP POST webhook payload containing the module hash and deployment status would be sufficient.",
    user: "Dev_Pro_99",
    merit: "M:5.5",
    comments: 0,
    threshold: 12,
    isTrending: false,
    timestamp: new Date("2024-02-23T08:00:00").getTime(),
    replies: [],
  },
  {
    id: 5,
    votes: 2100,
    status: "UNDER REVIEW",
    module: "FINANCIAL (O)",
    category: "Reporting",
    roi: "High ROI",
    title: "Multi-Currency Dynamic Exchange Rate Historical Snapshots",
    excerpt:
      "Lock in exchange rates at the exact time of transaction and allow historical reporting without recalculating based on current rates.",
    fullDescription:
      "Currently, historical reports dynamically update based on the live Oracle exchange rate, causing past quarters to misalign with filed statements. This feature proposes a 'Snapshot Ledger' that hard-codes the exact timestamped rate to preserve historical integrity.",
    user: "Treasury_Team",
    merit: "M:8.9",
    comments: 2,
    threshold: 95,
    isTrending: true,
    timestamp: new Date("2024-02-10T11:45:00").getTime(),
    replies: [
      {
        id: 501,
        user: "Finance_Guru",
        time: "1w ago",
        text: "Yes! The recalculation issue ruins our quarterly closing process.",
      },
      {
        id: 502,
        user: "Data_Architect",
        time: "5d ago",
        text: "We should store the snapshot rate in a dedicated historical table rather than appending it to the active ledger to keep query times low.",
      },
    ],
  },
  {
    id: 6,
    votes: 620,
    status: "NEW",
    module: "HUMAN RESOURCES (H)",
    category: "Payroll",
    roi: "Medium ROI",
    title: "Automated Crypto Payout Splits for Global Contractors",
    excerpt:
      "Allow HR administrators to set rules for paying contractors partially in fiat and partially in supported stablecoins.",
    fullDescription:
      "With a growing distributed workforce, contractors often request split payments. Implementing a native integration with the Financial (O) Hub's crypto settlement layer would allow HR to define a 70/30 Fiat/USDC split automatically during the monthly payroll run.",
    user: "Global_HR_Admin",
    merit: "M:6.4",
    comments: 1,
    threshold: 45,
    isTrending: true,
    timestamp: new Date("2024-02-22T16:20:00").getTime(),
    replies: [
      {
        id: 601,
        user: "Contractor_Bob",
        time: "2h ago",
        text: "Would this support USDT as well, or just USDC?",
      },
    ],
  },
  {
    id: 7,
    votes: 115,
    status: "UNDER REVIEW",
    module: "SUPPLY CHAIN (S)",
    category: "Logistics",
    roi: "Low ROI",
    title: "QR Code Generator for Custom Freight Waybills",
    excerpt:
      "A native tool within Hub S to instantly generate and print scannable QR codes for outgoing warehouse freight.",
    fullDescription:
      "Warehouse operators currently have to use a 3rd party tool to convert waybill numbers into QR codes. Building a native renderer inside Hub S would save roughly 2 minutes per shipment.",
    user: "Warehouse_Chief",
    merit: "M:4.9",
    comments: 0,
    threshold: 22,
    isTrending: false,
    timestamp: new Date("2024-02-20T10:00:00").getTime(),
    replies: [],
  },
];

export default function CommunityHubIdeationPage() {
  // Store ideas in state so we can dynamically mutate them (e.g. adding comments)
  const [ideas, setIdeas] = useState(INITIAL_IDEAS_DB);

  const [activeTab, setActiveTab] = useState("TRENDING");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedIdeaId, setExpandedIdeaId] = useState(null);

  // --- ADD COMMENT LOGIC ---
  const handleAddComment = (ideaId, commentText) => {
    if (!commentText.trim()) return;

    const newReply = {
      id: Date.now(), // Generate unique ID for the comment
      user: "Current_User", // In production, replace with authenticated user context
      time: "Just now",
      text: commentText,
    };

    // Update the specific idea's replies array and increment comment count
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) => {
        if (idea.id === ideaId) {
          return {
            ...idea,
            comments: idea.comments + 1,
            replies: [...idea.replies, newReply],
          };
        }
        return idea;
      }),
    );
  };

  // --- DYNAMIC FILTERING & SORTING LOGIC ---
  const processedIdeas = useMemo(() => {
    let result = [...ideas];

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (idea) =>
          idea.title.toLowerCase().includes(q) ||
          idea.excerpt.toLowerCase().includes(q) ||
          idea.module.toLowerCase().includes(q) ||
          idea.status.toLowerCase().includes(q) ||
          idea.category.toLowerCase().includes(q),
      );
    }

    switch (activeTab) {
      case "TRENDING":
        result = result
          .filter((idea) => idea.isTrending)
          .sort((a, b) => b.votes - a.votes);
        break;
      case "TOP RATED":
        result = result.sort((a, b) => b.votes - a.votes);
        break;
      case "NEWEST":
        result = result.sort((a, b) => b.timestamp - a.timestamp);
        break;
      default:
        break;
    }

    return result;
  }, [searchQuery, activeTab, ideas]);

  const displayedIdeas = processedIdeas.slice(0, visibleCount);

  // --- HANDLERS ---
  const handleToggleOpen = (id) => {
    setExpandedIdeaId((prev) => (prev === id ? null : id));
  };

  const handleLoadMoreToggle = () => {
    if (visibleCount < processedIdeas.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(3);
    }
  };

  return (
    <div className="w-full bg-[#F4F5F7] font-instrument-sans text-slate-900 min-h-screen">
      <HeroSection />

      <section className="py-10 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10">
          <IdeaFeedSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setVisibleCount={setVisibleCount}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setExpandedIdeaId={setExpandedIdeaId}
            displayedIdeas={displayedIdeas}
            processedIdeasLength={processedIdeas.length}
            handleLoadMoreToggle={handleLoadMoreToggle}
            expandedIdeaId={expandedIdeaId}
            handleToggleOpen={handleToggleOpen}
            visibleCount={visibleCount}
            handleAddComment={handleAddComment} // Passed down to the feed
          />

          <SidebarSection />
        </div>
      </section>
    </div>
  );
}
