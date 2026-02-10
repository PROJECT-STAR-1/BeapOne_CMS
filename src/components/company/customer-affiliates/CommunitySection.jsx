"use client";

import React from "react";

export default function CommunitySection() {
  return (
    <section className="w-full bg-[#1B1464] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          Engage with the Affiliate Community
        </h2>
        <p className="text-indigo-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Discuss strategies, share tips, and compete on the affiliate
          leaderboards in the Community Hub.
        </p>
        <button className="bg-white text-[#1B1464] px-8 py-3.5 rounded-full font-bold text-sm md:text-base shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-50">
          Go to Community Hub
        </button>
      </div>
    </section>
  );
}
