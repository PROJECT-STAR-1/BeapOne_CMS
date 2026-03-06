"use client";

import { CheckCircle2 } from "lucide-react";

export default function UBOSApiSection() {
  return (
    <section className="w-full bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE — CONTENT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Build Without Limits: The UBOS API
          </h2>

          <p className="text-black mb-6 leading-relaxed">
            The Universal Business Operating System offers a single, robust API
            endpoint for seamless integration, custom app development, and data
            extraction across all Hubs.
          </p>

          <div className="space-y-4">
            <Feature
              text={
                <>
                  <span className="font-semibold">Unified Data Access:</span>{" "}
                  One endpoint to rule all modules, from Hub B (Org Structure)
                  to Hub O (Financial).
                </>
              }
            />

            <Feature
              text={
                <>
                  <span className="font-semibold">Certified App Program:</span>{" "}
                  Get your bespoke internal or public-facing app certified by
                  BEAPOne.
                </>
              }
            />

            <Feature
              text={
                <>
                  <span className="font-semibold">
                    Optimized for Performance:
                  </span>{" "}
                  High-speed endpoints managed by the Core Platform Services
                  (Hub G).
                </>
              }
            />
          </div>

          <button className="mt-8 border border-gray-600 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            View Developer Documentation
          </button>
        </div>

        {/* RIGHT SIDE — CODE BLOCK */}
        <div className="bg-black rounded-xl p-6 shadow-lg border border-gray-800">
          <pre className="text-sm overflow-x-auto">
            <code className="text-green-400">
              {`// Sample UBOS API request
const response = fetch("https://api.ubos.com/v1/data", {
  method: "POST",
  body: JSON.stringify({
    hub: "O", // Financial Management
    module: "013", // General Ledger
    action: "POST_ENTRY",
    data: {
      account: "4000-Revenue",
      amount: 5500.00,
      description: "Consulting Fee – HI Client"
    }
  })
});

// Response includes status code and transaction ID from UBOS Core`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

/* Reusable feature row */
function Feature({ text }) {
  return (
    <div className="flex gap-3 items-start">
      <CheckCircle2 size={18} className="text-blue-400 mt-1 shrink-0" />
      <p className="text-gray-500 leading-relaxed">{text}</p>
    </div>
  );
}
