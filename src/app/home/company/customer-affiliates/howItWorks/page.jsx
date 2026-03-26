import {
  Link as LinkIcon,
  Share2,
  RefreshCcw,
  Wallet,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-[#f6f7fb] text-[#0f172a]">
      {/* HERO */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The Mechanics of Growth.
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          No complex jargon. No manual tracking. Just a seamless, automated
          bridge between your advocacy and your earnings.
        </p>
      </section>

      {/* JOURNEY */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <p className="text-center text-xs tracking-widest text-gray-400 mb-12">
          THE 4-STEP JOURNEY
        </p>

        <div className="space-y-20">
          {/* STEP 1 */}
          <Step
            number="1"
            title="One-Click Enrollment"
            description="Link your existing Hub G profile to the Affiliate Hub with a single click. Our system immediately generates your Multi-Region Tracking Link and a Vanity Coupon Code customized to your name."
            extra={
              <div className="mt-4 bg-white border rounded-lg px-4 py-3 text-sm text-gray-500">
                Unique Link: ubos.com/signup?ref=user_12882
              </div>
            }
            icon={<LinkIcon size={28} />}
          />

          {/* STEP 2 */}
          <Step
            reverse
            number="2"
            title="Smart Advocacy"
            description="Share your link or code on your blog, LinkedIn, or directly with peers. When a prospect clicks, our Attribution Engine drops a permanent cookie that maps any future sale directly to you."
            extra={
              <div className="flex gap-3 mt-4">
                {["BLOG POSTS", "EMAILS", "SOCIAL MEDIA"].map((item) => (
                  <span
                    key={item}
                    className="border rounded-full px-4 py-1 text-xs text-gray-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            }
            icon={<Share2 size={28} />}
          />

          {/* STEP 3 */}
          <Step
            number="3"
            title="Lifetime Recurring Logic"
            description="This is where BEAPOne differs. You don’t just get paid for the initial sale. You receive a commission every single month the customer maintains their subscription. As long as they stay, you earn."
            extra={
              <div className="mt-4 bg-green-50 border border-green-200 rounded-lg px-4 py-4">
                <p className="text-xs text-green-600 mb-1">
                  COMMISSION PROJECTION
                </p>
                <p className="text-2xl font-bold">
                  ₦1,200,000{" "}
                  <span className="text-sm text-gray-400 font-normal">
                    / Annual Recurring
                  </span>
                </p>
              </div>
            }
            icon={<RefreshCcw size={28} />}
          />

          {/* STEP 4 */}
          <Step
            reverse
            number="4"
            title="Multi-Currency Payouts"
            description="Our system handles global complexities. If your referral pays in EUR or NGN, our Hub O logic converts it at mid-market rates to your preferred payout currency (USD). Payments are batched and sent via A3 Financials directly to your account."
            extra={
              <p className="mt-3 text-sm text-indigo-600 cursor-pointer">
                View Payout Schedule →
              </p>
            }
            icon={<Wallet size={28} />}
          />
        </div>
      </section>

      {/* DARK SECTION */}
      <section className="bg-[#0b0f2a] text-white py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">
          Global Reach. Local Payouts.
        </h2>
        <p className="text-gray-400 mb-10">
          Our A2.7.A engine performs real-time currency reconciliation.
        </p>

        <div className="bg-[#13183a] rounded-xl max-w-xl mx-auto p-6 flex justify-between items-center">
          <div className="text-left">
            <p className="text-sm text-gray-400">NG</p>
            <p className="text-red-400 font-semibold">NGN 1,200,000</p>
            <p className="text-xs text-gray-500">CUSTOMER PAYMENT</p>
          </div>

          <div className="bg-indigo-600 text-xs px-4 py-2 rounded-full">
            HUB O FX CONVERSION
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-400">US</p>
            <p className="text-green-400 font-semibold">USD 750.42</p>
            <p className="text-xs text-gray-500">YOUR COMMISSION</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          *Exchange rates are updated daily via our Financial Management Hub.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">
          Frequently Asked Questions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <FaqCard
            q="When do I get paid?"
            a="Commissions are processed on the 15th of every month for the previous month’s verified conversions. Payments are sent directly to your linked bank account via A3 Financials."
          />
          <FaqCard
            q="Is there a cap on earnings?"
            a="No. There is no ceiling on affiliate earnings. Your commissions scale linearly with every referral that maintains an active subscription."
          />
          <FaqCard
            q="How does attribution work?"
            a="We use a First-Touch model. The first affiliate link a prospect clicks will be credited with the conversion, even if they purchase weeks later."
          />
          <FaqCard
            q="What are Hub Specific Bonuses?"
            a="You can earn extra bonuses if your referral subscribes to specialized modules like Farm Management (Hub P) or Manufacturing (Hub J)."
          />
        </div>
      </section>

        <div className=" bg-[#f3f4f6] flex items-center justify-center pb-6">
      <div className="text-center max-w-xl px-6">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Ready to Start?
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
          Enrollment takes less than 30 seconds. Activate your hub and turn your
          network into a lifetime revenue stream.
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link 
          href="/home/resources/community-hub/evolution-two"
          className="inline-flex items-center gap-2 bg-[#2d2a7f] hover:bg-[#24216a] text-white font-medium px-6 py-3 rounded-full transition-all">
            Join the Affiliate Network
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
    </main>
  );
}

/* STEP COMPONENT */
function Step({
  number,
  title,
  description,
  extra,
  icon,
  reverse,
}) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* TEXT */}
      <div className={reverse ? "md:order-2" : ""}>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-900 text-white text-sm">
            {number}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
        {extra}
      </div>

      {/* ICON BOX */}
      <div
        className={`bg-gray-200 rounded-2xl h-56 flex items-center justify-center ${
          reverse ? "md:order-1" : ""
        }`}
      >
        <div className="bg-gray-300 p-6 rounded-xl text-gray-500">
          {icon}
        </div>
      </div>
    </div>
  );
}

/* FAQ CARD */
function FaqCard({ q, a }) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h4 className="font-semibold mb-2">{q}</h4>
      <p className="text-gray-500 text-sm">{a}</p>
    </div>
  );
}