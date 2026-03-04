"use client";

import React from "react";
import {
  Search,
  Users,
  Globe,
  Database,
  Box,
  MoreVertical,
  ShieldCheck,
  Activity,
} from "lucide-react";

export default function ClusterFeedSection({
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
  filteredClusters,
  openManageModal,
}) {
  return (
    <main className="xl:col-span-8 flex flex-col gap-6 font-instrument-sans antialiased">
      {/* Search & Stats Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={16}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search clusters or leaders..."
            className="w-full bg-white border border-gray-200 text-slate-800 placeholder:text-slate-400 rounded-full py-3.5 pl-11 pr-5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-shadow shadow-sm font-medium"
          />
        </div>

        {/* Top Stats Box */}
        <div className="flex items-center bg-white border border-gray-200 rounded-2xl py-2 px-6 shadow-sm flex-shrink-0 divide-x divide-gray-100">
          <div className="flex flex-col items-center pr-6">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
              TOTAL CLUSTERS
            </span>
            <span className="text-lg font-extrabold text-slate-900 leading-none">
              12
            </span>
          </div>
          <div className="flex flex-col items-center pl-6">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
              ACTIVE LEADS
            </span>
            <span className="text-lg font-extrabold text-slate-900 leading-none">
              48
            </span>
          </div>
        </div>
      </div>

      {/* Active Liaisons Header Row */}
      <div className="flex items-center justify-between mt-2 mb-2">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm tracking-tight uppercase">
          <Users size={18} strokeWidth={2.5} />
          ACTIVE LIAISONS
        </div>

        {/* View Mode Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewMode("grid")}
            title="Grid View"
            aria-label="Grid View"
            className={`p-2 rounded-xl transition-colors border ${
              viewMode === "grid"
                ? "bg-white border-gray-200 text-[#1B1464] shadow-sm"
                : "bg-transparent border-transparent text-slate-400 hover:text-slate-700"
            }`}
          >
            <Globe size={18} />
          </button>
          <button
            onClick={() => setViewMode("list")}
            title="List View"
            aria-label="List View"
            className={`p-2 rounded-xl transition-colors border ${
              viewMode === "list"
                ? "bg-white border-gray-200 text-[#1B1464] shadow-sm"
                : "bg-transparent border-transparent text-slate-400 hover:text-slate-700"
            }`}
          >
            <Database size={18} />
          </button>
        </div>
      </div>

      {/* Clusters Grid */}
      <div
        className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
      >
        {filteredClusters?.map((cluster) => (
          <div
            key={cluster.id}
            className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow relative"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-[#F0F4FF] text-[#1B1464] rounded-xl flex items-center justify-center shadow-sm">
                <Box size={20} strokeWidth={2.5} />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  ID: {cluster.id}
                </span>
                <button className="text-slate-400 hover:text-slate-800 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>

            {/* Title & Hub */}
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#1B1464] tracking-tight mb-1">
                {cluster.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                {cluster.hub}
              </p>
            </div>

            {/* Leaders List */}
            <div className="space-y-2 mb-6">
              {/* Cluster Head */}
              <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                  <div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                      CLUSTER HEAD
                    </div>
                    <div className="text-xs font-bold text-slate-900 tracking-tight">
                      {cluster.head}
                    </div>
                  </div>
                </div>
                <ShieldCheck
                  size={16}
                  className="text-[#1B1464]"
                  strokeWidth={2.5}
                />
              </div>

              {/* Deputy Leader */}
              <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl p-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                  <div>
                    <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                      DEPUTY LEADER
                    </div>
                    <div className="text-xs font-bold text-slate-900 tracking-tight">
                      {cluster.deputy}
                    </div>
                  </div>
                </div>
                <Users size={16} className="text-[#1B1464]" strokeWidth={2.5} />
              </div>
            </div>

            {/* Footer Stats */}
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <Database size={10} /> RESOURCES
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {cluster.resources}
                </div>
              </div>
              <div className="w-32 text-right">
                <div className="flex justify-between items-end mb-1.5">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <Activity size={10} /> HEALTH SCORE
                  </span>
                  <span className="text-xs font-bold text-slate-900 leading-none">
                    {cluster.healthScore}%
                  </span>
                </div>
                <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${cluster.healthColor} rounded-full`}
                    style={{ width: `${cluster.healthScore}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={() => openManageModal(cluster)}
              className="w-full mt-auto bg-slate-50 hover:bg-slate-100 border border-gray-100 text-slate-900 text-[10px] font-bold uppercase tracking-widest py-3.5 rounded-xl transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1464]"
            >
              MANAGE SUB-GROUP
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
