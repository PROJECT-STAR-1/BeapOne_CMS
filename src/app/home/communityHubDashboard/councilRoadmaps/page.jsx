import {
  Globe,
  Brain,
  DollarSign,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Download,
} from "lucide-react";

const Badge = ({ children, variant = "default" }) => {
  const styles = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    purple: "bg-purple-100 text-purple-700",
    gray: "bg-gray-100 text-gray-600",
    orange: "bg-orange-100 text-orange-700",
    red: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  );
};

const Card = ({ icon: Icon, title, description }) => (
  <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4">
    <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
      <Icon className="w-5 h-5 text-gray-700" />
    </div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

const TimelineItem = ({
  status,
  title,
  description,
  tag,
  critical = false,
}) => {
  return (
    <div
      className={`rounded-2xl p-5 flex justify-between items-start ${
        critical ? "bg-indigo-900 text-white" : "bg-white shadow-sm"
      }`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {status === "completed" && <Badge variant="green">COMPLETED</Badge>}
          {status === "progress" && <Badge variant="purple">IN PROGRESS</Badge>}
          {status === "planned" && <Badge variant="gray">PLANNED</Badge>}
          {status === "critical" && <Badge variant="red">CRITICAL</Badge>}

          <h4 className="font-semibold">{title}</h4>
        </div>

        <p
          className={`text-sm ${
            critical ? "text-indigo-200" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      </div>

      <Badge variant="blue">{tag}</Badge>
    </div>
  );
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <section className="bg-indigo-900 text-white px-8 py-10 rounded-b-3xl relative">
        <div className="max-w-6xl mx-auto flex justify-between items-start">
          {/* LEFT CONTENT */}
          <div>
            <div className="flex gap-2 mb-4">
              <Badge variant="green">CONFIRMED</Badge>
              <Badge variant="blue">OPERATIONAL</Badge>
            </div>

            <h1 className="text-4xl font-bold mb-4">Council Roadmap Q4–25</h1>

            <p className="text-indigo-200 max-w-xl">
              Transitioning community-vetted ideas into platform reality. Our
              focus this quarter:{" "}
              <span className="font-semibold">
                Scaling, Adoption, and Rewards.
              </span>
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-end gap-4">
            {/* TOP BAR (ROADMAP ID + BUTTON) */}
            <div className="flex items-center gap-4">
              {/* <span className="text-xs text-indigo-300 tracking-wider">
                ROADMAP ID{" "}
                <span className="font-semibold text-white ml-1">
                  C23-GOV-2025-Q4
                </span>
              </span> */}

              <button className="flex items-center gap-2 bg-indigo-800 hover:bg-indigo-700 transition px-4 py-2 rounded-lg text-sm font-medium">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>

            {/* STATS */}
            <div className="flex gap-4">
              <div className="bg-indigo-800 px-6 py-4 rounded-xl text-center">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-xs text-indigo-300">FEATURES</p>
              </div>
              <div className="bg-indigo-800 px-6 py-4 rounded-xl text-center">
                <p className="text-2xl font-bold">90%</p>
                <p className="text-xs text-indigo-300">READY RATE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TOP CARDS */}
      <section className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-6 -mt-8 px-6">
        <Card
          icon={Globe}
          title="Multi-Country Scaling"
          description="Localizing compliance and search features for the German (DE) and Spanish (ES) markets."
        />
        <Card
          icon={Brain}
          title="AI Knowledge Layer"
          description="Integrating semantic search into the Knowledge Base to further drive Support Deflection (STDR)."
        />
        <Card
          icon={DollarSign}
          title="Ecosystem Financials"
          description="Deploying the first phase of automated tax reconciliation for high-volume Hub O users."
        />
      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto mt-12 px-6 flex flex-col gap-10">
        {/* October */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            October 2025{" "}
            <span className="text-sm text-indigo-600 ml-2">
              SCALING & SEARCH
            </span>
          </h2>

          <div className="flex flex-col gap-4 border-l pl-6">
            <TimelineItem
              status="completed"
              title="Global Search V2 (Hub G)"
              description="Enhanced cross-hub indexing for unified search performance."
              tag="HUB G"
            />
            <TimelineItem
              status="progress"
              title="Regional Forum Leads (ES/DE)"
              description="Appointing certified moderators for localized European sub-communities."
              tag="C23 GOV"
            />
          </div>
        </div>

        {/* November */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            November 2025{" "}
            <span className="text-sm text-indigo-600 ml-2">
              FINANCIALS & CAREERS
            </span>
          </h2>

          <div className="flex flex-col gap-4 border-l pl-6">
            <TimelineItem
              status="planned"
              title="Automated Tax Reconciliation (Hub O)"
              description="Ideation Space #IDEA-4421. Automated NGN/USD tax ledgering."
              tag="CROWDSOURCED"
            />
            <TimelineItem
              status="planned"
              title="Career Board Expansion"
              description="Integration with Hub G specialized practice sector filtering."
              tag="CAREER SVCS"
            />
          </div>
        </div>

        {/* December */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            December 2025{" "}
            <span className="text-sm text-indigo-600 ml-2">
              AWARDS & ELECTIONS
            </span>
          </h2>

          <div className="flex flex-col gap-4 border-l pl-6">
            <TimelineItem
              status="planned"
              title="End-of-Year Community Awards"
              description='Gamification snapshot and "Top Contributor" recognition gala.'
              tag="GAMIFICATION"
            />

            <TimelineItem
              status="critical"
              title="2026 Election Readiness"
              description="Opening nominations and manifest submissions for the new council cycle."
              tag="GOVERNANCE"
              critical
            />
          </div>
        </div>
      </section>

      {/* FOOTER / APPROVAL */}
      <section className="max-w-4xl mx-auto mt-12 mb-16 px-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm flex justify-between items-center">
          <div>
            <p className="text-sm font-semibold mb-1">APPROVAL LOG</p>
            <p className="text-gray-500 text-sm">
              Roadmap approved by the Governing Council on Sept 15, 2025. All
              features tracked via Hub C Workflow.
            </p>
          </div>

          <Badge variant="green">ACTIVE</Badge>
        </div>
      </section>
    </main>
  );
}
