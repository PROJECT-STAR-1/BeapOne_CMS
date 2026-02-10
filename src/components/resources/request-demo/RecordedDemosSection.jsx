"use client";

import React, { useState, useEffect } from "react";
import { Play, ArrowRight, X, Loader2 } from "lucide-react";

// Default Data with Video IDs
const DEFAULT_DEMOS = [
  {
    id: "demo-1",
    title: "Financial Hub Mastery",
    description:
      "See real-time AP/AR, forecasting (O10), and multi-jurisdictional compliance in action.",
    buttonText: "Watch Now (15 mins)",
    topBorderColor: "#1B1464", // Dark Blue
    btnColor: "bg-[#1B1464]",
    videoId: "0rOer3k2DWg",
  },
  {
    id: "demo-2",
    title: "Project, Program, Portfolio (PPPM)",
    description:
      "Deep dive into resource management (K10), risk mitigation (K6), and cross-entity reporting.",
    buttonText: "Watch Now (15 mins)",
    topBorderColor: "#00C853", // Green
    btnColor: "bg-[#00C853]",
    videoId: "t-KBFFeK0jk",
  },
  {
    id: "demo-3",
    title: "Specialized Vertical: Farm Management",
    description:
      "A look at specialized modules like BSF Larvae Production (P1-1) and Aquaculture (P9-1).",
    buttonText: "Watch Now (15 mins)",
    topBorderColor: "#D50000", // Red
    btnColor: "bg-[#D50000]",
    videoId: "RN2F8BFw3f8",
  },
];

const EXPERT_BENEFITS = [
  {
    title: "Multi-Dimensional Readiness",
    description:
      "Our experts understand the intricacies of setting up **multi-tenant, multi-location** workspaces and managing **multi-currency** transactions within Hub O (Financials).",
    buttonText: "Learn About Multi-Tenancy",
    topBorderColor: "#1B1464", // Dark Blue
    btnColor: "bg-[#1B1464]",
  },
  {
    title: "Hub Specialization & BPC",
    description:
      "We don't just sell software; we provide **Business & Project Consulting (BPC)** to design your ideal operating system across all 15+ UBOS Hubs.",
    buttonText: "Explore BPC Solutions",
    topBorderColor: "#00C853", // Green
    btnColor: "bg-[#00C853]",
  },
  {
    title: "Customized Implementation Roadmap",
    description:
      "Get a strategic deployment plan that aligns with your timeline, ensuring a smooth transition from your legacy systems to UBOS.",
    buttonText: "See Onboarding Path",
    topBorderColor: "#D50000", // Red
    btnColor: "bg-[#D50000]",
  },
];

export default function RecordedDemosSection({ demos = DEFAULT_DEMOS }) {
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  // Helper to parse text with **bold** markers safely
  const renderDescription = (text) => {
    const parts = text.split("**");
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className="font-bold text-slate-800">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  // Handle closing via Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openVideo = (video) => {
    setLoading(true);
    setActiveVideo(video);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
      {/* ----------------- VIDEO MODAL ----------------- */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all duration-300"
          onClick={() => setActiveVideo(null)}>
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20"
            onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-[#030B1A] text-white border-b border-white/10">
              <h3 className="font-bold text-sm md:text-lg truncate pr-4">
                {activeVideo.title}
              </h3>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <Loader2 className="animate-spin w-10 h-10 text-[#1B1464]" />
                </div>
              )}
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.videoId}?rel=0`}
                title={activeVideo.title}
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                onLoad={() => setLoading(false)}></iframe>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- RECORDED DEMOS GRID ----------------- */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-black tracking-tight">
          Watch Recorded Demos by UBOS Hub
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {demos.map((demo, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300 flex flex-col h-full border-t-[8px]"
            style={{ borderTopColor: demo.topBorderColor }}>
            <div className="h-40 bg-gray-100 rounded-xl mb-6 flex items-center justify-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-slate-200/50 group-hover:bg-slate-200/20 transition-colors" />
              <button
                onClick={() => openVideo(demo)}
                className="z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-[#1B1464] hover:scale-110 transition-transform duration-300">
                <Play size={24} fill="currentColor" className="ml-1" />
              </button>
            </div>

            <h3 className="text-xl font-bold text-[#1B1464] mb-3">
              {demo.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
              {demo.description}
            </p>
            <button
              onClick={() => openVideo(demo)}
              className={`w-full py-3 px-6 rounded-full text-white font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ${demo.btnColor}`}>
              {demo.buttonText} <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* ----------------- EXPERT BENEFITS GRID ----------------- */}
      <div className="text-left mb-10">
        <h2 className="text-3xl font-bold text-black tracking-tight">
          Why Speak to a Certified UBOS Expert?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {EXPERT_BENEFITS.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full border-t-[8px]"
            style={{ borderTopColor: benefit.topBorderColor }}>
            <h3 className="text-xl font-bold text-[#1B1464] mb-4">
              {benefit.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
              {renderDescription(benefit.description)}
            </p>
            <button
              className={`w-full py-3 px-6 rounded-full text-white font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ${benefit.btnColor}`}>
              {benefit.buttonText} <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
