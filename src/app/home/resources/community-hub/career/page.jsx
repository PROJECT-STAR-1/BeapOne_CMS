"use client";

import React, { useState, useMemo } from "react";
import HeroSection from "@/components/resources/community-hub/career/HeroSection";
import SidebarSection from "@/components/resources/community-hub/career/SidebarSection";
import FeedSection from "@/components/resources/community-hub/career/FeedSection";

// --- DYNAMIC DATA CONSTANTS ---

const TABS = ["JOBS", "REQUESTS", "VOLUNTEER"];

const SEGMENTS = [
  { id: "financial", label: "Financial (O)" },
  { id: "farm", label: "Farm Mgmt (P)" },
  { id: "security", label: "Security (G)" },
  { id: "public", label: "Public Segment" },
];

const JOB_LISTINGS = [
  {
    id: 1,
    title: "Hub O Systems Auditor",
    company: "EcoFinance Global",
    location: "Remote (EU/ES Segment)",
    type: "FULL-TIME",
    segment: "FINANCIAL (O)",
    segmentId: "financial",
    practice: "audit",
    tags: ["Audit", "Compliance"],
    salary: "€85k - €110k",
    meritReq: "7.5+",
    fullDescription:
      "We are seeking a meticulous Systems Auditor to review and verify compliance protocols within the Hub O ecosystem. You will be responsible for ensuring all automated ledger reconciliations meet regional EU/ES standards. Strong background in smart contract auditing is highly preferred.",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Tech Innovations Inc.",
    location: "Hybrid (UK/Remote)",
    type: "FULL-TIME",
    segment: "TECH (O)",
    segmentId: "financial",
    practice: "data",
    tags: ["Analysis", "Data Science"],
    salary: "£60k - £80k",
    meritReq: "5+",
    fullDescription:
      "Join our core data team to extract actionable insights from decentralized node networks. You will build predictive models using Python and SQL to forecast transaction loads and optimize routing algorithms.",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "NextGen Solutions",
    location: "Remote (Global)",
    type: "FULL-TIME",
    segment: "TECH (O)",
    segmentId: "financial",
    practice: "all",
    tags: ["Management", "Product Development"],
    salary: "$90k - $120k",
    meritReq: "8+",
    fullDescription:
      "Lead the roadmap for our internal compliance dashboards. Work closely with engineering and design to deliver high-impact features that reduce regulatory friction for our Tier 2 partners.",
  },
  {
    id: 4,
    title: "IoT Systems Engineer",
    company: "AgriSmart Connect",
    location: "On-site (NL)",
    type: "CONTRACT",
    segment: "FARM (P)",
    segmentId: "farm",
    practice: "hardware",
    tags: ["Hardware", "Integration"],
    salary: "€70k - €95k",
    meritReq: "6.0+",
    fullDescription:
      "Deploy and maintain physical soil moisture sensors across test farms in the Netherlands. You must have experience wiring generic MQTT brokers to Hub P APIs to ensure real-time data sync.",
  },
  {
    id: 5,
    title: "Smart Contract Developer",
    company: "DeFi Solutions",
    location: "Remote",
    type: "CONTRACT",
    segment: "SECURITY (G)",
    segmentId: "security",
    practice: "audit",
    tags: ["Blockchain", "Security"],
    salary: "$120k - $150k",
    meritReq: "9.0+",
    fullDescription:
      "Architect secure, gas-efficient smart contracts for our new governance voting system. Extensive experience with Solidity and the C23 security protocol is required.",
  },
];

const REQUEST_LISTINGS = [
  {
    id: 1,
    user: "Dev_Alex_99",
    merit: "M:8.2",
    time: "1d ago",
    category: "Security / Gov",
    segmentId: "security",
    practice: "audit",
    quote:
      '"Seeking mentorship for Hub G implementation in highly regulated PH segment."',
    tags: ["IdentityHash", "Mentorship"],
  },
  {
    id: 2,
    user: "Fin_Architect_UK",
    merit: "M:9.5",
    time: "2d ago",
    category: "Financial / Tech",
    segmentId: "financial",
    practice: "data",
    quote:
      '"Looking for a peer review on a custom ledger reconciliation script before pushing to production."',
    tags: ["Code Review", "Ledger"],
  },
  {
    id: 3,
    user: "Agri_Builder_NL",
    merit: "M:5.4",
    time: "3d ago",
    category: "Farm Management",
    segmentId: "farm",
    practice: "hardware",
    quote:
      '"Need assistance troubleshooting a sudden latency spike in IoT sensor payloads across Hub P."',
    tags: ["Troubleshooting", "IoT"],
  },
  {
    id: 4,
    user: "Public_Sector_Lead",
    merit: "M:6.8",
    time: "4d ago",
    category: "Public Segment",
    segmentId: "public",
    practice: "data",
    quote:
      '"Looking for examples of open-data architectures successfully deployed in municipal governments."',
    tags: ["Architecture", "Open Data"],
  },
  {
    id: 5,
    user: "Crypto_Dev_01",
    merit: "M:7.1",
    time: "1w ago",
    category: "Financial / Tech",
    segmentId: "financial",
    practice: "audit",
    quote:
      '"Can someone verify my multi-sig wallet configuration using the new C23 protocols?"',
    tags: ["Security", "Wallets"],
  },
];

