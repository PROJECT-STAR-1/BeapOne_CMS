"use client";

import { useState, useRef, useEffect } from "react";
import { Search, User, ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    label: "Product Overview",
    children: [
      { label: "Capabilities", href: "/home/product/capabilities" },
      { label: "Features", href: "/home/product/features" },
      { label: "Modules", href: "/home/product/coreModules" },
    ],
  },
  {
    label: "Solutions",
    children: [
      { label: "By Industry", href: "/home/solutions/solutionsHub" },
      {
        label: "By Professional Practice",
        href: "/home/solutions/solutionsHub",
      },
      { label: "By Challenge", href: "/home/solutions/solutionsHub" },
      { label: "By Expertise", href: "/home/solutions/solutionsHub" },
    ],
  },
  {
    label: "Customer",
    children: [
      {
        label: "Testimonials & Case Studies",
        href: "/home/customer/testimonials",
      },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Resources", href: "/home/resources/resource" },
      { label: "Knowledge Centre", href: "/home/resources/knowledge-library" },
      { label: "Newsroom", href: "/home/resources/news-room" },
      { label: "Blog", href: "/home/resources/blog" },
      { label: "Portal", href: "/home/resources/portal" },
      { label: "Downloads Library", href: "/home/resources/downloadsLibrary" },
      { label: "Apps & Integrations", href: "/home/resources/appsIntegration" },
      {
        label: "Community Learning & Certifications",
        href: "/home/resources/community-learning",
      },
      {
        label: "Global Community Hub",
        href: "/home/resources/community-hub-main",
      },
      { label: "FAQs", href: "/home/resources/faqs" },
      { label: "Resellers", href: "/home/resources/resellers" },
      {
        label: "Learning Certification Registry",
        href: "/home/resources/certifications",
      },
      { label: "What’s New", href: "/home/resources/whats-new" },
      {
        label: "Onboarding Support",
        href: "/home/resources/onboarding-support",
      },
      {
        label: "Request Demo",
        href: "/home/resources/request-demo",
      },
      {
        label: "Request For Customization",
        href: "/home/resources/request-customization",
      },
      {
        label: "Request New Features",
        href: "/home/resources/request-newfeatures",
      },
      {
        label: "Legal Documentation",
        href: "/home/resources/legal-documentation",
      },
      {
        label: "Support Center",
        href: "/home/resources/support-center",
      },
      {
        label: "UBOS Expert",
        href: "/home/resources/ubos-mastery",
      },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/home/company/about-us" },
      {
        label: "Careers",
        href: "/home/resources/careers",
      },
      {
        label: "Customer Affiliates",
        href: "/home/company/customer-affiliates",
      },
      { label: "Events", href: "/home/resources/community-hub/events" },

      { label: "Partners", href: "/home/company/global-integrators" },
      {
        label: "Brand Roadmap",
        href: "/home/resources/community-hub/ideation",
      },
      { label: "Contact Us", href: "/home/company/contact-us" },
      { label: "Consultants", href: "/home/company/consultants" },
      { label: "Reviews", href: "/home/comingSoon" },
      { label: "Press", href: "/home/comingSoon" },
    ],
  },
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  /* 👆 Click outside to close */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-[#1B1464] border-b border-white/10"
    >
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/home">
            <span className="text-white font-semibold tracking-wide">
              BEAPOne UBOS
            </span>
          </a>
          <a href="/">
            <span className="text-white ">
              Intro Page
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-white/80">
            {navItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(index)}
                    className="flex items-center gap-1 hover:text-white transition"
                  >
                    {item.label}
                    {isOpen ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>

                  {isOpen && (
                    <div className="absolute left-0 top-full mt-2 w-56 rounded-md bg-indigo-200 shadow-lg z-50 max-h-[70vh] overflow-y-auto">
                      <ul className="py-2 text-sm text-gray-700">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 hover:bg-gray-100 transition"
                              onClick={() => setOpenIndex(null)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-white/80 hover:text-white transition">
              <Search size={18} />
            </button>

            <Link
              href="/auth/login"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
            >
              <User size={18} />
              <span>Sign in</span>
            </Link>

            <Link
              href="/home/comingSoon"
              className="rounded-md border border-white/30 px-4 py-1.5 text-sm text-white hover:bg-white/10 transition"
            >
              Go to BEAPOne Lite
            </Link>

            <Link
              href="/home/company/contact-us"
              className="rounded-md bg-white/10 px-4 py-1.5 text-sm text-white hover:bg-white/20 transition"
            >
              Contact Sales
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-2">
            {navItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="w-full flex items-center justify-between text-left text-white/90 px-2 py-2"
                  >
                    {item.label}
                    {isOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  {isOpen && (
                    <div className="pl-4 max-h-[50vh] overflow-y-auto">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-white/70 hover:text-white"
                          onClick={() => {
                            setMobileOpen(false);
                            setOpenIndex(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
