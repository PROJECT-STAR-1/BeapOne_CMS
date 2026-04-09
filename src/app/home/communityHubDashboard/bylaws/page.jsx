"use client";

import { useRef } from "react";
import {
  Shield,
  Users,
  Layers,
  CheckCircle,
  Vote,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";

export default function GovernancePage() {
  const contentRef = useRef(null);

  const sectionsRef = {
    mission: useRef(null),
    membership: useRef(null),
    structure: useRef(null),
    compliance: useRef(null),
    elections: useRef(null),
    innovation: useRef(null),
    conduct: useRef(null),
  };

  const scrollToSection = (key) => {
    const container = contentRef.current;
    const section = sectionsRef[key].current;

    if (container && section) {
      const top = section.offsetTop - container.offsetTop;
      container.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#F7F8FA] min-h-screen text-gray-800">
      {/* HEADER */}
      <div className="flex justify-between items-center px-8 py-4 border-b bg-white">
        <div className="flex items-center gap-2 font-semibold text-sm">
          <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
            O
          </div>
          UBOS GOVERNANCE
        </div>

        <div className="flex gap-4 items-center">
          <button className="text-sm text-gray-500">
            Print Official Copy
          </button>
          <span className="px-3 py-1 text-xs border border-green-500 text-green-600 rounded-full font-medium">
            CERTIFIED
          </span>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex max-w-7xl mx-auto mt-8 gap-10 px-6 h-[calc(100vh-80px)]">
        {/* SIDEBAR */}
        <div className="w-64">
          <div className="sticky top-6">
            <p className="text-xs text-gray-400 mb-4 tracking-wide">
              TABLE OF CONTENTS
            </p>

            {[
              ["mission", "Article I: Mission"],
              ["membership", "Article II: Membership"],
              ["structure", "Article III: Structure"],
              ["compliance", "Article IV: Compliance"],
              ["elections", "Article V: Elections"],
              ["innovation", "Article VI: Innovation"],
              ["conduct", "Article VII: Conduct"],
            ].map(([key, label]) => (
              <div
                key={key}
                onClick={() => scrollToSection(key)}
                className="cursor-pointer text-sm text-gray-600 py-2 px-3 rounded-md hover:bg-white hover:shadow-sm"
              >
                {label}
              </div>
            ))}

            {/* METADATA */}
            <div className="mt-6 bg-white rounded-2xl p-4 text-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <p className="text-xs text-gray-400 mb-3">METADATA</p>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Version</span>
                  <span className="font-medium">2.4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Adopted</span>
                  <span className="font-medium">Jan 1, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">ID</span>
                  <span className="font-medium">C23-GOV-V4</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div
          ref={contentRef}
          className="flex-1 overflow-y-auto pr-4 space-y-8"
        >
          {/* HEADER BLOCK */}
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">
                BEAPOne UBOS Community: 2025 Bylaws
              </h1>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
                CERTIFIED
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-2">
              Official regulatory framework for the global UBOS digital ecosystem and its governing bodies.
            </p>

            <div className="flex gap-4 text-xs text-gray-400 mt-2">
              <span>Authority: BNL & Governing Council</span>
              <span>Status: Binding</span>
            </div>
          </div>

          {/* SECTION COMPONENTS */}
          <Section refProp={sectionsRef.mission} icon={<Shield size={18} />} title="I. Mission & Objective">
            The BEAPOne UBOS Community Hub is established to foster a
            self-sustaining, professional, and ethical digital ecosystem.
            Its primary aim is to maximize system utilization, drive
            user-led innovation, and provide a decentralized support
            framework through collaborative knowledge sharing.
          </Section>

          <Section refProp={sectionsRef.membership} icon={<Users size={18} />} title="II. Membership & Eligibility">
            <SubTitle>1. Membership Tiers</SubTitle>
            <List>
              Enrolled Members: All authenticated users of the platform.
            </List>
            <List>
              Certified Professionals: Completed LMS modules.
            </List>
            <List>
              Affiliates/Referrers: Program participants.
            </List>
            <List>
              Ecosystem Partners: Certified consultants & integrators.
            </List>

            <SubTitle>2. BadgeLevel System</SubTitle>
            <p>
              Seniority and access rights are dictated by BadgeLevel (1–10),
              calculated via activity points, knowledge contributions,
              and certification multipliers.
            </p>
          </Section>

          <Section refProp={sectionsRef.structure} icon={<Layers size={18} />} title="III. Governance Structure">
            <SubTitle>1. The Governing Council</SubTitle>
            <BulletList>
              Strategic roadmap prioritization
              Policy development and amendments
              Oversight of interest clusters
              Election cycle: 2-year terms
            </BulletList>

            <SubTitle>2. Accountability Committee</SubTitle>
            <BulletList>
              Enforcing the Code of Conduct
              Auditing governance logs
              Resolving disputes
            </BulletList>
          </Section>

          <Section refProp={sectionsRef.compliance} icon={<CheckCircle size={18} />} title="IV. Technical Compliance & Audit">
            <div className="bg-[#0F172A] text-white p-4 rounded-xl mb-4">
              <p className="font-medium">1. The Immutable Journal</p>
              <p className="text-sm opacity-80">
                High-risk actions are subject to immutable logging in the Hub Journal.
              </p>
            </div>

            <SubTitle>2. Mandatory Module Notes</SubTitle>
            <p>
              Any high-risk action must include a justification note
              (minimum 100 characters). Failure blocks execution.
            </p>
          </Section>

          <Section refProp={sectionsRef.elections} icon={<Vote size={18} />} title="V. Elections & Voting Resource">
            <p>
              <strong>Voter Eligibility:</strong> All authenticated users can vote.
            </p>
            <p className="mt-2">
              <strong>Candidate Eligibility:</strong> BadgeLevel 5+, valid certification,
              and no violations.
            </p>
          </Section>

          <Section refProp={sectionsRef.innovation} icon={<Lightbulb size={18} />} title="VI. Innovation & Ideation">
            Community members have a formal right to influence the product roadmap.
            Ideas reaching 100 upvotes must be reviewed within 14 business days.
          </Section>

          <Section refProp={sectionsRef.conduct} icon={<AlertTriangle size={18} />} title="VII. Code of Conduct">
            <div className="border border-red-300 bg-red-50 p-4 rounded-xl">
              <p className="text-red-600 font-semibold text-sm mb-2">
                PROHIBITED ACTIVITIES:
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Spamming or promotional content</li>
                <li>Distribution of misleading advice</li>
                <li>Circumventing voting systems</li>
              </ul>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function Section({ refProp, icon, title, children }) {
  return (
    <div
      ref={refProp}
      className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.08)] transition-shadow"
    >
      <div className="flex items-center gap-2 font-semibold mb-4 text-gray-900">
        <div className="text-indigo-600">{icon}</div>
        {title}
      </div>

      <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
function SubTitle({ children }) {
  return (
    <p className="font-semibold text-sm text-gray-800 mt-3">
      {children}
    </p>
  );
}

function List({ children }) {
  return <p className="text-sm text-gray-600">• {children}</p>;
}

function BulletList({ children }) {
  return (
    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
      {children
        .toString()
        .split("\n")
        .map((item, i) => (
          <li key={i}>{item}</li>
        ))}
    </ul>
  );
}