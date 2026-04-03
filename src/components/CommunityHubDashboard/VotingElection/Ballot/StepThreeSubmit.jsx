"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function StepThreeSubmit({ selected, onBack }) {
  const [isSigning, setIsSigning] = useState(false);

  return (
    <div className="max-w-md mx-auto mt-16 px-6">
      <button
        onClick={onBack}
        className="flex items-center text-sm text-gray-600 mb-6"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back
      </button>

      {/* STEP 1: FINAL CONFIRMATION */}
      {!isSigning && (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-gray-100 mb-4">
            <ShieldCheck className="text-indigo-600" size={24} />
          </div>

          <h2 className="text-xl font-semibold text-gray-900">
            Final Confirmation
          </h2>

          <p className="text-gray-500 mt-2 text-sm leading-relaxed">
            You are about to cryptographically secure your vote. This action is
            irreversible and will be logged in the public ledger.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border text-sm">
            <span className="text-yellow-500">🪙</span>
            Voting for{" "}
            <span className="font-semibold">
              {selected[0]?.name}
            </span>{" "}
            & {selected.length - 1} others
          </div>

          <button
            onClick={() => setIsSigning(true)}
            className="mt-6 w-full bg-indigo-800 hover:bg-indigo-900 transition text-white py-3 rounded-full font-medium"
          >
            Proceed to Digital Signature →
          </button>
        </div>
      )}

      {/* STEP 2: DIGITAL SIGNATURE */}
      {isSigning && (
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-700 tracking-wide flex items-center gap-2">
            ✍️ DIGITAL SIGNATURE REQUIRED
          </h3>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-gray-500 text-sm mb-4">
              Click below to authorize with Hub G Identity
            </p>

            <Link
              href="/home/communityHubDashboard"
              onClick={() => alert("Ballot Submitted")}
              className="w-full bg-indigo-800 hover:bg-indigo-900 transition text-white py-3 rounded-full font-medium flex items-center justify-center gap-2"
            >
              Authorize & Submit Ballot
              <ShieldCheck size={18} />
            </Link>
          </div>

          <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 text-sm">
            🔒 Your vote is secured using <strong>AES-256 encryption</strong>.
            The hash will be appended to the next block in the Community
            Governance Ledger.
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between text-sm">
            <div>
              <p className="text-gray-400 text-xs uppercase">
                Election Audit Reference
              </p>
              <p className="font-medium text-gray-800">
                UBOS-ELECT-2826-FB9A-7721
              </p>
            </div>

            <button className="text-indigo-600 font-medium">
              Receipt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}