import Header from "@/components/AffiliateDashboard/Headers";
import Navbar from "@/components/AffiliateDashboard/Navbar";

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="p-8 space-y-6">
        <Header />
        <div className="border rounded-xl p-12 text-center text-gray-500">
          Payout History coming soon.
        </div>

        <p className="text-xs text-gray-400 text-right">
          Last automated commission calculation: Today, 00:00 UTC
        </p>
      </div>
    </div>
  );
}