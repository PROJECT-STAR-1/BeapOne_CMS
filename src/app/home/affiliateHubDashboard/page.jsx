import Navbar from "@/components/AffiliateDashboard/Navbar";
import Header from "@/components/AffiliateDashboard/Headers";
import ReferralBox from "@/components/AffiliateDashboard/ReferralBox";
import StatCard from "@/components/AffiliateDashboard/StatCard";
import TierCard from "@/components/AffiliateDashboard/TierCard";
import LedgerTable from "@/components/AffiliateDashboard/LedgerTable";
import {
  MousePointerClick,
  Users,
  DollarSign,
  TrendingUp,
} from "lucide-react";

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="p-8 space-y-8">
        <Header />

        <ReferralBox />

        <div className="grid grid-cols-4 gap-5">
          <StatCard
            icon={MousePointerClick}
            label="Total Clicks"
            value="12,450"
            sub="Generating reach"
            color="text-blue-500"
          />
          <StatCard
            icon={Users}
            label="Conversions"
            value="342"
            sub="2.75% conversion rate"
            color="text-green-500"
          />
          <StatCard
            icon={DollarSign}
            label="Pending Commission"
            value="$1,240.5"
            sub="Ready for A3 Payout"
            color="text-yellow-500"
          />
          <StatCard
            icon={TrendingUp}
            label="Referral LTV"
            value="$45,200"
            sub="Lifetime Customer Value"
            color="text-purple-500"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <TierCard />
          <div className="col-span-2">
            <LedgerTable />
          </div>
        </div>
      </div>
    </div>
  );
}