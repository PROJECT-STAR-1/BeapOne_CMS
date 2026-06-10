"use client";
import { Megaphone, Users, Vote, Award, Shield, User } from "lucide-react";

import ProgressStepper from "@/components/CommunityHubDashboard/ElectionCycle/ProgressStepper";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    name: "Nominations",
    href: "/home/communityHubDashboard/electionCycle/nominations",
  },
  {
    name: "Campaigns",
    href: "/home/communityHubDashboard/electionCycle/campaigns",
  },
  { name: "Voting Booth", href: "/voting-booth" },
  { name: "Archive", href: "/archive" },
];

const steps = [
  {
    name: "ANNOUNCEMENT",
    icon: Megaphone,
    href: "/home/communityHubDashboard/electionCycle/nominations",
    paths: ["/home/communityHubDashboard/electionCycle/nominations"],
  },
  {
    name: "VETTING",
    icon: Users,
    href: "/home/communityHubDashboard/electionCycle/campaigns",
    paths: ["/home/communityHubDashboard/electionCycle/campaigns"],
  },
  {
    name: "ACTIVE VOTE",
    icon: Vote,
    href: "/voting-booth",
    paths: ["/voting-booth"],
  },
  {
    name: "INAUGURATION",
    icon: Award,
    href: "/archive",
    paths: ["/archive"],
  },
];
export default function TabsNav() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      {/* 🔷 TOP SYSTEM BAR */}
      <div className="bg-[#0B0F2A] text-white text-xs px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="font-semibold tracking-wide">SYSTEM STATUS</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Election Engine: ONLINE</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-gray-300">
          <span>HUB G SYNC: SUCCESS</span>
          <span>A3 AUDIT: ENABLED</span>
          <span className="text-green-400 font-medium">TERM: 2026 – 2028</span>
        </div>
      </div>

      {/* 🔷 MAIN NAV */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* LEFT */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-900 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-sm font-semibold tracking-wide text-gray-900">
                  ELECTIONCYCLE
                </h1>
              </div>

              {/* Tabs */}
              <nav className="flex items-center gap-8 ml-6">
                {tabs.map((tab) => {
                  const active = pathname === tab.href;

                  return (
                    <Link
                      key={tab.name}
                      href={tab.href}
                      className={`relative text-sm font-medium transition-colors ${
                        active
                          ? "text-indigo-700"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {tab.name}

                      {active && (
                        <span className="absolute left-0 -bottom-[18px] h-[2px] w-full bg-indigo-700 rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* RIGHT: Voter Status */}
            <div className="flex items-center gap-4">
              <div className="text-right text-xs">
                <p className="text-gray-400">VOTER STATUS</p>
                <p className="text-green-600 font-semibold">ELIGIBLE</p>
              </div>

              <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="w-4 h-4 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 🔷 PROGRESS STEPPER */}
      <ProgressStepper steps={steps} />
    </div>
  );
}
