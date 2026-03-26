import {
  Crown,
  FileText,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function PartnerOnboarding() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm tracking-widest font-semibold">
            SUBMODULE A2.7.1.0
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mt-3">
            Partner Onboarding Workflow
          </h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            The automated path for Global Integrators and Technology Partners
            to achieve Platinum/Gold status on the BEAPOne Platform.
          </p>
        </div>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200"></div>

          {/* STEP 1 */}
          <Step icon={<Crown size={18} />} number="01">
            <Card
              title="Strategic Application"
              badge="STAGE: INTAKE"
              badgeColor="bg-blue-100 text-blue-600"
            >
              <p className="text-gray-600 mb-4">
                Prospective partner submits technical roadmap, market focus
                (e.g., Lagos Region), and implementation capacity.
              </p>

              <div className="flex gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <FileText size={16} /> Technical Audit
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={16} /> Regional Focus
                </span>
              </div>
            </Card>
          </Step>

          {/* STEP 2 */}
          <Step number="02">
            <Card
              title="Technical Vetting & Tiering"
              badge="STAGE: EVALUATION"
              badgeColor="bg-purple-100 text-purple-600"
            >
              <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600">
                Evaluation against A2.7.2.0 Tier Engine. Criteria:
                Certified Staff count, Annual Sales Target (NGN),
                and Multi-tenant experience.
              </div>

              <div className="mt-6">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full w-3/4"></div>
                </div>
                <p className="text-right text-sm text-blue-600 mt-2">
                  Tier: Platinum Potential
                </p>
              </div>
            </Card>
          </Step>

          {/* STEP 3 */}
          <Step number="03">
            <Card
              title="Enablement & SDK Provisioning"
              badge="STAGE: SETUP"
              badgeColor="bg-green-100 text-green-600"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-xs font-semibold text-gray-500 mb-1">
                    DEVELOPER HUB
                  </p>
                  <p className="text-gray-600 text-sm">
                    API keys and Developer Sandbox provisioned.
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-xs font-semibold text-purple-500 mb-1">
                    TRAINING
                  </p>
                  <p className="text-gray-600 text-sm">
                    Partnership managers enrolled in LMS (A2.7.7.0).
                  </p>
                </div>
              </div>
            </Card>
          </Step>

          {/* STEP 4 */}
          <Step number="04">
            <Card
              title="Master Service Agreement (MSA)"
              badge="STAGE: LEGAL"
              badgeColor="bg-red-100 text-red-500"
            >
              <p className="text-gray-600 mb-4">
                Electronic signature of high-tier partner agreements,
                including MDF governance and SLA commitments.
              </p>

              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-between text-sm">
                <span className="text-gray-600">
                  log_event: Partner_Agreement_Signed
                </span>
                <CheckCircle2 className="text-green-500" size={18} />
              </div>
            </Card>
          </Step>

          {/* FINAL CARD */}
          <div className="ml-16 mt-10">
            <div className="bg-[#0B1533] text-white rounded-2xl p-8 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">
                    Platinum Activation
                  </h2>
                  <p className="text-gray-300 text-sm">
                    Strategic Partner Dashboard Live
                  </p>
                </div>

                <span className="text-green-400 border border-green-400 px-3 py-1 rounded-full text-sm">
                  PLATINUM TIER
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <Stat label="MDF STARTING BALANCE" value="₦1,500,000" />
                <Stat label="ATTRIBUTION" value="ACTIVE" />
                <Stat label="LEAD DESK" value="UNLOCKED" />
              </div>
            </div>
          </div>

          {/* BOS Summary */}
          <div className="ml-16 mt-10">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-2">
                BOS Integration Summary
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Partner data is synced across A1BSS (Lead), A2.7 (Lifecycle),
                and A3 (Payouts) to ensure seamless commission settlement.
              </p>

              <div className="flex gap-3">
                <Badge>A1 SYNC</Badge>
                <Badge>A2.7 SYNC</Badge>
                <Badge>A3 SYNC</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Step({ children, icon, number }) {
  return (
    <div className="relative flex gap-6 mb-10">
      {/* Circle */}
      <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border shadow-sm">
        {icon ? icon : <span className="text-gray-600">{number}</span>}
      </div>

      {/* Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}

function Card({ title, badge, badgeColor, children }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className={`text-xs px-3 py-1 rounded-full ${badgeColor}`}>
          {badge}
        </span>
      </div>
      {children}
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-[#111C44] rounded-xl p-4">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600">
      {children}
    </span>
  );
}