import {
  RefreshCcw,
  Globe,
  Rocket,
} from "lucide-react";
import Link from "next/link";
import CommunitySection from "@/components/company/customer-affiliates/CommunitySection";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#2d2a87] to-[#1f1c5c] text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm mb-6 opacity-80 font-medium">
            BEAPOne AFFILIATES
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-6">
            Turn Your Advocacy Into <br />
            Lifetime Passive Earnings.
          </h1>

          <p className="text-lg opacity-80 mb-10">
            Join thousands of BEAPOne customers earning up to 20%
            recurring commission for every successful referral.
          </p>

          <div className="flex justify-center gap-4">
            <Link
            href="/auth/login"
             className="bg-white text-[#2d2a87] px-6 py-3 rounded-full font-semibold shadow">
              Enroll Now 
            </Link>
            <Link 
              href="/home/company/customer-affiliates/howItWorks"
            className="border border-white px-6 py-3 rounded-full font-semibold">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          <Feature
            icon={<RefreshCcw size={28} />}
            title="Recurring Payouts"
            desc="Earn every time your referred client renews. It's not a one-time fee; it's lifetime value."
          />
          <Feature
            icon={<Globe size={28} />}
            title="Multi-Currency"
            desc="Refer locally or globally. We calculate in NGN, EUR, or USD and pay out in your preferred currency."
          />
          <Feature
            icon={<Rocket size={28} />}
            title="Automated Hub"
            desc="Access unique links, vanity coupon codes, and high-converting banners immediately upon enrollment."
          />
        </div>
      </section>

      {/* TIERS */}
      <section className="py-20 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Tiered Commission Structure
          </h2>
          <p className="text-gray-500 mt-2">
            The more you advocate, the more you earn per sale.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <Tier title="Bronze" percent="10%" note="Entry level for all enrolled customers." />
          <Tier title="Silver" percent="12%" note="Achieved after 5 active referrals." />
          
          <div className="bg-[#2d2a87] text-white rounded-xl p-8 text-center shadow-lg relative">
            <span className="absolute top-3 right-3 text-xs bg-white text-[#2d2a87] px-2 py-1 rounded">
              POPULAR
            </span>
            <p className="text-sm opacity-70 mb-2">TIER 03</p>
            <h3 className="text-4xl font-bold mb-2">15%</h3>
            <p className="font-semibold mb-2">Gold</p>
            <p className="text-sm opacity-80">
              Achieved after 20 active referrals.
            </p>
          </div>

          <Tier title="Platinum" percent="20%" note="Exclusive VIP Ambassador level." />
        </div>
      </section>

      {/* CTA / FORM */}
      {/* <section 
      id="enroll"
      className="bg-[#0f172a] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"> */}
          {/* LEFT */}
          {/* <div>
            <h2 className="text-4xl font-bold mb-8">
              Join the Ecosystem in Seconds.
            </h2> */}

            {/* <Steps />
          </div> */}

          {/* RIGHT CARD */}
          {/* <div className="bg-white text-gray-900 rounded-xl p-8 shadow-lg">
            <p className="text-sm font-semibold mb-4">
              CONFIRM PAYOUT CURRENCY
            </p>

            <select className="w-full border rounded-lg px-4 py-3 mb-4">
              <option>USD - United States Dollar</option>
              <option>EUR - Euro</option>
              <option>NGN - Nigerian Naira</option>
            </select>

            <div className="flex items-start gap-2 mb-6">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-600">
                I agree to the BEAPOne Affiliate Terms of Service and
                will clearly disclose my referral relationship as per
                local guidelines.
              </p>
            </div>

            <Link 
            href="/home/hubDashboard"
            className="w-full bg-[#2d2a87] text-white py-3 rounded-lg font-semibold">
              Activate My Affiliate Hub
            </Link>

            <p className="text-xs text-gray-400 mt-4 text-center">
              LINKED TO HUB G PROFILE #USER-12882
            </p>
          </div>
        </div>
      </section>
 */}

      <CommunitySection />
    </main>
  );
}

/* COMPONENTS */

function Feature({ icon, title, desc }) {
  return (
    <div>
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-white rounded-xl shadow">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
}

function Tier({ title, percent, note }) {
  return (
    <div className="border rounded-xl p-8 text-center">
      <p className="text-sm text-gray-400 mb-2">TIER</p>
      <h3 className="text-3xl font-bold mb-2">{percent}</h3>
      <p className="font-semibold mb-2">{title}</p>
      <p className="text-sm text-gray-500">{note}</p>
    </div>
  );
}

function Steps() {
  return (
    <div className="space-y-6">
      <Step
        num="1"
        title="Select Payout Currency"
        desc="Choose how you want to be paid via A3 Financials."
      />
      <Step
        num="2"
        title="Agree to Terms"
        desc="Simple compliance and disclosure guidelines."
      />
      <Step
        num="3"
        title="Instant Access"
        desc="Generate your link and start sharing."
      />
    </div>
  );
}

function Step({ num, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-8 h-8 rounded-full bg-[#2d2a87] flex items-center justify-center text-sm">
        {num}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
    </div>
  );
}