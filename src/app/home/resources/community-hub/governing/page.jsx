"use client";

import React, { useState } from "react";
import HeroSection from "@/components/resources/community-hub/governing/HeroSection";
import StatsSection from "@/components/resources/community-hub/governing/StatsSection";
import LedgerSection from "@/components/resources/community-hub/governing/LedgerSection";
import SidebarSection from "@/components/resources/community-hub/governing/SidebarSection";

// --- DYNAMIC DATA CONSTANTS ---

const ACTIVE_CASES = [
  {
    id: "CASE-882",
    severity: "High",
    severityColor: "text-[#E65100] bg-[#FFF3E0]", // Orange
    category: "TECHNICAL COMPLIANCE",
    title: "Data Integrity Discrepancy (Hub O)",
    desc: "Potential manipulation of ledger entry timestamps in the ES regional segment.",
    status: "In Investigation",
    statusColor: "bg-[#FFB300]",
    fullDetails:
      "Automated anomaly detection flagged 14 distinct transactions within the ES regional segment where the settlement timestamp preceded the initiation timestamp by 400ms. Council auditors are currently pulling node logs to determine if this is a latency artifact or deliberate ledger manipulation. Immediate freeze on affected wallets has been enacted.",
  },
  {
    id: "CASE-883",
    severity: "Medium",
    severityColor: "text-[#1976D2] bg-[#E3F2FD]", // Blue
    category: "USER ERROR",
    title: "Incorrect Data Entry (Sales Team)",
    desc: "Mismatched sales figures submitted in monthly reports.",
    status: "Under Review",
    statusColor: "bg-[#FFB300]",
    fullDetails:
      "The Q3 aggregated sales report submitted by the Tier 2 integration team contains an overflow error resulting in a €45,000 discrepancy. The data pipeline is currently under review by the Hub O architects to trace the source of the invalid cast. Preliminary findings suggest a manual CSV upload bypassed standard validation hooks.",
  },
  {
    id: "CASE-884",
    severity: "Low",
    severityColor: "text-[#388E3C] bg-[#E8F5E9]", // Green
    category: "SYSTEM ALERT",
    title: "Outdated Software Version Detected",
    desc: "System running on a version that is no longer supported, posing security risks.",
    status: "Scheduled for Update",
    statusColor: "bg-[#FFB300]",
    fullDetails:
      "Three active validation nodes in the Hub G cluster are currently running C23.v3.9, which was deprecated last week. Node operators have been issued a final 48-hour warning before automatic network isolation is enforced.",
  },
  {
    id: "CASE-885",
    severity: "Medium",
    severityColor: "text-[#1976D2] bg-[#E3F2FD]",
    category: "POLICY VIOLATION",
    title: "Improper Token Staking (Hub A)",
    desc: "Developer account staked tokens beyond the allowed segment limits.",
    status: "Under Review",
    statusColor: "bg-[#FFB300]",
    fullDetails:
      "A developer in Hub A bypassed the front-end limiters and staked tokens via direct contract calls exceeding the 50k limit. Investigation ongoing to patch the contract vulnerability.",
  },
  {
    id: "CASE-886",
    severity: "High",
    severityColor: "text-[#E65100] bg-[#FFF3E0]",
    category: "SECURITY BREACH",
    title: "API Key Leak Exposure",
    desc: "Public GitHub repository found containing live production API keys.",
    status: "In Investigation",
    statusColor: "bg-[#FFB300]",
    fullDetails:
      "Automated scanners detected Hub O production keys in a public repo. Keys have been revoked immediately, but access logs are being audited for unauthorized queries over the last 48 hours.",
  },
];

