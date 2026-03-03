"use client";

import React from "react";
import Image from "next/image";
import { Link as LinkIcon, ArrowRight } from "lucide-react";

export default function CommunityImpactSection() {
  return (
    <section className="w-full bg-white font-instrument-sans">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-8 bg-[#1B1464]"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Scale of Community Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pl-4 md:pl-10">
          <div className="flex flex-col text-center md:text-left">
            <span className="text-8xl md:text-[120px] font-black text-black leading-none tracking-tighter">
              15K
            </span>
            <span className="text-xl font-bold text-[#FFB300] uppercase tracking-widest mt-2">
              CERTIFIED PROS
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-black mb-4">
              Global Talent Network
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              BEAPONE UBOS is now supported by the world's most rigorously
              vetted community of business system operators. Our learning
              ecosystem has successfully transitioned from a centralized support
              model to a decentralized expertise network, ensuring
              high-availability knowledge in every regional hub.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F9FA] border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-8 bg-[#1B1464]"></div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                The Official Registry
              </h2>
            </div>

            <h3 className="text-xl font-bold text-black mb-4">
              A Source of Truth for Talent
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Every certification earned is immutably recorded in the Official
              UBOS Certification Registry. This repository acts as the global
              validation layer for the ecosystem.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <LinkIcon size={16} className="text-[#FFB300]" /> Verifiable
                Certificate Hashes
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <LinkIcon size={16} className="text-[#FFB300]" /> Merit-Score
                Linkage
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                <LinkIcon size={16} className="text-[#FFB300]" /> Talent
                Marketplace Integration
              </li>
            </ul>

            <button className="bg-[#1B1464] text-white text-[11px] font-bold uppercase tracking-widest py-4 px-8 rounded-xl hover:opacity-90 transition-opacity w-fit flex items-center gap-2">
              EXPLORE REGISTRY PATHS <ArrowRight size={16} />
            </button>
          </div>

          {/* INCREASED IMAGE HEIGHT: min-h of 600px on large screens */}
          <div className="w-full h-[500px] lg:min-h-[600px] bg-slate-200 relative overflow-hidden">
            <Image
              src="/images/professional.jpg"
              alt="Certified Professional"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
