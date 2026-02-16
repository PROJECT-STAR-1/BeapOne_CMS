"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#1B1464] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-white tracking-tight mb-6">
          What's New
        </h1>
        <p className="text-white text-sm font-medium flex items-center gap-2">
          Resources <span className="opacity-40">/</span>{" "}
          <span className="font-bold">What's New</span>
        </p>
      </div>
    </section>
  );
}
