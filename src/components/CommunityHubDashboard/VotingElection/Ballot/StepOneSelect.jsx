"use client";

import { Check } from "lucide-react";

export default function StepOneSelect({
  candidates,
  selected,
  setSelected,
  filter,
  setFilter,
  onNext,
}) {
  const toggleSelect = (c) => {
    const exists = selected.find((s) => s.id === c.id);

    if (exists) {
      setSelected(selected.filter((s) => s.id !== c.id));
    } else {
      if (selected.length >= 3) return;
      setSelected([...selected, c]);
    }
  };

  const filtered =
    filter === "All Sectors"
      ? candidates
      : candidates.filter((c) => c.hub === filter);

  return (
    <div className="px-6 md:px-12 lg:px-20 mt-10 max-w-7xl mx-auto">
      {/* HEADER */}
      <h2 className="text-3xl font-semibold text-center text-gray-900">
        Choose Your Representatives
      </h2>
      <p className="text-center text-gray-500 mt-2">
        You may select up to three (3) candidates for the 2026–2028 term.
      </p>

      {/* FILTERS */}
      <div className="flex gap-3 mt-8">
        {["All Sectors", "Hub O", "Hub P"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm border transition
            ${
              filter === f
                ? "bg-indigo-50 text-indigo-700 border-indigo-500 shadow-sm"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {filtered.map((c) => {
          const active = selected.some((s) => s.id === c.id);

          return (
            <div
              key={c.id}
              onClick={() => toggleSelect(c)}
              className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-200
              ${
                active
                  ? "border-indigo-600 ring-2 ring-indigo-100 shadow-md"
                  : "bg-white border-gray-200 hover:shadow-sm"
              }`}
            >
              {/* CHECK ICON */}
              {active && (
                <div className="absolute top-4 right-4 bg-indigo-700 text-white p-1.5 rounded-full shadow">
                  <Check size={14} />
                </div>
              )}

              {/* AVATAR */}
              <div className="w-16 h-16 rounded-full bg-gray-100 mb-5 flex items-center justify-center">
                <span className="text-gray-400 text-sm">👤</span>
              </div>

              {/* NAME */}
              <h3 className="font-semibold text-gray-900">{c.name}</h3>

              {/* LOCATION */}
              <p className="text-xs text-indigo-600 mt-1 font-medium tracking-wide">
                {c.location}
              </p>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                {c.description}
              </p>

              {/* FOOT */}
              <div className="flex justify-between items-center mt-5 text-xs">
                <span className="text-gray-400 font-medium">
                  🏅 LEVEL {c.level}
                </span>
                <span className="text-indigo-600 font-semibold tracking-wide">
                  VIEW MANIFESTO
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* INTEGRITY BOX */}
      <div className="mt-8 bg-indigo-900 text-white p-4 rounded-xl w-72 text-xs shadow-lg">
        <p className="font-semibold tracking-wide">LIVE INTEGRITY CHECK</p>
        <p className="mt-2 opacity-80">Current Ballot Hash: ac7a2...f59</p>
        <p className="opacity-60 mt-1">Audit Session: UBOS-C23-9016-2026-A</p>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center mt-10">
        <p className="text-sm text-gray-600">
          {selected.length} candidate selected ({3 - selected.length} slots
          remaining)
        </p>

        <button
          onClick={onNext}
          disabled={selected.length === 0}
          className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2.5 rounded-full shadow-md transition disabled:opacity-40"
        >
          Review Ballot
        </button>
      </div>
    </div>
  );
}
