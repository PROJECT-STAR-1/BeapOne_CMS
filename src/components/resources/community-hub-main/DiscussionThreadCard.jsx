"use client";

import React from "react";
import { ThumbsUp, MessageSquare, Share2, Award } from "lucide-react";

export default function DiscussionThreadCard({ thread }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 md:gap-5 hover:shadow-md transition-shadow">
      {/* Thumbs / Votes */}
      <div className="flex flex-col items-center gap-1 text-slate-500 pt-0.5">
        <ThumbsUp
          size={18}
          className="cursor-pointer hover:text-[#1B1464] transition-colors"
        />
        <span className="font-bold text-black text-base font-instrument-sans">
          {thread.likes}
        </span>
      </div>

      {/* Thread Content */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-[#EAEAF5] text-[#1B1464] text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider font-instrument-sans">
            {thread.category.toUpperCase()}
          </span>
          <span className="text-slate-400 text-xs font-semibold font-instrument-sans">
            {thread.time}
          </span>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-black mb-2.5 font-instrument-sans leading-tight">
          {thread.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {thread.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-slate-500 text-[11px] font-bold px-2.5 py-1 rounded-full font-instrument-sans">
              {tag}
            </span>
          ))}
        </div>

        {/* Footer (Author & Actions) */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-600 font-instrument-sans">
              {thread.initial}
            </div>
            <span className="text-xs font-bold text-slate-700 font-instrument-sans">
              {thread.author}
            </span>
            <Award size={12} className="text-[#FBC02D]" />
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-xs font-bold font-instrument-sans">
            <button className="flex items-center gap-1.5 hover:text-[#1B1464] transition-colors">
              <MessageSquare size={14} /> {thread.comments}
            </button>
            <button className="flex items-center gap-1.5 hover:text-[#1B1464] transition-colors">
              <Share2 size={14} /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
