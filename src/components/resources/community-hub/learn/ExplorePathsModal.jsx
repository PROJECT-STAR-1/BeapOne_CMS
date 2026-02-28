"use client";

import React from "react";
import { X, Map, ChevronRight, FileText } from "lucide-react";

export default function ExplorePathsModal({
  showPathsModal,
  setShowPathsModal,
  learningPaths,
}) {
  if (!showPathsModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200 font-instrument-sans antialiased">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B1464] text-white flex items-center justify-center shadow-sm">
              <Map size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Explore Learning Paths
              </h3>
              <p className="text-xs font-medium text-slate-500">
                Curated tracks to achieve verified mastery.
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowPathsModal(false)}
            className="text-slate-400 hover:text-slate-700 bg-white border border-gray-200 rounded-full p-2 transition-colors shadow-sm"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
          {learningPaths.map((path) => (
            <div
              key={path.id}
              className="border border-gray-200 rounded-2xl p-5 hover:border-[#1B1464] hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#1B1464] transition-colors">
                  {path.title}
                </h4>
                <ChevronRight
                  size={18}
                  className="text-slate-300 group-hover:text-[#1B1464] transition-colors"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <FileText size={14} /> {path.courses} Courses
                </span>
                <span className="text-slate-300">•</span>
                <span>{path.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
