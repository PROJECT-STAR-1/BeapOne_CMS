import KnowledgeCard from "./KnowledgeCard";

export default function VerticalsTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <KnowledgeCard
        tag="Whitepaper | Verticals (P)"
        title="Microalgae Production: Tracking Growth with UBOS"
        description="Configure biotechnology production tracking for specialized vertical needs."
        button="Download PDF"
        color="amber"
      />
      <KnowledgeCard
        tag="Guide | Verticals (P)"
        title="Manufacturing Execution with UBOS"
        description="Digitize and monitor manufacturing operations using vertical-specific modules."
        button="Download Guide"
        color="amber"
      />
      <KnowledgeCard
        tag="Case Study | Verticals (P)"
        title="Optimizing Agribusiness Operations"
        description="How agribusiness firms use UBOS to track yield, cost, and operational efficiency."
        button="Download Case Study"
        color="amber"
      />
    </div>
  );
}
