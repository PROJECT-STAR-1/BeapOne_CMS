"use client";

import {
  Shield,
  Clock,
  Lock,
  ShieldCheck,
  Building2
} from "lucide-react";

export default function ForgetPasswordLeftPanel() {

  const features = [
    {
      icon: Shield,
      title: "Multi-Factor Verification",
      desc: "6-digit secure code via email",
    },
    {
      icon: Clock,
      title: "Time-Limited Codes",
      desc: "Codes expire after 10 minutes",
    },
    {
      icon: Lock,
      title: "Encrypted Transmission",
      desc: "256-bit SSL encrypted delivery",
    },
    {
      icon: ShieldCheck,
      title: "Audit Logged",
      desc: "All resets logged per NDPR",
    },
  ];

  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b2f6f] via-[#1e4b87] to-[#159a90]" />

      {/* Analytics Chart Background */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      />

      {/* Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.15),transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto px-10 pt-12 pb-24">

        {/* Header */}
        <div className="flex items-center gap-4 mb-16">

          <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-3">
            <Building2 className="w-6 h-6 text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              BEAPOne
            </h2>
            <p className="text-sm text-white/70">
              Unified Business Operations System
            </p>
          </div>

        </div>

        {/* Title Section */}
        <div className="max-w-xl mb-14">

          <h1 className="text-[46px] leading-[1.1] font-semibold tracking-tight">
            Secure Password
            <br />
            Recovery
          </h1>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Our enterprise-grade password recovery process uses multi-factor
            verification to ensure your account security remains uncompromised.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 gap-6 max-w-4xl">

          {features.map((feature, i) => {

            const Icon = feature.icon;

            return (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-xl
                bg-white/10
                backdrop-blur-xl
                border border-white/15
                shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                hover:bg-white/15
                transition"
              >

                <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">
                  <Icon className="w-5 h-5 text-emerald-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {feature.title}
                  </h3>

                  <p className="text-white/70 text-sm mt-1">
                    {feature.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Slider Dots */}
        <div className="flex items-center gap-3 mt-14">

          <span className="w-3 h-3 rounded-full bg-emerald-400" />

          <span className="w-10 h-[2px] bg-white/30" />

          <span className="w-3 h-3 rounded-full bg-white/30" />

          <span className="w-10 h-[2px] bg-white/30" />

          <span className="w-3 h-3 rounded-full bg-white/30" />

        </div>

      </div>

      {/* Footer */}
      <div className="absolute bottom-6 w-full flex justify-between px-10 text-sm text-white/70">

        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-white/60" />
          Protected by 256-bit SSL encryption
        </div>

        <div className="flex items-center gap-3">
          <span>NITDA Registered</span>
          <span>•</span>
          <span>ISO 27001</span>
          <span>•</span>
          <span>SOC 2</span>
        </div>

      </div>

    </div>
  );
}