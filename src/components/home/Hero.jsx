"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function BeaponeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1B1464] ">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-white font-extrabold tracking-tight">
              <span className="block text-[32px] leading-[1.15] md:text-[40px] lg:text-[44px]">
                BEAPONE UBOS:
              </span>

              <span className="mt-2 block text-[40px] leading-[1.1] md:text-[52px] lg:text-[60px]">
                The Unified Operating
              </span>

              <span className="block text-[40px] leading-[1.1] md:text-[52px] lg:text-[60px]">
                System for Business
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-blue-100/85 md:text-[17px] lg:text-[18px]">
              Win more customers, manage employees, track finances, and
              holistically handle operations on one unified system.
            </p>

            <button className="mt-10 inline-flex items-center rounded-lg bg-blue-600 px-8 py-4 text-[14px] font-semibold tracking-wide text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent">
              DISCOVER THE BEAPONE ADVANTAGE
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex items-center justify-center">
            {/* Decorative glow */}
            <div className="absolute -inset-10 rounded-full bg-blue-500/10 blur-3xl" />

            {/* Image wrapper */}
            <div className="relative z-10">
              <Image
                src="/images/home/homeOne.svg"
                alt="Beapone UBOS illustration"
                width={520}
                height={520}
                priority
                className="h-auto w-full max-w-md"
              />

              {/* Example floating check accents (subtle, optional) */}
              <div className="absolute -right-6 top-12 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                <Check className="h-5 w-5 text-white" />
              </div>

              <div className="absolute -left-6 bottom-16 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                <Check className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
