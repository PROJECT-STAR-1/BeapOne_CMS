"use client";

import { useState, useMemo } from "react";
import {
  FileText,
  Database,
  Code2,
  Smartphone,
  Workflow,
  Leaf,
  Search,
  ChevronDown,
} from "lucide-react";

const resourcesData = [
  {
    id: 1,
    title: "Multi-Currency GL Compliance Guide",
    description:
      "Technical manual for O2 and O13 reporting across EMEA and APAC jurisdictions.",
    type: "Guide (PDF)",
    hub: "Financial (O)",
    category: "Financial",
    contentType: "Guide",
    icon: FileText,
    color: "border-indigo-500 text-indigo-600",
  },
  {
    id: 2,
    title: "Project Resource Allocation Template",
    description:
      "Importable CSV/Excel template for K10 resource planning and utilization tracking.",
    type: "Template (CSV)",
    hub: "Project (K)",
    category: "Project",
    contentType: "Template",
    icon: Database,
    color: "border-emerald-500 text-emerald-600",
  },
  {
    id: 3,
    title: "UBOS Core API SDK (v2.1)",
    description:
      "Official Python/Node.js SDK for developing custom integrations via the G1 API endpoint.",
    type: "Software (SDK)",
    hub: "Core Systems (G)",
    category: "Core Systems",
    contentType: "Software",
    icon: Code2,
    color: "border-red-500 text-red-600",
  },
  {
    id: 4,
    title: "UBOS Mobile Task App",
    description:
      "Download the latest version for iOS and Android to manage tasks (Hub N) and approvals (C6).",
    type: "Mobile App",
    hub: "Core Systems (G)",
    category: "Core Systems",
    contentType: "Mobile App",
    icon: Smartphone,
    color: "border-yellow-500 text-yellow-600",
  },
  {
    id: 5,
    title: "Standard BPC Workflow Template",
    description:
      "Pre-configured BPC (C6) template for large-scale multi-subsidiary organizational structure (Hub B).",
    type: "Template (JSON)",
    hub: "Solution (S)",
    category: "Solution",
    contentType: "Template",
    icon: Workflow,
    color: "border-indigo-600 text-indigo-700",
  },
  {
    id: 6,
    title: "Aquaculture Production Field Guide",
    description:
      "Detailed P9-2 manual covering batch tracking, feed calculations, and environmental monitoring sensor integration.",
    type: "Guide (PDF)",
    hub: "Verticals (P)",
    category: "Verticals",
    contentType: "Guide",
    icon: Leaf,
    color: "border-emerald-500 text-emerald-600",
  },
];

export default function Page() {
  const [search, setSearch] = useState("");
const [selectedHub, setSelectedHub] = useState("All Hubs");
const [selectedType, setSelectedType] = useState("All Types");


 const hubs = ["All Hubs", ...new Set(resourcesData.map((r) => r.category))];
const types = ["All Types", ...new Set(resourcesData.map((r) => r.contentType))];


  const filteredResources = useMemo(() => {
    return resourcesData.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase());

const matchesHub =
  selectedHub === "All Hubs" || resource.category === selectedHub;

const matchesType =
  selectedType === "All Types" || resource.contentType === selectedType;

      return matchesSearch && matchesHub && matchesType;
    });
  }, [search, selectedHub, selectedType]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-indigo-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Official UBOS Downloads & Resource Library
        </h1>
        <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
          Access technical documentation, implementation templates (Hub S),
          API SDKs, and mobile applications.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Documentation, Templates, and SDKs
        </h2>

        {/* SEARCH & FILTERS */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by title, hub, or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Hub Filter */}
          <div className="relative">
            <select
              value={selectedHub}
              onChange={(e) => setSelectedHub(e.target.value)}
              className="appearance-none px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
            >
              {hubs.map((hub) => (
                <option key={hub}>{hub}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>

          {/* Type Filter */}
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="appearance-none px-4 py-3 pr-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
            >
              {types.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <div
                  key={resource.id}
                  className={`bg-white rounded-xl shadow-sm border-t-4 ${resource.color} p-6 hover:shadow-md transition`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className={`w-6 h-6 ${resource.color}`} />
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    Type: {resource.type} | Hub: {resource.hub}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No resources found.
            </p>
          )}
        </div>
      </div>

      {/* SUPPORT SECTION */}
      <div className="bg-gray-200 py-16 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Can't Find What You Need?
        </h2>
        <p className="text-gray-600 mb-6">
          If a resource is missing or requires clarification, please contact
          our support team.
        </p>
        <button className="bg-indigo-900 text-white px-6 py-3 rounded-full hover:bg-indigo-800 transition">
          Contact Support Hub
        </button>
      </div>
    </div>
  );
}
