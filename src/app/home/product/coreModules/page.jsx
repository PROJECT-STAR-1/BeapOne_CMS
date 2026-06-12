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
import { modules } from "@/data/modules";
import content from "@/data/coreModulesContent.json";



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
