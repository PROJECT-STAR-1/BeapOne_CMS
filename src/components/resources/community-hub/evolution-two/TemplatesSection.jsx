"use client";

import React from "react";
import { LayoutTemplate } from "lucide-react";

export default function TemplatesSection() {
  return (
    <section className="w-full px-6 font-instrument-sans antialiased">
      <div className="max-w-[1200px] mx-auto">
        {/* Instant Access Templates Header */}
        <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-4">
          <LayoutTemplate size={16} strokeWidth={2.5} /> INSTANT ACCESS
          TEMPLATES
        </div>

        {/* Template Pills */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button className="bg-white border border-gray-200 rounded-full py-2.5 px-4 flex items-center gap-3 hover:border-gray-300 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1464]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1B1464]"></div>
              <span className="text-sm font-bold text-slate-900 tracking-tight">
                Agri-Logistics Base
              </span>
            </div>
            <div className="bg-[#E8F5E9] text-[#00C853] text-[10px] font-extrabold px-2 py-1 rounded-md">
              +42%
            </div>
          </button>

          <button className="bg-white border border-gray-200 rounded-full py-2.5 px-4 flex items-center gap-3 hover:border-gray-300 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1464]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1B1464]"></div>
              <span className="text-sm font-bold text-slate-900 tracking-tight">
                Fin-Hub Ledger v4
              </span>
            </div>
            <div className="bg-[#E8F5E9] text-[#00C853] text-[10px] font-extrabold px-2 py-1 rounded-md">
              +38%
            </div>
          </button>

          <button className="bg-white border border-gray-200 rounded-full py-2.5 px-4 flex items-center gap-3 hover:border-gray-300 hover:shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1464]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1B1464]"></div>
              <span className="text-sm font-bold text-slate-900 tracking-tight">
                Identity Validator
              </span>
            </div>
            <div className="bg-[#E8F5E9] text-[#00C853] text-[10px] font-extrabold px-2 py-1 rounded-md">
              +45%
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
