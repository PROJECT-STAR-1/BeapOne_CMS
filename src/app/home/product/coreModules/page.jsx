"use client";

import { useState } from "react";
import {
  Building2,
  Briefcase,
  Layers,
  Users,
  Settings,
  BarChart3,
  UserCheck,
  Database,
} from "lucide-react";
import TestimonialsSection from "@/components/home/TestimonialsSection";

/* -----------------------------
   Content Configuration
------------------------------ */

const modules = [
  {
    id: "enterprise",
    label: "B. Enterprise & Organizational Structure Management",
    icon: Building2,
    subModules: [
      {
        id: "b",
        label: "B: Enterprise & Organizational Structure Management",
      },
      {
        id: "b1",
        label: "B1: Legal Entity & Corporate Relationship Management",
      },
      {
        id: "b2",
        label: "B2: Internal Organizational Hierarchy Management",
      },
      {
        id: "b3",
        label: "B3: Individual & Team Placement",
      },

      {
        id: "b4",
        label: "B4: Team-Level Management Integration",
      },
       {
        id: "b5",
        label: "B5: Project Lifecycle Structure Definition",
      },
       {
        id: "b6",
        label: "B6: Goal Management Hierarchy Definition",
      },
       {
        id: "b7",
        label: "B7: Reporting Line Management",
      },
       {
        id: "b8",
        label: "B8: Cross-Entity Visibility",
      },
    ],
  },
  {
    id: "operations",
    label: "C. Business Operations Management",
    icon: Briefcase,
    subModules: [],
  },
  {
    id: "platform",
    label: "G. Core Platform Services Module",
    icon: Layers,
    subModules: [],
  },
  {
    id: "customers",
    label: "H. Customer Management",
    icon: Users,
    subModules: [],
  },
];

