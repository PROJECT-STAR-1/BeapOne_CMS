"use client";

import { useState } from "react";
import {
  Activity,
  Bot,
  Globe,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
  BarChart3,
  Download,
  MessageCircle,
  Rocket,
  Phone,
} from "lucide-react";
import TestimonialsSection from "@/components/home/TestimonialsSection";

/* ---------------- LEFT TABS ---------------- */

const leftTabs = [
  { id: "realtime", label: "Real-time Intelligence", icon: Activity },
  { id: "ai", label: "AI & Automation Engine", icon: Bot },
  { id: "scale", label: "Global Scalability", icon: Globe },
  { id: "security", label: "Security & Compliance", icon: ShieldCheck },
  { id: "customers", label: "Win More Customers", icon: TrendingUp },
  { id: "employees", label: "Manage Your Employees", icon: Users },
  { id: "finance", label: "Track Your Finances", icon: Wallet },
  { id: "performance", label: "Monitor Team Performance", icon: BarChart3 },
];

/* ---------------- RIGHT TABS ---------------- */

const rightTabs = [
  { id: "live", label: "Live data access" },
  { id: "predictive", label: "Predictive Modeling" },
  { id: "dashboards", label: "Customizable dashboards" },
  { id: "telemetry", label: "Advanced Data Telemetry" },
  { id: "integration", label: "Business Integration" },
];

/* ---------------- CONTENT ---------------- */

const content = {
  realtime: {
    live: {
      title: "Live Data Access",
      description:
        "Instant access to operational and business data across all systems with millisecond-level updates.",
    },
    predictive: {
      title: "Predictive Modeling",
      description:
        "Forecast outcomes using continuously updated real-time and historical data models.",
    },
    dashboards: {
      title: "Custom Dashboards",
      description:
        "Build role-based dashboards that refresh automatically as new data streams in.",
    },
    telemetry: {
      title: "Advanced Telemetry",
      description:
        "High-frequency event tracking and system metrics for mission-critical visibility.",
    },
    integration: {
      title: "Business Integration",
      description:
        "Connect ERP, CRM, finance, and supply chain systems into a unified live view.",
    },
  },

  ai: {
    live: {
      title: "AI-Powered Live Insights",
      description:
        "AI models analyze real-time data to detect patterns, anomalies, and opportunities.",
    },
    predictive: {
      title: "Automated Forecasting",
      description:
        "Self-learning models continuously refine predictions without manual tuning.",
    },
    dashboards: {
      title: "AI-Driven Dashboards",
      description:
        "Dashboards enriched with AI explanations and recommended actions.",
    },
    telemetry: {
      title: "Model Telemetry",
      description:
        "Track AI model health, drift, confidence, and performance in real time.",
    },
    integration: {
      title: "Embedded AI",
      description:
        "Deploy AI decisioning directly into your business workflows.",
    },
  },
};

/* ---------------- PAGE ---------------- */

export default function CapabilitiesPage() {
  const [activeLeft, setActiveLeft] = useState("realtime");
  const [activeRight, setActiveRight] = useState("live");

  const activeContent = content[activeLeft]?.[activeRight];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
            Capabilities
          </h1>
          <p className="text-sm opacity-80">
            Product Overview /{" "}
            <span className="font-medium text-blue-400">Capabilities</span>
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <p className="max-w-4xl text-gray-700 text-sm sm:text-base">
          BEAPOne UBOS is designed to be the central nervous system for your
          business. It integrates all vital functions into a single, cohesive
          platform.
        </p>
      </section>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT TABS */}
          <aside className="w-full lg:w-80">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2">
              {leftTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeLeft === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveLeft(tab.id)}
                    className={`flex items-center gap-3 whitespace-nowrap rounded-xl px-5 py-3 text-sm font-medium transition
                      ${
                        isActive
                          ? "bg-indigo-800 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <div className="flex-1">
            {/* RIGHT TABS */}
            <div className="flex gap-6 overflow-x-auto border-b mb-6">
              {rightTabs.map((tab) => {
                const isActive = activeRight === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveRight(tab.id)}
                    className={`pb-3 whitespace-nowrap text-sm font-medium
                      ${
                        isActive
                          ? "border-b-2 border-indigo-800 text-indigo-800"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* CONTENT */}
            {activeContent && (
              <>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                  {activeContent.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  {activeContent.description}
                </p>
              </>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="grid sm:grid-cols-2 lg:flex lg:justify-end gap-4 mt-14">
          <CTA icon={Download} label="Download Capabilities Catalogue" />
          <CTA icon={MessageCircle} label="Talk to an Expert" />
          <CTA icon={Rocket} label="Sign Up for a Free Trial" primary />
          <CTA icon={Phone} label="Contact Sales" />
        </div>
      </section>

      <TestimonialsSection />
    </main>
  );
}

/* CTA */

function CTA({ icon: Icon, label, primary }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition w-full lg:w-auto
        ${
          primary
            ? "bg-indigo-800 text-white hover:bg-indigo-700"
            : "bg-indigo-900 text-white hover:bg-indigo-800"
        }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}
