"use client";

import { useState } from "react";
import {
  BarChart3,
  ShoppingCart,
  Users,
  ShieldCheck,
  Target,
  UserCog,
  Wallet,
  Activity,
  Download,
  MessageCircle,
  Sparkles,
  Phone,
} from "lucide-react";
import TestimonialsSection from "@/components/home/TestimonialsSection";

/* ---------- CTA Button ---------- */
function CTAButton({ icon, label, primary = false }) {
  return (
    <button
      className={`flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition
        ${
          primary
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-indigo-900 text-white hover:bg-indigo-800"
        }`}
    >
      {icon}
      {label}
    </button>
  );
}

/* ---------- Config ---------- */
const leftTabs = [
  { id: "realtime", label: "Advanced Data Telemetry & BI", icon: BarChart3 },
  { id: "commerce", label: " E-Commerce & Supply Chain Integration", icon: ShoppingCart },
  { id: "collab", label: " Contextual Collaboration & Project Management", icon: Users },
  { id: "security", label: "Security, Compliance & Governance", icon: ShieldCheck },
  { id: "growth", label: "High-Velocity Customer Acquisition", icon: Target },
  { id: "employees", label: "Workforce & Performance Optimization", icon: UserCog },
  { id: "finance", label: "Institutional Finance & Transparency", icon: Wallet },
  { id: "performance", label: "Team Productivity & Predictive Scheduling", icon: Activity },
];

const rightTabs = [
  { id: "live", label: "Video Conferencing" },
  { id: "calendar", label: "Google Calendar" },
  { id: "messages", label: "Dedicated Message Centre" },
];

const content = {
  realtime: {
    live: {
      title: "Live Operational Audits",
      description:
        "Stream 4K video alongside real-time IoT telemetry (e.g., pond pH, warehouse humidity) for immersive remote inspections.",
    },
    calendar: {
      title: "Predictive Foresight",
      description:
        "AI-driven financial modeling (O10) forecasts cash flow and alerts managers to budget overruns months in advance.",
    },
    messages: {
      title: "Automated Compliance",
      description:
        " Instantly generate audit-ready reports for any subsidiary or joint venture, covering taxation and legal status.",
    },
  },

  commerce: {
    live: {
      title: "Real-Time Inventory Sync",
      description:
        " A sale on the web storefront (I1) instantly triggers harvest tasks (N5) and updates warehouse stock.",
    },
    calendar: {
      title: "Perishable Asset Tracking",
      description:
        "Full cold-chain telemetry (M4.1) ensures product integrity from the distribution center to the customer.",
    },
    messages: {
      title: "Automated Financial Handshake",
      description:
        "Orders automatically trigger Accounts Receivable and Revenue Recognition workflows.",
    },
  },

  collab: {
    live: {
      title: "Unified Message Centre",
      description:
        "Sync Google Meet, Calendar, and internal Memos into a single hub linked directly to specific customers or projects.",
    },
    calendar: {
      title: "Context-Aware Project Rooms",
      description:
        "Secure workspaces that consolidate documents, journals, and schedules for specific project teams.",
    },
    messages: {
      title: "Meeting Intelligence",
      description:
        " Automated analysis of meeting notes to suggest and assign tasks to relevant organizational units.",
    },
  },

  security: {
    live: {
      title: "Data Residency Enforcement",
      description:
        " Automated monitoring to ensure global nodes comply with regional laws like GDPR and NDPR.",
    },
    calendar: {
      title: "Forensic Audit Trails",
      description:
        "An immutable journaling layer captures every change to legal entities and financials for an unalterable history.",
    },
    messages: {
      title: "Automated HSE Reporting",
      description:
        "Anomaly detection via farm telemetry automatically triggers incident reports and escalation paths.",
    },
  },

  growth: {
    live: {
      title: "AI Sales Forecasting",
      description:
        "Analyzes deal velocity to generate precise revenue outlooks.",
    },
    calendar: {
      title: "Hyper-Personalized Marketing",
      description:
        "Segments customers based on CRM and service request history for targeted campaigns.",
    },
    messages: {
      title: "Frictionless Onboarding",
      description:
        "Automated workflows guide new customers through legal entity and organizational hierarchy setup.",
    },
  },

  employees: {
    live: {
      title: "Workforce Telemetry",
      description:
        "Real-time monitoring of task loads across all units to identify overloaded or under-utilized staff.",
    },
    calendar: {
      title: "Matrix Management",
      description:
        " Supports complex dotted-line reporting structures to ensure accurate workflow routing.",
    },
    messages: {
      title: "Continuous Impact Tracking",
      description:
        " Replaces annual reviews with real-time KPI progress and individual impact tracking against company goals.",
    },
  },

  finance: {
    live: {
      title: "Automated General Ledger",
      description:
        "Real-time posting of transactions from e-commerce, supply chain, and asset depreciation.",
    },
    calendar: {
      title: "Drill-Down Profitability",
      description:
        "Assigns costs (payroll, procurement, feed) against specific projects or portfolios for granular analysis.",
    },
    messages: {
      title: "Multi-Currency Roll-up",
      description:
        "Automatically converts subsidiary financials into the HoldCo's functional currency while calculating localized taxes.",
    },
  },

  performance: {
    live: {
      title: "Benchmarking Dashboards",
      description:
        "Compare workload and performance across different teams and organizational units.",
    },
    calendar: {
      title: "Milestone Prediction",
      description:
        "AI predicts potential schedule slides and suggests change management workflows to prevent delays.",
    },
    messages: {
      title: "Lessons Learned Hub",
      description:
        "Captures project insights to refine future business templates and share best practices across the community.",
    },
  },
};

