import Image from "next/image";
import {
  Clock,
  Bot,
  Globe,
  ShieldCheck,
  Zap,
  Users,
  Wallet,
  Database,
  UserCog,
  Sparkles,
  LifeBuoy,
  Server
} from "lucide-react";



export default function SystemCapabilitiesSection() {
  return (
    <section className="w-full bg-white text-[#0F172A]">
      {/* ================= TOP ================= */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-center text-[40px] leading-[1.15] font-semibold">
          System-Wide Capabilities & Competitive Differentiators
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-center text-[16px] leading-[28px] text-gray-600">
          BEAPONE UBOS is built on a foundation of advanced technology, ensuring
          real-time intelligence, AI driven automation and enterprise-grade
          compliance.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          <FeatureCard
            icon={<Clock className="w-5 h-5 text-indigo-600" />}
            title="Real-time Intelligence"
            description="Live data access, predictive modeling, customizable dashboards, and Advanced Data Telemetry for continuous performance tracking and BI integration."
          />

          <FeatureCard
            icon={<Bot className="w-5 h-5 text-emerald-600" />}
            title="AI & Automation Engine"
            description="Integrated Generative AI (Google Gemini), RPA for intelligent workflows, decision support, and automated performance alerts and compensation alignment."
          />

          <FeatureCard
            icon={<Globe className="w-5 h-5 text-amber-500" />}
            title="Global Scalability"
            description="Elastic architecture with multi-currency and multi-language support. Built for high availability to support international expansion and large enterprises."
          />

          <FeatureCard
            icon={<ShieldCheck className="w-5 h-5 text-red-500" />}
            title="Security & Compliance"
            description="Enterprise-grade encryption, role-based access control (RBAC), and essential features like E-invoicing (FIRS), E-signature and robust Data Governance."
          />
        </div>

        <div className="mt-14 flex justify-center">
          <PrimaryButton>
            Explore All 40+ System Capabilities
          </PrimaryButton>
        </div>
      </div>

      {/* ================= MIDDLE ================= */}
      <div className="bg-gradient-to-b from-[#EFEAF7] to-[#D9D2EC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-[40px] leading-[1.15] font-semibold">
            Unify Your Operations. Amplify Your Success
          </h2>

          <p className="mt-5 max-w-4xl mx-auto text-center text-[16px] leading-[28px] text-gray-700">
            BEAPONE UBOS is designed to be the central nervous system for your
            business. It integrates all vital functions, from customer
            relationships and financial management to supply chain and project
            execution, into a single, cohesive platform.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-7">
            <PlatformCard
              icon={<Zap className="w-5 h-5 text-indigo-600" />}
              title="Win More Customers"
              description="Leverage powerful CRM and sales pipeline tools to capture leads, engage prospects, and convert them into loyal customers at a consistent pace."
            />

            <PlatformCard
              icon={<Users className="w-5 h-5 text-emerald-600" />}
              title="Manage Your Employees"
              description="Streamline HR, workforce management, and internal communication, ensuring your team is productive, engaged, and aligned with your business goals."
            />

            <PlatformCard
              icon={<Wallet className="w-5 h-5 text-red-500" />}
              title="Track Your Finances"
              description="Gain complete control over your financial health with robust tools for accounting, budgeting, revenue, and cost management."
            />
          </div>

          <div className="mt-14 flex justify-center">
            <PrimaryButton>Explore all platforms</PrimaryButton>
          </div>
        </div>
      </div>

     {/* ================= BOTTOM ================= */}
<div className="max-w-7xl mx-auto px-6 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
    
    {/* ===== LEFT COLUMN: IMAGE + TEXT ===== */}
    <div>
      <Image
        src="/images/home/homeTwo.svg"
        alt="Business success"
        width={600}
        height={400}
        className="rounded-lg object-cover"
      />

      <h2 className="mt-8 text-[40px] leading-[1.15] font-semibold">
        Seamlessly Integrate & Scale Your Business
      </h2>

      <p className="mt-4 text-[16px] leading-[28px] text-gray-600">
        BEAPONE UBOS is built for growth, offering unparalleled flexibility
        and a smooth transition to a more productive way of working.
      </p>
    </div>

    {/* ===== RIGHT COLUMN: CARDS + BUTTON ===== */}
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SmallFeature
          color="blue"
          icon={<Database className="w-4.5 h-4.5" />}
          title="Seamless Data Migration & Configuration"
          description="Effortlessly transfer your existing data to CRM, Books, People, and other vital apps. Tailor settings to match your unique business needs."
        />

        <SmallFeature
          color="green"
          icon={<UserCog className="w-4.5 h-4.5" />}
          title="User Access Administration"
          description="Robust tools to administer user access, define roles, and manage permissions, ensuring data security and operational integrity."
        />

        <SmallFeature
          color="green"
          icon={<Sparkles className="w-4.5 h-4.5" />}
          title="Innovation & Automation"
          description="Empower your team to innovate and automate processes, reducing manual effort and freeing up resources for strategic initiatives."
        />

        <SmallFeature
          color="blue"
          icon={<ShieldCheck className="w-4.5 h-4.5" />}
          title="Security Priority & Uptime"
          description="Rest assured with 99.9% uptime, TLS 1.2/1.3 encryption, and strong ciphers, ensuring your data is always secure and accessible."
        />

        <SmallFeature
          color="blue"
          icon={<LifeBuoy className="w-4.5 h-4.5" />}
          title="Dependable Support"
          description="Access free technical assistance from BEAPONE’s dedicated team or our extensive global partner network, whenever you need it."
        />

        <SmallFeature
          color="green"
          icon={<Server className="w-4.5 h-4.5" />}
          title="Seamless Launch & Scalability"
          description="Benefit from step-by-step onboarding, enabling you to scale from a few apps to many without procurement struggles."
        />
      </div>

      {/* Button at bottom-right of cards column */}
      <div className="mt-10 flex justify-end">
        <PrimaryButton>All features</PrimaryButton>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

/* ================= UI PRIMITIVES ================= */

function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-xl border border-[#E6E8EF] bg-white p-7">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F3F4F8]">
        {icon}
      </div>
      <h3 className="mt-5 text-[16px] font-semibold">{title}</h3>
      <p className="mt-2 text-[14px] leading-[22px] text-gray-600">
        {description}
      </p>
    </div>
  );
}

function PlatformCard(props) {
  return <FeatureCard {...props} />;
}

function SmallFeature({ icon, title, description, color = "blue" }) {
  const styles =
    color === "green"
      ? {
          card: "border-emerald-200 hover:bg-emerald-50/50",
          iconWrap: "bg-emerald-50 text-emerald-600",
        }
      : {
          card: "border-blue-200 hover:bg-blue-50/50",
          iconWrap: "bg-blue-50 text-blue-600",
        };

  return (
    <div
      className={`group rounded-xl border bg-white p-5 transition-all duration-200 hover:-translate-y-[1px] ${styles.card}`}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`w-9 h-9 shrink-0 flex items-center justify-center rounded-full ${styles.iconWrap}`}
        >
          {icon}
        </div>

        {/* Text */}
        <div>
          <h4 className="text-[15px] font-semibold leading-[22px] text-[#0F172A]">
            {title}
          </h4>
          <p className="mt-1 text-[13.5px] leading-[20px] text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}



function PrimaryButton({ children }) {
  return (
    <button className="bg-[#1F1B4D] hover:bg-[#17133A] transition text-white px-8 py-3.5 rounded-lg text-[14px] font-medium">
      {children}
    </button>
  );
}
