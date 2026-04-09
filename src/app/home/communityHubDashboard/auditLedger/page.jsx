"use client";

import {
  Shield,
  CheckCircle2,
  Printer,
  FileDown,
} from "lucide-react";

export default function LedgerPage() {
  const rows = [
    {
      date: "2026-02-14 14:22:10",
      title: "Forum Engagement",
      subtitle: "Hub G Topic Reply (Best Practices)",
      ref: "POST-7721-X",
      points: "+10.0",
      balance: "20,458.0",
      color: "text-green-600",
    },
    {
      date: "2026-02-12 09:15:44",
      title: "Knowledge Base Approval",
      subtitle: 'Article: "Automated VAT Reconciliation"',
      ref: "KB-DOC-8892",
      points: "+50.0",
      balance: "20,448.0",
      color: "text-green-600",
    },
    {
      date: "2026-02-05 11:00:00",
      title: "Certification Multiplier Applied",
      subtitle: "LRMS Governance Ethics (1.2x Boost)",
      ref: "CERT-ETH-118",
      points: "x1.2",
      balance: "20,398.0",
      color: "text-blue-700",
    },
    {
      date: "2026-01-28 16:45:12",
      title: "Manual Adjustment (Override)",
      subtitle: '"Dispute Resolution RUL-2025-0914"',
      ref: "NOTE-MOD-771",
      points: "+150.0",
      balance: "16,998.0",
      color: "text-green-600",
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center  px-4">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="p-8">
          <div className="flex justify-between items-start">
            <div className="flex gap-4 items-center">
              <div className="bg-indigo-900 text-white p-3 rounded-lg">
                <Shield size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-widest text-indigo-900">
                  GAMIFICATION AUDIT LEDGER
                </h1>
                <p className="text-xs text-gray-500 tracking-wide">
                  C23 COMMUNITY HUB ENGINE • HUB G VERIFIED
                </p>
              </div>
            </div>

            <div className="border-2 border-teal-400 text-teal-600 px-6 py-3 rounded-xl rotate-[-5deg] text-xs font-semibold text-center">
              LEDGER CERTIFIED
              <div className="text-[10px] text-gray-500 mt-1">
                ACCOUNTABILITY COMM.
              </div>
            </div>
          </div>

          {/* META ROW */}
          <div className="grid grid-cols-4 gap-6 mt-8 text-sm">
            <div>
              <p className="text-gray-400 text-xs">MEMBER USERID</p>
              <p className="font-semibold">USR-7742-ALPHA</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">CURRENT BADGELEVEL</p>
              <p className="font-semibold text-indigo-800">
                9.2 (Expert)
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">PRIMARY HUB CONTEXT</p>
              <p className="font-semibold">Hub G (Financial)</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs">EXPORT DATE</p>
              <p className="font-semibold">Feb 15, 2026</p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-indigo-900"></div>

        {/* STATS */}
        <div className="grid grid-cols-3 text-center py-10 px-6">
          <div>
            <p className="text-xs text-gray-400 tracking-widest">
              ACTIVITY XP
            </p>
            <p className="text-3xl font-bold mt-2">8,400</p>
            <p className="text-xs text-gray-400 mt-1">
              Posts, Comments, Votes
            </p>
          </div>

          <div className="border-x">
            <p className="text-xs text-gray-400 tracking-widest">
              KNOWLEDGE XP
            </p>
            <p className="text-3xl font-bold mt-2">12,058</p>
            <p className="text-xs text-gray-400 mt-1">
              Approved KB & Resources
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400 tracking-widest">
              MULTIPLIER MULTI-SYNC
            </p>
            <p className="text-3xl font-bold mt-2 text-indigo-800">
              1.2x
            </p>
            <p className="text-xs text-gray-400 mt-1">
              LRMS Governance Certified
            </p>
          </div>
        </div>

        {/* TABLE */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-6 text-xs text-gray-400 border-b pb-3">
            <div>DATE / TIMESTAMP</div>
            <div className="col-span-2">EVENT DESCRIPTION</div>
            <div>REFERENCE ID</div>
            <div>POINTS</div>
            <div>BALANCE</div>
          </div>

          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-6 py-4 border-b text-sm items-center"
            >
              <div className="text-gray-500">{row.date}</div>

              <div className="col-span-2">
                <p
                  className={`font-medium ${
                    row.highlight ? "text-amber-500" : ""
                  }`}
                >
                  {row.title}
                </p>
                <p className="text-xs text-gray-400">{row.subtitle}</p>
              </div>

              <div className="text-indigo-800 font-medium">
                {row.ref}
              </div>

              <div className={`${row.color} font-semibold`}>
                {row.points}
              </div>

              <div className="font-semibold">{row.balance}</div>
            </div>
          ))}
        </div>

        {/* VERIFICATION BLOCK */}
        <div className="bg-gray-50 px-8 py-8 text-sm text-gray-600">
          <h3 className="text-xs tracking-widest text-gray-400 mb-4">
            ACCOUNTABILITY COMMITTEE VERIFICATION
          </h3>

          <p className="italic text-gray-500 leading-relaxed">
            "This ledger is a certified extract from the Hub G Core Services
            Journal. Every point entry corresponds to a verified UserID action.
            Manual adjustments (highlighted in amber) are cross-referenced with
            mandatory Module Notes and approved by the Accountability Committee.
            The cryptographic hash at the top of this document serves as the
            final proof of integrity."
          </p>

          <div className="mt-6 space-y-2">
            <div className="flex items-center gap-2 text-green-600 font-semibold">
              <CheckCircle2 size={18} />
              LEDGER INTEGRITY: VERIFIED
            </div>

            <div className="flex items-center gap-2 text-indigo-800 font-semibold">
              <Shield size={18} />
              JOURNAL SYNC: STABLE (HUB G)
            </div>
          </div>

          <div className="grid grid-cols-2 mt-10 text-xs text-gray-400">
            <div>SYSTEM AUDITOR</div>
            <div className="text-right">GOVERNANCE LEAD</div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="bg-indigo-900 text-white px-8 py-5 flex justify-between items-center">
          <div className="text-xs tracking-widest">
            C23. 5.0 GAMIFICATION ENGINE
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-white px-4 py-2 rounded-md text-sm">
              <Printer size={16} />
              Print Official Ledger
            </button>

            <button className="flex items-center gap-2 bg-red-500 px-4 py-2 rounded-md text-sm">
              <FileDown size={16} />
              Save as Secure PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}