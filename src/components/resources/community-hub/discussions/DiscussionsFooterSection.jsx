"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DiscussionsFooterSection() {
  return (
    <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-gray-200 flex justify-center">
      <Link
        href="/home/resources/community-hub-main"
        className="flex items-center gap-2 text-slate-500 hover:text-[#1B1464] font-bold text-sm transition-colors font-instrument-sans group">
        <ArrowLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Return to Main Community Hub
      </Link>
    </div>
  );
}
