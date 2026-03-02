"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#1B1464] py-16 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 font-instrument-sans">
          The BEAPOne UBOS Newsroom
        </h1>
        <p className="text-indigo-100 text-lg md:text-xl leading-relaxed mb-8 font-instrument-sans">
          Official announcements, media contacts, and assets for the Universal
          Business Operating System.
        </p>
        <p className="text-white text-sm font-medium font-instrument-sans">
          For media inquiries, contact{" "}
          <a
            href="mailto:media@beaponeubos.com"
            className="font-bold hover:underline">
            media@beaponeubos.com
          </a>
        </p>
      </div>
    </section>
  );
}