const content = {
  enterprise: {
     b: {
      title: "Enterprise & Organizational Structure Management",
      description:
        "The Aim: To provide a definitive, high-fidelity structural backbone that maps complex corporate identities and internal hierarchies to operational execution.\nCore Features & Business Impact\nDynamic Entity Classification: Precision modeling of diverse legal structures, from Standalone Companies to complex Holding Groups, Subsidiaries, and Joint Ventures.\nUser Appeal: Automatically aligns your digital platform with your legal reality, ensuring accurate compliance, billing, and multi-entity governance.\nNode-Based Hierarchy Architect: A flexible, visual tool for building intricate internal organizational charts (Boards, Departments, Units) with embedded team placement.\nUser Appeal: Mirrors your real-world workflows and reporting lines, eliminating the friction of \"shadow\" structures and disconnected teams.\nIntegrated PPPM & Goal Tiering: Native enforcement of project lifecycles (Portfolio to Activity) and strategic goal hierarchies.\nUser Appeal: Ensures that every task and project is programmatically linked to a specific organizational unit, creating 100% alignment between structure and strategy.\nEcosystem Connectivity\nUpstream Synergy: Consumes core User Profiles (A2.1) and onboarding data to establish the initial corporate footprint.\nDownstream Value: Provides the essential \"Organizational Context\" required by the Financial Management (O) and Team Management modules for accurate cost-allocation and workload analytics.",
    },
    b1: {
      title: "Legal Entity & Corporate Relationship Management",
      description:
        "The Aim: To establish an immutable, verifiable digital identity for every organization on the platform, ensuring that complex corporate structures are translated into seamless operational reality.\nCore Features & Business Impact\nUniversal Entity Classifier: Accurately catalogues every registrant—from Private Limited Companies and Cooperatives to NGOs and Individuals.\nUser Appeal: Ensures your platform environment is perfectly tailored to your legal status, automating the complexities of regional compliance and industry-specific defaults.\nCorporate Relationship Architect: A guided interface for mapping \"Holding-Subsidiary,\" \"Affiliate,\" and \"Joint Venture\" (JVCo) links with precise ownership percentages.\nUser Appeal: Enables \"Group-Level\" power, allowing parent companies to manage resources and view performance across their entire portfolio without manual data consolidation.\nAutomated Group Derivation: Intelligently identifies \"Groups of Companies\" based on equity links to apply collective policies and billing logic.\nUser Appeal: Unlocks volume discounts and unified governance, ensuring that related entities move as a single, coordinated force.\nEcosystem Connectivity\nUpstream Synergy: Receives initial onboarding triggers from the Business Support System (A1) to verify legal standing.\nDownstream Value: Hardcodes the \"Visibility Rules\" for the Team Management Module, defining exactly how workload and performance data can be aggregated at a group level.",
    },
    b2: {
      title: "Internal Organizational Hierarchy Management",
      description:
        "The Aim: To provide a dynamic and flexible blueprint that mirrors your real-world operational structure, ensuring every department, unit, and team is perfectly positioned for peak execution.\nCore Features & Business Impact\nMulti-Level Hierarchy Architect: Effortlessly build complex, nested organizational charts from top-level Directorates down to specialized functional sections.\nUser Appeal: Eliminates structural ambiguity by providing a \"Single Source of Truth\" for your internal design, ensuring that workflows and approvals always find the right desk.\nInteractive Org Chart Visualizer: A high-fidelity, drag-and-drop tool to explore, modify, and communicate your company structure in real-time.\nUser Appeal: Empowers leadership with \"Clarity at a Glance,\" allowing you to see exactly where your human capital and teams are deployed across the enterprise.\nTeam-Unit Embedding: Seamlessly anchors specialized teams (from the Team Management Module) into their correct departmental context.\nUser Appeal: Transforms your org chart from a static picture into a live operational hub, enabling direct comparison of team performance and workloads by department.\nEcosystem Connectivity\nUpstream Synergy: Triggered by the legal entity creation in Module B1; every internal hierarchy is rooted in a validated corporate identity.\nDownstream Value: Provides the essential OrgUnitID required by the Financial (O) and Team Management modules to roll up costs and aggregate productivity reports by department.",
    },
    b3: {
      title: "Individual & Team Placement",
      description:
        "Manages the assignment of individuals to teams, roles, and organizational units. Ensures visibility into workforce distribution, supports access control logic, and forms the foundation for performance, compliance, and capacity planning.",
    },
    "b4-1": {
      title: "Team Management",
      description:
        "Centralizes the creation, configuration, and lifecycle management of teams. Supports cross-functional and matrix teams, ownership assignment, and operational readiness across projects and departments.",
    },
    "b4-2": {
      title: "Role Alignment",
      description:
        "Aligns functional and operational roles within teams to enterprise standards. Ensures role clarity, reduces duplication, and enables consistent authorization, responsibility mapping, and performance measurement.",
    },
    "b4-3": {
      title: "Reporting Structure",
      description:
        "Defines formal reporting lines and escalation paths across teams and organizational units. Supports managerial visibility, governance enforcement, and accurate chain-of-command representation.",
    },
    b5: {
      title: "Project Lifecycle Structure Definition",
      description:
        "Establishes standardized project lifecycle stages, governance checkpoints, and ownership models. Enables consistent execution, visibility into progress, and alignment with enterprise delivery frameworks.",
    },
  },

  operations: {
    overview: {
      title: "Business Operations Management",
      description:
        "Orchestrates day-to-day operational processes across the enterprise, ensuring efficiency, consistency, and measurable outcomes. This module serves as the execution backbone connecting strategy, resources, and delivery.",
    },
  },

  platform: {
    overview: {
      title: "Core Platform Services",
      description:
        "Provides foundational platform capabilities including identity, configuration, integration, and system governance. Ensures scalability, security, and interoperability across all BEAPOne modules.",
    },
  },

  customers: {
    overview: {
      title: "Customer Management",
      description:
        "Manages customer entities, relationships, and engagement contexts across the enterprise. Supports lifecycle tracking, segmentation, and integration with operational and analytical workflows.",
    },
  },
};

/* -----------------------------
   CTA Button
------------------------------ */

