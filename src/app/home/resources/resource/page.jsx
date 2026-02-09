import Link from "next/link";
import {
  BookOpen,
  Newspaper,
  Megaphone,
  Sparkles,
  Download,
  Puzzle,
  Users,
  HelpCircle,
  GraduationCap,
  Trophy,
  FileText,
  Settings,
  BarChart,
  PlayCircle,
  Calendar,
  Code2,
} from "lucide-react";
import CustomerCareSection from "@/components/faqs/CustomerCareSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const resources = [
  {
    title: "Knowledge Base",
    description: "In-depth articles, product overviews, and technical documentation.",
    href: "/resources/knowledge-base",
    icon: BookOpen,
    color: "border-emerald-500 text-emerald-500",
  },
  {
    title: "Blog & Articles",
    description: "Expert insights, industry trends, and thought leadership pieces.",
    href: "/resources/blog",
    icon: Newspaper,
    color: "border-indigo-600 text-indigo-600",
  },
  {
    title: "Newsroom & PR",
    description: "Latest press releases, corporate announcements, and media assets.",
    href: "/resources/newsroom",
    icon: Megaphone,
    color: "border-yellow-500 text-yellow-500",
  },
  {
    title: "What’s New (Updates)",
    description: "Recent feature releases, patches, and product roadmap changes.",
    href: "/resources/updates",
    icon: Sparkles,
    color: "border-red-500 text-red-500",
  },
  {
    title: "Downloads Library",
    description: "Central repository for all downloadable content, including software.",
    href: "/resources/downloads",
    icon: Download,
    color: "border-red-500 text-red-500",
  },
  {
    title: "Apps & Integrations",
    description: "Catalogue of complementary apps and integration guides.",
    href: "/resources/integrations",
    icon: Puzzle,
    color: "border-yellow-500 text-yellow-500",
  },
  {
    title: "Community Forums",
    description: "Connect with other users, ask questions, and share best practices.",
    href: "/resources/community",
    icon: Users,
    color: "border-indigo-600 text-indigo-600",
  },
  {
    title: "FAQs",
    description: "Quick answers to the most common questions about our products and services.",
    href: "/resources/faqs",
    icon: HelpCircle,
    color: "border-indigo-600 text-indigo-600",
  },
  {
    title: "Learning & Certification",
    description: "Training courses, learning paths, and certification verification registry.",
    href: "/resources/learning",
    icon: GraduationCap,
    color: "border-yellow-500 text-yellow-500",
  },
  {
    title: "Client Success Stories",
    description: "In-depth reports on successful client deployments and achieved ROI.",
    href: "/resources/success-stories",
    icon: Trophy,
    color: "border-indigo-600 text-indigo-600",
  },
  {
    title: "Technical Whitepapers",
    description: "Download rigorous research and authoritative analyses by our experts.",
    href: "/resources/whitepapers",
    icon: FileText,
    color: "border-indigo-600 text-indigo-600",
  },
  {
    title: "Implementation Guides",
    description: "Step-by-step guidance for deploying and configuring solutions.",
    href: "/resources/implementation",
    icon: Settings,
    color: "border-red-500 text-red-500",
  },
  {
    title: "Product Data Sheets",
    description: "Detailed technical specifications, and performance benchmarks.",
    href: "/resources/data-sheets",
    icon: BarChart,
    color: "border-red-500 text-red-500",
  },
  {
    title: "Video Demos & Tours",
    description: "Visual product demonstrations, feature tours, and solution overviews.",
    href: "/resources/videos",
    icon: PlayCircle,
    color: "border-indigo-600 text-indigo-600",
  },
  {
    title: "Events & Webinars",
    description: "Register for upcoming events or view recordings from past sessions.",
    href: "/resources/events",
    icon: Calendar,
    color: "border-yellow-500 text-yellow-500",
  },
  {
    title: "API Documentation",
    description: "Comprehensive reference for integrating with APIs and services.",
    href: "/resources/api",
    icon: Code2,
    color: "border-indigo-600 text-indigo-600",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-700">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h1 className="mt-2 text-4xl font-bold text-white">Resources</h1>
           <p className="text-sm text-slate-300">Resources/ <span className="font-medium text-blue-400">Resources</span></p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="mb-10 text-center text-3xl font-semibold text-slate-900">
          Content Categories
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group"
              >
                <div
                  className={`h-full rounded-xl border-t-4 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${item.color}`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <CustomerCareSection />

      <TestimonialsSection />
    </div>
  );
}
