export default function TierCard() {
  return (
   <div className="bg-white border border-[#E4E7EC] rounded-xl p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Tier Status</h3>
        <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
          GOLD
        </span>
      </div>

     <div className="border border-[#E4E7EC] rounded-lg p-6 text-center bg-gray-50">
        <div className="text-4xl font-bold">15%</div>
        <div className="text-xs text-gray-400 mt-1">
          COMMISSION RATE
        </div>
      </div>

      <div className="flex justify-between text-sm mt-4">
        <span className="text-gray-500">Next Tier: Platinum</span>
        <span className="text-blue-600 font-medium">
          75% Achieved
        </span>
      </div>

     <div className="w-full h-2 bg-gray-100 rounded mt-2">
        <div className="w-[75%] h-2 bg-blue-500 rounded" />
      </div>

      <p className="text-xs text-gray-500 mt-2">
        Generate ₦2.5M more in referred LTV to unlock 20%
        commission
      </p>
    </div>
  );
}