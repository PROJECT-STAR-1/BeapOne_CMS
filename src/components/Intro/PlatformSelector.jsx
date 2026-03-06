import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PlatformSelector() {
  return (
    <div className="w-full">
      {/* ===================== */}
      {/* Section 1: Comparison */}
      {/* ===================== */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Which BEAPOne Platform is Right For You?
        </h2>
        <p className="mt-3 text-gray-500">
          Choose the solution built specifically for your business size and complexity.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* UBOS Card */}
          <div className="rounded-2xl border-2 border-indigo-900 p-8 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-indigo-900">
                BEAPOne UBOS
              </h3>
              <p className="mt-1 font-medium text-gray-800">
                The Integrated Enterprise Operating System
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>• Multi-entity and Multi-jurisdictional financial consolidation.</li>
                <li>• Dedicated Supply Chain Management (SCM) & 3PL integration.</li>
                <li>• Complex Goal, Program, and Portfolio Management (PPPM).</li>
                <li>• Customizable BPO & BPC Solution Management.</li>
                <li>• Dedicated Enterprise Compliance and Audit modules.</li>
              </ul>

              <span className="inline-block mt-6 rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold text-indigo-900">
                Best For: Medium to Large Businesses (50+ Users)
              </span>
            </div>

            <Link 
            href="/home/company/contact-us"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-900 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-800 transition">
              Continue to UBOS (Contact Sales)
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Lite Card */}
          <div className="rounded-2xl border-2 border-emerald-500 p-8 text-left flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-emerald-600">
                BEAPOne Lite
              </h3>
              <p className="mt-1 font-medium text-gray-800">
                The Essential Business Management Toolkit
              </p>

              <ul className="mt-6 space-y-3 text-sm text-gray-600">
                <li>• Simplified General Ledger and basic Accounts Payable/Receivable.</li>
                <li>• Essential Task, Schedule, and To-Do Management.</li>
                <li>• Single-entity workforce and HR management.</li>
                <li>• Standardized reporting and communication tools.</li>
                <li>• Focus on quick setup and ease of use.</li>
              </ul>

              <span className="inline-block mt-6 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700">
                Best For: Small to Medium Businesses (1–50 Users)
              </span>
            </div>

            <Link 
            href="/home/comingSoon"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-600 transition">
              Go to BEAPOne Lite Sign-Up
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* Section 2: Spotlight  */}
      {/* ===================== */}
    <section
  className="relative py-24 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/intro/introHeroFive.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/80" />

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
    {/* Left Text */}
    <div>
      <span className="text-xs font-semibold tracking-widest text-indigo-600">
        SPOTLIGHT
      </span>
      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        Unlock Your Business Growth
      </h2>
    </div>

    {/* UBOS Spotlight Card */}
    <div className="rounded-2xl bg-white shadow-lg p-6 flex flex-col">
      <h3 className="text-lg font-bold text-gray-900">
        BEAPOne UBOS
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        BEAPOne is a Unified Business Operating System (UBOS) SaaS Platform
        designed to serve as a centralized, real-time, and integrated solution
        for managing diverse business operations.
      </p>

      {/* Image */}
      <div className="relative mt-6 h-64 w-full">
        <Image
          src="/images/intro/introSix.svg"
          alt="BEAPOne UBOS preview"
          fill
          className="object-contain"
        />
      </div>

      <Link
      href="/home/comingSoon"
       className="mt-6 self-end rounded-lg bg-indigo-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-800 transition">
        Sign Up
      </Link>
    </div>

    {/* Lite Spotlight Card */}
    <div className="rounded-2xl bg-white shadow-lg p-6 flex flex-col">
      <h3 className="text-lg font-bold text-gray-900">
        BEAPOne Lite
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        BEAPOne Lite is a mobile-first business management software designed
        specifically for Small and Medium Enterprises (SMEs) across Africa.
      </p>

      {/* Image */}
      <div className="relative mt-6 h-64 w-full">
        <Image
          src="/images/intro/introSeven.svg"
          alt="BEAPOne Lite preview"
          fill
          className="object-contain"
        />
      </div>

      <Link
      href="/home/comingSoon"
       className="mt-6 self-end rounded-lg border border-emerald-500 px-5 py-2.5 text-sm font-semibold text-emerald-600 hover:bg-emerald-50 transition">
        Sign Up
      </Link>
    </div>
  </div>
</section>

    </div>
  );
}
