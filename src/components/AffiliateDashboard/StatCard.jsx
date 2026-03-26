export default function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  color,
}) {
  return (
   <div className="bg-white border border-[#E4E7EC] rounded-xl p-5 shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
     <div className="flex items-center gap-2 text-[11px] text-gray-400 uppercase tracking-wide mb-2">
        <Icon size={16} className={color} />
        {label}
      </div>

      <div className="text-2xl font-bold">{value}</div>

      <div className="text-xs text-gray-500 mt-1">{sub}</div>
    </div>
  );
}