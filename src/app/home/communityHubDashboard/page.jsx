export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F6F8FC] text-gray-900">
      {/* Main Content */}
      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[26px] font-semibold tracking-tight">
              General Member Dashboard
            </h1>

            <p className="text-gray-500 mt-1 text-sm">
              Welcome to the Hub 0 context,{" "}
              <span className="font-semibold text-gray-700">USR-9902-NEW</span>
            </p>

            {/* Context Pills */}
            <div className="flex items-center gap-3 mt-4">
              <span className="px-4 py-1.5 bg-gray-100 border rounded-full text-xs font-medium text-gray-700">
                HUB 0
              </span>
              <span className="px-4 py-1.5 bg-gray-100 border rounded-full text-xs font-medium text-gray-700">
                NIGERIA (NG)
              </span>

              <button className="text-xs font-semibold text-gray-500 hover:text-blue-600 tracking-wide">
                SWITCH CONTEXT
              </button>
            </div>
          </div>
        </div>

        {/* Trending Label */}
        <div className="mt-8 text-xs font-semibold text-gray-400 tracking-wider">
          TRENDING IN HUB 0
        </div>

        {/* Cards */}
        <div className="mt-3 space-y-5 max-w-3xl">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <span className="text-[11px] px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold tracking-wide">
                Q&A BOARD
              </span>

              <span className="text-xs text-gray-400">#POST-7741</span>
            </div>

            <h2 className="font-semibold text-[17px] mt-3 leading-snug">
              Automated Reconciliation Workflow in Nigeria Region?
            </h2>

            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              "Is there a standardized template for NGN-USD reconciliation
              within the Hub O General Ledger for local SMEs?"
            </p>

            <div className="flex justify-between items-center mt-5 text-sm text-gray-400">
              <span>12 Replies • 1.2k</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-center">
              <span className="text-[11px] px-3 py-1 rounded-full bg-orange-50 text-orange-500 font-semibold tracking-wide">
                IDEATION SPACE
              </span>

              <span className="text-xs text-gray-400">#IDEA-442</span>
            </div>

            <h2 className="font-semibold text-[17px] mt-3 leading-snug">
              Proposal: Auto-Tax Tagging for Lagos State
            </h2>

            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              "Should we integrate LIRS automated tagging into the base Hub O
              Financial module?"
            </p>

            <div className="flex justify-between items-center mt-5 text-sm">
              <span className="text-gray-500">↑ 342 Support Votes</span>

              <button className="text-blue-600 font-semibold text-xs tracking-wide hover:underline">
                CAST VOTE (TEMPERATURE CHECK)
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="w-[320px] px-6 py-8 space-y-5">
        {/* Badge Summary */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-gray-700">BADGELEVEL 1.2</span>
            <span className="text-blue-600 font-semibold text-xs">
              88% to L2
            </span>
          </div>

          <div className="w-full bg-gray-100 h-2 rounded-full mt-3">
            <div className="bg-blue-600 h-2 rounded-full w-[88%]" />
          </div>
        </div>

        {/* Blue Card */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-6 rounded-2xl shadow-md">
          <h3 className="font-semibold text-lg leading-snug">
            Fast-Track Your <br /> Governance Status
          </h3>

          <p className="text-sm mt-3 opacity-90 leading-relaxed">
            Enroll in the <strong>Governance & Ethics</strong> cohort to qualify
            for the next Election Cycle (L5 Requirement).
          </p>

          <button className="bg-white text-blue-700 px-4 py-2 mt-5 rounded-lg text-xs font-semibold tracking-wide hover:bg-gray-100">
            ENROLL VIA LRMS API
          </button>
        </div>

        {/* Stats */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="text-xs text-gray-400 tracking-wide">
            COMMUNITY HEALTH
          </div>

          <div className="flex items-end justify-between mt-2">
            <span className="text-3xl font-bold">32%</span>
            <span className="text-xs text-orange-500 font-semibold">
              TARGET MET
            </span>
          </div>

          <div className="border-t my-4"></div>

          <div>
            <div className="text-xs text-gray-400 tracking-wide">
              ACTIVE MEMBERS
            </div>
            <div className="text-xl font-bold mt-1">1.2M</div>
          </div>
        </div>

        {/* Jobs */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="text-xs text-gray-400 tracking-wide">
            RECENT JOB REQUESTS
          </div>

          <div className="mt-3">
            <div className="font-semibold text-sm">
              Hub O Implementation Specialist
            </div>

            <div className="text-xs text-gray-500 mt-1">Lagos, Nigeria</div>
          </div>
        </div>
      </aside>
    </div>
  );
}
