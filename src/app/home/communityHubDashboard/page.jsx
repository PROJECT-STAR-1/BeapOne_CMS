

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#F5F7FB] text-gray-900">

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">
              General Member Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Welcome to the Hub 0 context,{" "}
              <span className="font-semibold">
                USR-9902-NEW
              </span>
            </p>

            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-200 rounded-full text-xs">
                HUB 0
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-xs">
                NIGERIA (NG)
              </span>
              <button className="text-xs text-blue-600 font-medium">
                SWITCH CONTEXT
              </button>
            </div>
          </div>

          {/* Badge Card */}
          <div className="bg-white border rounded-xl p-4 w-64 shadow-sm">
            <div className="flex justify-between text-sm">
              <span>BADGELEVEL 1.2</span>
              <span className="text-blue-600">88% to L2</span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded mt-2">
              <div className="bg-blue-500 h-2 rounded w-[88%]" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 space-y-4 max-w-3xl">
          
          {/* Card 1 */}
          <div className="bg-white border rounded-xl p-5">
            <div className="text-xs text-blue-600 font-semibold mb-1">
              Q&A BOARD
            </div>

            <h2 className="font-semibold text-lg">
              Automated Reconciliation Workflow in Nigeria Region?
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              "Is there a standardized template for NGN-USD reconciliation..."
            </p>

            <div className="flex justify-between mt-4 text-sm text-gray-400">
              <span>12 Replies • 1.2k</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border rounded-xl p-5">
            <div className="text-xs text-orange-500 font-semibold mb-1">
              IDEATION SPACE
            </div>

            <h2 className="font-semibold text-lg">
              Proposal: Auto-Tax Tagging for Lagos State
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              "Should we integrate LIRS automated tagging..."
            </p>

            <div className="flex justify-between mt-4 text-sm">
              <span>342 Support Votes</span>

              <button className="text-blue-600 font-medium">
                CAST VOTE
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="w-80 p-6 space-y-4">
        
        {/* Blue Card */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-5 rounded-xl">
          <h3 className="font-semibold text-lg">
            Fast-Track Your Governance Status
          </h3>

          <p className="text-sm mt-2 opacity-90">
            Enroll in the Governance & Ethics cohort...
          </p>

          <button className="bg-white text-blue-600 px-4 py-2 mt-4 rounded-lg text-sm font-medium">
            ENROLL VIA LRMS API
          </button>
        </div>

        {/* Stats */}
        <div className="bg-white border rounded-xl p-4">
          <div className="text-xs text-gray-400">
            COMMUNITY HEALTH
          </div>

          <div className="text-3xl font-bold mt-2">32%</div>

          <div className="text-xs text-orange-500">
            TARGET MET
          </div>

          <div className="mt-4">
            <div className="text-xs text-gray-400">
              ACTIVE MEMBERS
            </div>
            <div className="text-xl font-bold">1.2M</div>
          </div>
        </div>

        {/* Jobs */}
        <div className="bg-white border rounded-xl p-4">
          <div className="text-xs text-gray-400">
            RECENT JOB REQUESTS
          </div>

          <div className="mt-2 font-semibold">
            Hub O Implementation Specialist
          </div>

          <div className="text-xs text-gray-500">
            Lagos, Nigeria
          </div>
        </div>
      </aside>
    </div>
  );
}