const VOLUNTEER_LISTINGS = [
  {
    id: 1,
    cause: "JUST CAUSE",
    urgency: "HIGH URGENCY",
    title: "Open-Source Irrigation Logic",
    initiative: "Agri-Access Initiative",
    location: "Global Impact",
    roles: "Developers / Analysts",
    segmentId: "farm",
    practice: "hardware",
  },
  {
    id: 2,
    cause: "JUST CAUSE",
    urgency: "MEDIUM URGENCY",
    title: "Financial Literacy Modules for Unbanked Regions",
    initiative: "EduFinance NGO",
    location: "LATAM Segment",
    roles: "Educators / Writers",
    segmentId: "financial",
    practice: "all",
  },
  {
    id: 3,
    cause: "JUST CAUSE",
    urgency: "HIGH URGENCY",
    title: "Data Privacy Audit for Refugee Relief Database",
    initiative: "Global Safety Net",
    location: "Remote",
    roles: "Security Auditors",
    segmentId: "security",
    practice: "audit",
  },
  {
    id: 4,
    cause: "COMMUNITY EFFORT",
    urgency: "LOW URGENCY",
    title: "C23 Documentation Translation (Spanish & French)",
    initiative: "UBOS Global Outreach",
    location: "Remote",
    roles: "Translators",
    segmentId: "public",
    practice: "all",
  },
  {
    id: 5,
    cause: "JUST CAUSE",
    urgency: "MEDIUM URGENCY",
    title: "Yield Forecasting Tool for Smallholder Farmers",
    initiative: "Agri-Access Initiative",
    location: "Sub-Saharan Africa",
    roles: "Data Scientists",
    segmentId: "farm",
    practice: "data",
  },
];

export default function CommunityCareerPage() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("JOBS");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSegments, setActiveSegments] = useState([
    "financial",
    "farm",
    "security",
    "public",
  ]);
  const [activePractice, setActivePractice] = useState("all");
  const [visibleCount, setVisibleCount] = useState(3);
  const [expandedJobId, setExpandedJobId] = useState(null);

  // --- HANDLERS ---
  const toggleSegment = (id) => {
    setActiveSegments((prev) =>
      prev.includes(id) ? prev.filter((seg) => seg !== id) : [...prev, id],
    );
    setVisibleCount(3);
    setExpandedJobId(null);
  };

  const handleResetFilters = () => {
    setActiveSegments([]);
    setSearchQuery("");
    setActivePractice("all");
    setVisibleCount(3);
    setExpandedJobId(null);
  };

  const toggleExpandJob = (id) => {
    setExpandedJobId((prev) => (prev === id ? null : id));
  };

  // --- FILTERING LOGIC ---
  const applyFilters = (data) => {
    let result = [...data];

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          (item.title && item.title.toLowerCase().includes(q)) ||
          (item.company && item.company.toLowerCase().includes(q)) ||
          (item.user && item.user.toLowerCase().includes(q)) ||
          (item.quote && item.quote.toLowerCase().includes(q)) ||
          (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(q))),
      );
    }

    if (activeSegments.length > 0) {
      result = result.filter((item) => activeSegments.includes(item.segmentId));
    } else {
      result = [];
    }

    if (activePractice !== "all") {
      result = result.filter(
        (item) => item.practice === activePractice || item.practice === "all",
      );
    }

    return result;
  };

  const processedJobs = useMemo(
    () => applyFilters(JOB_LISTINGS),
    [searchQuery, activeSegments, activePractice],
  );
  const processedRequests = useMemo(
    () => applyFilters(REQUEST_LISTINGS),
    [searchQuery, activeSegments, activePractice],
  );
  const processedVolunteer = useMemo(
    () => applyFilters(VOLUNTEER_LISTINGS),
    [searchQuery, activeSegments, activePractice],
  );

  const currentList =
    activeTab === "JOBS"
      ? processedJobs
      : activeTab === "REQUESTS"
        ? processedRequests
        : processedVolunteer;

  const displayedItems = currentList.slice(0, visibleCount);

  const handleLoadMoreToggle = () => {
    if (visibleCount < currentList.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(3);
      setExpandedJobId(null);
    }
  };

  return (
    <div className="w-full bg-[#F4F5F7] font-instrument-sans text-slate-900 min-h-screen">
      <HeroSection
        tabs={TABS}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setVisibleCount={setVisibleCount}
        setExpandedJobId={setExpandedJobId}
      />

      <section className="py-10 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
          <SidebarSection
            segments={SEGMENTS}
            activeSegments={activeSegments}
            toggleSegment={toggleSegment}
            handleResetFilters={handleResetFilters}
            activePractice={activePractice}
            setActivePractice={setActivePractice}
            setVisibleCount={setVisibleCount}
            setExpandedJobId={setExpandedJobId}
          />

          <FeedSection
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setVisibleCount={setVisibleCount}
            setExpandedJobId={setExpandedJobId}
            activeTab={activeTab}
            displayedItems={displayedItems}
            currentList={currentList}
            visibleCount={visibleCount}
            expandedJobId={expandedJobId}
            toggleExpandJob={toggleExpandJob}
            handleLoadMoreToggle={handleLoadMoreToggle}
          />
        </div>
      </section>
    </div>
  );
}
