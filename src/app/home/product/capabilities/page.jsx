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
        "Gain an uncompromising, second-by-second view of your entire operation. From field-level sensor data in Batch 2 (Agri-Tech) to transactional throughput in Batch 1 (Financials), our direct-to-database streaming ensures you are never looking at yesterday's news.",
    },
    predictive: {
      title: "Predictive Modeling",
      description:
        "Move beyond reactive management. Using the built-in AIDL (AI/Deep Learning) engine, UBOS analyzes historical patterns to forecast supply chain bottlenecks, demand surges, and potential operational risks before they impact your bottom line.",
    },
    dashboards: {
      title: "Custom Dashboards",
      description:
        "Knowledge is power only when it is visible. Build bespoke visualization layers for every level of the organization—from executive-level Command Centers to field-operator Action Views—ensuring the right intelligence reaches the right person in real-time.",
    },
    telemetry: {
      title: "Advanced Telemetry",
      description:
        "Leverage granular instrumentation across all organizational nodes. Our telemetry protocols don't just track that an event happened; they capture the context—metadata, environmental factors, and user interactions—providing the richest dataset available for enterprise analysis.",
    },
    integration: {
      title: "Business Integration",
      description:
        "Real-time intelligence doesn't exist in a silo. Every data point captured triggers immediate, cross-module synchronization. A change in warehouse stock (M4) instantly updates your sales pipeline (H2) and financial forecasts (O10), ensuring the entire ecosystem moves as one.",
    },
  },

  ai: {
    live: {
      title: "AI-Powered Live Insights",
      description:
        "The AI Engine feeds on the continuous stream of operational data. It monitors live workflows (C6) and task activities (N5) to identify inefficiencies in real-time, providing the fuel for autonomous optimization.",
    },
    predictive: {
      title: "Automated Forecasting",
      description:
        "This is where the Brain of UBOS lives. By applying machine learning to your project lifecycles and goal hierarchies, the engine predicts completion dates and automatically suggests resource reallocations to keep high-priority programs (Batch 1, K) on track.",
    },
    dashboards: {
      title: "AI-Driven Dashboards",
      description:
        "Manage your automation at a glance. Dashboards visualize Bot vs. Human efficiency, showing where automated workflows (A2.2) are handling the heavy lifting and highlighting areas where human intervention is required for complex decision-making.",
    },
    telemetry: {
      title: "Model Telemetry",
      description:
        "Track the health of your AI models. Our telemetry monitors model drift and accuracy, ensuring that the automated decisions governing your business remain aligned with real-world shifts and corporate governance standards.",
    },
    integration: {
      title: "Embedded AI",
      description:
        "Automate the Handshake between departments. The AI engine bridges the gap between silos—automatically triggering a procurement request (M2) when a project phase (PPPM) hits a specific milestone, or initiating an audit (O1) when financial thresholds are crossed.",
    },
  },

  scale: {
  live: {
    title: "Global Data Access",
    description:
      "Maintain a Single Source of Truth across global time zones. Whether managing a subsidiary in Lagos or a joint venture in Madrid, UBOS provides instantaneous access to localized operational data, consolidated into a global view without synchronization lag.",
  },
  predictive: {
    title: "Scalable Forecasting",
    description:
      "Scale with foresight. Use AI to model market entry risks, localized demand fluctuations for Batch 2 agricultural products, and the impact of regional economic shifts on your global COF investment structures.",
  },
  dashboards: {
    title: "Multi-Region Dashboards",
    description:
      "Visualize your global footprint. Toggle between high-level Global HoldCo performance and granular Local Business Unit views. Dashboards automatically adjust for local currencies, units of measure, and regional KPIs, ensuring clarity at every level of the hierarchy.",
  },
  telemetry: {
    title: "Distributed Telemetry",
    description:
      "Monitor the health of your global nodes. UBOS tracks system performance, data residency compliance (GDPR/NDPR), and localized resource utilization in real-time, ensuring your digital infrastructure scales as fast as your physical operations.",
  },
  integration: {
    title: "Global Integrations",
    description:
      "Standardize complexity. Our integration engine harmonizes diverse legal entity types—from Dutch Cooperatives to Nigerian PLCs—into a unified reporting and governance framework (Module B1-B8), ensuring seamless cross-border workflows and compliance.",
  },
},

