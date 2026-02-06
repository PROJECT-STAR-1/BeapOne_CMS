"use client";

import { useState } from "react";
import { Layers, Briefcase, Target, Wrench, FileText } from "lucide-react";
import TestimonialsSection from "@/components/home/TestimonialsSection";

/* ---------------------------------
   CONTENT CONFIG
---------------------------------- */

const content = {
  industry: {
    overview: {
      label: "Industry Overview & Problem",
      title: "Industry Overview & Problem",
      description:
        "To establish a precise and verifiable system for classifying the legal entity type and defining the external corporate relationships of every organization registered on BEAPOne, ensuring accurate billing, regulatory compliance, and foundational data for group-level operations and analytics.",
    },
    capabilities: {
      label: "Key Industry Capabilities",
      title: "Key Industry Capabilities",
      description:
        "Centralized entity classification, regulatory alignment, and standardized data structures that support consistent operations across industries.",
    },
    workflow: {
      label: "How It Works: End-to-End Workflow",
      title: "How It Works: End-to-End Workflow",
      description:
        "A governed workflow model connecting entity onboarding, validation, reporting, and downstream operational processes.",
    },
    value: {
      label: "Value Proposition (Metrics)",
      title: "Value Proposition (Metrics)",
      description:
        "Measurable improvements in data accuracy, operational efficiency, and compliance readiness.",
    },
  },

  practice: {
    overview: {
      label: "Practice Overview",
      title: "Practice Overview",
      description:
        "Structured workflows designed to align professional practices with standardized operational requirements.",
    },
    workflow: {
      label: "Practice Workflow",
      title: "Practice Workflow",
      description:
        "Role-based workflows that balance flexibility with governance and accountability.",
    },
  },

  challenge: {
    accuracy: {
      label: "Data Accuracy",
      title: "Data Accuracy",
      description:
        "Eliminates duplication and inconsistency by enforcing a single system of record.",
    },
    scalability: {
      label: "Operational Scalability",
      title: "Operational Scalability",
      description:
        "Supports growth across entities, regions, and regulatory environments.",
    },
  },

  expertise: {
    foundations: {
      label: "Foundational Expertise",
      title: "Foundational Expertise",
      description:
        "Built on proven operational frameworks and deep experience across regulated industries.",
    },
    advisory: {
      label: "Advisory Enablement",
      title: "Advisory Enablement",
      description:
        "Supports advisory teams with structured data, insights, and standardized reporting.",
    },
  },
};

/* ---------------------------------
   LEFT NAV CONFIG
---------------------------------- */

const leftNav = [
  { id: "industry", label: "Solutions By Industry", icon: Layers },
  { id: "practice", label: "By Professional Practice", icon: Briefcase },
  { id: "challenge", label: "By Challenge", icon: Target },
  { id: "expertise", label: "By Expertise", icon: Wrench },
];

/* ---------------------------------
   CTA BUTTON
---------------------------------- */

function CTAButton({ label, primary }) {
  return (
    <button
      className={`rounded-md px-5 py-2.5 text-sm font-medium transition
        ${
          primary
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-indigo-800 text-white hover:bg-indigo-900"
        }`}
    >
      {label}
    </button>
  );
}

/* ---------------------------------
   PAGE
---------------------------------- */

export default function SolutionsHubPage() {
  const [activeLeft, setActiveLeft] = useState("industry");
  const [activeRight, setActiveRight] = useState(
    Object.keys(content.industry)[0],
  );

  const sections = content[activeLeft];
  const rightContent = sections[activeRight];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ---------- HERO ---------- */}
      <header className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <h1 className="text-3xl font-semibold text-white">Solutions Hub</h1>
          <p className="text-sm text-indigo-200 mb-1">
            Product Overview /<span className="font-medium text-blue-400"> Solutions Hub</span>
          </p>
          
        </div>
      </header>

      {/* ---------- INTRO ---------- */}
      <section className="px-6 py-8">
        <div className="max-w-7xl">
          <p className="text-sm text-gray-600 leading-relaxed">
            BEAPOne UBOS unifies over 65 specialized business process systems,
            ensuring every department operates from the same source of truth.
          </p>
        </div>
      </section>

      {/* ---------- MAIN GRID ---------- */}
      <main className="mx-auto max-w-7xl px-6 pb-16 grid grid-cols-1 lg:grid-cols-[320px_260px_1fr] gap-6">
        {/* LEFT NAV */}
        <aside>
          <div className="space-y-3">
            {leftNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeLeft === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveLeft(item.id);
                    setActiveRight(Object.keys(content[item.id])[0]);
                  }}
                  className={`w-full flex items-center gap-3 rounded-md px-4 py-3 text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </aside>

        {/* MIDDLE NAV */}
        <nav className="border border-gray-200 rounded-md p-3 h-fit">
          <ul className="space-y-1">
            {Object.entries(sections).map(([key, item]) => {
              const isActive = activeRight === key;

              return (
                <li key={key}>
                  <button
                    onClick={() => setActiveRight(key)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition
                      ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT CONTENT */}
        <section className="border border-gray-200 rounded-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {rightContent.title}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {rightContent.description}
          </p>
        </section>
      </main>

      {/* ---------- CTA FOOTER ---------- */}
      <footer className="border-t border-gray-200 mt-auto">
        <div className="mx-auto max-w-7xl px-6 py-6 flex justify-end gap-3">
          <CTAButton label="View module factsheet" />
          <CTAButton label="Talk to an Expert" />
          <CTAButton label="Sign Up for a Free Trial" primary />
          <CTAButton label="Contact Sales" />
        </div>
      </footer>

      <TestimonialsSection />
    </div>
  );
}
