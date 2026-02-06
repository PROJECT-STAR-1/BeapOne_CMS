"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const FAQ_DATA = [
  {
    id: "core",
    title: "1. Core Systems & Organization (Hubs A, B, G)",
    questions: [
      {
        q: "What functionality is included in the Core Platform Services (Hub G)?",
        a: "Hub G covers essential infrastructure management, including: **System Management (G1)**, **Admin Management (G2)**, **Content Management (G3)**, **Notification & Escalation (G4)**, **Document Management (G5)**, **Reporting & Analytics (G6)**, **Help Desk (G7)**, and **Stakeholder Management (G8)**. These modules ensure foundational operations run smoothly across all Hubs.",
      },
      {
        q: "How does UBOS handle internal organizational structure (Hub B)?",
        a: "Hub B manages the internal blueprint of your organization, handling **Departments**, **Branches**, and **Role Hierarchies** to ensure that data access and permissions align perfectly with your corporate structure.",
      },
      {
        q: "Which modules manage HR, Meetings, and Appointments?",
        a: "These are handled within **Hub A (Human Capital & Admin)**, which includes modules for staff management, automated meeting scheduling, and a centralized appointment system integrated with your calendar.",
      },
    ],
  },
  {
    id: "management",
    title: "2. Management Hubs (Finance, Projects, Customers, Work)",
    questions: [
      {
        q: "What specific financial tasks can UBOS handle (Hub O)?",
        a: "The Financial Management Module (Hub O) is extensive, covering **General Ledger (O13)**, **Accounts Payable (O11)** and **Receivable (O12)**, **Budgeting (O9)** and **Forecasting (O10)**, **Revenue (O4)** and **Cost Management (O5)**, **Taxation (O14)**, and critical **Audit (O1)** and **Compliance (O2)** modules.",
      },
      {
        q: "How does the PPPM Module (Hub K) ensure project success?",
        a: "Hub K (Portfolio, Program, and Project Management) uses a structured workflow to track milestones, resource allocation, and real-time progress, ensuring that complex projects stay on schedule and within budget.",
      },
      {
        q: "Where are CRM and basic individual task tracking handled?",
        a: "Customer relations are managed in **Hub L (Customer Management)**, while individual productivity and daily tasks are tracked through the **Task & Workflow** engine integrated across the platform.",
      },
    ],
  },
  {
    id: "industry",
    title: "3. Industry Verticals, Supply Chain & Templates",
    questions: [
      {
        q: "Does UBOS support specialized production industries?",
        a: "Yes, UBOS contains dedicated vertical hubs including **Manufacturing Management (Hub J)**, extensive **Supply Chain Management (Hub M)**, and **Farm Management (Hub P)**. The Farm Management module alone covers Aquaculture, Livestock, Crop Production, and Biotechnology Production (e.g., BSF Larvae, Spirulina, Compost).",
      },
      {
        q: "What is covered by the Commercial Warehousing Module (CWM)?",
        a: "CWM provides end-to-end oversight of third-party logistics, inventory aging, space optimization, and multi-location warehouse tracking to streamline distribution.",
      },
      {
        q: "What are Business Templates (Hub S) and how are they used?",
        a: "Hub S provides pre-configured workspace templates for various industries, allowing you to deploy best-practice workflows instantly rather than building from scratch.",
      },
    ],
  },
  {
    id: "consulting",
    title: "4. Consulting & Partner Program",
    questions: [
      {
        q: "Do I need to hire an official Consultant to use UBOS? (Hub Partner Program)",
        a: "While the UBOS platform is designed to be intuitive, its comprehensive nature means a custom configuration is highly recommended for optimal results. **Official UBOS Consultants (UBOS Experts)** specialize in building and customizing the UBOS workspace to perfectly match your unique workflows.",
      },
    ],
  },
];

export default function FaqAccordionSection() {
  const [openId, setOpenId] = useState("core-0");

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="space-y-12">
        {FAQ_DATA.map((section) => (
          <div key={section.id}>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              {section.title}
            </h3>
            <div className="space-y-3">
              {section.questions.map((item, qIdx) => {
                const id = `${section.id}-${qIdx}`;
                const isOpen = openId === id;
                return (
                  <div
                    key={id}
                    className={`border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 ${
                      isOpen ? "shadow-sm ring-1 ring-gray-50" : ""
                    }`}>
                    <button
                      onClick={() => setOpenId(isOpen ? null : id)}
                      className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                        isOpen ? "bg-gray-50/50" : "bg-white hover:bg-gray-50"
                      }`}>
                      <span
                        className={`text-[16px] font-semibold tracking-tight ${
                          isOpen ? "text-[#1B1464]" : "text-gray-900"
                        }`}>
                        {item.q}
                      </span>
                      {isOpen ? (
                        <ChevronDown size={18} className="text-[#1B1464]" />
                      ) : (
                        <ChevronRight size={18} className="text-gray-400" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-8 pb-8 pt-2 bg-gray-50/30">
                        <p
                          className="text-[16px] font-normal leading-relaxed text-gray-600"
                          dangerouslySetInnerHTML={{
                            __html: item.a.replace(
                              /\*\*(.*?)\*\*/g,
                              '<b class="text-gray-900 font-bold">$1</b>',
                            ),
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
