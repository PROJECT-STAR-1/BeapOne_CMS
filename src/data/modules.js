import { Building2, Briefcase, Layers, Users } from "lucide-react";

export const modules = [
  {
    id: "enterprise",
    label: "B. Enterprise & Organizational Structure Management",
    icon: Building2,
    subModules: [
      {
        id: "b",
        label: "B: Enterprise & Organizational Structure Management",
      },
      {
        id: "b1",
        label: "B1: Legal Entity & Corporate Relationship Management",
      },
      {
        id: "b2",
        label: "B2: Internal Organizational Hierarchy Management",
      },
      {
        id: "b3",
        label: "B3: Individual & Team Placement",
      },
      {
        id: "b4",
        label: "B4: Team-Level Management Integration",
      },
      {
        id: "b5",
        label: "B5: Project Lifecycle Structure Definition",
      },
      {
        id: "b6",
        label: "B6: Goal Management Hierarchy Definition",
      },
      {
        id: "b7",
        label: "B7: Reporting Line Management",
      },
      {
        id: "b8",
        label: "B8: Cross-Entity Visibility",
      },
    ],
  },

  {
    id: "operations",
    label: "C. Business Operations Management",
    icon: Briefcase,
    subModules: [],
  },

  {
    id: "platform",
    label: "G. Core Platform Services Module",
    icon: Layers,
    subModules: [],
  },

  {
    id: "customers",
    label: "H. Customer Management",
    icon: Users,
    subModules: [],
  },
];
