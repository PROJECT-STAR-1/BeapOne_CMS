"use client";

import React, { useState } from "react";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  Award,
  Check,
  Send,
} from "lucide-react";

export default function ThreadCard({ thread }) {
  // Localized State - Each card manages itself!
  const [isLiked, setIsLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [customComments, setCustomComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [copied, setCopied] = useState(false);

  const totalLikes = thread.likes + (isLiked ? 1 : 0);
  const totalComments = thread.comments + customComments.length;

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/discussions/${thread.id}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: thread.title, url: shareUrl });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  const submitComment = () => {
    if (!commentInput.trim()) return;
    setCustomComments((prev) => [
      ...prev,
      { text: commentInput, time: "Just now", author: "You", initial: "Y" },
    ]);
    setCommentInput("");
  };

  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
      <div className="flex gap-3 md:gap-4">
        {/* Thumbs / Votes */}
        <div className="flex flex-col items-center gap-1 text-slate-500 pt-0.5">
          <button onClick={() => setIsLiked(!isLiked)}>
            <ThumbsUp
              size={16}
              className={`cursor-pointer transition-colors ${isLiked ? "text-blue-600 fill-blue-50" : "hover:text-[#1B1464]"}`}
            />
          </button>
          <span
            className={`font-bold text-sm font-instrument-sans ${isLiked ? "text-blue-600" : "text-black"}`}>
            {totalLikes}
          </span>
        </div>

        <div className="flex-1">
          {/* Top Metadata */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-[#EAEAF5] text-[#1B1464] text-[9px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider font-instrument-sans">
              {thread.category.toUpperCase()}
            </span>
            <span className="text-slate-400 text-[11px] font-semibold font-instrument-sans">
              {thread.time}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base md:text-[17px] font-bold text-black mb-1.5 font-instrument-sans leading-snug">
            {thread.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {thread.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-slate-500 text-[10px] font-bold italic px-2 py-0.5 rounded-full font-instrument-sans">
                {tag}
              </span>
            ))}
          </div>

          {/* Footer (Author & Actions) */}
          <div className="flex items-center justify-between pt-2.5 border-t border-gray-50">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-slate-200 rounded-full flex items-center justify-center text-[8px] font-bold text-slate-600 font-instrument-sans">
                {thread.initial}
              </div>
              <span className="text-[11px] font-bold text-slate-700 font-instrument-sans">
                {thread.author}
              </span>
              <Award size={10} className="text-[#FBC02D]" />
            </div>
            <div className="flex items-center gap-3 text-slate-400 text-[11px] font-bold font-instrument-sans">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`flex items-center gap-1 transition-colors ${isExpanded ? "text-[#1B1464]" : "hover:text-[#1B1464]"}`}>
                <MessageSquare
                  size={12}
                  className={isExpanded ? "fill-indigo-50" : ""}
                />
                {totalComments}
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-1 hover:text-[#1B1464] transition-colors">
                {copied ? (
                  <>
                    <Check size={12} className="text-green-500" /> Copied
                  </>
                ) : (
                  <>
                    <Share2 size={12} /> Share
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Comments Section */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-100 pl-8 md:pl-10 animate-in fade-in slide-in-from-top-2 duration-200">
          {customComments.length > 0 && (
            <div className="flex flex-col gap-3 mb-4">
              {customComments.map((comment, i) => (
                <div key={i} className="bg-slate-50 rounded-lg p-3 text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 bg-[#1B1464] rounded-full flex items-center justify-center text-[8px] font-bold text-white">
                      {comment.initial}
                    </div>
                    <span className="text-[11px] font-bold text-slate-700">
                      {comment.author}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {comment.time}
                    </span>
                  </div>
                  <p className="text-slate-600 ml-6 text-[13px]">
                    {comment.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-600 flex-shrink-0">
              Y
            </div>
            <div className="relative flex-1">
              <input
                type="text"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitComment()}
                placeholder="Add to the discussion..."
                className="w-full bg-slate-50 border border-slate-200 text-black placeholder:text-slate-400 rounded-full py-2 pl-4 pr-10 text-xs focus:outline-none focus:border-[#1B1464] focus:ring-1 focus:ring-[#1B1464] transition-all"
              />
              <button
                onClick={submitComment}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[#1B1464] hover:opacity-70 p-1">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
