"use client";

import React, { useState, useMemo } from "react";
import SubHeaderSection from "@/components/resources/community-hub/learn/SubHeaderSection";
import HeroSection from "@/components/resources/community-hub/learn/HeroSection";
import FeedSection from "@/components/resources/community-hub/learn/FeedSection";
import SidebarSection from "@/components/resources/community-hub/learn/SidebarSection";
import ExplorePathsModal from "@/components/resources/community-hub/learn/ExplorePathsModal";

// --- DYNAMIC DATA CONSTANTS ---

const TABS = ["ALL", "BATCHES", "COHORTS", "CLUSTERS"];

const COURSES_DB = [
  {
    id: 1,
    type: "BATCH",
    title: "Module O: Financial Foundations",
    author: "Council Finance Team",
    enrolled: "1200",
    meritReward: "+0.5",
    progress: 83,
    image: "/images/learn.svg",
  },
  {
    id: 2,
    type: "BATCH",
    title: "Module O: Financial Foundations",
    author: "Council Finance Team",
    enrolled: "1200",
    meritReward: "+0.5",
    progress: 83,
    image: "/images/learn.svg",
  },
  {
    id: 3,
    type: "BATCH",
    title: "Module O: Financial Foundations",
    author: "Council Finance Team",
    enrolled: "1200",
    meritReward: "+0.5",
    progress: 83,
    image: "/images/learn.svg",
  },
  {
    id: 4,
    type: "COHORT",
    title: "Hub P: IoT Sensor Networking",
    author: "Agri-Tech Lead",
    enrolled: "450",
    meritReward: "+0.8",
    progress: 12,
    image: "/images/learn.svg",
  },
  {
    id: 5,
    type: "CLUSTER",
    title: "C23 IdentityHash Protocols",
    author: "Security Council",
    enrolled: "890",
    meritReward: "+1.2",
    progress: 100,
    image: "/images/learn.svg",
  },
];

const ARCHIVED_RESOURCES = [
  { id: 1, title: "Taxonomy of Merit Scores", time: "2 DAYS AGO" },
  { id: 2, title: "C23 Deployment Architecture", time: "1 WEEK AGO" },
  { id: 3, title: "Ledger Reconciliation Patterns", time: "2 WEEKS AGO" },
  { id: 4, title: "Historical Node Performance", time: "1 MONTH AGO" },
  { id: 5, title: "Legacy System Migration Guide", time: "2 MONTHS AGO" },
];

const LEARNING_PATHS = [
  { id: 1, title: "Certified Hub O Auditor", courses: 4, duration: "3 Weeks" },
  {
    id: 2,
    title: "Farm Management Integration Specialist",
    courses: 6,
    duration: "5 Weeks",
  },
  {
    id: 3,
    title: "C23 Security Compliance Expert",
    courses: 3,
    duration: "2 Weeks",
  },
];

export default function CommunityHubLearnPage() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(3);
  const [showAllResources, setShowAllResources] = useState(false);
  const [showPathsModal, setShowPathsModal] = useState(false);

  // --- FILTERING LOGIC ---
  const processedCourses = useMemo(() => {
    let result = [...COURSES_DB];

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(q) ||
          course.author.toLowerCase().includes(q) ||
          course.type.toLowerCase().includes(q),
      );
    }

    if (activeTab !== "ALL") {
      const tabType = activeTab.replace(/E?S$/, ""); // Matches plural to singular (BATCHES -> BATCH)
      result = result.filter((course) => course.type === tabType);
    }

    return result;
  }, [searchQuery, activeTab]);

  const displayedCourses = processedCourses.slice(0, visibleCount);
  const displayedResources = showAllResources
    ? ARCHIVED_RESOURCES
    : ARCHIVED_RESOURCES.slice(0, 3);

  const handleLoadMoreToggle = () => {
    if (visibleCount < processedCourses.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(3);
    }
  };

  return (
    <div className="w-full bg-[#F4F5F7] font-instrument-sans antialiased text-slate-900 min-h-screen relative">
      <ExplorePathsModal
        showPathsModal={showPathsModal}
        setShowPathsModal={setShowPathsModal}
        learningPaths={LEARNING_PATHS}
      />

      <SubHeaderSection />
      <HeroSection />

      <section className="py-10 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
          <FeedSection
            tabs={TABS}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setVisibleCount={setVisibleCount}
            displayedCourses={displayedCourses}
            processedCoursesLength={processedCourses.length}
            handleLoadMoreToggle={handleLoadMoreToggle}
            visibleCount={visibleCount}
          />

          <SidebarSection
            setShowPathsModal={setShowPathsModal}
            displayedResources={displayedResources}
            archivedResourcesLength={ARCHIVED_RESOURCES.length}
            showAllResources={showAllResources}
            setShowAllResources={setShowAllResources}
          />
        </div>
      </section>
    </div>
  );
}
