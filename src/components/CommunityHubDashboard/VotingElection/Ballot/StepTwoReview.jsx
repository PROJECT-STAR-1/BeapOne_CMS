"use client";

import { ArrowLeft } from "lucide-react";

export default function StepTwoReview({
  selected,
  confirmed,
  setConfirmed,
  onBack,
  onNext,
}) {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <button
          onClick={onBack}
          className="flex items-center text-sm text-gray-500 mb-6 hover:text-gray-700"
        >
          <ArrowLeft size={16} className="mr-1" /> Back
        </button>

        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Review Your Ballot
        </h2>
        <p className="text-center text-sm text-gray-500 mt-2">
          Please verify your selected candidates. You can still go back to make changes.
        </p>

        {/* SELECTED */}
        {selected.map((c) => (
          <div
            key={c.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 mt-8 shadow-sm"
          >
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-lg">
                👤
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {c.name}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  {c.location}
                </p>

                <p className="text-sm mt-3 text-gray-600 leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* EMPTY SLOTS */}
        {selected.length < 3 && (
          <div className="border border-dashed border-gray-300 rounded-2xl p-8 mt-8 text-center">
            <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">
              Slot {selected.length + 1} & 3: Unfilled
            </p>
            <button
              onClick={onBack}
              className="text-sm text-indigo-600 hover:underline"
            >
              Go back to add more candidates
            </button>
          </div>
        )}

        {/* CHECKBOX */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5 mt-8 flex items-start gap-3">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-1"
          />
          <p className="text-sm text-gray-600 leading-relaxed">
            I confirm that I have reviewed the manifests of my selected candidates and understand that my vote is final once submitted. I acknowledge that my vote will be cryptographically hashed and logged for audit purposes.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={onBack}
            className="px-5 py-2 rounded-full border border-gray-300 text-sm text-gray-600 hover:bg-gray-100"
          >
            Edit Selections
          </button>

          <button
            onClick={onNext}
            disabled={!confirmed}
            className="px-7 py-2.5 rounded-full bg-slate-700 text-white text-sm font-medium hover:bg-slate-800 disabled:opacity-40"
          >
            Proceed to Final Submission
          </button>
        </div>
      </div>
    </div>
  );
}