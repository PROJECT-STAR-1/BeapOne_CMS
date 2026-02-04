// components/SolutionsSection.jsx
import { FileText, Building2 } from "lucide-react";

export default function SolutionsSection() {
  const challenges = [
    "Optimize Inventory & Reduce Stockouts",
    "Improve Delivery Speed & Logistics Costs",
    "Enhance Supply Chain Visibility",
    "Streamline Project Management",
    "Ensure Regulatory Compliance",
    "Manage Distributed Operations",
    "Boost Production Efficiency",
  ];

  const industries = [
    "Retail & E-commerce Logistics",
    "Manufacturing Supply Chain",
    "Pharmaceutical & Cold Chain",
    "Consumer Goods Distribution",
    "Agriculture & Biotech",
    "Non-Profit & Associations",
    "Real Estate & Property Management",
    "Financial Services",
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-14">
        {/* Left content */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 leading-snug">
            Solutions Tailored to Your <br /> Challenges & Industry
          </h2>
          <p className="text-gray-600 text-sm mt-4 max-w-md">
            Whether you're looking to solve specific business challenges or
            seeking a platform built for your industry, BEAPONE UBOS has you
            covered.
          </p>

          <button className="mt-8 bg-indigo-900 text-white text-sm font-medium px-6 py-3 rounded-md">
            View Success Stories & Case Studies →
          </button>
        </div>

        {/* Challenges */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-gray-900">
              Solutions by Challenge
            </h3>
            <a className="text-indigo-900 text-sm font-medium cursor-pointer">
              View All Challenges →
            </a>
          </div>

          <ul className="space-y-4">
            {challenges.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-gray-700"
              >
                <FileText size={16} className="text-indigo-900 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div className="bg-indigo-900 rounded-xl p-7 text-white">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold">Solutions by Industry</h3>
            <a className="text-sm font-medium cursor-pointer">
              View All Industries →
            </a>
          </div>

          <ul className="space-y-4">
            {industries.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-indigo-100"
              >
                <Building2 size={16} className="mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