security: {
  live: {
    title: "Real-Time Threat Monitoring",
    description:
      "Real-time monitoring of access logs and data movement. UBOS provides an immediate Security Pulse, alerting administrators to unauthorized access attempts or compliance deviations the moment they occur across any module or organizational unit.",
  },
  predictive: {
    title: "Risk Prediction",
    description:
      "Proactive threat and risk detection. By analyzing patterns in financial transactions (Module O) and user behavior, the system predicts potential fraud or compliance breaches, allowing for Pre-emptive Auditing before an issue escalates.",
  },
  dashboards: {
    title: "Security Dashboards",
    description:
      "The Governance Center. View your compliance posture at a glance, with dedicated boards for Financial Audits (O1), HSE (C14), and Legal Matter status (C13), mapped directly against your corporate goal hierarchy.",
  },
  telemetry: {
    title: "Security Telemetry",
    description:
      "Uncompromising audit trails. Every action within the UBOS ecosystem—from a task reassignment to a multi-million naira wire transfer—is captured with immutable telemetry, feeding directly into the BOS Journaling Layer (A2 Appendix 1) for forensic-level accountability.",
  },
  integration: {
    title: "Compliance Integration",
    description:
      "Hardcoded Governance. Compliance isn't an afterthought; it's integrated into the workflow. Module B’s Cross-Entity Visibility rules ensure that data only flows where it is legally permitted, automatically enforcing the specific governance structures of your subsidiaries and JVs.Continuing the systematic drafting for the next two verticals. We are aligning the Sales & Growth engine (Win More Customers) and the Human Capital engine (Manage Your Employees) across the five functional pillars.",
  },
},

customers: {
  live: {
    title: "Customer Activity Tracking",
    description:
      "Never miss a beat in the sales cycle. From the moment a lead interacts with the BEAPOne CMS or signs up via the Affiliate Referral Management (A2-7.A), their data is live in your CRM. Real-time access to customer interaction history ensures your sales team strikes while the iron is hot.",
  },
  predictive: {
    title: "Customer Insights",
    description:
      "Identify High-Value targets before they even convert. By analyzing behavior across the Community Hub (C23) and Free LMS Certifications, UBOS predicts which prospects are most likely to subscribe to complex modules like Supply Chain (M) or Financial Management (O).",
  },
  dashboards: {
    title: "Customer Dashboards",
    description:
      "Visualize your entire revenue funnel. Track your Sales Pipeline (H2) in real-time, from initial CMS landing page hits to final contract execution. Dashboards allow you to slice data by industry vertical, geographic region, or specific referral channel.",
  },
  telemetry: {
    title: "Engagement Telemetry",
    description:
      "Deep-dive into customer journey metrics. Telemetry tracks not just if a customer bought, but how they use the platform. This data feeds back into the Enterprise Marketing (C16) module, allowing for hyper-personalized messaging based on actual product engagement.",
  },
  integration: {
    title: "CRM Integration",
    description:
      "Hardcoded Governance. Compliance isn't an afterthought; it's integrated into the workflow. Module B’s Cross-Entity Visibility rules ensure that data only flows where it is legally permitted, automatically enforcing the specific governance structures of your subsidiaries and JVs.",
  },
},

employees: {
  live: {
    title: "Workforce Visibility",
    description:
      "A real-time pulse on your global workforce. Monitor active task loads and organizational presence across all Org Units (B2). Whether an employee is in the Abuja office or managing a snail farm in Malaga, their operational status is visible instantly.",
  },
  predictive: {
    title: "Workforce Planning",
    description:
      "Forecast your resource needs with precision. By analyzing project lifecycles and historical task completion rates, UBOS predicts future burnout or under-utilization, suggesting proactive team realignments before deadlines are impacted.",
  },
  dashboards: {
    title: "HR Dashboards",
    description:
      "The Human Capital Command Center. View organizational health through the lens of performance, attendance, and goal attainment. Leaders can drill down from high-level departmental stats to individual Employee Management (B4-2) metrics in seconds.",
  },
  telemetry: {
    title: "Workforce Telemetry",
    description:
      "Quantify productivity without the guesswork. Telemetry captures granular work patterns across the Work Management (N) module, feeding into the Performance Management (C8) hub to provide objective, data-driven insights for appraisals and promotions.",
  },
  integration: {
    title: "HR System Integration",
    description:
      "Strategic Organizational Alignment. Every employee is integrated into the Reporting Line Management (B7) and Goal Hierarchy (B6). This ensures that an individual's daily tasks are always programmatically linked to the company’s mission, vision, and strategic objectives.To conclude the Capabilities draft, we focus on the Bottom Line and the Engine Room—integrating the complex financial and operational data from your Batch 1 and Batch 2 modules into a strategic, data-driven narrative.",
  },
},

