"use client";
import { usePathname } from "next/navigation";
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
        href: "/home/communityHubDashboard/votingElections/ballot",
        description: "Candidate voting",
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
        href: "/home/communityHubDashboard/bylaws",
        description: "Governance framework",
      },
      {
        label: "Council Roadmap",
        icon: Gavel,
        href: "/home/communityHubDashboard/councilRoadmaps",
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
        href: "/home/communityHubDashboard/rullings",
        description: "Dispute & conduct rulings",
      },
      {
        label: "Engagement Report",
        icon: Trophy,
        href: "/home/communityHubDashboard/engagements",
        description: "Monthly engagement metrics",
      },
      {
        label: "Leaderboard",
        icon: Trophy,
        href: "/home/communityHubDashboard/leaderboard",
        description: "Gamification & points ranking",
      },
      {
        label: "Audit Ledger",
        icon: Trophy,
        href: "/home/communityHubDashboard/auditLedger",
        description: "Certified point-by-point ledger",
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
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen sticky top-0 bg-gray-50 border-r border-gray-200 flex flex-col">
      {/* Scrollable Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-sm">
            C
          </div>
          <span className="font-semibold text-gray-800 text-sm tracking-tight">
            C23 COMMUNITY
          </span>
        </div>

        {/* Menu */}
        <nav className="space-y-8">
          {menu.map((group, i) => (
            <div key={i}>
              {/* Section Title */}
              <div className="text-[11px] font-semibold text-gray-400 tracking-widest px-2 mb-3">
                {group.section}
              </div>

              {/* Items */}
              <div className="space-y-1">
                {group.items.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
    ${
      isActive
        ? "bg-blue-50 text-blue-600 shadow-sm"
        : "text-gray-600 hover:bg-gray-100"
    }
  `}
                    >
                      {/* ICON */}
                      {Icon && (
                        <Icon
                          size={18}
                          className={`transition-colors
    ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}
  `}
                        />
                      )}

                      {/* TEXT */}
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
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Card */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 text-white p-5 rounded-2xl shadow-md">
          <div className="text-[11px] uppercase tracking-widest opacity-70 mb-2">
            Next Milestone
          </div>

          <div className="text-sm font-semibold leading-snug mb-4">
            Level up to stand for election!
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-400 transition-colors text-sm font-medium py-2.5 rounded-xl">
            View Path
          </button>
        </div>
      </div>
    </aside>
  );
}
