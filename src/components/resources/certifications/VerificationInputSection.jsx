"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

export default function VerificationInputSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative z-20 px-6 py-12 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
          Verify UBOS Credentials
        </h2>
        <p className="text-slate-500 text-lg mb-8">
          Enter a Certificate ID to instantly verify the holder's active
          certification status.
        </p>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative flex items-center group">
            <input
              type="text"
              placeholder="e.g UBOS-EXP-A1B2C3D4"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 text-black placeholder:text-gray-400 rounded-full py-4 pl-8 pr-16 text-lg focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-all border border-transparent focus:bg-white focus:shadow-lg"
            />
            <button className="absolute right-3 p-2 bg-transparent text-slate-400 hover:text-[#1B1464] transition-colors">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
