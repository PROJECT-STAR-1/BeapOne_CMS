"use client"

import { Building2, ShieldCheck } from "lucide-react"

export default function BeapHero() {
  const companies = [
    "Dangote Group",
    "GTBank",
    "MTN Nigeria",
    "Zenith Bank",
    "First Bank",
    "Access Bank",
  ]

  return (
    <section className="relative overflow-hidden text-white">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/95 via-[#1E40AF]/85 to-teal-500/70" />

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28">

        {/* Logo */}
        <div className="flex items-center gap-4 mb-16">
          <div className="bg-white/10 backdrop-blur-lg p-3 rounded-xl border border-white/10">
            <Building2 size={28} />
          </div>

          <div>
            <p className="text-2xl font-semibold tracking-tight">
              BEAPOne
            </p>
            <p className="text-blue-200 text-sm">
              Unified Business Operations System
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="max-w-3xl mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 tracking-tight">
            Join Leading Nigerian
            <br />
            Enterprises on BEAPOne
          </h1>

          <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
            Trusted by top organizations across financial services,
            telecommunications, manufacturing, and government sectors to
            manage their critical business operations.
          </p>
        </div>

        {/* Trusted by */}
        <div className="mb-16">
          <p className="text-sm tracking-[0.2em] uppercase text-blue-200 mb-6">
            Trusted by Industry Leaders
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">

            {companies.map((company) => (
              <div
                key={company}
                className="
                bg-white/10
                backdrop-blur-lg
                border border-white/10
                rounded-xl
                py-4
                text-center
                font-medium
                text-sm
                hover:bg-white/20
                transition-all
                duration-300
                shadow-lg
                "
              >
                {company}
              </div>
            ))}

          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 mb-16">

          <div>
            <p className="text-4xl lg:text-5xl font-semibold">500+</p>
            <p className="text-blue-200 mt-2">Enterprise Clients</p>
          </div>

          <div>
            <p className="text-4xl lg:text-5xl font-semibold">48+</p>
            <p className="text-blue-200 mt-2">Active Modules</p>
          </div>

          <div>
            <p className="text-4xl lg:text-5xl font-semibold">99.9%</p>
            <p className="text-blue-200 mt-2">Uptime SLA</p>
          </div>

        </div>

        {/* Bottom Compliance */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-blue-200">

          <div className="flex items-center gap-2">
            <ShieldCheck size={18} />
            NDPR Compliant Data Processing
          </div>

          <div className="flex items-center gap-4">
            <span>NITDA Registered</span>
            <span className="opacity-60">•</span>
            <span>ISO 27001</span>
          </div>

        </div>

      </div>
    </section>
  )
}