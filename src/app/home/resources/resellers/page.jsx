import {
  CheckCircle2,
  FileText,
  CreditCard,
  Code2,
  ArrowUp
} from "lucide-react";

export default function ResellerOnboarding() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-sm text-gray-400 tracking-wide">
            A2.7 CHANNEL MANAGEMENT /{" "}
            <span className="text-blue-600 font-medium">
              RESELLER LIFECYCLE
            </span>
          </p>

          <div className="flex justify-between items-center mt-2">
            <h1 className="text-4xl font-bold text-gray-900">
              Reseller Onboarding Blueprint
            </h1>

            <div className="bg-white shadow rounded-xl px-5 py-3 border">
              <p className="text-xs text-gray-400">TARGET MODULE</p>
              <p className="font-semibold text-gray-800 mt-1">
                ● A2.7.1.0 Manager
              </p>
            </div>
          </div>

          <p className="text-gray-500 mt-2">
            Automated workflow from Prospect to Authorized Reseller
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative pl-16">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

          {/* STEP 1 */}
          <TimelineStep number="1" color="bg-blue-500" title="Commercial Application" tag="LEAD CAPTURE">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-xl p-6">
                <p className="text-gray-600 mb-4">
                  The prospective reseller submits corporate profile via the{" "}
                  <span className="font-semibold">BNL Public Portal</span>.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ CAC Registration Documents</li>
                  <li>✓ 3-Year Financial Statement</li>
                  <li>✓ Proposed Sales Territory</li>
                </ul>
              </div>

              <div className="bg-gray-100 border rounded-xl p-6">
                <p className="text-xs text-gray-400 mb-2">LOGIC TRIGGER</p>
                <p className="text-gray-700">
                  Automatically creates a "Prospective" record in{" "}
                  <span className="underline">partner_accounts</span>.
                </p>
              </div>
            </div>
          </TimelineStep>

          {/* STEP 2 */}
          <TimelineStep number="2" color="bg-orange-400" title="Vetting & Tiering Engine" tag="INTERNAL REVIEW">
            <p className="text-gray-600 mb-4">
              BNL Channel Managers evaluate the application against{" "}
              <span className="font-mono text-sm">
                A2.7.2.0 Tier Definition
              </span>
            </p>

            <div className="grid md:grid-cols-3 border rounded-xl overflow-hidden">
              <div className="p-6 text-center bg-white">
                <p className="text-xs text-gray-400">MIN. REVENUE</p>
                <p className="font-bold text-xl mt-2">₦10M+</p>
              </div>

              <div className="p-6 text-center bg-gray-50">
                <p className="text-xs text-gray-400">ASSIGNMENT</p>
                <p className="font-bold text-blue-600 mt-2">Silver Tier</p>
              </div>

              <div className="p-6 text-center bg-white">
                <p className="text-xs text-gray-400">DISCOUNT RATE</p>
                <p className="font-bold mt-2">15% Base</p>
              </div>
            </div>
          </TimelineStep>

          {/* STEP 3 */}
          <TimelineStep number="3" color="bg-green-500" title="Technical Enablement" tag="CERTIFICATION">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <p className="text-sm font-semibold text-orange-500 mb-2">
                  STAFF CERTIFICATION PATH
                </p>
                <p className="text-gray-700">
                  Reseller must nominate 2 Sales and 2 Technical staff for{" "}
                  <span className="font-semibold">
                    BEAPOne Professional Certification
                  </span>.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <p className="text-sm font-semibold text-green-600 mb-2">
                  RESOURCE UNLOCK
                </p>
                <p className="text-gray-700">
                  Initial access granted to{" "}
                  <span className="underline">Reseller Brand Kit</span> and{" "}
                  <span className="underline">Product Training Portal</span>.
                </p>
              </div>
            </div>
          </TimelineStep>

          {/* STEP 4 */}
          <TimelineStep number="4" color="bg-purple-500" title="Legal & Financial Closing" tag="CONTRACTUAL">
            <div className="bg-white border rounded-xl p-6 space-y-6">
              <div className="flex gap-4">
                <FileText className="text-blue-500" />
                <div>
                  <p className="font-semibold">Reseller Agreement Signature</p>
                  <p className="text-gray-500 text-sm">
                    Electronic signing via Portal
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CreditCard className="text-green-500" />
                <div>
                  <p className="font-semibold">A3 Financial Integration</p>
                  <p className="text-gray-500 text-sm">
                    Setup of Wallet, Credit Limit and Bank Details.
                  </p>
                </div>
              </div>
            </div>
          </TimelineStep>

          {/* ARROW ICON */}
          <div className="absolute left-[6px] bottom-[260px] bg-blue-500 text-white p-2 rounded-full">
            <ArrowUp size={16} />
          </div>

          {/* ACTIVE BLOCK */}
          <div className="bg-green-600 text-white rounded-2xl p-8 mt-10">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Active & Operational</h2>
                <p className="text-green-100">
                  Full Portal Access Granted
                </p>
              </div>
              <CheckCircle2 />
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-6">
              {[
                ["STATUS", "ACTIVE"],
                ["ATTRIBUTION", "ENABLED"],
                ["PORTAL URL", "portal.beapone.ng/..."],
                ["COMM. %", "15%"],
              ].map(([label, value]) => (
                <div key={label} className="bg-green-500/40 rounded-xl p-4 text-center">
                  <p className="text-xs text-green-100">{label}</p>
                  <p className="font-semibold mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* DATA HANDOVER */}
          <div className="bg-[#0b1b3a] text-white rounded-2xl p-8 mt-10">
            <div className="flex items-center gap-2 mb-6">
              <Code2 />
              <h3 className="text-xl font-semibold">Data Handover Logic</h3>
            </div>

            <div className="space-y-4 text-sm">
              <Row title="Application Approved" table="partner_accounts" payload='{ status: "Active" }' />
              <Row title="Staff Training Finished" table="partner_cert_status" payload='{ status: "Completed" }' />
              <Row title="Contract Executed" table="channel_op_log" payload='{ event_type: "Agreement_Signed" }' />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/* Timeline Step */
function TimelineStep({ number, color, title, tag, children }) {
  return (
    <div className="relative mb-12">
      {/* Circle */}
      <div className={`absolute -left-16 top-0 ${color} text-white w-10 h-10 flex items-center justify-center rounded-full font-bold`}>
        {number}
      </div>

      {/* Content */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-xs px-3 py-1 rounded-full bg-gray-200 text-gray-600">
            {tag}
          </span>
        </div>

        {children}
      </div>
    </div>
  );
}

/* Row */
function Row({ title, table, payload }) {
  return (
    <div className="grid grid-cols-3 border-t border-white/10 pt-4">
      <p>{title}</p>
      <p className="text-gray-300">{table}</p>
      <p className="text-blue-300 font-mono">{payload}</p>
    </div>
  );
}