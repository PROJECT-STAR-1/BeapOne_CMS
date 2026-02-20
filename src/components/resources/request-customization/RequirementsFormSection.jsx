"use client";

import React from "react";

export default function RequirementsFormSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-black mb-4 tracking-tight">
            Detail Your Requirements
          </h2>
          <p className="text-slate-500 text-sm">
            Use this form to detail your customization need. We will match you
            with an expert who has the specific regional and modular expertise.
          </p>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Scope of Work */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Scope of Work *
              </label>
              <select
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
                defaultValue="">
                <option value="" disabled>
                  Select customization scope
                </option>
                <option value="Workflow">Workflow Automation</option>
                <option value="Integration">API Integration</option>
                <option value="Reporting">Custom Reporting</option>
                <option value="FullBuild">Full App Build</option>
              </select>
            </div>

            {/* Primary Region */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Primary Operating Region *
              </label>
              <select
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
                defaultValue="">
                <option value="" disabled>
                  Select your region
                </option>
                <option value="NA">North America</option>
                <option value="EMEA">EMEA</option>
                <option value="APAC">APAC</option>
              </select>
            </div>
          </div>

          {/* Required Hub Expertise */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-black">
              Required Hub Expertise
            </label>
            <input
              type="text"
              placeholder="Financial Management (Hub O)"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
            />
          </div>

          {/* Detailed Requirements */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-black">
              Detailed Requirements (e.g., specific country compliance, existing
              systems to integrate) *
            </label>
            <textarea
              rows={8}
              placeholder="Enter message here"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm resize-none"></textarea>
          </div>

          <button
            type="button"
            className="bg-[#1B1464] text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
            Submit Customization Request
          </button>
        </form>
      </div>
    </section>
  );
}
