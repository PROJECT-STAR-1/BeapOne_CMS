"use client";

import React from "react";
import {
  Radio,
  Clock,
  Share2,
  ArrowRight,
  CheckCircle2,
  Trophy,
  ChevronDown,
} from "lucide-react";

export default function HeroSection({
  identityName,
  setIdentityName,
  hubFocus,
  setHubFocus,
}) {
  return (
    <section className="w-full pt-12 pb-10 px-6 relative font-instrument-sans antialiased">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Hero Left */}
        <div className="flex-1 max-w-2xl">
          {/* Top Styling Pill */}
          <div className="inline-flex items-center gap-1.5 bg-[#E8F0FE] text-[#1B1464] text-[10px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-6">
            <Radio
              size={12}
              strokeWidth={3}
              className="text-[#1B1464] animate-pulse"
            />
            JOIN THE C23 EVOLUTION
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-[1.1] mb-5">
            Ready to <br className="hidden md:block" />
            <span className="text-[#1B1464]">Contribute</span> and{" "}
            <br className="hidden md:block" />
            Grow?
          </h1>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium max-w-xl mb-8">
            Our active members have reduced implementation time by{" "}
            <strong className="text-slate-900">40%</strong> using
            community-shared templates. Don't build alone—leverage the
            collective intelligence of the UBOS ecosystem.
          </p>

          {/* Left Stats Cards */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm w-full sm:w-[200px] flex flex-col justify-between min-h-[140px] hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#00C853] flex items-center justify-center mb-4">
                <Clock size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  40% Faster
                </h4>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  DEPLOYMENT SPEED
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm w-full sm:w-[200px] flex flex-col justify-between min-h-[140px] hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#F3E5F5] text-[#7B1FA2] flex items-center justify-center mb-4">
                <Share2 size={20} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  1.2k+
                </h4>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                  SHARED BLUEPRINTS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Right: Register Card - Step 3 Input Fields */}
        <div className="w-full lg:w-[600px] bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden flex-shrink-0 mt-4 lg:mt-0">
          {/* Background Watermark (G -- +) */}
          <div className="absolute right-0 top-0 bottom-0 w-full pointer-events-none select-none overflow-hidden flex items-start justify-end z-0">
            <div className="relative right-[-10px] top-[10px] opacity-[0.03]">
              <div className="flex items-center text-[120px] font-black text-black leading-none tracking-tighter">
                G <span className="ml-2">--</span>
              </div>
              <div className="text-[160px] font-black text-black leading-none absolute right-[80px] top-[60px]">
                +
              </div>
            </div>
          </div>

          <div className="relative z-10">
            {/* Header with Title and the 3 Dashes (All Three are active/blue for Step 3) */}
            <div className="flex items-start justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Register Your Profile
              </h3>
              <div className="flex items-center gap-1.5 mt-2.5">
                <div className="w-6 h-1.5 bg-[#1B1464] rounded-full"></div>
                <div className="w-6 h-1.5 bg-[#1B1464] rounded-full"></div>
                <div className="w-6 h-1.5 bg-[#1B1464] rounded-full"></div>
              </div>
            </div>

            {/* Form Inputs */}
            <div className="space-y-5 mb-8">
              {/* Identity Display Name */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  IDENTITY DISPLAY NAME
                </label>
                <input
                  type="text"
                  value={identityName}
                  onChange={(e) => setIdentityName(e.target.value)}
                  placeholder="e.g. Architect_Alpha"
                  className="w-full bg-[#F8F9FB] border border-gray-100 text-slate-800 placeholder:text-slate-400 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-shadow shadow-sm font-medium"
                />
              </div>

              {/* Primary Hub Focus Dropdown Simulation */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                  PRIMARY HUB FOCUS
                </label>
                <div className="relative">
                  <select
                    value={hubFocus}
                    onChange={(e) => setHubFocus(e.target.value)}
                    className="w-full bg-[#F8F9FB] border border-gray-100 text-slate-800 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-shadow shadow-sm font-medium appearance-none cursor-pointer"
                  >
                    <option value="Financial (Hub O)">Financial (Hub O)</option>
                    <option value="Security (Hub G)">Security (Hub G)</option>
                    <option value="Development (Hub A)">
                      Development (Hub A)
                    </option>
                    <option value="Design (Hub B)">Design (Hub B)</option>
                  </select>
                  {/* Custom Dropdown Chevron to match input style */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Registration Button */}
            <a
              href="#"
              className="w-full bg-black text-white text-[10px] font-bold uppercase tracking-widest py-4 px-6 rounded-xl hover:bg-gray-800 transition-all shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
            >
              CONTINUE REGISTRATION <ArrowRight size={14} strokeWidth={2.5} />
            </a>

            {/* Sync Link */}
            <p className="text-center text-[10px] font-bold text-slate-500 mt-4">
              Already have a profile?{" "}
              <a
                href="#"
                title="Pending Connection"
                className="text-[#1B1464] hover:underline"
              >
                Sync via Hub G
              </a>
            </p>
          </div>

          <div className="relative z-10 border-t border-gray-100 mt-8 pt-6 flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex items-start gap-2 flex-1">
              <CheckCircle2
                size={16}
                className="text-[#00C853] flex-shrink-0 mt-0.5"
                strokeWidth={2.5}
              />
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Encrypted Identity Storage via UBOS Core Protocol.
              </p>
            </div>
            <div className="flex items-start gap-2 flex-1">
              <Trophy
                size={16}
                className="text-[#FFB300] flex-shrink-0 mt-0.5"
                strokeWidth={2.5}
              />
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Start with 5.0 Baseline Merit Score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
