"use client";

import {
  Users,
  Activity,
  TrendingUp,
  Award,
  CheckCircle,
  ShieldCheck,
  FileText,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f5f6f8] text-[#0f172a]">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-start">
          <div>
            <p className="text-xs tracking-widest text-gray-400 mb-2">
              SUBMODULE C23.8.0
            </p>
            <h1 className="text-3xl font-semibold">
              Monthly Engagement Report
            </h1>
            <p className="text-gray-500 mt-1">
              Reporting Period: <span className="font-medium">February 2026</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
              FINALIZED
            </span>
            <button className="bg-[#0f172a] text-white px-4 py-2 rounded-lg text-sm">
              Export Data
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-4">
          <StatCard
            icon={<Users size={18} />}
            label="TOTAL REGISTERED"
            value="1,240,500"
            extra="+15k New"
          />
          <StatCard
            icon={<Activity size={18} />}
            label="HEALTH SCORE"
            value="94/100"
            extra="Target Met"
          />
          <StatCard
            icon={<TrendingUp size={18} />}
            label="STDR ROI"
            value="$450,000"
            extra="Est. Savings"
          />
          <StatCard
            icon={<Award size={18} />}
            label="CERTS ISSUED"
            value="2,442"
            extra="+88 Today"
          />
        </div>

        {/* KPI + LEADERBOARD */}
        <div className="grid grid-cols-3 gap-6">
          {/* KPI TABLE */}
          <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-1">
              Section 2: KPI Performance vs. Targets
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Core Strategic Benchmarks (Appendix 2)
            </p>

            <table className="w-full text-sm">
              <thead className="text-gray-400 text-xs uppercase">
                <tr>
                  <th className="text-left py-2">Metric</th>
                  <th className="text-left">Target</th>
                  <th className="text-left">Current Month</th>
                  <th className="text-left">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <Row
                  name="Support Deflection (STDR)"
                  target="> 30%"
                  current="34.2%"
                />
                <Row
                  name="Voter Turnout"
                  target="> 90%"
                  current="92.4%"
                />
                <Row
                  name="Active User Rate (AUR)"
                  target="35%"
                  current="42.0%"
                />
                <Row
                  name="Governance Compliance"
                  target="100%"
                  current="100%"
                />
              </tbody>
            </table>
          </div>

          {/* LEADERBOARD */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold">
              Section 6: Leaderboard
            </h2>
            <p className="text-sm text-gray-400 mb-4">
              Top Community Contributors
            </p>

            <div className="space-y-4">
              <LeaderboardItem rank="1" name="USR_001_ALPHA" level="LVL 9" />
              <LeaderboardItem rank="2" name="USR_042_SIGMA" level="LVL 8" />
              <LeaderboardItem rank="3" name="USR_119_DELTA" level="LVL 8" />
            </div>

            <p className="text-sm text-indigo-600 mt-4 cursor-pointer">
              Full Leaderboard Analytics
            </p>
          </div>
        </div>

        {/* GOVERNANCE SECTION */}
        <div className="bg-[#0f172a] text-white rounded-2xl p-6 grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-4">
            <h2 className="text-xl font-semibold">
              Section 5: Governance & Accountability Log
            </h2>
            <p className="text-gray-400 text-sm">
              Summary of moderation and high-risk actions (Appendix 6)
            </p>

            <div className="space-y-3">
              <DarkCard
                icon={<ShieldCheck size={16} />}
                title="Mandatory Module Notes Logged"
                status="Verified"
              />
              <DarkCard
                icon={<AlertTriangle size={16} />}
                title="High-Risk Overrides Detected"
                status="00"
              />
              <DarkCard
                icon={<FileText size={16} />}
                title="Audit Reference Sync"
                status="STABLE"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-[#1e293b] p-4 rounded-xl text-center flex-1">
                <p className="text-2xl font-bold text-green-400">142</p>
                <p className="text-xs text-gray-400">TOTAL ACTIONS</p>
              </div>
              <div className="bg-[#1e293b] p-4 rounded-xl text-center flex-1">
                <p className="text-2xl font-bold text-green-400">100%</p>
                <p className="text-xs text-gray-400">AUDIT COMPLIANCE</p>
              </div>
            </div>

            <div className="bg-[#1e293b] p-4 rounded-xl text-sm text-gray-300">
              “All high-risk actions this period, including 12 permanent profile
              suspensions and 3 bylaw updates, were accompanied by valid
              narrative justification...”
            </div>
          </div>
        </div>

        {/* STRATEGIC INSIGHT */}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center">
          <div className="flex items-start gap-4">
            <div className="bg-gray-100 p-3 rounded-full">
              <Lightbulb size={20} />
            </div>
            <div>
              <h3 className="font-semibold">
                Strategic Insight for March 2026
              </h3>
              <p className="text-sm text-gray-500 max-w-xl">
                Based on current STDR trends in Hub O (Financial), we recommend
                scaling the "Automated Tax Compliance" Knowledge Sprints. This
                has the potential to increase deflection by an additional 4.5%
                next month.
              </p>
            </div>
          </div>

          <button className="bg-[#0f172a] text-white px-5 py-2 rounded-lg text-sm">
            Apply Recommendation
          </button>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function StatCard({ icon, label, value, extra }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <div className="bg-gray-100 p-2 rounded-lg">{icon}</div>
        <span className="text-xs text-green-500">{extra}</span>
      </div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
}

function Row({ name, target, current }) {
  return (
    <tr className="border-t">
      <td className="py-3">{name}</td>
      <td>{target}</td>
      <td>{current}</td>
      <td>
        <CheckCircle className="text-green-500" size={16} />
      </td>
    </tr>
  );
}

function LeaderboardItem({ rank, name, level }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white text-sm">
          {rank}
        </div>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-400">Contributor</p>
        </div>
      </div>
      <p className="text-sm font-semibold">{level}</p>
    </div>
  );
}

function DarkCard({ icon, title, status }) {
  return (
    <div className="bg-[#1e293b] p-4 rounded-xl flex justify-between items-center">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm">{title}</p>
      </div>
      <p className="text-green-400 text-sm">{status}</p>
    </div>
  );
}