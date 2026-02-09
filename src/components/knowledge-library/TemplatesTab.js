import KnowledgeCard from "./KnowledgeCard";

export default function TemplatesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <KnowledgeCard
        tag="Template | Business (S)"
        title="MaaS (Manufacturing-as-a-Service) Template (S4)"
        description="Launch a Manufacturing-as-a-Service business model with this pre-configured workflow."
        button="Download Template"
        color="amber"
      />
      <KnowledgeCard
        tag="Template | Business (S)"
        title="Client Subscription Lifecycle Template"
        description="Manage onboarding, billing, and renewals with a ready-made subscription workflow."
        button="Download Template"
        color="amber"
      />
      <KnowledgeCard
        tag="Template | Business (S)"
        title="Service Delivery Governance Template"
        description="Standardize service delivery with built-in governance and reporting."
        button="Download Template"
        color="amber"
      />
    </div>
  );
}
