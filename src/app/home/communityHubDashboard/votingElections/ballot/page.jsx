"use client";

import { useState } from "react";
import StepOneSelect from "@/components/CommunityHubDashboard/VotingElection/Ballot/StepOneSelect";
import StepTwoReview from "@/components/CommunityHubDashboard/VotingElection/Ballot/StepTwoReview";
import StepThreeSubmit from "@/components/CommunityHubDashboard/VotingElection/Ballot/StepThreeSubmit";
import { Check } from "lucide-react";

const candidates = [
  {
    id: 1,
    name: "Dr. Sarah Adenuga",
    location: "LAGOS, NIGERIA",
    level: 9,
    hub: "Hub O",
    description:
      "On standardizing multi-currency reporting for Hub O across the ECOWAS region.",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    location: "LONDON, UK",
    level: 10,
    hub: "Hub G",
    description:
      "Advocating for decentralized support systems and user-led feature prioritization in Hub G.",
  },
  {
    id: 3,
    name: "Wei Li",
    location: "SHANGHAI, CHINA",
    level: 8,
    hub: "Hub P",
    description:
      "Driving integration between LRMS and regional career boards for manufacturing hubs.",
  },
];

export default function VotingFlow() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState([]);
  const [filter, setFilter] = useState("All Sectors");
  const [confirmed, setConfirmed] = useState(false);

  const steps = [
    { id: 1, label: "SELECT" },
    { id: 2, label: "REVIEW" },
    { id: 3, label: "SUBMIT" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-gray-900">
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 border-b border-gray-200 bg-white">
        <div>
          <h1 className="text-lg font-semibold">
            Governing Council Election 2026
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Step {step} of 3:{" "}
            {step === 1
              ? "Select Your Candidates"
              : step === 2
                ? "Review Your Ballot"
                : "Submit Ballot"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-[10px] text-gray-400 uppercase tracking-wide">
              Voter Eligibility
            </p>
            <p className="text-sm font-semibold text-green-600">
              ● VERIFIED (Hub G)
            </p>
          </div>

          <div className="w-9 h-9 rounded-full bg-orange-200 flex items-center justify-center text-sm">
            🧑
          </div>
        </div>
      </div>

      {/* STEP INDICATOR */}
      <div className="flex justify-center items-center gap-6 mt-10">
        {steps.map((s, index) => {
          const isActive = step === s.id;
          const isCompleted = step > s.id;

          return (
            <div key={s.id} className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                {/* CIRCLE */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition
            ${
              isCompleted
                ? "bg-green-600 text-white"
                : isActive
                  ? "bg-indigo-700 text-white"
                  : "bg-gray-200 text-gray-500"
            }`}
                >
                  {isCompleted ? <Check size={14} /> : s.id}
                </div>

                {/* LABEL */}
                <span
                  className={`text-xs font-semibold tracking-wide
            ${
              isActive
                ? "text-indigo-700"
                : isCompleted
                  ? "text-green-600"
                  : "text-gray-400"
            }`}
                >
                  {s.label}
                </span>
              </div>

              {/* CONNECTOR LINE */}
              {index < steps.length - 1 && (
                <div
                  className={`w-12 h-[2px] transition
            ${step > s.id ? "bg-green-500" : "bg-gray-300"}`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* STEP CONTENT */}
      {step === 1 && (
        <StepOneSelect
          candidates={candidates}
          selected={selected}
          setSelected={setSelected}
          filter={filter}
          setFilter={setFilter}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <StepTwoReview
          selected={selected}
          confirmed={confirmed}
          setConfirmed={setConfirmed}
          onBack={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <StepThreeSubmit selected={selected} onBack={() => setStep(2)} />
      )}
    </div>
  );
}
