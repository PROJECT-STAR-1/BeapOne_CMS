import React from "react";
import { BarChart2 } from "lucide-react";

export default function StrategicPillarsSection() {
  const pillars = [
    {
      title: "Long-term Sustainability",
      status: "On Track",
      color: "#00E676",
      val: 85,
    },
    {
      title: "Community Engagement",
      status: "Needs Improvement",
      color: "#00BFA5",
      val: 45,
    },
    { title: "Economic Growth", status: "On Hold", color: "#94a3b8", val: 20 },
  ];

  return (
    <div className="bg-[#14122D] rounded-3xl p-5 md:p-6 text-white shadow-lg border border-slate-800">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg md:text-xl font-bold tracking-tight">
            Strategic Pillars
          </h3>
          <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
            Impact vs UBOS 2026 KPIs
          </p>
        </div>
        <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
          <BarChart2 size={18} />
        </div>
      </div>

      <div className="space-y-4">
        {pillars.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between items-end mb-1.5">
              <span className="text-xs font-bold">{item.title}</span>
              <span
                className="text-[9px] font-bold uppercase"
                style={{ color: item.color }}
              >
                {item.status}
              </span>
            </div>
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <div
                className="bg-[#304FFE] h-full"
                style={{ width: `${item.val}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
