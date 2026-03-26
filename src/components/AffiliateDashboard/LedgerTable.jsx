export default function LedgerTable() {
  const rows = [
    {
      date: "Mar 12, 2026",
      source: "₦450,000 (NGN)",
      commission: "$225.50",
      status: "confirmed",
    },
    {
      date: "Mar 10, 2026",
      source: "€120.00 (EUR)",
      commission: "$32.10",
      status: "pending",
    },
    {
      date: "Mar 08, 2026",
      source: "₦1,200,000 (NGN)",
      commission: "$600.00",
      status: "paid",
    },
    {
      date: "Mar 05, 2026",
      source: "₦50,000 (NGN)",
      commission: "$25.00",
      status: "confirmed",
    },
  ];

  const statusColor = {
    confirmed: "bg-green-100 text-green-600",
    pending: "bg-yellow-100 text-yellow-600",
    paid: "bg-blue-100 text-blue-600",
  };

  return (
   <div className="bg-white border border-[#E4E7EC] rounded-xl p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
      <div className="flex justify-between mb-4">
        <h3 className="font-semibold">Commission Ledger</h3>
        <span className="text-xs text-gray-400">
          CURRENCY: USD
        </span>
      </div>

      <table className="w-full text-sm">
      <thead className="text-[11px] text-gray-400 uppercase tracking-wide">
          <tr>
            <th className="text-left py-2">REF DATE</th>
            <th>SOURCE PAYMENT</th>
            <th>COMMISSION (USD)</th>
            <th>STATUS</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-[#F2F4F7]">
              <td className="py-3">{r.date}</td>
              <td>{r.source}</td>
              <td>{r.commission}</td>
              <td>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${statusColor[r.status]}`}
                >
                  {r.status.toUpperCase()}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-sm text-blue-600 mt-4 cursor-pointer">
        View All Transactions
      </p>
    </div>
  );
}