const RESOLVED_CASES = [
  {
    id: "CASE-880",
    severity: "High",
    severityColor: "text-[#E65100] bg-[#FFF3E0]",
    category: "SECURITY BREACH",
    title: "Unauthorized Access Attempt (Hub G)",
    desc: "Multiple failed login attempts detected from unrecognized IP addresses. IP range blocked.",
    status: "Resolved",
    statusColor: "bg-[#00C853]",
    fullDetails:
      "A brute-force dictionary attack was detected originating from a proxy network targeting the admin endpoints of Hub G. The Zero-Knowledge proof threshold caught and halted the intrusion at layer 2. The offending IP blocks have been permanently blacklisted across all UBOS modules.",
  },
  {
    id: "CASE-881",
    severity: "Low",
    severityColor: "text-[#388E3C] bg-[#E8F5E9]",
    category: "POLICY UPDATE",
    title: "Obsolete Terms of Service Document",
    desc: "Old ToS document was still linked in the footer. Replaced with v2.4.",
    status: "Resolved",
    statusColor: "bg-[#00C853]",
    fullDetails:
      "A community report highlighted that the footer link on the public-facing directory routed to ToS v2.1. The routing table was updated via a hotfix to point to the correct v2.4 document. Audited and closed.",
  },
  {
    id: "CASE-879",
    severity: "Medium",
    severityColor: "text-[#1976D2] bg-[#E3F2FD]",
    category: "USER ERROR",
    title: "Accidental Liquidity Pool Drain",
    desc: "User mistakenly withdrew all liquidity from the test pool.",
    status: "Resolved",
    statusColor: "bg-[#00C853]",
    fullDetails:
      "Test pool liquidity was drained due to a misunderstood UI prompt. UI has been updated to require explicit confirmation typing, and test funds have been restored.",
  },
  {
    id: "CASE-878",
    severity: "Low",
    severityColor: "text-[#388E3C] bg-[#E8F5E9]",
    category: "SYSTEM ALERT",
    title: "Downtime in Reporting API",
    desc: "Reporting API was down for 15 minutes during scheduled maintenance.",
    status: "Resolved",
    statusColor: "bg-[#00C853]",
    fullDetails:
      "Routine maintenance exceeded the planned window by 15 minutes. Node operators were notified. No data loss occurred.",
  },
];

const MEMBERS = [
  { name: "Dr. Elena Vance", role: "ETHICS SUPERVISOR", merit: "M:9.8" },
  { name: "Dr. Elena Vance", role: "ETHICS SUPERVISOR", merit: "M:9.8" },
  { name: "Mr. Thomas Reed", role: "RESEARCH ANALYST", merit: "M:8.3" },
  { name: "Ms. Clara Wu", role: "DATA SCIENTIST", merit: "M:7.5" },
];

export default function CommunityGovernancePage() {
  // --- STATE ---
  const [ledgerTab, setLedgerTab] = useState("ACTIVE"); // 'ACTIVE' | 'RESOLVED'
  const [expandedCaseId, setExpandedCaseId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  // --- DERIVED DATA ---
  const currentList = ledgerTab === "ACTIVE" ? ACTIVE_CASES : RESOLVED_CASES;
  const displayedCases = currentList.slice(0, visibleCount);

  // --- HANDLERS ---
  const toggleCaseDetails = (id) => {
    setExpandedCaseId((prev) => (prev === id ? null : id));
  };

  const handleTabSwitch = (tab) => {
    setLedgerTab(tab);
    setVisibleCount(3); // Reset pagination on tab switch
    setExpandedCaseId(null); // Close any open accordions
  };

  const handleLoadMoreToggle = () => {
    if (visibleCount < currentList.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(3);
      setExpandedCaseId(null);
    }
  };

  return (
    <div className="w-full bg-[#F4F5F7] font-instrument-sans antialiased text-slate-900 min-h-screen">
      <HeroSection />

      <section className="py-8 px-6">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8">
          <main className="xl:col-span-8 flex flex-col gap-6">
            <StatsSection />
            <LedgerSection
              ledgerTab={ledgerTab}
              handleTabSwitch={handleTabSwitch}
              displayedCases={displayedCases}
              expandedCaseId={expandedCaseId}
              toggleCaseDetails={toggleCaseDetails}
              currentListLength={currentList.length}
              visibleCount={visibleCount}
              handleLoadMoreToggle={handleLoadMoreToggle}
            />
          </main>

          <SidebarSection members={MEMBERS} />
        </div>
      </section>
    </div>
  );
}
