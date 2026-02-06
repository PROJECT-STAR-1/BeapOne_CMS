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
  { id: "commerce", label: "Mandatory E-Commerce Suite", icon: ShoppingCart },
  { id: "collab", label: "Integrated Collaboration", icon: Users },
  { id: "security", label: "Security & Compliance", icon: ShieldCheck },
  { id: "growth", label: "Win More Customers", icon: Target },
  { id: "employees", label: "Manage Your Employees", icon: UserCog },
  { id: "finance", label: "Track Your Finances", icon: Wallet },
  { id: "performance", label: "Monitor Team Performance", icon: Activity },
];

const rightTabs = [
  { id: "live", label: "Video Conferencing" },
  { id: "calendar", label: "Google Calendar" },
  { id: "messages", label: "Dedicated Message Centre" },
  { id: "meet", label: "Google Meet" },
];

const content = {
  realtime: {
    live: {
      title: "Real-Time Video Intelligence",
      description:
        "Access live telemetry and visual analytics in real time. Make faster decisions with continuously updated dashboards designed for operational clarity and executive insight.",
    },
    calendar: {
      title: "Analytics-Driven Scheduling",
      description:
        "Align operational data with calendar events to understand performance patterns, resource utilization, and time-based trends effortlessly.",
    },
    messages: {
      title: "Centralized BI Notifications",
      description:
        "Receive automated insights, alerts, and summaries directly in a unified messaging hub so nothing critical is ever missed.",
    },
    meet: {
      title: "Meetings Backed by Data",
      description:
        "Enhance meetings with live data overlays and post-session analytics that turn conversations into measurable outcomes.",
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
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700">
        <div className="mx-auto max-w-7xl px-6 py-14 text-white">
           <h1 className="mt-2 text-4xl font-semibold">All Features</h1>
          <p className="text-sm opacity-80">Product Overview /<span className="font-medium text-blue-400"> Features</span></p>
         
        </div>
      </div>

      {/* Intro */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <p className="max-w-3xl text-sm text-gray-600">
          BEAPOne UBOS is built for growth, offering unparalleled flexibility and
          a smooth transition to a more productive way of working.
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
            label="Download Capabilities Catalogue"
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