function CTAButton({ icon: Icon, label, primary }) {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition
        ${
          primary
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-indigo-900 text-white hover:bg-indigo-800"
        }`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {label}
    </button>
  );
}

/* -----------------------------
   Page Component
------------------------------ */

export default function CoreModulesPage() {
  const [activeLeft, setActiveLeft] = useState("enterprise");
  const [activeRight, setActiveRight] = useState("b1");

  const activeModule = modules.find((m) => m.id === activeLeft);
  const activeContent =
    content?.[activeLeft]?.[activeRight] ||
    content?.[activeLeft]?.overview ||
    null;

  return (
    <div className="flex min-h-screen flex-col">
      {/* ---------------- Hero ---------------- */}
      <div className="w-full bg-[#1B1464] px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-semibold text-white">Core Modules</h1>
          <p className="mt-1 text-sm text-indigo-200">
            Product Overview / <span className="font-medium text-blue-400"> Core Modules</span>
          </p>
        </div>
      </div>

      {/* ---------------- Intro ---------------- */}
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <p className="max-w-3xl text-sm text-gray-600">
          BEAPOne UBOS unifies over 65 specialized business process systems,
          ensuring every department operates from the same source of truth.
        </p>
      </div>

      {/* ---------------- Main Content ---------------- */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-6 pb-12 lg:flex-row">
        {/* ---------- Left Navigation ---------- */}
        <div className="lg:w-[320px]">
          <div className="flex gap-2 overflow-x-auto lg:flex-col">
            {modules.map((module) => {
              const Icon = module.icon;
              const isActive = activeLeft === module.id;

              return (
                <button
                  key={module.id}
                  onClick={() => {
                    setActiveLeft(module.id);
                    setActiveRight(module.subModules?.[0]?.id || "overview");
                  }}
                  className={`flex min-w-max items-center gap-3 rounded-xl px-4 py-3 text-left text-sm transition
                    ${
                      isActive
                        ? "bg-indigo-700 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="leading-snug">{module.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ---------- Middle Navigation ---------- */}
        <div className="lg:w-[280px]">
          <div className="rounded-xl bg-gray-50 p-4">
            <ul className="space-y-3 text-sm">
              {activeModule?.subModules?.map((item) => (
                <li key={item.id}>
                  {/* Item WITH children → non-clickable header */}
                  {item.children ? (
                    <>
                      <div className="font-medium text-gray-800">
                        {item.label}
                      </div>

                      <ul className="mt-2 space-y-1 pl-4">
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <button
                              onClick={() => setActiveRight(child.id)}
                              className={`text-left text-xs transition
                    ${
                      activeRight === child.id
                        ? "text-indigo-700 font-medium"
                        : "text-gray-600 hover:text-indigo-600"
                    }`}
                            >
                              {child.label}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    /* Item WITHOUT children → clickable */
                    <button
                      onClick={() => setActiveRight(item.id)}
                      className={`w-full text-left font-medium transition
            ${
              activeRight === item.id
                ? "text-indigo-700"
                : "text-gray-700 hover:text-indigo-600"
            }`}
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Right Content ---------- */}
        <div className="flex-1">
          <div className="max-w-3xl">
            {activeContent ? (
              <>
                <h2 className="text-xl font-semibold text-gray-900">
                  {activeContent.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {activeContent.description}
                </p>
              </>
            ) : (
              <p className="text-sm text-gray-500">
                Select a module to view details.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ---------------- CTAs ---------------- */}
      <div className="border-t">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 px-6 py-6 sm:grid-cols-2 lg:flex lg:justify-end">
          <CTAButton icon={Database} label="View module factsheet" />
          <CTAButton icon={UserCheck} label="Talk to an Expert" />
          <CTAButton
            icon={BarChart3}
            label="Sign Up for a Free Trial"
            primary
          />
          <CTAButton icon={Settings} label="Contact Sales" />
        </div>
      </div>

      <TestimonialsSection />
    </div>
  );
}
