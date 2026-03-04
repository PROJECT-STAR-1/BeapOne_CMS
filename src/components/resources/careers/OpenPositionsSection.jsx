"use client";

import React, { useState } from "react";
import { Search, ChevronDown, ArrowRight } from "lucide-react";

const OPEN_POSITIONS = [
  {
    id: 1,
    title: "Senior Financial Compliance Engineer",
    details: "Full-Time | Remote (EMEA/APAC preferred)",
    tag: "Hub O (Financial)",
    themeColor: "text-[#1B1464]",
    borderColor: "!border-l-[#1B1464]",
  },
  {
    id: 2,
    title: "Data Privacy Analyst",
    details: "Contract | On-site (North America)",
    tag: "DataSecure Inc.",
    themeColor: "text-[#00C853]",
    borderColor: "!border-l-[#00C853]",
  },
  {
    id: 3,
    title: "Cybersecurity Specialist",
    details: "Part-Time | Hybrid",
    tag: "SecureTech",
    themeColor: "text-[#D50000]",
    borderColor: "!border-l-[#D50000]",
  },
  {
    id: 4,
    title: "Blockchain Developer",
    details: "Freelance | Remote",
    tag: "Crypto Innovations",
    themeColor: "text-[#FBC02D]",
    borderColor: "!border-l-[#FBC02D]",
  },
];

export default function OpenPositionsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    "Filter by UBOS Hub / Category",
  );

  // Dynamically extract categories from positions
  const categories = [
    "Filter by UBOS Hub / Category",
    ...new Set(OPEN_POSITIONS.map((job) => job.tag)),
  ];

  // Filtering Logic
  const filteredPositions = OPEN_POSITIONS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.details.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "Filter by UBOS Hub / Category" ||
      job.tag === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12 tracking-tight font-instrument-sans">
          Current Open Positions
        </h2>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 max-w-5xl mx-auto">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by Title, Keyword, or Location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 text-black placeholder:text-gray-400 rounded-lg py-3.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-all font-instrument-sans"
            />
            <Search
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
          <div className="relative w-full md:w-64">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-white border border-gray-200 text-black rounded-lg py-3.5 pl-4 pr-10 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#1B1464] font-instrument-sans cursor-pointer">
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 text-black pointer-events-none"
              size={16}
            />
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4 mb-16 max-w-5xl mx-auto min-h-[300px]">
          {filteredPositions.length > 0 ? (
            filteredPositions.map((job) => (
              <div
                key={job.id}
                className={`bg-white border border-gray-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6 border-l-[6px] ${job.borderColor}`}>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2 font-instrument-sans">
                    {job.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-instrument-sans">
                    {job.details}
                  </p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span
                    className={`text-sm font-bold font-instrument-sans ${job.themeColor}`}>
                    {job.tag}
                  </span>
                  <button className="flex items-center gap-1 text-sm font-bold text-black hover:opacity-70 transition-opacity font-instrument-sans">
                    Apply <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-slate-500 font-instrument-sans">
              No open positions found matching your search criteria.
            </div>
          )}
        </div>

        {/* Fallback CTA */}
        <div className="text-center mb-14">
          <p className="text-black text-lg font-semibold mb-6 font-instrument-sans">
            Can't find your ideal role? Join our talent network for future
            opportunities.
          </p>
          <button className="bg-[#1B1464] text-white px-8 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-opacity font-instrument-sans">
            Join our Talent Network
          </button>
        </div>

        {/* Newsletter Box */}
        <div className="max-w-4xl mx-auto bg-[#1B1464] rounded-3xl p-10 md:p-14 text-center text-white shadow-xl relative overflow-hidden">
          {/* Main Content */}
          <div className="relative z-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4 opacity-80 font-instrument-sans">
              NEWSLETTER
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-instrument-sans">
              Stay Up To Date
            </h3>
            <p className="text-indigo-100 text-sm md:text-base mb-8 max-w-lg mx-auto font-instrument-sans">
              Receive latest updates, news and special offers in your mailbox
            </p>

            {/* Unified Search Input and Subscribe Button */}
            <form className="flex flex-row items-center bg-transparent border border-white/30 rounded-lg p-1 max-w-2xl mx-auto backdrop-blur-sm shadow-inner">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-grow bg-transparent text-white placeholder:text-indigo-200/70 border-none focus:outline-none focus:ring-0 px-4 py-2 text-sm font-instrument-sans min-w-0"
              />
              <button
                type="submit"
                className="bg-[#C2C9F0] text-[#1B1464] px-8 py-2.5 rounded-md font-bold text-sm hover:bg-white transition-colors font-instrument-sans whitespace-nowrap flex-shrink-0">
                Subscribe
              </button>
            </form>
          </div>

          {/* Decorative Background Grid (Bottom aligned) */}
          <div className="absolute bottom-0 left-0 w-full h-16 border-t border-white/10 flex pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex-1 border-r border-white/10 last:border-r-0"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