/* ---------- Page ---------- */
export default function FeaturesPage() {
  const [activeLeft, setActiveLeft] = useState("realtime");
  const [activeRight, setActiveRight] = useState("live");

  const activeContent = content[activeLeft]?.[activeRight];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#1B1464]">
        <div className="mx-auto max-w-7xl px-6 py-14 text-white">
          <h1 className="mt-2 text-4xl font-semibold">All Features</h1>
          <p className="text-sm opacity-80">
            Product Overview /
            <span className="font-medium text-blue-400"> Features</span>
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="max-w-3xl text-sm text-gray-600">
          BEAPOne UBOS is a high-velocity SaaS platform designed to bridge the
          gap between "Bricks and Mortar" operations and "Global Institutional"
          finance. It provides a unified command center for organizations
          managing complex supply chains, biotechnology production, and
          multi-national corporate structures.
        </p>
      </div>

      {/* Main Layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[300px_1fr]">
        {/* Left Navigation */}
        <aside className="space-y-3">
          {leftTabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeLeft === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveLeft(tab.id);
                  setActiveRight("live");
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition
                  ${
                    active
                      ? "bg-indigo-700 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Right Content */}
        <section className="flex flex-col">
          {/* Top Tabs */}
          <div className="border-b">
            <div className="flex gap-8">
              {rightTabs.map((tab) => {
                const active = activeRight === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveRight(tab.id)}
                    className={`pb-3 text-sm font-medium transition
                      ${
                        active
                          ? "border-b-2 border-indigo-600 text-indigo-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content Body (intentionally airy like screenshot) */}
          <div className="mt-10 max-w-3xl">
            {activeContent && (
              <>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900">
                  {activeContent.title}
                </h2>
                <p className="leading-relaxed text-gray-600">
                  {activeContent.description}
                </p>
              </>
            )}
          </div>
        </section>
      </div>

      {/* CTA Footer */}
      <div className="mx-auto mt-16 max-w-7xl px-6 pb-12">
        <div className="flex flex-wrap justify-end gap-3">
          <CTAButton
            icon={<Download className="h-4 w-4" />}
            label="Download Features Catalogue"
          />
          <CTAButton
            icon={<MessageCircle className="h-4 w-4" />}
            label="Talk to an Expert"
          />
          <CTAButton
            icon={<Sparkles className="h-4 w-4" />}
            label="Sign Up for a Free Trial"
            primary
          />
          <CTAButton
            icon={<Phone className="h-4 w-4" />}
            label="Contact Sales"
          />
        </div>
      </div>

      <TestimonialsSection />
    </div>
  );
}
