"use client";

import { useState, useMemo } from "react";
import { Search, ArrowRight } from "lucide-react";
import UbosApiSection from "@/components/appsIntegration/UbosApiSection";

const filters = [
  "All",
  "Finance (Hub O)",
  "Communication (Hub C)",
  "Storage (Hub G)",
  "CRM (Hub H)",
  "HR & Talent (Hub C)",
];

const integrations = [
  {
    title: "Financial Sync",
    description:
      "Sync General Ledger (O13), Accounts Payable (O11), and Accounts Receivable (O12) automatically with your accounting software.",
    hub: "Finance (Hub O)",
    tag: "Hub O",
    color: "indigo",
  },
  {
    title: "Real-time Messaging",
    description:
      "Receive instant alerts and project updates directly in your chat app.",
    hub: "Communication (Hub C)",
    tag: "Hub G / Hub C",
    color: "emerald",
  },
  {
    title: "Sales & CRM Data",
    description:
      "Bi-directional synchronization with CRM tools across your pipeline.",
    hub: "CRM (Hub H)",
    tag: "Hub H",
    color: "red",
  },
  {
    title: "Workforce & Payroll",
    description:
      "Seamlessly pull employee data for payroll processing.",
    hub: "HR & Talent (Hub C)",
    tag: "Hub C",
    color: "amber",
  },
  {
    title: "Cloud Document Access",
    description:
      "Link and sync external files directly within Document Management.",
    hub: "Storage (Hub G)",
    tag: "Hub G",
    color: "emerald",
  },
  {
    title: "Task Migration & Sync",
    description:
      "Synchronize task data with external tools during transition.",
    hub: "Communication (Hub C)",
    tag: "Hub K / Hub N",
    color: "indigo",
  },
  {
    title: "E-commerce Platforms",
    description:
      "Connect sales data from major e-commerce platforms.",
    hub: "Finance (Hub O)",
    tag: "Hub L / Hub M",
    color: "amber",
  },
  {
    title: "Legal Documents",
    description:
      "Secure integration with legal repositories to manage contracts.",
    hub: "HR & Talent (Hub C)",
    tag: "Hub C",
    color: "red",
  },
];

const colorStyles = {
  indigo: "border-indigo-500",
  emerald: "border-emerald-500",
  red: "border-red-500",
  amber: "border-amber-500",
};

const buttonStyles = {
  indigo: "bg-indigo-600 hover:bg-indigo-700",
  emerald: "bg-emerald-600 hover:bg-emerald-700",
  red: "bg-red-600 hover:bg-red-700",
  amber: "bg-amber-500 hover:bg-amber-600",
};

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredIntegrations = useMemo(() => {
    return integrations.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      const matchesFilter =
        activeFilter === "All" || item.hub === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
    <section className="bg-[#1B1464] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Apps & Integrations Marketplace</h1>
          <p className="mt-2 text-sm text-gray-300">
            Resources / <span className="text-indigo-300">Apps & Integrations Marketplace</span>
          </p>
        </div>
      </section>

      {/* FLOATING SEARCH CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 -mt-16 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          {/* SEARCH */}
          <div className="relative mb-6">
            <Search
              size={18}
              className="absolute left-4 top-3.5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search for integrations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION TITLE */}
        <h2 className="text-3xl font-semibold mt-14 mb-8 text-gray-900">
          Essential Third-Party Integrations
        </h2>

        {/* GRID */}
        {filteredIntegrations.length === 0 ? (
          <p className="text-gray-500">No integrations found.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredIntegrations.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 ${colorStyles[item.color]} p-6 flex flex-col justify-between`}
              >
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <span className="inline-block text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <button
                  className={`mt-6 text-sm font-medium text-white py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 ${buttonStyles[item.color]}`}
                >
                  Connect
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

   
     <section >
         <UbosApiSection />
     </section>
   
    </div>
    
  );
}