finance: {
  live: {
    title: "Real-Time Financial Tracking",
    description:
      "Eliminate the month-end wait. UBOS provides a real-time stream of your General Ledger (O13), Accounts Payable (O11), and Receivable (O12). Whether it’s an invoice for snail feed in Spain or a tariff settlement for a Nigerian DISCO, the entry is visible the moment it is authorized.",
  },
  predictive: {
    title: "Financial Forecasting",
    description:
      "AI-driven cash flow forecasting. By analyzing your Budget Management (O9) against real-time project burn rates and Revenue Management (O4) trends, the system predicts liquidity gaps up to 12 months in advance, allowing for strategic capital allocation.",
  },
  dashboards: {
    title: "Finance Dashboards",
    description:
      "The CFO’s Command Center. View your financial health through highly visual, interactive boards. Switch instantly between Depreciation (O6) schedules, Taxation (O14) liabilities, and Loan Management (O8) status, tailored to your specific legal entity structure.",
  },
  telemetry: {
    title: "Financial Telemetry",
    description:
      "Forensic-grade financial tracking. Every transaction is tagged with rich metadata, capturing the who, what, where, and why. This telemetry feeds the Audit Management (O1) module, ensuring that every naira or euro is traceable and compliant with international standards.",
  },
  integration: {
    title: "Accounting Integration",
    description:
      "Automated financial handshakes. Finance is no longer a silo; it is the heartbeat of the system. A completed project phase in PPPM (K) automatically triggers a revenue recognition event, while a procurement order in Supply Chain (M2) instantly updates your Cost Management (O5) logs.",
  },
},

performance: {
  live: {
    title: "Team Performance Tracking",
    description:
      "Real-time visibility into the Engine Room. Monitor the Aggregated Task Register to see what every team is working on right now. With the is_aggregated_by_team_module flag, leaders have an unfiltered view of the workload distribution across all Org Units (B2).",
  },
  predictive: {
    title: "Performance Forecasting",
    description:
      "Anticipate bottlenecks before they stall progress. UBOS analyzes Schedule Management (K1) and team velocity to predict if a program is sliding off-track. The system suggests optimal Task Realignment to balance the load and meet your Functional-Level Goals.",
  },
  dashboards: {
    title: "Performance Dashboards",
    description:
      "The Performance Matrix. Compare team outputs with the Team Member Comparison Dashboard. Visualize progress against KPIs and Strategic Objectives, allowing managers to identify high-performing units and those requiring additional support or resource injection.",
  },
  telemetry: {
    title: "Performance Telemetry",
    description:
      "Objective productivity metrics. Move away from subjective appraisals. Telemetry tracks task dwell time, completion ratios, and Quality Management (K7) scores, providing the raw data needed for the Growth and Impact Hub (C8) to facilitate fair and fast-tracked upskilling.",
  },
  integration: {
    title: "Performance Tools Integration",
    description:
      "Structure-driven accountability. Team performance is directly linked to the Organizational Hierarchy (B2) and Reporting Lines (B7). This integration ensures that every team's output is automatically rolled up into Portfolio Management (K2) reports, keeping the entire enterprise aligned with the root mission.",
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
      <section className="bg-[#1B1464] text-white">
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
         That is a solid, systematic approach. By cross-referencing your Vertical Capabilities (the "What") with the Horizontal Functional Pillars (the "How"), we can create high-impact, technical copy that resonates with the sophisticated enterprise users BEAPOne is targeting.

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
