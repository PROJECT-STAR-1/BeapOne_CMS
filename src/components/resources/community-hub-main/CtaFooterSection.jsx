"use client";
import Link from "next/link";
import React from "react";

export default function CtaSection() {
  return (
    <section className="py-24 px-6 bg-[#1B1464] text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-instrument-sans">
          Ready to Contribute and Grow?
        </h2>
        <p className="text-indigo-100 text-lg md:text-xl mb-10 font-instrument-sans leading-relaxed">
          Our active members have reduced implementation time by 40% using
          community-shared templates. Don't build alone.
        </p>
        <Link
         href="/home/resources/community-hub/evolution-two"
         className="bg-white text-[#1B1464] px-10 py-4 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg font-instrument-sans inline-flex items-center justify-center">
          Register Your Profile Today
        </Link>
      </div>
    </section>
  );
}
