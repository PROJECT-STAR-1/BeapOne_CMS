"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

// Affiliate Dashboard Stats
const AFFILIATE_STATS = [
  {
    label: "Clicks / Conversions",
    value: "4,200 / 18",
    subtext: "Conversion Rate: 0.43%",
    borderColor: "#1B1464", // Dark Blue
    textColor: "text-[#1B1464]",
  },
  {
    label: "Pending Commission (USD)",
    value: "$2,750.00",
    subtext: "Next Payout: DEC 31, 2025",
    borderColor: "#00C853", // Green
    textColor: "text-[#00C853]",
  },
  {
    label: "Referred Customer LTV",
    value: "$15,400",
    subtext: "Avg. customer value for 12 months.",
    borderColor: "#D50000", // Red
    textColor: "text-[#D50000]",
  },
  {
    label: "Affiliate Tier",
    value: "Gold Partner",
    subtext: "15% commission rate achieved.",
    borderColor: "#FBC02D", // Yellow
    textColor: "text-[#FBC02D]",
  },
];

export default function ReferralDashboardSection() {
  const [referralLink] = useState(
    "https://ubos.com/partner?ref=UBOS-7B68EE-AFF",
  );
  const [couponCode] = useState("UBOS-JANE-20");
  const [copiedState, setCopiedState] = useState(null); // 'link' | 'code' | null

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedState(type);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopiedState(null);
    }, 2000);
  };

  return (
    <section className="relative z-20 px-6 py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4 tracking-tight">
            Your Unique Referral Link & Code
          </h2>
          <p className="text-slate-500 text-sm">
            Tell us about your organization so we can connect you with the right
            multi-country/multi-currency expert.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {/* Referral Link Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-black">
              Link (Multi-Region Tracking)
            </label>
            <div className="flex gap-4">
              <input
                readOnly
                value={referralLink}
                className="flex-1 p-4 bg-gray-50 border border-gray-200 rounded-lg text-slate-600 text-sm focus:outline-none"
              />
              <button
                onClick={() => copyToClipboard(referralLink, "link")}
                className="bg-[#1B1464] text-white px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 min-w-[140px]">
                {copiedState === "link" ? (
                  <>
                    <Check size={16} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy Link
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Coupon Code Input */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-black">
              Vanity Coupon Code
            </label>
            <div className="flex gap-4">
              <input
                readOnly
                value={couponCode}
                className="flex-1 p-4 bg-gray-50 border border-gray-200 rounded-lg text-slate-600 text-sm focus:outline-none"
              />
              <button
                onClick={() => copyToClipboard(couponCode, "code")}
                className="bg-[#FBC02D] text-black px-8 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 min-w-[140px]">
                {copiedState === "code" ? (
                  <>
                    <Check size={16} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy Code
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {AFFILIATE_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-t-[6px]"
              style={{ borderTopColor: stat.borderColor }}>
              <p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
                {stat.label}
              </p>
              <h3 className={`text-2xl font-bold mb-2 ${stat.textColor}`}>
                {stat.value}
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
