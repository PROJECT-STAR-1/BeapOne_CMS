import {
  Shield,
  ArrowLeft,
  Printer,
  Download,
} from "lucide-react";

export default function AuditReport() {
  return (
    <div className="  flex justify-center ">
      <div className="w-full max-w-3xl">

        {/* Header top */}
        <div className="flex items-center gap-3 mb-6 text-gray-700">
          <ArrowLeft className="w-5 h-5" />
          <div>
            <h1 className="font-semibold text-lg">
              Audit Report — 2025 Election Cycle
            </h1>
            <p className="text-sm text-gray-500">
              Accountability Committee Document
            </p>
          </div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

          {/* Top Banner */}
          <div className="bg-indigo-950 text-white p-6 flex justify-between items-start">
            <div className="flex gap-4 items-center">
              <div className="bg-indigo-900 p-3 rounded-xl">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-bold tracking-wide text-lg">
                  ACCOUNTABILITY COMMITTEE
                </h2>
                <p className="text-sm text-indigo-300">
                  BEAPOne UBOS Community Governance Body
                </p>
              </div>
            </div>

            <div className="text-right text-sm">
              <p className="text-indigo-300">REPORT REFERENCE</p>
              <p className="font-semibold">
                C23-AUD-2025-CYCLE-F89
              </p>
              <p className="text-green-400 text-xs mt-1">
                ● AUTHENTICATED HUB G
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">

            {/* Executive Summary */}
            <h3 className="text-xs tracking-widest text-indigo-700 font-semibold mb-4">
              EXECUTIVE SUMMARY: 2025 ELECTION CYCLE
            </h3>

            <div className="grid grid-cols-4 gap-6 text-center mb-6">
              <Stat label="TOTAL VOTES CAST" value="1,120,442" />
              <Stat label="VOTER TURNOUT" value="91.4%" green />
              <Stat label="STDR IMPACT" value="34.2%" />
              <div>
                <p className="text-xs text-gray-500">AUDIT STATUS</p>
                <span className="mt-2 inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                  CERTIFIED
                </span>
              </div>
            </div>

            <hr className="my-6" />

            {/* Verification Breakdown */}
            <h3 className="text-xs tracking-widest text-indigo-700 font-semibold mb-4">
              VERIFICATION BREAKDOWN
            </h3>

            <div className="space-y-4 text-sm">
              <Row
                label="Hub O (Financial) Context Participation"
                value="412,880 Votes (36.8%)"
              />
              <Row
                label="Hub P (Farm Mgmt) Context Participation"
                value="285,110 Votes (25.4%)"
              />
              <Row
                label="West Africa Region (NG/GH/SL)"
                value="540,200 Votes (48.2%)"
              />
              <Row
                label="Integrity Check (Merkle-Tree Hash)"
                value="0x7a2…f85…221…e89"
              />
            </div>

            <hr className="my-6" />

            {/* Notes */}
            <h3 className="text-xs tracking-widest text-indigo-700 font-semibold mb-4">
              COMMITTEE FINDINGS & MODULE NOTES
            </h3>

            <div className="bg-gray-50 border rounded-xl p-5 text-sm text-gray-700 leading-relaxed">
              "The Accountability Committee has performed a full longitudinal
              audit of the 2025 Election Cycle. We confirm that all high-risk
              actions, including the final tally commit and candidate vetting,
              were accompanied by mandatory Module Notes in accordance with
              Appendix 6. There were zero instances of unauthorized data
              manipulation. The Support Ticket Deflection Rate (STDR) was
              calculated using Hub G Help Desk telemetry and is verified
              accurate within a 0.5% margin of error."
            </div>

            {/* Signatures + Seal */}
            <div className="flex justify-between items-end mt-10">
              <div className="flex gap-16">
                <Signature label="CHAIR, ACCOUNTABILITY COMM." />
                <Signature label="GOVERNANCE LEAD" />
              </div>

              <div className="border-2 border-green-500 text-green-600 px-4 py-2 rounded-lg rotate-[-6deg] text-sm font-semibold">
                OFFICIAL SEAL
                <div className="text-xs font-normal">
                  C23-AC-CERTIFIED
                </div>
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="bg-indigo-950 text-white text-center py-6">
            <p className="tracking-widest text-sm font-semibold">
              END OF AUDIT REPORT C23-AUD-2025
            </p>
            <p className="text-xs text-indigo-300 mt-1">
              This document is a certified extract from the Hub G Core
              Services Journaling Layer.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="flex items-center gap-2 bg-indigo-900 text-white px-5 py-2 rounded-full shadow">
            <Printer className="w-4 h-4" />
            Print Report
          </button>

          <button className="flex items-center gap-2 bg-white border px-5 py-2 rounded-full shadow">
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

/* Components */

function Stat({ label, value, green }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p
        className={`text-xl font-bold mt-1 ${
          green ? "text-green-500" : "text-gray-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-2">
      <span className="text-gray-700">{label}</span>
      <span className="text-gray-500">{value}</span>
    </div>
  );
}

function Signature({ label }) {
  return (
    <div>
      <div className="w-40 border-b mb-2"></div>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}