"use client";

import { Copy } from "lucide-react";

export default function ReferralBox() {
  const copy = () => {
    navigator.clipboard.writeText(
      "https://ubos.com/signup?ref=jane7721"
    );
  };

  return (
   <div className="flex gap-4 bg-white border border-[#E4E7EC] rounded-xl p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05)] items-center">
      <div className="flex-1">
        <p className="text-xs text-gray-400 mb-1 uppercase">
          Your Unique Referral Link
        </p>

      <div className="flex items-center border border-[#E4E7EC] rounded-lg px-3 py-2 bg-gray-50">
          <input
            className="flex-1 outline-none text-sm"
            value="https://ubos.com/signup?ref=jane7721"
            readOnly
          />
          <button onClick={copy}>
            <Copy size={16} />
          </button>
        </div>
      </div>

      <div className="w-[220px]">
        <p className="text-xs text-gray-400 mb-1 uppercase">
          Vanity Coupon Code
        </p>
        <div className="bg-indigo-600 text-white text-center py-3 rounded-lg font-medium">
          UBOS-JANE-20
        </div>
      </div>
    </div>
  );
}