"use client";

import React from "react";

export default function HeroSection() {
  return (
    // Replaced the indigo gradient with the extracted bg-[#1B1464]
    <section className="w-full bg-[#1B1464] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-white tracking-tight mb-6">
          FAQs
        </h1>
        <p className="text-white text-sm font-medium flex items-center gap-2">
         Resources <span className="opacity-40">/</span>{" "}
          <span className="font-bold">FAQs</span>
        </p>
      </div>
    </section>
  );
}
