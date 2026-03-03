"use client";

import { ArrowRight, User, Mail, MapPin, Briefcase } from "lucide-react";
import { useState } from "react";

export default function CandidatePortal() {
  const [activeTab, setActiveTab] = useState("applications");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-[#1B1464] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Candidate Portal</h1>
        <p className="mt-4 text-lg text-gray-200">
          Manage your account, track applications, and access
          <br />
          personalized career opportunities.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        {/* TABS */}
        <div className="flex gap-10 border-b mb-8">
          <button
            onClick={() => setActiveTab("applications")}
            className={`pb-3 text-sm font-medium ${
              activeTab === "applications"
                ? "border-b-2 border-primary text-[#1B1464]"
                : "text-gray-500"
            }`}
          >
            My Applications
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`pb-3 text-sm font-medium ${
              activeTab === "profile"
                ? "border-b-2 border-primary text-[#1B1464]"
                : "text-gray-500"
            }`}
          >
            Manage Profile
          </button>
        </div>

        {/* TAB CONTENT */}
        {activeTab === "applications" && <ApplicationsTab />}
        {activeTab === "profile" && <ProfileTab />}

        {/* READY TO APPLY */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-gray-600 mb-6">
            View open positions, or use your saved profile to quick-apply.
          </p>

          <button className="bg-[#1B1464] text-white px-6 py-3 rounded-full hover:opacity-90 transition">
            Explore Full Careers Page
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================= */
/* APPLICATIONS TAB */
/* ============================= */

function ApplicationsTab() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">
        Application Status Tracking
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Below are the roles you have applied for, showing real-time progress
        through our recruitment pipeline (RPM). You have no active job
        applications. Find your ideal role on the Careers Page.
      </p>

      <p className="text-sm text-gray-500 mb-8">
        You have no active job applications. Find your ideal role on the{" "}
       <a className="text-[#1B1464] font-medium"> Careers Page.</a>
      </p>

      <RecommendationCard />
    </div>
  );
}

/* ============================= */
/* PROFILE TAB */
/* ============================= */

function ProfileTab() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2 text-center">
        Join the Talent Network
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Update your data to receive personalized job alerts.
      </p>

      <div className="bg-white shadow-sm rounded-xl p-8 border">
        <div className="grid grid-cols-1 gap-6">
          <InputField icon={<User size={18} />} label="Full Name *" />
          <InputField icon={<Mail size={18} />} label="Email Address *" />

          <div>
            <label className="block text-sm font-medium mb-2">
              Primary UBOS Expertise Area / Hub Interest *
            </label>
            <select className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Core System/Tech (Hub G)</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              icon={<Briefcase size={18} />}
              label="Desired Role Title (e.g., Architect, Developer)"
              placeholder="e.g., Financial Analyst"
            />
            <InputField
              icon={<MapPin size={18} />}
              label="Preferred Location / Remote Status"
              placeholder="e.g., Remote (EMEA) or London"
            />
          </div>

          <button className="bg-[#1B1464] text-white py-3 rounded-md font-medium hover:opacity-90 transition">
            Save Profile & Subscribe to Alerts
          </button>
        </div>
      </div>

      <div className="mt-8">
        <RecommendationCard />
      </div>
    </div>
  );
}

/* ============================= */
/* RECOMMENDATION CARD */
/* ============================= */

function RecommendationCard() {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">
      <p className="text-sm font-bold text-[#1B1464] mb-2">
        Personalized Job Recommendation
      </p>
      <p className="text-xs text-gray-500 mb-4">
        Based on your saved profile, we recommend checking out this current
        opening:
      </p>

      <div className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
        <div>
          <h3 className="font-semibold">
            Multi-Tenant Platform Architect (Click to Apply)
          </h3>
          <p className="text-sm text-gray-500">Hub G</p>
        </div>

        <button className="flex items-center gap-2 text-[#1B1464] font-medium hover:underline">
          Apply Now <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

/* ============================= */
/* INPUT COMPONENT */
/* ============================= */

function InputField({ label, placeholder, icon }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-[#1B1464]">
        <span className="text-gray-400 mr-2">{icon}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full outline-none bg-transparent text-sm"
        />
      </div>
    </div>
  );
}