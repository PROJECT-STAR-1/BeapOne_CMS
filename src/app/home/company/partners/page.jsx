"use client";

import {
  ArrowRight,
  Users,
  Settings,
  Cpu,
  FileCheck,
  PenTool,
  GraduationCap,
  Rocket,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#f3f4f6] text-gray-800">

      {/* ================= HERO ================= */}
      <section className="bg-indigo-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Unlock Multi-Dimensional Revenue Growth.
            <br />
            Become a UBOS Partner.
          </h1>

          <p className="text-lg text-gray-200 mb-10">
            Expand your service offering with the Universal Business Operating System—
            the unified solution for global, multi-currency complexity.
          </p>

          <button className="bg-white text-black font-semibold px-8 py-3 rounded-full inline-flex items-center gap-2 hover:scale-105 transition">
            Start Your Partnership Application
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* ================= PROGRAM CARDS ================= */}
      <section className="py-20 px-6 bg-[#e5e7eb]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">
            Find Your Fit: Our Partnership Programs
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <ProgramCard
            icon={<Users size={22} />}
            title="Agent & Reseller Program"
            border="border-indigo-700"
            description="Ideal for independent entities focused on direct sales and client relationship management within a specific geography."
            bullets={[
              "Recurring commission model.",
              "Access to Hub O/K Sales Training.",
              "Full lead protection via Deal Registration.",
            ]}
          />

          {/* Card 2 */}
          <ProgramCard
            icon={<Settings size={22} />}
            title="Implementation & SI Program"
            border="border-emerald-500"
            description="For consulting firms and SIs specializing in complex deployment, BPC (Hub O), and customization services."
            bullets={[
              "Service revenue opportunities (consulting).",
              "Access to UBOS API SDK (Hub G).",
              "Exclusive Tier Progression benefits.",
            ]}
          />

          {/* Card 3 */}
          <ProgramCard
            icon={<Cpu size={22} />}
            title="Technical & Vertical Partner"
            border="border-red-500"
            description="For companies providing complementary technology (e.g., IoT, specialized analytics) or deep expertise in verticals (Hub P)."
            bullets={[
              "Joint Go-to-Market (GTM) planning.",
              "Access to Marketing Development Funds (MDF).",
              "Co-developed success stories and case studies.",
            ]}
          />
        </div>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section className="py-20 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Submit Your Application</h2>
          <p className="text-gray-500 mt-2">
            This initial form captures your business profile. Our BNL Partner Manager
            will reach out for the formal contracting and onboarding process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-10">
         <form className="space-y-6">

        {/* Company Name */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Company Name *
          </label>
          <input
            type="text"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1e1b6a]"
          />
        </div>

        {/* Primary Contact */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Primary Contact Name *
          </label>
          <input
            type="text"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1e1b6a]"
          />
        </div>

        {/* Work Email */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Work Email * (For Portal Access)
          </label>
          <input
            type="email"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1e1b6a]"
          />
        </div>

        {/* Partner Type */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Intended Partner Type *
          </label>
          <select
            className="w-full border border-gray-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-[#1e1b6a]"
          >
            <option>Select partner category</option>
            <option>Agent & Reseller Program</option>
            <option>Implementation & SI Program</option>
            <option>Technical & Vertical Partner</option>
          </select>
        </div>

        {/* Team Size */}
        <div>
          <label className="block text-sm font-semibold mb-2">
            Team Size (Approx.)
          </label>
          <input
            type="text"
            placeholder="Number of employees or contractors"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#1e1b6a]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-900 text-white font-semibold py-3 rounded-lg mt-4 hover:opacity-90 transition"
        >
          Submit Partnership Application
        </button>

      </form>
        </div>
      </section>

      {/* ================= PARTNERSHIP STEPS ================= */}
     <section className="bg-[#e5e7eb] py-20 px-6">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold">Your Path to Partnership</h2>
  </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

  <StepCard
    number="1."
    icon={<FileCheck size={22} />}
    borderColor="border-indigo-700"
    numberColor="text-indigo-700"
    title="Application Review"
    text="Submit this form (A27 Step 1). BNL validates profile against program requirements."
  />

  <StepCard
    number="2."
    icon={<PenTool size={22} />}
    borderColor="border-emerald-500"
    numberColor="text-emerald-500"
    title="Contracting & Tier Assignment"
    text='Sign official partner agreement, receive "Tier ID" and initial "Commission Rate" (A27 Step 2).'
  />

  <StepCard
    number="3."
    icon={<GraduationCap size={22} />}
    borderColor="border-red-500"
    numberColor="text-red-500"
    title="Enablement & Certification"
    text="Complete mandatory product training and certification modules via the Partner Portal (A27 6.4.1)."
  />

  <StepCard
    number="4."
    icon={<Rocket size={22} />}
    borderColor="border-yellow-500"
    numberColor="text-yellow-500"
    title="Activation & Co-Marketing"
    text="Deal registration goes live. Access MDF and co-marketing assets to drive sales (A27 6.4.4)."
  />

</div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Quick Navigation by Topic</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <FAQ
            question="What is the required commitment for the Reseller Program?"
            answer="The initial requirement is to complete the UBOS Core Certification (Hub G). Financial targets are tier-dependent (Bronze, Silver, Gold, Platinum) and managed by the Partner Program & Tiering Engine (A27)."
          />

          <FAQ
            question="How are commissions calculated for multi-currency sales?"
            answer="Commissions are calculated based on the customer’s subscription fee in their local currency (A2.4), and converted to your preferred payout currency (USD/NGN) using the mid-market rate, ensuring transparency (A27.4.0)."
          />

          <FAQ
            question="Where do I manage MDF requests and download marketing assets?"
            answer='All enablement tools, including the Marketing Development Funds (MDF) Manager and the Content & Asset Library (A27 6.4.4), are managed through your dedicated "Partner Portal".'
          />
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function ProgramCard({ icon, title, description, bullets, border }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 border-t-4 ${border}`}>
      <div className="flex items-center gap-3 mb-4 font-semibold text-lg">
        {icon}
        {title}
      </div>
      <p className="text-gray-500 mb-4 text-sm">{description}</p>
      <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
        {bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function StepCard({ number, icon, title, text, borderColor, numberColor }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 text-center border-t-4 ${borderColor}`}>
      <div className={`flex items-center justify-center gap-2 font-bold text-xl mb-3 ${numberColor}`}>
        {number}
        {icon}
      </div>

      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <details className="bg-white rounded-xl shadow-md p-6 cursor-pointer group">
      <summary className="flex justify-between items-center font-semibold">
        {question}
        <ChevronDown className="group-open:rotate-180 transition" size={18} />
      </summary>
      <p className="text-gray-600 mt-4 text-sm">{answer}</p>
    </details>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="block font-medium mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
      />
    </div>
  );
}