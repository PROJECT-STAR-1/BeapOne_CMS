"use client";

import Link from "next/link";
import {
  Home,
  BookOpen,
  Users,
  Briefcase,
  Vote,
  UserCheck,
  FileText,
  Archive,
  ScrollText,
  Gavel,
  BarChart3,
  Trophy,
} from "lucide-react";

const menu = [
  {
    section: "MAIN",
    items: [
      {
        label: "Home Dashboard",
        icon: Home,
        href: "/home/communityHubDashboard",
        active: true,
      },
    ],
  },
  {
    section: "RESOURCES",
    items: [
      {
        label: "Knowledge Base",
        icon: BookOpen,
        href: "/knowledge-base",
      },
      {
        label: "Learning Cohorts",
        icon: Users,
        href: "/cohorts",
      },
      {
        label: "Job Board",
        icon: Briefcase,
        href: "/jobs",
      },
    ],
  },

{
  section: "VOTING & ELECTIONS",
  items: [
    {
      label: "Voting & Elections",
      icon: Vote,
      href: "/home/communityHubDashboard/votingElections/voting",
      description: "Governance voting & polls",
    },
    {
      label: "Ballot Selection",
      icon: UserCheck,
      href: "/voting/candidates",
      description: "Candidate voting (Step 1)",
    },
  ],
},

  {
  section: "GOVERNANCE & RECORDS",
  items: [
    {
      label: "Archive Hub",
      icon: Archive,
      href: "/home/communityHubDashboard/governanceRecords/archiveHub",
      description: "Historical records",
    },
    {
      label: "Audit Report",
      icon: FileText,
      href: "/home/communityHubDashboard/governanceRecords/auditReport",
      description: "2025 accountability report",
    },
    {
      label: "2025 Bylaws",
      icon: ScrollText,
      href: "/archive/2025-bylaws",
      description: "Governance framework",
    },
    {
      label: "Council Roadmap",
      icon: Gavel,
      href: "/archive/disputes",
      description: "Q4-25 feature roadmap",
    },
    {
      label: "Election Cycle",
      icon: BarChart3,
      href: "/archive/metrics",
      description: "2026–2028 nominations",
    },
    {
      label: "Rulings 2025",
      icon: Trophy,
      href: "/archive/leaderboard",
      description: "Dispute & conduct rulings",
    },
     {
      label: "Engagement Report",
      icon: Trophy,
      href: "/archive/leaderboard",
      description: "Monthly engagement metrics",
    },
     {
      label: "Leaderboard",
      icon: Trophy,
      href: "/archive/leaderboard",
      description: "Gamification & points ranking",
    },
     {
      label: "Audit Ledger",
      icon: Trophy,
      href: "/archive/leaderboard",
      description: "Certified point-by-point ledger",
    },
  ],
},

];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen sticky top-0 bg-white border-r flex flex-col">
  
  {/* Scrollable Area */}
  <div className="flex-1 overflow-y-auto px-4 py-6">
    
    {/* Logo */}
    <div className="flex items-center gap-2 mb-6">
      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
        C
      </div>
      <span className="font-semibold">C23 COMMUNITY</span>
    </div>

    {/* Menu */}
    <nav className="space-y-6">
      {menu.map((group, i) => (
        <div key={i}>
        <div className="text-xs text-gray-400 tracking-wider mb-2 px-2">
  {group.section}
</div>

          {group.description && (
            <div className="text-[11px] text-gray-400 mb-2">
              {group.description}
            </div>
          )}

          <div className="space-y-1 mt-1">
            {group.items.map((item, idx) => {
              const Icon = item.icon;

              return (
    <Link
  key={idx}
  href={item.href}
  className={`flex items-start gap-3 px-3 py-2 rounded-xl transition-all
    ${item.active ? "bg-blue-50 text-blue-600" : "hover:bg-gray-100"}
  `}
>
  {/* ICON COLUMN */}
  <div className="mt-0.5">
    {Icon && <Icon size={18} className="text-gray-500" />}
  </div>

  {/* TEXT COLUMN */}
  <div className="flex flex-col leading-tight">
    <span className="text-sm font-medium">
      {item.label}
    </span>

    {item.description && (
      <span className="text-xs text-gray-400 mt-0.5">
        {item.description}
      </span>
    )}
  </div>
</Link>       );
            })}
          </div>
        </div>
      ))}
    </nav>
  </div>

  {/* Fixed Bottom Card */}
  <div className="p-4 border-t">
    <div className="bg-indigo-800 text-white p-4 rounded-xl">
      <div className="text-xs opacity-70 mb-1">
        NEXT MILESTONE
      </div>
      <div className="text-sm font-semibold mb-3">
        Level up to stand for election!
      </div>
      <button className="bg-blue-500 w-full py-2 rounded-lg text-sm">
        VIEW PATH
      </button>
    </div>
  </div>
</aside>
  );
}