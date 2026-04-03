"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Download,
  FileText,
  Scale,
  LayoutGrid,
} from "lucide-react";

const DATA = {
  "2025 Cycle": {
    stats: {
      voters: "620,410",
      turnout: "81.2%",
      impact: "HIGH",
    },
    candidates: [
      {
        name: "Amara Okoye",
        votes: "210,554",
        score: "80.1%",
      },
      {
        name: "Daniel Kimani",
        votes: "198,332",
        score: "77.4%",
      },
    ],
  },
  "2024 Cycle": {
    stats: {
      voters: "540,220",
      turnout: "76.9%",
      impact: "MED",
    },
    candidates: [
      {
        name: "Lina Zhao",
        votes: "200,122",
        score: "78.5%",
      },
      {
        name: "Omar El-Sayed",
        votes: "180,442",
        score: "73.2%",
      },
    ],
  },
  "2023 Cycle": {
    stats: {
      voters: "498,000",
      turnout: "72.4%",
      impact: "LOW",
    },
    candidates: [
      {
        name: "Carlos Mendes",
        votes: "170,222",
        score: "70.1%",
      },
      {
        name: "Fatima Noor",
        votes: "160,110",
        score: "68.7%",
      },
    ],
  },
  "Initial 2022": {
    stats: {
      voters: "512,100",
      turnout: "74.8%",
      impact: "N/A",
    },
    candidates: [
      {
        name: "Dr. Sarah Adenuga",
        votes: "189,002",
        score: "76.3%",
      },
      {
        name: "Kwame Mensah",
        votes: "174,881",
        score: "72.1%",
      },
    ],
  },
};

export default function Page() {
  const [active, setActive] = useState("Initial 2022");
  const current = DATA[active];

  return (
    <div className="min-h-screen bg-[#F6F8FC]">
      {/* HEADER */}
      <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <ArrowLeft className="w-4 h-4 text-gray-600" />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              Historical Results Archive
            </p>
            <p className="text-xs text-gray-500">
              C23 Governance & Accountability Hub
            </p>
          </div>
        </div>

        <div className="text-xs bg-gray-100 px-3 py-1.5 rounded-md font-medium text-gray-700">
          RECORDS: 2022 – 2025
        </div>
      </div>

      {/* HERO */}
      <div className="bg-[#1B1A4B] text-white px-10 py-14">
        <h1 className="text-3xl font-semibold mb-3 tracking-tight">
          Governance Archive Hub
        </h1>
        <p className="text-sm text-gray-300 max-w-xl leading-relaxed">
          A transparent, immutable record of our community's democratic evolution.
          Review past leaders, audit logs, and the roadmaps that shaped UBOS.
        </p>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-12 gap-8 px-10 py-8">
        {/* LEFT */}
        <div className="col-span-8 space-y-6">
          {/* TABS */}
          <div className="flex gap-3">
            {Object.keys(DATA).map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                  ${
                    active === tab
                      ? "bg-[#1B1A4B] text-white shadow"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* RESULTS CARD */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold tracking-tight">
                Election Results: {active}
              </h2>
              <span className="text-[11px] px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                AUDIT COMPLETE
              </span>
            </div>

            {/* HEADER */}
            <div className="grid grid-cols-4 text-[11px] text-gray-400 tracking-wide mb-3">
              <span>CANDIDATE</span>
              <span>VOTES RECEIVED</span>
              <span>TURNOUT SCORE</span>
              <span>STATUS</span>
            </div>

            {/* ROWS */}
            {current.candidates.map((c, i) => (
              <div
                key={i}
                className="grid grid-cols-4 items-center py-4 border-t border-gray-100"
              >
                <div>
                  <p className="font-medium text-gray-900">{c.name}</p>
                  <p className="text-xs text-gray-500">
                    FOUNDING COUNCIL
                  </p>
                </div>

                <p className="font-semibold text-gray-800">
                  {c.votes}
                </p>

                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1B1A4B]"
                      style={{ width: c.score }}
                    />
                  </div>
                  <span className="text-xs text-gray-500">
                    {c.score}
                  </span>
                </div>

                <span className="text-[11px] px-3 py-1 bg-green-100 text-green-700 rounded-full w-fit font-medium">
                  ELECTED
                </span>
              </div>
            ))}
          </div>

          {/* AUDIT CARD */}
          <div className="bg-gradient-to-br from-[#1B1A4B] to-[#23206A] text-white rounded-2xl p-6 relative shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              {active} Audit Ledger Summary
            </h3>
            <p className="text-sm text-gray-300 max-w-lg leading-relaxed">
              The {active} cycle was certified by the Accountability Committee.
              All votes were verified via the Hub G cryptographic chain.
            </p>

            <div className="absolute right-6 top-6 border-2 border-green-400 text-green-400 px-4 py-2 rounded-md rotate-6 text-sm font-semibold">
              VERIFIED
              <div className="text-xs">C23-AC-LEGAL</div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-4 space-y-6">
          {/* STATS */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-gray-400 mb-4 tracking-wide">
              CYCLE STATISTICS
            </p>

            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-500">Total Voters</span>
              <span className="font-semibold">
                {current.stats.voters}
              </span>
            </div>

            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-500">Voter Turnout</span>
              <span className="font-semibold text-green-600">
                {current.stats.turnout}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-gray-500">STDR Impact</span>
              <span className="font-semibold">
                {current.stats.impact}
              </span>
            </div>
          </div>

          {/* DOCUMENTS */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <p className="text-[11px] font-semibold text-gray-400 mb-4">
              ARCHIVED DOCUMENTS
            </p>

            <div className="space-y-4 text-sm">
              <Doc icon={<FileText className="w-4 h-4 text-red-500" />} title="2025 Bylaws (v2.4)" />
              <Doc icon={<FileText className="w-4 h-4 text-gray-500" />} title="Council Roadmap Q4–25" />
              <Doc icon={<Scale className="w-4 h-4 text-yellow-500" />} title="Accountability Rulings ’25" />
            </div>
          </div>

          {/* NOTE */}
          <div className="bg-[#FFF7E6] border border-[#F5D48C] rounded-2xl p-5">
            <p className="text-[11px] font-semibold text-[#C58A00] mb-2">
              HISTORICAL NOTE
            </p>
            <p className="text-sm text-[#8A6B00] leading-relaxed">
              “The 2025 cycle marked the first deployment of the automated Hub G
              Journaling Service, ensuring zero data loss and tamper-proof voting.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Doc({ icon, title }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        {title}
      </div>
      <Download className="w-4 h-4 text-gray-500" />
    </div>
  );
}