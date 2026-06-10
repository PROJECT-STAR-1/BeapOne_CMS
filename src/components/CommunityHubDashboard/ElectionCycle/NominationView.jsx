import {
  CheckCircle,
  BarChart3,
  Sprout
} from "lucide-react";

export default function NominationView() {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">

      {/* Top Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Nominations are Open.
        </h2>

        <p className="text-sm text-gray-500 mb-6 max-w-2xl">
          The 2026–2028 Governing Council cycle has begun. To run for a seat,
          you must meet the professional practice and certification requirements.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Eligibility */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <h4 className="text-[11px] font-semibold tracking-wider text-gray-400 mb-3">
              YOUR ELIGIBILITY CHECK
            </h4>

            <ul className="space-y-2 text-sm">
              <li className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">BadgeLevel &gt; 5</span>
                <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <CheckCircle size={14} />
                  Level 7
                </span>
              </li>

              <li className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Ethics Cert (LRMS)</span>
                <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <CheckCircle size={14} />
                  Verified
                </span>
              </li>

              <li className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Active History (3M+)</span>
                <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <CheckCircle size={14} />
                  14 Months
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-indigo-800 rounded-xl p-5 text-white flex flex-col justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-wider text-indigo-200 mb-1">
                Candidacy Status
              </p>

              <p className="text-sm leading-relaxed">
                You are eligible to register as a candidate for the{" "}
                <span className="font-semibold">
                  Hub O (Financial)
                </span>{" "}
                leadership seat.
              </p>
            </div>

            <button className="mt-5 bg-white text-indigo-700 text-sm font-medium px-4 py-2 rounded-full">
              Submit Your Manifest
            </button>
          </div>

        </div>
      </div>

      {/* Seats */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Open Seats by Hub Context
        </h3>

        <div className="grid md:grid-cols-2 gap-5">

          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex justify-between items-start mb-3">
              <div className="bg-indigo-100 text-indigo-700 p-2 rounded-lg">
                <BarChart3 size={16} />
              </div>

              <span className="text-[11px] font-medium bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                2 VACANCIES
              </span>
            </div>

            <h4 className="font-medium text-gray-900 text-sm mb-1">
              Hub O (Financial)
            </h4>

            <p className="text-xs text-gray-500 mb-3">
              Leading the innovation roadmap for multi-currency tax reconciliation and global BSS audits.
            </p>

            <button className="text-xs text-indigo-700 font-medium">
              View Seat Requirements
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex justify-between items-start mb-3">
              <div className="bg-green-100 text-green-700 p-2 rounded-lg">
                <Sprout size={16} />
              </div>

              <span className="text-[11px] font-medium bg-green-100 text-green-700 px-2.5 py-1 rounded-full">
                1 VACANCY
              </span>
            </div>

            <h4 className="font-medium text-gray-900 text-sm mb-1">
              Hub P (Farm Mgmt)
            </h4>

            <p className="text-xs text-gray-500 mb-3">
              Driving the community knowledge cluster for precision agriculture and regional P-Hub modules.
            </p>

            <button className="text-xs text-indigo-700 font-medium">
              View Seat Requirements
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}