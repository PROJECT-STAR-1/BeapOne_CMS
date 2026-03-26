"use client";

import Link from "next/link";
import { Bolt } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `text-sm font-medium pb-1 ${
      pathname === path
        ? "text-black border-b-2 border-black"
        : "text-gray-500"
    }`;

  return (
<div className="flex justify-between items-center px-8 py-4 border-b border-[#E4E7EC] bg-white">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 font-semibold">
          <Bolt size={18} />
          UBOS AFFILIATES
        </div>

        <div className="flex gap-6">
          <Link href="/home/hubDashboard" className={linkStyle("/home/hubDashboard")}>
            Dashboard
          </Link>
          <Link href="/home/hubDashboard/marketing" className={linkStyle("/home/hubDashboard/marketing")}>
            Marketing Assets
          </Link>
          <Link href="/home/hubDashboard/payouts" className={linkStyle("/home/hubDashboard/payouts")}>
            Payout History
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs text-gray-400 uppercase">
          Account Profile
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm">Jane Doe</span>
          <div className="w-8 h-8 rounded-full bg-red-400" />
        </div>
      </div>
    </div>
  );
}