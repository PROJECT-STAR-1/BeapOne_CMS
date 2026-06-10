"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "FREE PLAN",
      description: "Essential modules to get started at no cost.",
      price: "₦0",
      billing: "Free forever.",
      buttonText: "Get Started Free",
      highlighted: false,
      features: [
        "K Module Stack",
        "B Module Stack",
        "C Module Stack",
        "N Module Stack",
        "O Module Stack",
      ],
    },
    {
      name: "STANDARD",
      subtitle: "10 Module Bundle Plan",
      price: "₦2,500",
      billing: "Price/Org/Month Billed Annually",
      buttonText: "Start my free trial",
      highlighted: false,
      features: [
        "All Batch 1 Modules (CRM, Financials, PPM, Work Mgmt)",
        "Standard Access to AI & Automation Engine",
        "E-Signature & E-Transcript Integration",
      ],
    },
    {
      name: "PROFESSIONAL",
      subtitle: "14 Module Bundle Plan",
      price: "₦5,500",
      billing: "Price/Org/Month Billed Annually",
      buttonText: "Start my free trial",
      highlighted: true,
      features: [
        "All Standard features",
        "All Batch 2 Modules (Supply Chain, E-Commerce, Manufacturing, SME Center)",
        "Advanced Analytics & Custom Dashboards",
        "Full IUBOS Certification & E-Invoicing",
      ],
    },
    {
      name: "PREMIUM",
      subtitle: "18 Module Bundle Plan",
      price: "₦6,500",
      billing: "Price/Org/Month Billed Annually",
      buttonText: "Start my free trial",
      highlighted: false,
      features: [
        "All Professional features",
        "Enhanced Analytics & Reporting",
        "Extended Industry-Specific Modules",
        "Advanced Compliance Tools",
      ],
    },
    {
      name: "ELITE",
      subtitle: "22 Module Bundle Plan",
      price: "₦10,500",
      billing: "Price/Org/Month Billed Annually",
      buttonText: "Start my free trial",
      highlighted: false,
      features: [
        "All Premium features",
        "Full 25 Modules Including Utility Management Suite",
        "Custom API & Technology Partner Integrations",
        "Dedicated Support & Advanced Data Governance",
      ],
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState("FREE PLAN");

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-[1600px] text-center">
        {/* Header */}
        <p className="mb-2 text-sm font-semibold tracking-wide text-blue-600">
          PRICING
        </p>

        <h2 className="text-4xl font-bold text-gray-900">
          Transparent Pricing for Every Stage of Growth
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Choose the plan that fits your business needs. All plans include
          centralized administrative control, mobile access, and a dedicated
          Core Module set.
        </p>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-5">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.name;

            return (
              <div
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`relative overflow-hidden rounded-2xl p-8 text-left cursor-pointer transition-all duration-300
                  ${
                    plan.highlighted
                      ? "bg-[#1B1464]"
                      : "bg-white border border-gray-200"
                  }
                  ${
                    isSelected
                      ? "ring-4 ring-blue-500 scale-105 shadow-2xl"
                      : "shadow-sm hover:shadow-lg"
                  }
                `}
              >
                {plan.highlighted && (
                  <div className="absolute left-0 right-0 top-0 bg-green-500 py-2 text-center text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}

                {isSelected && (
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Check className="h-5 w-5" />
                  </div>
                )}

                <div className={plan.highlighted ? "pt-6" : ""}>
                  <h3
                    className={
                      plan.highlighted
                        ? "mb-2 text-sm font-semibold text-white"
                        : "mb-2 text-sm font-semibold text-blue-700"
                    }
                  >
                    {plan.name}
                  </h3>

                  {plan.description && (
                    <p
                      className={
                        plan.highlighted
                          ? "mb-6 text-xs text-indigo-200"
                          : "mb-6 text-xs text-gray-500"
                      }
                    >
                      {plan.description}
                    </p>
                  )}

                  {plan.subtitle && (
                    <p
                      className={
                        plan.highlighted
                          ? "mb-2 text-xs text-indigo-200"
                          : "mb-2 text-xs text-gray-500"
                      }
                    >
                      {plan.subtitle}
                    </p>
                  )}

                  <div className="mb-6">
                    <span
                      className={
                        plan.highlighted
                          ? "text-4xl font-bold text-white"
                          : "text-4xl font-bold text-gray-900"
                      }
                    >
                      {plan.price}
                    </span>
                  </div>

                  <p
                    className={
                      plan.highlighted
                        ? "mb-6 text-sm text-indigo-200"
                        : "mb-6 text-sm text-gray-500"
                    }
                  >
                    {plan.billing}
                  </p>

                  <ul
                    className={
                      plan.highlighted
                        ? "mb-8 space-y-4 text-sm text-white"
                        : "mb-8 space-y-4 text-sm text-gray-700"
                    }
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={
                            plan.highlighted
                              ? "mt-0.5 h-5 w-5 text-white"
                              : "mt-0.5 h-5 w-5 text-blue-600"
                          }
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={
                      isSelected
                        ? "w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition"
                        : plan.highlighted
                        ? "w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-[#1B1464] transition hover:bg-gray-100"
                        : "w-full rounded-lg border border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                    }
                  >
                    {isSelected ? "Selected" : plan.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Plan Display */}
        <div className="mt-10">
          <p className="text-lg font-semibold text-gray-900">
            Selected Plan:
            <span className="ml-2 text-blue-600">{selectedPlan}</span>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6">
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