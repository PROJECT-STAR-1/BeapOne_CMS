"use client";

import React from "react";

export default function ConsultationFormSection() {
  return (
    <section className="relative z-20 px-6 py-16 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
            Book Your Personalized Consultation
          </h2>
          <p className="text-slate-500 text-sm">
            Tell us about your organization so we can connect you with the right
            multi-country/multi-currency expert.
          </p>
        </div>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
              />
            </div>

            {/* Work Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Work Email *
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
              />
            </div>

            {/* Operating Region */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Operating Region *
              </label>
              <select
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
                defaultValue="">
                <option value="" disabled>
                  Select primary operating region
                </option>
                <option value="NA">North America</option>
                <option value="EMEA">EMEA</option>
                <option value="APAC">APAC</option>
              </select>
            </div>

            {/* Company Size */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Company Size (Employees) *
              </label>
              <select
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
                defaultValue="">
                <option value="" disabled>
                  Select range
                </option>
                <option value="1-50">1-50</option>
                <option value="51-200">51-200</option>
                <option value="201-1000">201-1000</option>
                <option value="1000+">1000+</option>
              </select>
            </div>

            {/* Industry Vertical */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Industry Vertical
              </label>
              <select
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
                defaultValue="">
                <option value="" disabled>
                  Select industry
                </option>
                <option value="Finance">Finance & Fintech</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Agriculture">Agriculture / Farming</option>
                <option value="Construction">Real Estate / Construction</option>
              </select>
            </div>

            {/* Primary Hub */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Primary Hub of Interest
              </label>
              <select
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
                defaultValue="">
                <option value="" disabled>
                  General UBOS Overview
                </option>
                <option value="O">Financial Management (Hub O)</option>
                <option value="K">Project Management (Hub K)</option>
                <option value="J">Manufacturing (Hub J)</option>
              </select>
            </div>
          </div>

          {/* Specific Needs */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-black">
              Your Specific Needs (Multi-Currency, Multi-Location, Multi-Tenant
              Requirements)
            </label>
            <textarea
              rows={6}
              placeholder="Enter message here"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm resize-none"></textarea>
          </div>

          <button
            type="button"
            className="bg-[#1B1464] text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
            Require Demo & Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
