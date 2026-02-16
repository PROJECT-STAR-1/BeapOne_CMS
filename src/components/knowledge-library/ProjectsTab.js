import KnowledgeCard from "./KnowledgeCard";

export default function ProjectsTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <KnowledgeCard
        tag="E-book | Projects (K)"
        title="Scaling Portfolio Management with K2"
        description="Best practices for managing complex project portfolios using the UBOS Projects Hub."
        button="Download Ebook"
        color="emerald"
      />
      <KnowledgeCard
        tag="Case Study | Projects (K)"
        title="Risk Management Hub (K6) Success Story"
        description="How a global firm reduced delivery risk by 95% using structured risk management."
        button="Download PDF"
        color="emerald"
      />
      <KnowledgeCard
        tag="Guide | Projects (K)"
        title="Project Governance Frameworks in UBOS"
        description="Set up governance models that ensure visibility, accountability, and delivery success."
        button="Download Guide"
        color="emerald"
      />
    </div>
  );
}
