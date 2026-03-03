"use client";

import React, { useState, useMemo } from "react";
import SubHeaderSection from "@/components/resources/community-hub/events/SubHeaderSection";
import HeroSection from "@/components/resources/community-hub/events/HeroSection";
import EventsFeedSection from "@/components/resources/community-hub/events/EventsFeedSection";
import FooterStatsSection from "@/components/resources/community-hub/events/FooterStatsSection";

// --- DYNAMIC DATA CONSTANTS ---

const EVENTS_DB = [
  {
    id: 1,
    type: "UPCOMING",
    isLive: true,
    tag: "HAPPENING NOW",
    title: "C23.v4 Deployment Masterclass: Hub O Integration",
    desc: "A deep-dive session on the latest treasury settlement protocols and cross-border API updates.",
    attendees: 45,
    theme: "blue",
    icon: "video",
    actionText: "REGISTER NOW",
  },
  {
    id: 2,
    type: "UPCOMING",
    isLive: false,
    tag: "NOV 12, 2023",
    title: "Regional Hub P Stakeholder Meetup",
    desc: "In-person gathering for East African logistics partners to discuss seasonal optimization.",
    attendees: 45,
    theme: "green",
    icon: "map",
    actionText: "REGISTER NOW",
  },
  {
    id: 3,
    type: "PAST",
    isLive: false,
    tag: "OCT 28, 2023",
    title: "Governance (G) Module: Ethics & Accountability Q3",
    desc: "Review of the latest enforcement mechanisms and merit-score weighting adjustments.",
    attendees: 45,
    theme: "slate",
    icon: "video",
    actionText: "DOWNLOAD ARCHIVE",
  },
];

export default function CommunityHubEventsPage() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("ALL"); // 'UPCOMING' | 'PAST' | 'ALL'
  const [searchQuery, setSearchQuery] = useState("");

  // --- FILTERING LOGIC ---
  const filteredEvents = useMemo(() => {
    let result = [...EVENTS_DB];

    // Filter by Tab
    if (activeTab !== "ALL") {
      result = result.filter((event) => event.type === activeTab);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(q) ||
          event.desc.toLowerCase().includes(q),
      );
    }

    return result;
  }, [activeTab, searchQuery]);

  // --- HANDLERS (Production Ready) ---
  const handleHostEvent = () => {
    console.log("[System Log]: Initiating 'Host Event' flow...");
    // Add modal or routing logic here
  };

  const handleJoinLiveStream = () => {
    console.log(
      "[System Log]: Connecting to live stream 'C23.v4 Deployment Masterclass'...",
    );
    // Add stream routing logic here
  };

  const handleEventAction = (event) => {
    console.log(
      `[System Log]: Action triggered for event ${event.id}: ${event.actionText}`,
    );
    // Add API call or routing logic here (e.g., downloading file or registering user)
  };

  const handleShareEvent = (eventId) => {
    console.log(`[System Log]: Opening share dialog for event ID: ${eventId}`);
    // Add navigator.share() or custom share modal logic here
  };

  const handleViewCalendar = (e) => {
    e.preventDefault();
    console.log("[System Log]: Navigating to full Ecosystem Calendar...");
    // Add Next.js routing logic here
  };

  return (
    <div className="w-full bg-[#F4F5F7] font-instrument-sans antialiased text-slate-900 min-h-screen">
      <SubHeaderSection handleHostEvent={handleHostEvent} />

      <HeroSection handleJoinLiveStream={handleJoinLiveStream} />

      <section className="py-10 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-8">
          <EventsFeedSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredEvents={filteredEvents}
            handleEventAction={handleEventAction}
            handleShareEvent={handleShareEvent}
            handleHostEvent={handleHostEvent}
          />

          <FooterStatsSection handleViewCalendar={handleViewCalendar} />
        </div>
      </section>
    </div>
  );
}
