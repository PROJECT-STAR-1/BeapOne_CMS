"use client";

import React from "react";

export default function CtaFooterSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-6 tracking-tight font-instrument-sans">
          Ready to Transform Your Operations?
        </h2>
        <p className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto font-instrument-sans">
          We didn't set out to build another ERP. We set out to eliminate the
          fundamental friction of modern, global business operations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-[#1B1464] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity min-w-[200px] font-instrument-sans">
            Request a Personalized Demo
          </button>
          <button className="bg-[#00C853] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:opacity-90 transition-opacity min-w-[200px] font-instrument-sans">
            Join Our Ideation Community
          </button>
        </div>
      </div>
    </section>
  );
}
