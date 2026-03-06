"use client";

import { useEffect, useState } from "react";
import {
  Rocket,
  Mail,
  Bell,
  Calendar,
  Twitter,
  Github,
  Linkedin,
} from "lucide-react";

export default function ComingSoon() {
  const launchDate = new Date("2026-08-01T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(null);

  function getTimeRemaining() {
    const now = Date.now();
    const distance = launchDate - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / 1000 / 60) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }

  useEffect(() => {
    // Set immediately on mount (prevents 1s delay)
    setTimeLeft(getTimeRemaining());

    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      <div className="absolute w-96 h-96 bg-indigo-600/30 blur-[120px] rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full bottom-10 right-10"></div>

      <div className="relative z-10 max-w-4xl text-center">

        <div className="flex justify-center mb-6">
          <div className="bg-indigo-600/20 p-4 rounded-2xl backdrop-blur-lg">
            <Rocket size={40} className="text-indigo-400" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Launching Soon 🚀
        </h1>

        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          We're building a next-generation product that will transform the way you work.
          Join our early access list and be the first to experience it.
        </p>

        {/* Countdown */}
        {timeLeft && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-6"
              >
                <div className="text-3xl font-bold text-indigo-400">
                  {item.value}
                </div>
                <div className="text-sm text-slate-400 mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Email Signup */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
              <Bell size={18} />
              Notify Me
            </button>
          </div>
        </div>

        <p className="text-slate-600 text-sm mt-8">
          © {new Date().getFullYear()} BEAPONE Unified Operating System. All Rights Reserved.
        </p>
      </div>
    </main>
  );
}