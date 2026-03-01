import React from "react";
import { Lock, ChevronRight } from "lucide-react";

export default function ArchivesSection({ onAccessClick }) {
  return (
    <div className="bg-[#181156] rounded-3xl p-5 shadow-sm text-white">
      <div className="flex flex-col gap-3">
        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
          <Lock size={14} className="text-white" strokeWidth={2.5} />
        </div>
        <div>
          <h3 className="text-xs font-bold mb-1 tracking-tight uppercase tracking-widest">
            CLASSIFIED ARCHIVES
          </h3>
          <p className="text-[10px] text-white/60 leading-relaxed font-medium mb-4">
            Internal council deliberations and audit drafts. Access restricted
            to BadgeLevel 9+.
          </p>
          <button
            onClick={onAccessClick}
            className="text-white text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 hover:text-white/80 transition-opacity bg-white/10 w-max px-3 py-1.5 rounded-lg"
          >
            REQUEST ACCESS <ChevronRight size={12} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}
