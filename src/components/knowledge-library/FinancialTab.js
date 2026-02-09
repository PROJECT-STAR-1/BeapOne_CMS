import KnowledgeCard from "./KnowledgeCard";

export default function FinancialTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <KnowledgeCard
        tag="Guide | Financial (O)"
        title="Forecasting Excellence: O10 Module Configuration"
        description="Learn how to configure advanced forecasting tools to improve financial accuracy and planning."
        button="Download Guide"
        color="indigo"
      />
      <KnowledgeCard
        tag="Whitepaper | Financial (O)"
        title="Real-Time Compliance Reporting with UBOS"
        description="Understand how UBOS enables continuous compliance and automated audit readiness."
        button="Download PDF"
        color="indigo"
      />
      <KnowledgeCard
        tag="Checklist | Financial (O)"
        title="Month-End Close Automation Checklist"
        description="A practical checklist to streamline and automate your month-end close process."
        button="Download Checklist"
        color="indigo"
      />
    </div>
  );
}
