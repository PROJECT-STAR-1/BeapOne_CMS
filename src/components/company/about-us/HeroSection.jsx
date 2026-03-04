"use client";

import React from "react";
import { Code } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#1B1464] py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 font-instrument-sans">
              The Universal Solution for Multi-Dimensional Business Complexity.
            </h1>
            <p className="text-indigo-100 text-lg leading-relaxed mb-8 max-w-xl font-instrument-sans">
              We deliver the Universal Business Operating System (UBOS): a
              single, integrated platform designed to eliminate silos and manage
              multi-tenant, multi-country, and multi-currency operations
              seamlessly. We turn complexity into control.
            </p>
            <button className="bg-[#0091FF] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#007acc] transition-colors shadow-lg font-instrument-sans">
              Book a Discovery Call
            </button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-[#120D45] rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-2xl border border-white/5 h-[320px]">
              <Code size={80} className="text-white mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-white mb-2 font-instrument-sans">
                Integrated Control Panel View
              </h3>
              <p className="text-indigo-200 text-lg font-instrument-sans">
                Hubs O, K, and P Unified.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
