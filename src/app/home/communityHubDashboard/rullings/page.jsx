"use client";

import { useState } from "react";
import { Search, CheckCircle2 } from "lucide-react";

const casesData = [
  {
    id: "RUL-2025-0882",
    status: "UPHELD",
    topic: "Code of Conduct §4.2 (Certified Advice)",
    journal: "0xH37...9921",
    summary:
      "Volunteer User attempted to post non-certified tax advice in Hub O (Financial) regional forum. Post was flagged by Hub G telemetry and subsequently banned by Moderator-Sigma.",
    ruling:
      "The Accountability Committee finds the moderator acted within Section VII of the Bylaws. The advice posed a regulatory risk to West African SMEs. Ban remains PERMANENT.",
  },
  {
    id: "RUL-2025-0914",
    status: "OVERTURNED",
    topic: "Volunteer Task Rejection (Hub P Translation)",
    journal: "0xL99...8828",
  },
];

export default function AccountabilityPage() {
  const [query, setQuery] = useState("");

  const filteredCases = casesData.filter((c) => {
    const q = query.toLowerCase();
    return (
      c.id.toLowerCase().includes(q) ||
      c.topic?.toLowerCase().includes(q) ||
      c.summary?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-gray-800 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
            SUBMODULE C23.6.0
          </p>
          <h1 className="text-4xl font-semibold mb-3">
            Accountability Rulings: 2025
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Official record of dispute resolutions, moderation appeals, and code of
            conduct enforcement actions verified via Hub G.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { value: "142", label: "TOTAL ACTIONS" },
            { value: "98%", label: "UPHELD RATE", highlight: true },
            { value: "12", label: "APPEALS FILED" },
            { value: "100%", label: "AUDIT MATCH" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-6 text-center"
            >
              <div
                className={`text-2xl font-semibold ${
                  stat.highlight ? "text-green-600" : ""
                }`}
              >
                {stat.value}
              </div>
              <div className="text-xs tracking-widest text-gray-500 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="flex gap-3 mb-8">
          <div className="flex items-center flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full outline-none text-sm"
              placeholder="Search by Case ID or UserID..."
            />
          </div>

          <button
            onClick={() => setQuery("")}
            className="bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm"
          >
            Clear
          </button>
        </div>

        {/* Results */}
        {filteredCases.length === 0 && (
          <div className="text-center text-gray-500 py-10">
            No cases found.
          </div>
        )}

        {filteredCases.map((c, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-6 mb-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    c.status === "UPHELD"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {c.status}
                </span>

                <h2 className="text-lg font-semibold mt-2">
                  Case ID: {c.id}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Topic: {c.topic}
                </p>
              </div>

              <div className="text-right text-xs text-gray-400">
                <p className="uppercase tracking-wider mb-1">
                  Journal Reference
                </p>
                <p className="text-gray-700">{c.journal}</p>
              </div>
            </div>

            {c.summary && (
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs tracking-widest text-gray-400 mb-2">
                    DISPUTE SUMMARY
                  </p>
                  <p className="text-sm text-gray-700">{c.summary}</p>
                </div>

                <div>
                  <p className="text-xs tracking-widest text-gray-400 mb-2">
                    COMMITTEE RULING
                  </p>
                  <p className="text-sm text-gray-700">{c.ruling}</p>
                </div>
              </div>
            )}

            {c.summary && (
              <div className="flex justify-between items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-2" />
                  Mandatory Module Note Verified
                </div>
                <button className="text-sm text-indigo-600 font-medium">
                  READ FULL NARRATIVE
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-xs tracking-[0.3em] text-gray-400 mb-8">
            OFFICIAL RULINGS LEDGER : BEAPONE UBOS
          </p>

          <div className="flex items-center justify-center gap-10">
            <div className="text-center">
              <div className="h-[1px] w-24 bg-gray-300 mx-auto mb-2"></div>
              <p className="text-sm font-medium">LEAD AUDITOR</p>
              <p className="text-xs text-gray-400">
                Accountability Committee
              </p>
            </div>

            <div className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-lg font-semibold text-sm rotate-[-3deg]">
              CERTIFIED
              <br />
              <span className="text-xs font-normal">JOURNAL_V2025</span>
            </div>

            <div className="text-center">
              <div className="h-[1px] w-24 bg-gray-300 mx-auto mb-2"></div>
              <p className="text-sm font-medium">CHAIRPERSON</p>
              <p className="text-xs text-gray-400">
                Governing Council
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}