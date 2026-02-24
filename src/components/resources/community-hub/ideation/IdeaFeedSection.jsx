"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronUp,
  Target,
  MessageSquare,
  ChevronRight,
  GitPullRequest,
  Send,
} from "lucide-react";

export default function IdeaFeedSection({
  searchQuery,
  setSearchQuery,
  setVisibleCount,
  activeTab,
  setActiveTab,
  setExpandedIdeaId,
  displayedIdeas,
  processedIdeasLength,
  handleLoadMoreToggle,
  expandedIdeaId,
  handleToggleOpen,
  visibleCount,
  handleAddComment,
}) {
  // Local state to track the text input for new comments
  const [commentInput, setCommentInput] = useState("");

  const submitComment = (ideaId) => {
    if (commentInput.trim() === "") return;
    handleAddComment(ideaId, commentInput);
    setCommentInput("");
  };

  return (
    <main className="xl:col-span-8 flex flex-col gap-6">
      {/* Search & Tabs Row */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Dynamic Search Bar */}
        <div className="relative flex-1 w-full">
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(3);
            }}
            placeholder="Filter ideas module, status, or keyword"
            className="w-full bg-white border border-gray-200 text-slate-800 placeholder:text-slate-400 rounded-full py-3.5 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B1464] transition-shadow shadow-sm font-medium"
          />
        </div>

        {/* White Background Border Container for Tabs */}
        <div className="flex items-center gap-1 bg-white rounded-full p-1.5 border border-gray-200 shadow-sm w-full md:w-auto overflow-x-auto">
          {["TRENDING", "TOP RATED", "NEWEST"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setVisibleCount(3);
                setExpandedIdeaId(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? "bg-[#1B1464] text-white shadow-sm"
                  : "bg-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Render Processed Ideas */}
      <div className="flex flex-col gap-5 min-h-[500px]">
        {displayedIdeas.length > 0 ? (
          displayedIdeas.map((idea) => {
            const isExpanded = expandedIdeaId === idea.id;

            return (
              <div
                key={idea.id}
                className={`bg-white border transition-colors duration-300 rounded-3xl p-5 md:p-6 flex flex-col hover:shadow-md ${
                  isExpanded ? "border-[#1B1464] shadow-sm" : "border-gray-200"
                }`}>
                {/* Top Row: Merit & Content */}
                <div className="flex flex-col md:flex-row gap-5">
                  {/* Merit Counter */}
                  <div className="flex md:flex-col items-center justify-center gap-2 md:gap-0 bg-slate-50 md:bg-transparent rounded-xl md:rounded-none px-4 py-2 md:px-0 md:py-0 w-fit md:w-16 text-center md:border-r md:border-gray-100 md:pr-5 flex-shrink-0 h-fit">
                    <button className="text-slate-400 hover:text-[#1B1464] transition-colors">
                      <ChevronUp size={24} strokeWidth={3} />
                    </button>
                    <span className="text-lg md:text-xl font-bold text-[#1B1464] leading-none my-1">
                      {idea.votes}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                      MERIT
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 flex flex-col w-full min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-[9px] font-bold px-2.5 py-1 rounded uppercase tracking-wider ${
                            idea.status === "APPROVED"
                              ? "bg-[#E8F5E9] text-[#00C853]"
                              : idea.status === "IN DEV"
                                ? "bg-[#E3F2FD] text-[#0277BD]"
                                : idea.status === "NEW"
                                  ? "bg-slate-100 text-slate-600"
                                  : "bg-[#FFF9C4] text-[#F57F17]"
                          }`}>
                          {idea.status}
                        </span>
                        <span className="bg-[#EAEAF5] text-[#1B1464] text-[9px] font-extrabold px-2.5 py-1 rounded uppercase tracking-wider">
                          {idea.module}
                        </span>
                        <span className="border border-slate-200 text-slate-600 text-[9px] font-bold px-2.5 py-1 rounded">
                          {idea.category}
                        </span>
                      </div>
                      <div
                        className={`flex items-center gap-1.5 text-xs font-bold ${
                          idea.roi === "High ROI"
                            ? "text-red-600"
                            : idea.roi === "Medium ROI"
                              ? "text-orange-500"
                              : "text-slate-500"
                        }`}>
                        <Target size={14} strokeWidth={2.5} /> {idea.roi}
                      </div>
                    </div>

                    <h3
                      onClick={() => handleToggleOpen(idea.id)}
                      className="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-tight hover:text-[#1B1464] cursor-pointer transition-colors">
                      {idea.title}
                    </h3>
                    <p
                      className={`text-slate-500 text-sm leading-relaxed mb-5 ${isExpanded ? "" : "line-clamp-2"}`}>
                      {idea.excerpt}
                    </p>

                    {/* Footer Row */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mt-auto">
                      <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-slate-500">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] text-slate-700">
                            {idea.user.charAt(0).toUpperCase()}
                          </div>
                          <span className="text-slate-700">{idea.user}</span>
                          <span className="text-[#1B1464]">{idea.merit}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400 border-l border-slate-200 pl-3">
                          <MessageSquare size={14} /> {idea.comments}
                        </div>
                      </div>

                      <div className="flex-1 w-full md:max-w-[200px] flex flex-col gap-1.5">
                        <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider">
                          <span className="text-slate-500">
                            REVIEW THRESHOLD
                          </span>
                          <span
                            className={
                              idea.threshold === 100
                                ? "text-[#00C853]"
                                : "text-slate-700"
                            }>
                            {idea.threshold}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${idea.threshold === 100 ? "bg-[#00C853]" : "bg-[#1B1464]"}`}
                            style={{ width: `${idea.threshold}%` }}></div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleToggleOpen(idea.id)}
                        className={`text-xs font-bold flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                          isExpanded
                            ? "bg-[#1B1464] text-white"
                            : "text-[#1B1464] bg-slate-50 hover:bg-[#EAEAF5]"
                        }`}>
                        {isExpanded ? "CLOSE" : "OPEN"}
                        <ChevronRight
                          size={14}
                          strokeWidth={2.5}
                          className={`transition-transform duration-300 ${isExpanded ? "rotate-90" : ""}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Content Area with Chats/Comments */}
                {isExpanded && (
                  <div className="mt-5 pt-5 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300 ml-0 md:ml-[88px]">
                    {/* Full Description */}
                    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-6">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <GitPullRequest size={14} /> Technical Proposal Details
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed font-medium mb-4">
                        {idea.fullDescription}
                      </p>
                      <button className="bg-white border border-gray-200 text-slate-600 text-xs font-bold px-4 py-2 rounded-lg hover:border-[#1B1464] hover:text-[#1B1464] transition-colors">
                        View Linked Documentation
                      </button>
                    </div>

                    {/* Functional Comments Section */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <MessageSquare size={14} /> Discussion ({idea.comments})
                      </h4>

                      {/* List of Replies */}
                      <div className="space-y-3 mb-4 max-h-64 overflow-y-auto pr-2">
                        {idea.replies && idea.replies.length > 0 ? (
                          idea.replies.map((reply) => (
                            <div
                              key={reply.id}
                              className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="text-xs font-bold text-[#1B1464]">
                                  {reply.user}
                                </span>
                                <span className="text-[10px] font-medium text-slate-400">
                                  {reply.time}
                                </span>
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {reply.text}
                              </p>
                            </div>
                          ))
                        ) : (
                          <p className="text-xs text-slate-400 italic px-1">
                            No comments yet. Be the first to share your
                            thoughts!
                          </p>
                        )}
                      </div>

                      {/* Comment Input Field */}
                      <div className="flex items-center gap-3 mt-4 bg-slate-50 p-2 rounded-xl border border-slate-100">
                        <input
                          type="text"
                          value={commentInput}
                          onChange={(e) => setCommentInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") submitComment(idea.id);
                          }}
                          placeholder="Add your comment..."
                          className="flex-1 bg-transparent text-sm text-slate-800 px-2 focus:outline-none"
                        />
                        <button
                          onClick={() => submitComment(idea.id)}
                          disabled={!commentInput.trim()}
                          className="bg-[#1B1464] text-white p-2.5 rounded-lg hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                          <Send size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          // Empty Search/Filter State
          <div className="bg-white border border-gray-200 rounded-3xl p-16 flex flex-col items-center justify-center text-center shadow-sm">
            <Search size={48} className="text-slate-300 mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              No ideas found
            </h3>
            <p className="text-slate-500 text-sm max-w-md">
              We couldn't find any ideas matching your current search or tab
              criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>

      {/* Dynamic Load More / Show Less Button */}
      {processedIdeasLength > 3 && (
        <div className="text-center pt-6 pb-4">
          <button
            onClick={handleLoadMoreToggle}
            className="text-sm font-bold text-slate-500 hover:text-[#1B1464] transition-colors">
            {visibleCount < processedIdeasLength
              ? "View More Ideas"
              : "Show Less Ideas"}
          </button>
        </div>
      )}
    </main>
  );
}
