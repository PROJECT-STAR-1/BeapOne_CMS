"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, Landmark } from "lucide-react";

export default function TestimonialsPage() {
  const [primaryFilter, setPrimaryFilter] = useState("business");
  const [secondaryFilter, setSecondaryFilter] = useState("HR");

  // Hardcoded Data
  const data = {
    business: {
      label: "By Business Segment",
      categories: [
        "SMEs",
        "Retail",
        "Supply Chain & Logistics",
        "HR",
        "Management",
        "eCommerce",
        "Finance & Accounts",
        "Sales, Marketing & Business Development",
      ],
      cards: {
        HR: [
          {
            id: 1,
            tag: "HR",
            image: "/images/home/homeTwo.svg",
            color: "border-indigo-600",
            badgeColor: "bg-indigo-600",
            text: "I would recommend BEAPOne UBOS to everyone — you will get quick support in terms of any escalations, and the pricing side if you compare it to competitors it is very cost effective and feature rich. It does not require deep training like other applications.",
          },
          {
            id: 2,
            tag: "HR",
            image: "/images/home/homeTwo.svg",
            color: "border-emerald-500",
            badgeColor: "bg-emerald-500",
            text: "After using BEAPOne UBOS, I can confidently say that its integration capabilities with existing systems are impressive. The UI is intuitive and customer service is responsive.",
          },
          {
            id: 3,
            tag: "HR",
            image: "/images/home/homeTwo.svg",
            color: "border-red-500",
            badgeColor: "bg-red-500",
            text: "BEAPOne UBOS offers a robust platform for financial management that simplifies budgeting and forecasting. It significantly reduces overhead costs.",
          },
        ],
      },
    },
    financial: {
      label: "Financial (O)",
      categories: ["Accounting", "Auditing", "Compliance"],
      cards: {
        Accounting: [
          {
            id: 4,
            tag: "Accounting",
            image: "/images/home/homeTwo.svg",
            color: "border-indigo-600",
            badgeColor: "bg-indigo-600",
            text: "Our financial operations became more streamlined after implementing BEAPOne UBOS. Automation reduced manual entries drastically.",
          },
        ],
        Auditing: [],
        Compliance: [],
      },
    },
  };

  const activeCategories = data[primaryFilter].categories;
  const activeCards = data[primaryFilter].cards[secondaryFilter] || [];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HERO */}
      <div className="bg-[#1B1464] py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          Explore Our Customer Testimonials & Case Studies
        </h1>
        <p className="mt-4 text-lg text-indigo-200">
          Outstanding and rich experience from our diverse user base
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* PRIMARY FILTER */}
        <div className="flex justify-center mb-6">
          <div className="bg-gray-200 rounded-full p-1 flex gap-2">
            <button
              onClick={() => {
                setPrimaryFilter("business");
                setSecondaryFilter("HR");
              }}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition ${
                primaryFilter === "business"
                  ? "bg-indigo-800 text-white"
                  : "text-gray-700"
              }`}
            >
              <Briefcase size={16} />
              By Business Segment
            </button>

            <button
              onClick={() => {
                setPrimaryFilter("financial");
                setSecondaryFilter("Accounting");
              }}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition ${
                primaryFilter === "financial"
                  ? "bg-indigo-800 text-white"
                  : "text-gray-700"
              }`}
            >
              <Landmark size={16} />
              Financial (O)
            </button>
          </div>
        </div>

        {/* SECONDARY FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {activeCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSecondaryFilter(category)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                secondaryFilter === category
                  ? "bg-indigo-800 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {activeCards.length > 0 ? (
            activeCards.map((card) => (
              <div
                key={card.id}
                className={`bg-white rounded-xl shadow-md border-t-4 ${card.color} p-6`}
              >
                {/* Badge */}
                <span
                  className={`inline-block text-xs text-white px-3 py-1 rounded-full mb-4 ${card.badgeColor}`}
                >
                  {card.tag}
                </span>

                {/* Image */}
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={card.image}
                    alt={card.tag}
                    width={600}
                    height={400}
                    className="w-full h-60 object-cover rounded-t-xl"
                  />
                </div>

                {/* Text */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              No testimonials available for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
