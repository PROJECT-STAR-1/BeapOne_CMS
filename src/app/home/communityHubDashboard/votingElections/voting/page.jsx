import {
  ShieldCheck,
  FileText,
  Download,
  ThumbsUp,
  ThumbsDown,
  Lock,
  Archive,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-[#f5f7fb] min-h-screen px-6 py-6 text-[#0f172a]">
      {/* Top Bar */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <p>
          Community Hub <span className="mx-2">›</span>{" "}
          <span className="text-gray-700 font-medium">
            Voting & Elections Resource
          </span>
        </p>

        <div className="flex items-center gap-4">
          <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-medium">
            ELECTION CYCLE: 2026
          </span>
          <button className="text-sm text-blue-600 font-medium">
            Voter Handbook (PDF)
          </button>
        </div>
      </div>

      {/* HERO */}
      <div className="bg-[#1f2a3a] text-white rounded-2xl px-10 py-10 flex justify-between items-center">
        <div>
          <h1 className="text-[34px] font-semibold mb-3 tracking-tight">
            Your Voice, Our System.
          </h1>

          <p className="text-gray-300 max-w-xl leading-relaxed">
            Participate in the global UBOS self-governance. Elect leaders, vote
            on critical system roadmaps, and uphold the platform's ethical
            standards.
          </p>

          <div className="flex gap-14 mt-8">
            <div>
              <p className="text-[11px] tracking-widest text-gray-400">
                TOTAL ELIGIBLE VOTERS
              </p>
              <p className="text-3xl font-semibold mt-1">
                1,240,500
              </p>
            </div>

            <div>
              <p className="text-[11px] tracking-widest text-gray-400">
                CURRENT TURNOUT
              </p>
              <p className="text-3xl font-semibold text-[#22c55e] mt-1">
                92.4%
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder Card */}
        <div className="w-[280px] h-[120px] bg-[#2c3a4d] rounded-xl opacity-70 flex flex-col justify-center px-6 gap-3">
          <div className="h-3 bg-gray-500/40 rounded w-3/4" />
          <div className="h-3 bg-gray-500/30 rounded w-1/2" />
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* LEFT */}
        <div className="col-span-2 space-y-6">
          {/* SECTION HEADER */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Active Elections</h2>
            <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
              ● SYSTEM LIVE
            </span>
          </div>

          {/* ELECTION CARD */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-[16px]">
                  Governing Council Election (2026–2028)
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Select the global leaders for the Hub G, O, and P committees.
                </p>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-gray-400 tracking-wider">
                  ENDS IN
                </p>
                <p className="text-red-500 font-semibold text-sm mt-1">
                  14:19:44
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-5">
              <p className="text-[11px] text-gray-400 mb-2 tracking-wider">
                VOTE TALLY CONFIDENCE
              </p>

              <div className="h-[6px] bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-[99%] bg-[#22c55e] rounded-full" />
              </div>

              <p className="text-right text-[11px] text-green-600 mt-1">
                99.9% Hashed
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-5">
              <button className="bg-[#22c55e] hover:bg-green-600 text-white text-sm px-5 py-2 rounded-full font-medium">
                Cast Your Vote
              </button>

              <button className="border border-gray-300 text-sm px-5 py-2 rounded-full font-medium hover:bg-gray-50">
                Review Candidates
              </button>
            </div>
          </div>

          {/* POLL */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-[16px]">
                Strategic Roadmap: Multi-Currency Tax Ledger
              </h3>

              <span className="text-[10px] text-orange-500 font-semibold tracking-wider">
                IDEATION POLL
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              Should the Q3 patch prioritize automated VAT reconciliation for
              West African markets?
            </p>

            <div className="flex gap-4 mt-5">
              <button className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-50">
                <ThumbsUp size={16} />
                Support
              </button>

              <button className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-50">
                <ThumbsDown size={16} />
                Oppose
              </button>
            </div>
          </div>

          {/* CANDIDATES */}
          <div>
            <h2 className="text-lg font-semibold mb-3">
              Featured Council Candidates
            </h2>

            <div className="flex gap-5">
              {/* CARD */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 w-[260px] shadow-sm">
                <div className="w-14 h-14 bg-gray-200 rounded-full mx-auto mb-3" />

                <h4 className="text-center font-semibold text-sm">
                  Dr. Sarah Adenuga
                </h4>

                <p className="text-center text-[11px] text-blue-600 font-medium mt-1">
                  HUB O LEAD SPECIALIST
                </p>

                <p className="text-center text-gray-500 text-sm mt-3 leading-snug">
                  "Scaling financial transparency for West African SMEs."
                </p>

                <div className="flex justify-between mt-4 text-xs">
                  <span className="border px-2 py-1 rounded">
                    LEVEL 9
                  </span>
                  <span className="text-gray-500">12y EXP</span>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-white border border-gray-200 rounded-xl p-5 w-[260px] shadow-sm">
                <div className="w-14 h-14 bg-gray-200 rounded-full mx-auto mb-3" />

                <h4 className="text-center font-semibold text-sm">
                  Marcus Thorne
                </h4>

                <p className="text-center text-[11px] text-green-600 font-medium mt-1">
                  GOVERNANCE INCUMBENT
                </p>

                <p className="text-center text-gray-500 text-sm mt-3 leading-snug">
                  "Upholding the ethical framework of C23 since launch."
                </p>

                <div className="flex justify-between mt-4 text-xs">
                  <span className="border px-2 py-1 rounded">
                    LEVEL 10
                  </span>
                  <span className="text-gray-500">8y EXP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* REPO */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold mb-4 text-sm">
              Governance Repository
            </h3>

            <div className="space-y-4 text-sm">
              {[
                { icon: FileText, label: "Community Bylaws v2.5" },
                { icon: ShieldCheck, label: "Ethics & Compliance Code" },
                { icon: FileText, label: "Election Protocol 2026" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center text-gray-600 hover:text-black"
                >
                  <div className="flex items-center gap-2">
                    <item.icon size={16} />
                    {item.label}
                  </div>
                  <Download size={16} />
                </div>
              ))}
            </div>
          </div>

          {/* AUDIT */}
          <div className="bg-[#0f766e] text-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-sm mb-2">
              Audit Compliance
            </h3>

            <p className="text-sm text-green-100 leading-relaxed">
              All voting actions are cryptographically hashed and logged in the
              Hub G Journal. No vote can be altered once cast.
            </p>

            <div className="flex items-center gap-2 mt-4 text-yellow-300 text-xs font-medium">
              <Lock size={14} />
              AES-256 ENCRYPTED
            </div>
          </div>

          {/* HISTORY */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm">
            <Archive className="mx-auto mb-2 text-gray-400" />

            <h3 className="font-semibold text-sm">
              Historical Results
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              View archived election data and committee appointments from
              2022–2025.
            </p>

            <button className="mt-3 text-sm text-gray-700 underline">
              Access Archive Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}