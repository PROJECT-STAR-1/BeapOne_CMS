"use client";

import { useState } from "react";

import AllModulesTab from "@/components/knowledge-library/AllModulesTab";
import FinancialTab from "@/components/knowledge-library/FinancialTab";
import ProjectsTab from "@/components/knowledge-library/ProjectsTab";
import HRTab from "@/components/knowledge-library/HRTab";
import VerticalsTab from "@/components/knowledge-library/VerticalsTab";
import TemplatesTab from "@/components/knowledge-library/TemplatesTab";
import CustomerCareSection from "@/components/faqs/CustomerCareSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

/* ---------------- Tabs config ---------------- */
const tabs = [
  { key: "all", label: "All Modules" },
  { key: "financial", label: "Financial (O)" },
  { key: "projects", label: "Projects (K)" },
  { key: "hr", label: "HR & Workforce (C)" },
  { key: "verticals", label: "Verticals (P)" },
  { key: "templates", label: "Business Templates (S)" },
];

/* ---------------- Tabs component (local) ---------------- */
function Tabs({ activeTab, onChange }) {
  return (
    <div className="w-full rounded-full bg-gray-100 p-1">
      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))` }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => onChange(tab.key)}
              className={`
                flex items-center justify-center
                rounded-full px-3 py-2
                text-sm font-medium transition
                ${
                  isActive
                    ? "bg-indigo-900 text-white shadow-sm"
                    : "text-gray-600 hover:bg-white"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */
export default function KnowledgeLibraryPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-[#1B1464] px-8 py-16">
        <h1 className="text-3xl font-bold text-white">Knowledge Library</h1>
        <p className="mt-2 text-sm text-blue-200">
          Resources /<span className="font-medium text-blue-400"> Knowledge Library</span>
        </p>
      </div>

      {/* Tabs */}
      <div className="px-8 mt-6">
        <Tabs activeTab={activeTab} onChange={setActiveTab} />
      </div>

      {/* Content */}
      <div className="px-8 py-10">
        {activeTab === "all" && <AllModulesTab />}
        {activeTab === "financial" && <FinancialTab />}
        {activeTab === "projects" && <ProjectsTab />}
        {activeTab === "hr" && <HRTab />}
        {activeTab === "verticals" && <VerticalsTab />}
        {activeTab === "templates" && <TemplatesTab />}
      </div>

      <CustomerCareSection />

      <TestimonialsSection />
    </div>
  );
}