"use client";

import React, { useState } from "react";

// --- DATA CONSTANTS ---
const DOC_NAVIGATION = [
  { id: "tos", label: "1. Platform Terms & Condition" },
  { id: "privacy", label: "2. Privacy Policy" },
  { id: "sla", label: "3. Service Level Agreement (SLAs)" },
  { id: "dpa", label: "4. Data Processing Addendum (DPA)" },
  { id: "compliance", label: "5. Global Compliance & Jurisdiction" },
  { id: "changelog", label: "6. Policy Change Log" },
];

const LEGAL_DOCS = {
  tos: {
    title: "1. Platform Terms & Conditions (TOS)",
    effectiveDate: "Effective Date: January 1, 2026",
    sections: [
      {
        id: "1.1",
        heading: "1.1 Multi-Tenant and Multi-Jurisdictional Use",
        text: "By accessing or using the BEAPone Universal Business Operating System (UBOS), you agree to be bound by these Terms of Service (TOS). This agreement governs all use of the platform across all tenants, user roles, countries, and currencies. The platform's multi-tenant architecture does not imply data segregation across different legal jurisdictions unless explicitly mandated by configuration within Hub B (Organizational Hierarchy) and Hub O (Financial Management).",
      },
      {
        id: "1.2",
        heading: "1.2 Scope of Service",
        text: "The Service includes the core UBOS modules (Hubs A, B, G, C), specialized hubs (O, K, P, M), and the associated API access. The use of custom integrations (as referenced in the Integrations Hub) is governed by separate API terms but remains subject to the core data security and use restrictions herein.",
      },
      {
        id: "1.3",
        heading: "1.3 Governing Law",
        text: "This TOS shall be governed by and construed in accordance with the laws of the jurisdiction where BEAPone Global Headquarters is registered, without regard to its conflict of law provisions. Disputes arising from multi-jurisdictional use will be addressed through arbitration in the aforementioned jurisdiction.",
      },
    ],
  },
  privacy: {
    title: "2. Privacy Policy",
    effectiveDate: "Effective Date: January 1, 2026",
    sections: [
      {
        id: "2.1",
        heading: "2.1 Data Collection & Usage",
        text: "We collect information necessary to provide the UBOS services, including user account credentials, usage data, and transaction logs. BEAPone acts as a Data Processor for the operational data you input into Hubs (e.g., employee records in Hub A, financial data in Hub O). You retain full ownership of your proprietary business data.",
      },
      {
        id: "2.2",
        heading: "2.2 Cross-Border Data Transfers",
        text: "Given the global nature of UBOS, data may be processed in regional cloud centers (AWS/Azure) aligned with your specific instance configuration. We utilize Standard Contractual Clauses (SCCs) to ensure the legality of data transfers between the EEA, UK, and other jurisdictions.",
      },
      {
        id: "2.3",
        heading: "2.3 User Rights",
        text: "Authorized users may request access to, correction of, or deletion of their personal data via the Data Privacy Officer (DPO) portal located in Hub G (Governance).",
      },
    ],
  },
  sla: {
    title: "3. Service Level Agreement (SLAs)",
    effectiveDate: "Effective Date: January 1, 2026",
    sections: [
      {
        id: "3.1",
        heading: "3.1 Uptime Guarantee",
        text: "BEAPone commits to a 99.9% Monthly Uptime Percentage for the Core Platform Services. Uptime is calculated per calendar month, excluding scheduled maintenance windows which are notified 48 hours in advance via Hub G (Notifications).",
      },
      {
        id: "3.2",
        heading: "3.2 Service Credits",
        text: "If we fail to meet the Uptime Guarantee, you will be eligible for a Service Credit calculated as a percentage of your monthly subscription fee: 10% credit for 99.0% - 99.89% uptime, and 25% credit for uptime below 99.0%.",
      },
      {
        id: "3.3",
        heading: "3.3 Support Response Times",
        text: "Critical Incidents (System Down) receive a response within 1 hour (24/7). Non-critical inquiries related to configuration or training are addressed within 1 business day.",
      },
    ],
  },
  dpa: {
    title: "4. Data Processing Addendum (DPA)",
    effectiveDate: "Effective Date: January 1, 2026",
    sections: [
      {
        id: "4.1",
        heading: "4.1 GDPR & CCPA Compliance",
        text: "This DPA forms part of the Master Subscription Agreement. It details the technical and organizational measures BEAPone employs to protect Customer Data in accordance with the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).",
      },
      {
        id: "4.2",
        heading: "4.2 Sub-processors",
        text: "BEAPone engages third-party sub-processors to support infrastructure (e.g., database hosting, content delivery). A current list of authorized sub-processors is maintained in the Compliance Center within Hub G5.",
      },
    ],
  },
  compliance: {
    title: "5. Global Compliance & Jurisdiction",
    effectiveDate: "Effective Date: January 1, 2026",
    sections: [
      {
        id: "5.1",
        heading: "5.1 Export Control",
        text: "The UBOS software is subject to export control laws and regulations. You agree not to access or use the platform in any jurisdiction prohibited by applicable export laws, including sanctioned countries.",
      },
      {
        id: "5.2",
        heading: "5.2 Tax Compliance (Hub O)",
        text: "While Hub O provides tools for tax calculation and reporting, the customer remains solely responsible for the accuracy of their financial filings and adherence to local tax authority regulations.",
      },
    ],
  },
  changelog: {
    title: "6. Policy Change Log",
    effectiveDate: "Last Updated: December 15, 2025",
    sections: [
      {
        id: "6.1",
        heading: "Version 2.4 (Dec 2025)",
        text: "Updated SLA terms to include the new 'Farm Management' vertical uptime guarantees. Revised Privacy Policy to explicitly mention AI-driven analytics processing.",
      },
      {
        id: "6.2",
        heading: "Version 2.3 (June 2025)",
        text: "Added regional compliance clauses for the APAC Operations Hub expansion. Updated DPA to reflect new sub-processors for document storage.",
      },
    ],
  },
};

export default function LegalDocumentViewerSection() {
  const [activeDoc, setActiveDoc] = useState("tos");
  const currentContent = LEGAL_DOCS[activeDoc];

  return (
    <section className="relative z-20 px-6 py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Terms and Conditions, Privacy Policy, Service Level Agreements
            (SLAs), and compliance documents governing the UBOS Platform.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/4">
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 sticky top-8">
              <div className="p-4 bg-gray-100 border-b border-gray-200 font-bold text-gray-700 text-sm">
                Document Navigation
              </div>
              <div className="flex flex-col">
                {DOC_NAVIGATION.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveDoc(item.id)}
                    className={`text-left px-4 py-3 text-sm font-medium transition-colors hover:bg-gray-100 ${
                      activeDoc === item.id
                        ? "text-[#1B1464] bg-white border-l-4 border-[#1B1464]"
                        : "text-gray-600 border-l-4 border-transparent"
                    }`}>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Document Content Area */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden min-h-[500px]">
              {/* Header */}
              <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
                <div className="text-xs font-bold text-[#0056D2] mb-1 tracking-wide">
                  {currentContent.effectiveDate}
                </div>
                <h3 className="text-2xl font-bold text-black">
                  {currentContent.title}
                </h3>
              </div>

              {/* Body Text */}
              <div className="p-8 space-y-8">
                {currentContent.sections.map((section) => (
                  <div key={section.id}>
                    {section.heading && (
                      <h4 className="text-base font-bold text-black mb-2">
                        {section.heading}
                      </h4>
                    )}
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
