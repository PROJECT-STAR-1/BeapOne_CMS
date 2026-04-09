"use client";

import { useState, useMemo } from "react";
import {
  Crown,
  Filter,
  Download,
  CheckCircle,
  Shield,
  PlusCircle,
} from "lucide-react";

/* ---------------- MOCK DATA ---------------- */
const DATA = [
  {
    id: 1,
    name: "USR_001_ALPHA",
    location: "Lagos, Nigeria",
    region: "Africa",
    hub: "HUB O",
    level: 9,
    activity: 8400,
    knowledge: 12058,
    multiplier: 1.2,
  },
  {
    id: 2,
    name: "USR_042_SIGMA",
    location: "London, UK",
    region: "Europe",
    hub: "HUB G",
    level: 8,
    activity: 6120,
    knowledge: 9248,
    multiplier: 1.2,
  },
  {
    id: 3,
    name: "USR_119_DELTA",
    location: "Shanghai, CN",
    region: "Asia",
    hub: "HUB P",
    level: 8,
    activity: 12660,
    knowledge: 2540,
    multiplier: null,
  },
];

/* ---------------- HELPERS ---------------- */
const calcTotal = (u) =>
  Math.round((u.activity + u.knowledge) * (u.multiplier || 1));

/* ---------------- COMPONENT ---------------- */
export default function LeaderboardPage() {
  const [region, setRegion] = useState("All");
  const [hub, setHub] = useState("All");

  /* ---------- FILTER LOGIC ---------- */
  const filtered = useMemo(() => {
    return DATA.filter((u) => {
      const regionMatch = region === "All" || u.region === region;
      const hubMatch = hub === "All" || u.hub === hub;
      return regionMatch && hubMatch;
    }).sort((a, b) => calcTotal(b) - calcTotal(a));
  }, [region, hub]);

  const top3 = filtered.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f6f7fb] px-6 ">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <p className="text-xs tracking-wide text-gray-400 mb-3">
          ENGAGEMENT REPORT &gt; LEADERBOARD ANALYTICS
        </p>

        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Gamification Leaderboard
            </h1>
            <p className="text-gray-500 mt-1 text-sm">
              Real-time meritocracy tracking for the global UBOS ecosystem.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex gap-3 items-center">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="px-4 py-2 rounded-full border text-sm bg-white shadow-sm"
            >
              <option value="All">Global (All Regions)</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
            </select>

            <select
              value={hub}
              onChange={(e) => setHub(e.target.value)}
              className="px-4 py-2 rounded-full border text-sm bg-white shadow-sm"
            >
              <option value="All">All Hub Contexts</option>
              <option value="HUB O">HUB O</option>
              <option value="HUB G">HUB G</option>
              <option value="HUB P">HUB P</option>
            </select>

            <button className="bg-[#111827] text-white px-5 py-2 rounded-full text-sm shadow">
              Apply Filters
            </button>
          </div>
        </div>

        {/* TOP 3 */}
        <div className="flex justify-center items-end gap-8 mt-14">
          {top3.map((user, i) => {
            const isFirst = i === 0;

            return (
              <div key={user.id} className="text-center">
                {/* Avatar */}
                <div
                  className={`mx-auto mb-2 flex items-center justify-center rounded-xl ${
                    isFirst
                      ? "w-20 h-20 border-4 border-blue-500"
                      : "w-16 h-16"
                  } bg-orange-200 text-2xl`}
                >
                  👱
                </div>

                {/* Rank Badge */}
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    isFirst
                      ? "bg-blue-500 text-white"
                      : "bg-black text-white"
                  }`}
                >
                  {isFirst ? "TOP CONTRIBUTOR" : `RANK ${i + 1}`}
                </span>

                {/* Crown */}
                {isFirst && (
                  <div className="flex justify-center mt-1">
                    <Crown className="text-yellow-500" size={18} />
                  </div>
                )}

                {/* Card */}
                <div
                  className={`mt-3 rounded-xl p-6 ${
                    isFirst
                      ? "bg-blue-600 text-white w-72 py-8"
                      : i === 1
                      ? "bg-[#1f2240] text-white w-64"
                      : "bg-orange-800 text-white w-64"
                  }`}
                >
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-xs opacity-70">
                    BADGELEVEL {user.level}
                  </p>

                  <p
                    className={`font-bold mt-3 ${
                      isFirst ? "text-4xl" : "text-2xl"
                    }`}
                  >
                    {calcTotal(user).toLocaleString()}
                  </p>

                  <p className="text-xs opacity-70">
                    {isFirst ? "VERIFIED POINTS" : "POINTS"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-2xl mt-14 p-6 shadow-sm border">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-semibold text-lg">
                Detailed Points Breakdown
              </h2>
              <p className="text-sm text-gray-400">
                Audit-ready gamification ledger (Appendix 5)
              </p>
            </div>

            <div className="flex gap-2">
              <button className="p-2 border rounded-lg">
                <Filter size={16} />
              </button>
              <button className="p-2 border rounded-lg">
                <Download size={16} />
              </button>
            </div>
          </div>

          <table className="w-full mt-6 text-sm">
            <thead className="text-gray-400 text-left">
              <tr>
                <th>Member</th>
                <th>Hub</th>
                <th>Activity</th>
                <th>Knowledge</th>
                <th>Multiplier</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {filtered.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs border px-2 py-1 rounded">
                        LVL {u.level}
                      </span>
                      <div>
                        <p className="font-medium">{u.name}</p>
                        <p className="text-xs text-gray-400">
                          {u.location}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                      {u.hub}
                    </span>
                  </td>

                  <td>{u.activity.toLocaleString()}</td>
                  <td>{u.knowledge.toLocaleString()}</td>

                  <td>
                    {u.multiplier ? (
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                        {u.multiplier}x Active
                      </span>
                    ) : (
                      <span className="text-gray-400">None</span>
                    )}
                  </td>

                  <td className="font-semibold">
                    {calcTotal(u).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-6">
            <p className="text-xs text-gray-400">
              Showing {filtered.length} members
            </p>

            <div className="flex gap-2">
              <button className="px-4 py-2 border rounded-full text-sm">
                Previous
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-full text-sm">
                Next Page
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-[#1f2240] text-white p-6 rounded-2xl">
            <h3 className="font-semibold mb-4">BadgeLevel Logic</h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <PlusCircle />
                <div>
                  <p>Activity Points</p>
                  <p className="text-gray-400">
                    Earned for participation
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="text-green-400" />
                <div>
                  <p>Knowledge Points</p>
                  <p className="text-gray-400">
                    Based on submissions
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Shield />
                <div>
                  <p>Certification Multiplier</p>
                  <p className="text-gray-400">
                    Adds 1.2x boost
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border">
            <h3 className="font-semibold mb-4">
              Accountability Audit
            </h3>

            <p className="text-sm text-gray-500">
              Every point award and multiplier trigger is logged and
              monitored to prevent manipulation.
            </p>

            <div className="mt-6 flex items-center gap-2 text-green-600 text-sm">
              <CheckCircle size={16} />
              Verification Engine Stable
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}