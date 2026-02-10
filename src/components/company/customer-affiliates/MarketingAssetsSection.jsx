"use client";

import React from "react";
import {
  ArrowRight,
  Download,
  FileText,
  Video,
  Briefcase,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

// Marketing Assets Data
const MARKETING_ASSETS = [
  {
    title: "High-Res Banners",
    description:
      "Static and GIF banners in all standard sizes (300x250, 728x90, 160x600).",
    buttonText: "Download .ZIP",
    topBorderColor: "#1B1464", // Dark Blue
    btnColor: "bg-[#1B1464]",
    icon: <Download size={20} />,
  },
  {
    title: "Pre-Written Copy",
    description:
      "Templates for LinkedIn, X, and Facebook, optimized for different UBOS Hubs (O, K, P).",
    buttonText: "View Template",
    topBorderColor: "#00C853", // Green
    btnColor: "bg-[#00C853]",
    icon: <FileText size={20} />,
  },
  {
    title: "Product Demo Reels",
    description:
      "Short, professional clips showcasing key features like multi-tenant GL consolidation.",
    buttonText: "Browse Video Library",
    topBorderColor: "#D50000", // Red
    btnColor: "bg-[#D50000]",
    icon: <Video size={20} />,
  },
  {
    title: "Brand Media Kit",
    description:
      "Official logos, color codes, and usage guidelines to ensure on-brand promotion.",
    buttonText: "Download Kit",
    topBorderColor: "#FBC02D", // Yellow
    btnColor: "bg-[#FBC02D]",
    icon: <Briefcase size={20} />,
  },
];

export default function MarketingAssetsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50/30">
      {/* Marketing Asset Library */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-black tracking-tight">
          Marketing Asset Library
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
        {MARKETING_ASSETS.map((asset, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300 border-t-[6px]"
            style={{ borderTopColor: asset.topBorderColor }}>
            <div className="h-32 bg-gray-100 rounded-lg mb-6 flex items-center justify-center text-gray-300">
              {/* Asset Preview Placeholder */}
              <div className="w-16 h-16 rounded-full bg-gray-200" />
            </div>
            <h3 className="text-lg font-bold text-[#1B1464] mb-3">
              {asset.title}
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow">
              {asset.description}
            </p>
            <button
              className={`w-full py-3 px-4 rounded-lg text-white font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ${asset.btnColor}`}>
              {asset.buttonText} <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Commission Structure Details */}
      <div className="text-left mb-10">
        <h2 className="text-3xl font-bold text-black tracking-tight">
          Commission Structure & Multi-Currency Payouts
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Payment Info Card */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border-t-[6px] border-[#1B1464]">
          <h3 className="text-xl font-bold text-[#1B1464] mb-6 flex items-center gap-2">
            <DollarSign className="w-5 h-5" /> How You Get Paid
          </h3>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              <span className="font-bold text-black">
                Tiered Recurring Commission:
              </span>{" "}
              Earn 10% (Bronze) to 20% (Platinum) on monthly subscription fees
              for the customer's entire lifetime with UBOS.
            </p>
            <p>
              <span className="font-bold text-black">
                Multi-Currency Conversion:
              </span>{" "}
              Commissions are calculated based on the customer's payment
              currency (Hub O), converted monthly to your preferred payout
              currency (USD, EUR, AUD) at the mid-market rate.
            </p>
            <p>
              <span className="font-bold text-black">
                Hub Specific Bonuses:
              </span>{" "}
              Earn a 5% one-off bonus for referring Enterprise clients who
              purchase the specialized Farm Management (Hub P) or Manufacturing
              (Hub J) packages.
            </p>
          </div>
        </div>

        {/* Compliance Info Card */}
        <div className="bg-white rounded-2xl p-10 shadow-sm border-t-[6px] border-[#00C853]">
          <h3 className="text-xl font-bold text-[#00C853] mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> Payouts, Terms, & Compliance
          </h3>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed mb-8">
            <p>
              <span className="font-bold text-black">Payout Schedule:</span>{" "}
              Monthly, on the last business day, for all commissions confirmed
              30 days prior.
            </p>
            <p>
              <span className="font-bold text-black">Methods:</span> Direct Bank
              Transfer (ACH/SEPA) or PayPal. Update your payment details in your
              Account Profile (Hub G).
            </p>
            <p>
              <span className="font-bold text-black">Compliance:</span> You must
              clearly disclose your affiliate relationship (FTC guidelines).
              Review the full Affiliate Terms & Conditions before promoting.
            </p>
          </div>
          <button className="w-full py-3.5 bg-[#00C853] text-white rounded-lg font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            See Onboarding Path <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
