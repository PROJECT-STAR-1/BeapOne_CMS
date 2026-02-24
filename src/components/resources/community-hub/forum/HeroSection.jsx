"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-white border-b border-gray-200 py-16 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl md:text-3xl font-bold text-slate-400 uppercase tracking-wide">
          <Link
            href="/home/resources/community-hub-main"
            className="hover:text-slate-600 transition-colors">
            COMMUNITY HUB
          </Link>{" "}
          / <span className="text-[#1B1464]">FORUMS & Q&A</span>
        </div>
        <button className="bg-[#1B1464] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg">
          <Plus size={18} /> Start Discussion
        </button>
      </div>
    </section>
  );
}
