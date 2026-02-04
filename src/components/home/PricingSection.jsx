"use client";

import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl text-center">
        {/* Header */}
        <p className="text-sm font-semibold tracking-wide text-blue-600 mb-2">
          PRICING
        </p>
        <h2 className="text-4xl font-bold text-gray-900">
          Transparent Pricing for Every Stage of Growth
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choose the plan that fits your business needs. All plans include
          centralized administrative control, mobile access, and a dedicated
          Core Module set.
        </p>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Standard Plan */}
          <div className="rounded-2xl border border-gray-200 p-8 text-left shadow-sm">
            <h3 className="text-sm font-semibold text-blue-700 mb-2">
              STANDARD PLAN
            </h3>
            <p className="text-xs text-gray-500 mb-6">
              Access to core functional modules (Batch 1).
            </p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$XX</span>
              <span className="text-gray-600"> /user/month</span>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Billed annually. Includes Core Strategic Features.
            </p>

            <ul className="space-y-4 text-sm text-gray-700 mb-8">
              {[
                "All Batch 1 Modules (CRM, Financials, PPM, Work Mgmt)",
                "Standard Access to AI & Automation Engine",
                "E-Signature & E-Transcript Integration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full rounded-lg border border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition">
              Start 30-Day Free Trial
            </button>
          </div>

          {/* Professional Plan (Highlighted) */}
          <div className="rounded-2xl bg-[#1B1464] p-8 text-left shadow-lg relative">
            <h3 className="text-sm font-semibold text-white mb-2">
              PROFESSIONAL
            </h3>
            <p className="text-xs text-indigo-200 mb-6">
              Includes specialized industry & operational modules (Batch 2).
            </p>

            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$YY</span>
              <span className="text-indigo-200"> /user/month</span>
            </div>

            <p className="text-sm text-indigo-200 mb-6">
              Billed annually. Full suite of Compliance & Feature Integrations.
            </p>

            <ul className="space-y-4 text-sm text-white mb-8">
              {[
                "All Standard features",
                "All Batch 2 Modules (Supply Chain, E-Commerce, Manufacturing, SME Center)",
                "Advanced Analytics & Custom Dashboards",
                "Full IUBOS Certification & E-Invoicing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#1B1464] hover:bg-gray-100 transition">
              Choose Professional
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="rounded-2xl border border-gray-200 p-8 text-left shadow-sm">
            <h3 className="text-sm font-semibold text-blue-700 mb-2">
              ENTERPRISE PLAN
            </h3>

            <div className="mb-6">
              <span className="text-2xl font-bold text-gray-900">
                Custom Quote
              </span>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Contact sales for personalized pricing and SLA.
            </p>

            <ul className="space-y-4 text-sm text-gray-700 mb-8">
              {[
                "All Professional features",
                "Full 25 Modules Including Utility Management Suite, Healthcare, Hospitality",
                "Custom API & Technology Partner Integrations",
                "Dedicated Support & Advanced Data Governance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full rounded-lg border border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition">
              Start 30-Day Free Trial
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10">
          <button className="text-sm font-semibold text-gray-900 underline underline-offset-4">
            Explore all plans
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          *Prices are exclusive of local taxes.
        </p>
      </div>
    </section>
  );
}
