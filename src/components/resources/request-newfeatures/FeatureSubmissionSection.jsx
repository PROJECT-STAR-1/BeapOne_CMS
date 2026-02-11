"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

const FEATURE_REQUEST = {
  id: "87459",
  title: "Automated Tax Compliance for LATAM Entities (Planned)",
  hub: "Hub: O",
  votes: 145,
  status: "Planned",
  statusColor: "bg-[#E6F4EA] text-[#1E8E3E]", // Light Green
  voteBtnColor: "bg-[#D50000] text-white", // Red
};

export default function FeatureSubmissionSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative z-20 px-6 py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-black mb-2 tracking-tight">
              Submit Your Feature Idea
            </h2>
            <p className="text-slate-500 text-sm">
              Be precise! Your idea will be routed to the appropriate Hub
              Development team (Hub O, K, P, etc.).
            </p>
          </div>

          <div className="w-full lg:w-auto flex-1 max-w-md">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search ideas by Hub or Keyword"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F5F5F5] text-black placeholder:text-gray-500 rounded-full py-3 pl-6 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-all border border-transparent"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-black transition-colors">
                <Send size={18} />
              </button>
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="text-black">Status:</span>
              <span className="px-3 py-1 rounded-full bg-[#E6F4EA] text-[#1E8E3E]">
                Planned
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FCE8E6] text-[#C5221F]">
                In Review
              </span>
              <span className="px-3 py-1 rounded-full bg-[#E0E0E0] text-[#616161]">
                All Open
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Submission Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Feature Title (Problem/Solution Summary)
              </label>
              <input
                type="text"
                placeholder="Select Your Country / Region"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Target UBOS Hub
              </label>
              <input
                type="text"
                placeholder="Financial Management (Hub O)"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Detailed Description & Benefit
              </label>
              <textarea
                rows={6}
                placeholder="Enter message here"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm resize-none"></textarea>
            </div>

            <button
              type="button"
              className="bg-[#1B1464] text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
              Submit Idea
            </button>
          </form>

          {/* Existing Feature Card Example */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 h-fit shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-black leading-tight max-w-[80%]">
                {FEATURE_REQUEST.title}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${FEATURE_REQUEST.statusColor}`}>
                {FEATURE_REQUEST.status}
              </span>
            </div>
            <p className="text-slate-500 text-sm mb-6">
              {FEATURE_REQUEST.hub} | ID: {FEATURE_REQUEST.id}
            </p>
            <div className="border-t border-gray-100 pt-6">
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold hover:opacity-90 transition-opacity ${FEATURE_REQUEST.voteBtnColor}`}>
                {FEATURE_REQUEST.votes} Votes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
