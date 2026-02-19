import Link from "next/link";
import {
  Phone,
  Mail,
  X,
  Instagram,
  Youtube,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f2a38] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* CONTACT */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase">
              Contact Us On
            </h4>

            <div className="flex items-start gap-2 text-sm">
              <Phone size={16} className="mt-1 text-gray-400" />
              <p>
                Mon – Fri: 9:00AM to 5:00PM ET
                <br />
                <a href="tel:+18443886544" className="hover:text-white">
                  +1 844 388 6544
                </a>
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Mail size={16} className="text-gray-400" />
              <a href="mailto:support@beapone.com" className="hover:text-white">
                support@beapone.com
              </a>
            </div>

            <div className="pt-4">
              <p className="text-xs uppercase text-white mb-2">
                Connect With Us
              </p>
              <div className="flex gap-3">
                <a href="#" aria-label="X">
                  <X size={18} />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="#" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          <FooterColumn
            title="Product"
            links={[
              { label: "Capabilities", href: "/product/capabilities" },
              { label: "Features", href: "/product/features" },
              { label: "Modules", href: "/product/modules" },
            ]}
          />

          <FooterColumn
            title="Solutions"
            links={[
              { label: "By Industry", href: "/solutions/industry" },
              {
                label: "By Professional Practice",
                href: "/solutions/practice",
              },
              { label: "By Challenge", href: "/solutions/challenges" },
              { label: "By Expertise", href: "/solutions/expertise" },
            ]}
          />

          <FooterColumn
            title="Customer"
            links={[
              { label: "Testimonials", href: "/testimonials" },
              { label: "Case Studies", href: "/case-studies" },
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[
              {
                label: "Knowledge Centre",
                href: "/resources/knowledge-centre",
              },
              { label: "Blog", href: "/blog" },
              { label: "Newsroom", href: "/home/resources/news-room" },
              { label: "Downloads Library", href: "/downloads" },
              { label: "Apps & Integrations", href: "/integrations" },
              {
                label: "Community Learning & Certifications",
                href: "/home/resources/community-learning",
              },
              {
                label: "Global Community Hub",
                href: "/home/resources/community-hub-main",
              },
              { label: "FAQs", href: "/home/resources/faqs" },
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
              {
                label: "Careers",
                href: "/home/resources/careers",
              },
            ]}
            extraTitle="Download"
            extraLinks={[
              { label: "iOS", href: "/download/ios" },
              { label: "Android", href: "/download/android" },
              { label: "Windows / Desktop", href: "/download/windows" },
            ]}
          />

          <FooterColumn
            title="Company"
            links={[
              { label: "About Us", href: "/home/company/about-us" },
              { label: "Career", href: "/careers" },
              { label: "Customers", href: "/customers" },
              {
                label: "Customer Affiliates",
                href: "/home/company/customer-affiliates",
              },
              { label: "Events", href: "/events" },
              { label: "Partners", href: "/home/company/global-integrators" },
              { label: "Consultants", href: "/consultants" },
              { label: "Reviews", href: "/reviews" },
              { label: "Press", href: "/press" },
              { label: "Brand Roadmap", href: "/roadmap" },
              { label: "Contact Us", href: "/home/company/contact-us" },
            ]}
          />
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 pb-6">
        © 2026, BEAPONE Unified Operating System. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, extraTitle, extraLinks }) {
  return (
    <div className="space-y-3">
      <h4 className="text-xs font-semibold text-yellow-400 uppercase">
        {title}
      </h4>

      <ul className="space-y-2 text-sm">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className="hover:text-white transition">
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {extraTitle && (
        <div className="pt-4 space-y-2">
          <h4 className="text-xs font-semibold text-yellow-400 uppercase">
            {extraTitle}
          </h4>
          <ul className="space-y-2 text-sm">
            {extraLinks.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="hover:text-white transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
