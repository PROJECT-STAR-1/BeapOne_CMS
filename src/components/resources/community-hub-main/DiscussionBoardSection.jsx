"use client";

import React, { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import DiscussionSidebar from "@/components/resources/community-hub-main/DiscussionSidebar";
import DiscussionSearchBar from "@/components/resources/community-hub-main/DiscussionSearchBar";
import DiscussionThreadCard from "@/components/resources/community-hub-main/DiscussionThreadCard";
import DiscussionInsightBanner from "@/components/resources/community-hub-main/DiscussionInsightBanner";

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
];

export default function DiscussionBoardSection({ setView }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Discussions");

  // Dynamic Filtering Logic
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
    <div className="w-full bg-[#F4F5F7] py-12 px-6 animate-in fade-in slide-in-from-bottom-8 duration-700 min-h-screen">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">
        {/* LEFT SIDEBAR */}
        <DiscussionSidebar
          categories={DISCUSSION_CATEGORIES}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* MAIN FEED */}
        <div className="flex-1 flex flex-col">
          <DiscussionSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Threads Container */}
          <div className="flex flex-col gap-4 mb-10 min-h-[300px]">
            {filteredThreads.length > 0 ? (
              filteredThreads.map((thread) => (
                <DiscussionThreadCard key={thread.id} thread={thread} />
              ))
            ) : (
              // Empty State
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm text-slate-500 font-instrument-sans flex flex-col items-center justify-center">
                <Search size={40} className="text-slate-300 mb-4" />
                <p className="text-lg font-bold text-slate-700">
                  No discussions found
                </p>
                <p className="text-sm mt-1">
                  Try adjusting your search or category filter.
                </p>
              </div>
            )}
          </div>

          {/* Load More Button */}
          {filteredThreads.length > 0 && (
            <div className="text-center mb-16">
              <button className="bg-[#1B1464] text-white px-10 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity font-instrument-sans shadow-md">
                LOAD OLDER THREADS
              </button>
            </div>
          )}

          <DiscussionInsightBanner />
        </div>
      </div>

      {/* BACK TO MAIN PAGE BUTTON */}
      <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-gray-200 flex justify-center">
        <button
          onClick={() => {
            setView("hub");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-slate-500 hover:text-[#1B1464] font-bold text-sm transition-colors font-instrument-sans group">
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Return to Main Community Hub
        </button>
      </div>
    </div>
  );
}
