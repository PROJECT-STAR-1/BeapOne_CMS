"use client";

import React, { useState } from "react";
import { ArrowRight, Search, ChevronDown } from "lucide-react";

const PRESS_RELEASES = [
  {
    id: 1,
    year: "2026",
    topicCategory: "Product Launch",
    month: "FEB",
    day: "15",
    title: "UBOS Completes Batch 2 Rollout: Farm Hub P Goes Live Globally",
    topic: "Topic: Product Launch | Hub: P (Verticals)",
    action: "Apply",
    colorTheme: "text-[#1B1464]",
    borderColor: "!border-l-[#1B1464]",
  },
  {
    id: 2,
    year: "2026",
    topicCategory: "Product Update",
    month: "MAR",
    day: "22",
    title: "New Features Added to Farm Hub P: Enhanced User Experience",
    topic: "Topic: Product Update | Hub: P (Verticals)",
    action: "View Details",
    colorTheme: "text-[#00C853]",
    borderColor: "!border-l-[#00C853]",
  },
  {
    id: 3,
    year: "2026",
    topicCategory: "Milestone",
    month: "APR",
    day: "10",
    title: "Farm Hub P Achieves 100,000 Active Users",
    topic: "Topic: User Milestone | Hub: P (Verticals)",
    action: "Celebrate",
    colorTheme: "text-[#D50000]",
    borderColor: "!border-l-[#D50000]",
  },
  {
    id: 4,
    year: "2026",
    topicCategory: "User Feedback",
    month: "MAY",
    day: "05",
    title: "Farm Hub P Receives Positive Feedback from Users",
    topic: "Topic: User Feedback | Hub: P (Verticals)",
    action: "Read Testimonials",
    colorTheme: "text-[#FBC02D]",
    borderColor: "!border-l-[#FBC02D]",
  },
  {
    id: 5,
    year: "2025",
    topicCategory: "Corporate",
    month: "NOV",
    day: "12",
    title: "BEAPOne Announces Strategic Expansion into APAC Region",
    topic: "Topic: Corporate | Hub: Global",
    action: "Read More",
    colorTheme: "text-[#1B1464]",
    borderColor: "!border-l-[#1B1464]",
  },
  {
    id: 6,
    year: "2025",
    topicCategory: "Product Update",
    month: "OCT",
    day: "08",
    title: "Hub O Financial Module Receives Global SOC2 Certification",
    topic: "Topic: Product Update | Hub: O (Financial)",
    action: "View Details",
    colorTheme: "text-[#00C853]",
    borderColor: "!border-l-[#00C853]",
  },
];

export default function PressReleasesSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("Filter by Year");
  const [selectedTopic, setSelectedTopic] = useState("Filter by Topic");
  const [showAll, setShowAll] = useState(false);

  // Dynamic Filtering Logic
  const filteredReleases = PRESS_RELEASES.filter((release) => {
    const matchesSearch =
      release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      release.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear =
      selectedYear === "Filter by Year" || release.year === selectedYear;
    const matchesTopic =
      selectedTopic === "Filter by Topic" ||
      release.topicCategory === selectedTopic;

    return matchesSearch && matchesYear && matchesTopic;
  });

  // Limit items if "View Full Archive" is not clicked
  const displayedReleases = showAll
    ? filteredReleases
    : filteredReleases.slice(0, 4);

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black tracking-tight font-instrument-sans">
            Press Releases & Official Announcements
          </h2>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by title, hub, or keyword...."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 text-black placeholder:text-gray-400 rounded-lg py-3 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-all font-instrument-sans"
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-48">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-white border border-gray-200 text-black rounded-lg py-3 pl-4 pr-10 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#1B1464] font-instrument-sans cursor-pointer">
                <option value="Filter by Year">Filter by Year</option>
                <option value="2026">2026</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
                size={16}
              />
            </div>
            <div className="relative w-full md:w-48">
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full bg-white border border-gray-200 text-black rounded-lg py-3 pl-4 pr-10 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#1B1464] font-instrument-sans cursor-pointer">
                <option value="Filter by Topic">Filter by Topic</option>
                <option value="Product Launch">Product Launch</option>
                <option value="Product Update">Product Update</option>
                <option value="Corporate">Corporate</option>
                <option value="Milestone">Milestone</option>
                <option value="User Feedback">User Feedback</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
                size={16}
              />
            </div>
          </div>
        </div>

        {/* Press Release List */}
        <div className="space-y-4 mb-10 min-h-[300px]">
          {displayedReleases.length > 0 ? (
            displayedReleases.map((release) => (
              <div
                key={release.id}
                className={`bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-l-[6px] ${release.borderColor}`}>
                {/* Date & Content */}
                <div className="flex items-start gap-6">
                  <div className="text-center min-w-[50px]">
                    <div
                      className={`text-sm font-bold font-instrument-sans ${release.colorTheme}`}>
                      {release.month}
                    </div>
                    <div className="text-2xl font-bold text-black font-instrument-sans">
                      {release.day}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black mb-1 font-instrument-sans">
                      {release.title}
                    </h3>
                    <p className="text-sm text-slate-500 font-instrument-sans">
                      {release.topic}
                    </p>
                  </div>
                </div>

                {/* Action Link */}
                <button
                  className={`flex items-center gap-1 text-sm font-bold whitespace-nowrap font-instrument-sans transition-opacity hover:opacity-70 ${release.colorTheme}`}>
                  {release.action} <ArrowRight size={16} />
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-slate-500 font-instrument-sans">
              No press releases found matching your criteria.
            </div>
          )}
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#1B1464] text-white px-16 py-2.5 min-w-[280px] rounded-full font-bold text-sm hover:bg-[#0a0635] transition-colors font-instrument-sans">
            {showAll ? "Show Less" : "View Full Archive"}
          </button>
        </div>
      </div>
    </section>
  );
}
