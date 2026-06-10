export default function Sidebar() {
  return (
    <div className="space-y-6 w-[320px]">
      
      {/* Timeline */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 mb-5">
          CYCLE TIMELINE
        </h3>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-2 top-1 bottom-1 w-px bg-gray-200" />

          <ul className="space-y-6">
            {/* Active */}
            <li className="flex gap-3">
              <div className="relative z-10 w-4 h-4 rounded-full bg-indigo-700 mt-1" />
              <div>
                <p className="font-medium text-gray-900">
                  Nominations Open
                </p>
                <p className="text-xs text-gray-400">
                  FEB 01 – FEB 28
                </p>
              </div>
            </li>

            {/* Inactive */}
            {[
              ["Vetting & Verification", "MAR 01 – MAR 14"],
              ["Voting Window", "MAR 15 – MAR 31"],
              ["Inauguration", "APRIL 05"],
            ].map(([title, date]) => (
              <li key={title} className="flex gap-3">
                <div className="relative z-10 w-4 h-4 rounded-full bg-gray-300 mt-1" />
                <div>
                  <p className="font-medium text-gray-400">{title}</p>
                  <p className="text-xs text-gray-300">{date}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bylaws */}
      <div className="bg-indigo-900 text-white rounded-2xl p-6">
        <h3 className="font-semibold mb-3 text-lg">
          Governance Bylaws
        </h3>

        <p className="text-sm text-indigo-100 mb-5 leading-relaxed">
          Review the latest <span className="font-semibold">v2.4 Bylaws</span>{" "}
          regarding candidate eligibility, disclosure rules, and accountability protocols.
        </p>

        <button className="w-full bg-white text-indigo-900 py-2.5 rounded-full text-sm font-medium">
          Read Official Bylaws
        </button>
      </div>

      {/* Audit */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-xs font-semibold tracking-widest text-gray-500 mb-3">
          AUDIT PROTECTION
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed">
          All election events are hashed via the{" "}
          <span className="font-semibold text-gray-700">
            Hub G Journaling Layer
          </span>. Your vote and participation data are encrypted and non-repudiable.
        </p>
      </div>
    </div>
  );
}