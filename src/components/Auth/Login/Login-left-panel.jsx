"use client";

import { ShieldCheck, Globe, Lock, CheckCircle, Building2 } from "lucide-react";

export default function AuthLeftPanel() {
  return (
    <div
      className="relative flex w-full h-full text-white flex-col justify-between p-14 overflow-hidden
     bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"
    >
      {/* Enterprise Grid */}
      <div
        className="absolute inset-0 opacity-10
        bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),
        linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
        bg-[size:60px_60px]"
      />

      {/* Radial glow background */}
      <div
        className="absolute inset-0 opacity-20
        bg-[radial-gradient(circle_at_20%_20%,#ffffff33,transparent_40%),
        radial-gradient(circle_at_80%_80%,#ffffff22,transparent_40%)]"
      />

      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-floatSlow" />

        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-floatMedium" />

        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl animate-floatSlow" />
      </div>

      {/* Animated graph lines */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 450 C150 350 250 500 400 400 C550 300 650 420 800 320"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="6 6"
            className="animate-drawLine"
          />

          <path
            d="M0 500 C200 420 300 520 450 430 C600 340 700 460 800 380"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            className="animate-drawLineSlow"
          />
        </svg>
      </div>
      {/* Top Content */}
      <div className="relative z-10 space-y-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-lg backdrop-blur-lg border border-white/10">
            <Building2 size={26} />
          </div>

          <div>
            <h1 className="text-xl font-semibold tracking-wide">BEAPOne</h1>

            <p className="text-sm text-white/80">
              Unified Business Operations System
            </p>
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-5 max-w-xl">
          <h2 className="text-4xl font-bold leading-tight">
            Enterprise-Grade Business
            <br />
            Operations Management
          </h2>

          <p className="text-white/80 text-lg leading-relaxed">
            Streamline your entire business ecosystem with comprehensive modules
            spanning financial management, HR, project delivery, and regulatory
            compliance — built for Nigerian enterprises and global operations.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-5 max-w-xl">
          <Feature
            icon={<ShieldCheck size={20} />}
            title="CBN & NDPR Compliant"
            desc="Full regulatory compliance"
          />

          <Feature
            icon={<Globe size={20} />}
            title="Multi-Currency Support"
            desc="NGN, USD & 50+ currencies"
          />

          <Feature
            icon={<Lock size={20} />}
            title="Enterprise Security"
            desc="SOC 2 Type II certified"
          />

          <Feature
            icon={<CheckCircle size={20} />}
            title="48+ Active Modules"
            desc="Complete business suite"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-col gap-4 text-sm text-white/70">
        <p className="tracking-wide">Protected by 256-bit SSL encryption</p>

        <div className="flex gap-4 text-xs opacity-80">
          <span>NITDA Registered</span>
          <span>ISO 27001</span>
          <span>SOC 2</span>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div
      className="
      p-5
      rounded-xl
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      shadow-lg
      hover:bg-white/20
      hover:scale-[1.02]
      transition
      "
    >
      <div className="text-teal-300 mb-2">{icon}</div>

      <h3 className="font-semibold">{title}</h3>

      <p className="text-sm text-white/80">{desc}</p>
    </div>
  );
}
