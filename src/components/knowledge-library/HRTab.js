import KnowledgeCard from "./KnowledgeCard";

export default function HRTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <KnowledgeCard
        tag="Template | HR (C)"
        title="Employee Onboarding Workflow Template (C7)"
        description="A ready-to-use onboarding workflow aligned with HR compliance best practices."
        button="Download Template"
        color="rose"
      />
      <KnowledgeCard
        tag="Checklist | HR (C)"
        title="HSE Compliance Checklist (C14)"
        description="Ensure Health, Safety, Security, and Environmental standards are met across teams."
        button="Download Checklist"
        color="rose"
      />
      <KnowledgeCard
        tag="Guide | HR (C)"
        title="Workforce Capacity Planning with UBOS"
        description="Plan workforce capacity and utilization using data-driven insights."
        button="Download Guide"
        color="rose"
      />
    </div>
  );
}
