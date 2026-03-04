"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function OurStorySection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 tracking-tight font-instrument-sans">
            Our Story: The Friction of Silos
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-instrument-sans">
            We didn't set out to build another ERP. We set out to eliminate the
            fundamental friction of modern, global business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* The Problem Card */}
          <div className="border border-gray-100 bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-[#00C853] mb-4 font-instrument-sans">
              The Problem: Disconnected Systems
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm font-instrument-sans">
              Before UBOS, global businesses were forced to juggle dozens of
              systems for specialized needs: one for finance (Hub O), one for
              projects (Hub K), and a completely separate vertical solution (Hub
              P/J). This fragmented approach created data bottlenecks,
              compliance risks, and wasted resources on manual reconciliation.
            </p>
            <ul className="space-y-3 text-slate-500 text-sm list-disc pl-5 font-instrument-sans">
              <li>
                Inconsistent reporting across multi-currency jurisdictions.
              </li>
              <li>
                High costs and low visibility due to siloed data structures.
              </li>
              <li>
                Inability to trace project costs (Hub K) directly to financial
                impact (Hub O).
              </li>
            </ul>
          </div>

          {/* The Solution Card */}
          <div className="border border-gray-100 bg-white rounded-3xl p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <h3 className="text-2xl font-bold text-[#D50000] mb-4 font-instrument-sans">
              The Solution: The Universal Operating System
            </h3>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm flex-grow font-instrument-sans">
              BEAPone UBOS solves this by providing a truly universal kernel.
              All Hubs—whether it's{" "}
              <span className="font-bold text-black">Core Systems (Hub G)</span>{" "}
              or a vertical like{" "}
              <span className="font-bold text-black">
                Farm Management (Hub P)
              </span>
              —run on a single data model. This means immediate, consolidated
              visibility and compliance from a single dashboard.
            </p>
            <button className="w-full bg-[#D50000] text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b00000] transition-colors font-instrument-sans">
              See Our Unified API & Integrations <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
