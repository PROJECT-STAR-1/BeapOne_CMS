import KnowledgeCard from "./KnowledgeCard";

export default function AllModulesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <KnowledgeCard
        tag="Whitepaper | Financial (O)"
        title="Mastering Automated Compliance and Audit Trails"
        description="A deep dive into using UBOS O1 and O2 modules to achieve real-time financial compliance."
        button="Download PDF"
        color="indigo"
      />
      <KnowledgeCard
        tag="E-book | Projects (K)"
        title="The Universal Guide to Portfolio Management (K2)"
        description="Strategies for aligning projects with corporate goals using the full PPM Hub features."
        button="Download Ebook"
        color="emerald"
      />
      <KnowledgeCard
        tag="Template | HR (C)"
        title="Employee Onboarding Workflow Template (C7)"
        description="A ready-to-use UBOS workflow template for seamless HR onboarding."
        button="Download Template"
        color="rose"
      />
      <KnowledgeCard
        tag="Whitepaper | Financial (O)"
        title="Microalgae Production: Tracking Growth with UBOS (P1-4)"
        description="A step-by-step biotechnology production guide."
        button="Download PDF"
        color="amber"
      />
    </div>
  );
}
