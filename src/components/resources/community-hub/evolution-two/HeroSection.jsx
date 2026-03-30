"use client";

import React from "react";
import {
  Radio,
  Clock,
  Share2,
  ArrowRight,
  CheckCircle2,
  Trophy,
  Zap,
  Users,
} from "lucide-react";

export default function HeroSection({ contributionType, setContributionType }) {
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

        {/* Hero Right: Register Card - Matching width lg:w-[600px] */}
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
            {/* Header with Title and the 3 Dashes (First one is active) */}
            <div className="flex items-start justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Register Your Profile
              </h3>
              <div className="flex items-center gap-1.5 mt-2.5">
                <div className="w-6 h-1.5 bg-[#1B1464] rounded-full"></div>
                <div className="w-6 h-1.5 bg-slate-200 rounded-full"></div>
                <div className="w-6 h-1.5 bg-slate-200 rounded-full"></div>
              </div>
            </div>

            {/* Interactive Contribution Type Selectors */}
            <div className="mb-6">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">
                CONTRIBUTION TYPE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Technical Liaison Box */}
                <button
                  onClick={() => setContributionType("technical")}
                  className={`p-4 rounded-xl border flex flex-col gap-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1464] ${
                    contributionType === "technical"
                      ? "border-[#1B1464] bg-[#F0F4FF] text-[#1B1464] shadow-sm"
                      : "border-gray-200 bg-white text-slate-900 hover:border-gray-300 hover:bg-slate-50"
                  }`}
                >
                  <Zap
                    size={20}
                    strokeWidth={2.5}
                    className={
                      contributionType === "technical"
                        ? "text-[#1B1464]"
                        : "text-slate-600"
                    }
                  />
                  <span className="text-sm font-bold tracking-tight">
                    Technical Liaison
                  </span>
                </button>

                {/* Community Lead Box */}
                <button
                  onClick={() => setContributionType("community")}
                  className={`p-4 rounded-xl border flex flex-col gap-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B1464] ${
                    contributionType === "community"
                      ? "border-[#1B1464] bg-[#F0F4FF] text-[#1B1464] shadow-sm"
                      : "border-gray-200 bg-white text-slate-900 hover:border-gray-300 hover:bg-slate-50"
                  }`}
                >
                  <Users
                    size={20}
                    strokeWidth={2.5}
                    className={
                      contributionType === "community"
                        ? "text-[#1B1464]"
                        : "text-slate-600"
                    }
                  />
                  <span className="text-sm font-bold tracking-tight">
                    Community Lead
                  </span>
                </button>
              </div>
            </div>

            {/* Continue Registration Button */}
            <a
              href="/home/resources/community-hub/evolution-three"
              className="w-full bg-black text-white text-[10px] font-bold uppercase tracking-widest py-4 px-6 rounded-xl hover:bg-gray-800 transition-all shadow-md flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black"
            >
              CONTINUE REGISTRATION <ArrowRight size={14} strokeWidth={2.5} />
            </a>

            {/* Sync Link */}
            <p className="text-center text-[10px] font-bold text-slate-500 mt-4">
              Already have a profile?{" "}
              <a
                href="/auth/login"
                title="Pending Connection"
                className="text-[#1B1464] hover:underline"
              >
                Sign In
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
