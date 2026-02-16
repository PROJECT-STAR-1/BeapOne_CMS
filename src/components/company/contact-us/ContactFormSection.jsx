"use client";

import React, { useState } from "react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    region: "",
    category: "",
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="relative z-20 px-6 py-16 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-4 tracking-tight">
          Send Us a Message
        </h2>
        <p className="text-slate-500 text-sm mb-10">
          Please provide details to ensure accurate routing to the appropriate
          regional and departmental team (Sales, Support, Finance).
        </p>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Region Selection */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Your Location/Region *
              </label>
              <select
                name="region"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
                defaultValue=""
                onChange={handleInputChange}>
                <option value="" disabled>
                  Select Your Country / Region
                </option>
                <option value="NA">North America</option>
                <option value="EMEA">EMEA</option>
                <option value="APAC">APAC</option>
              </select>
            </div>

            {/* Inquiry Category */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">
                Inquiry Category *
              </label>
              <select
                name="category"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
                defaultValue=""
                onChange={handleInputChange}>
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Sales">Sales & Pricing</option>
                <option value="Support">Technical Support</option>
                <option value="Partnership">Partnership Inquiry</option>
              </select>
            </div>

            {/* Personal Details */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-black">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-black">Work Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm"
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-black">
              Your Message (Include User/Tenant ID if known)
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter message here"
              className="w-full p-4 bg-white border border-gray-200 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B1464] text-sm resize-none"
              onChange={handleInputChange}></textarea>
          </div>

          <button
            type="button"
            className="bg-[#1B1464] text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
