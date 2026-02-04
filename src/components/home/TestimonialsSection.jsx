import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f3f1f7] to-[#2b2668] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-black">
            Trusted by Leading Businesses Worldwide
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            Our clients achieve remarkable results and transform their operations
            with BEAPONE UBOS. Hear directly from them
          </p>
        </div>

        {/* Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="rounded-xl bg-[#faf9fd] p-8 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#f5a623] text-[#f5a623]"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6">
                “BEAPONE UBOS transformed our supply chain visibility, allowing
                us to reduce stockouts by 15% and improve on-time delivery
                significantly.”
              </p>

              <div>
                <p className="font-semibold text-gray-900">Jane Doe</p>
                <p className="text-sm text-gray-500">
                  Supply Chain Director, Global Retail Co.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl bg-[#faf9fd] p-8 shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#f5a623] text-[#f5a623]"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6">
                “The flexibility of BEAPONE’s e-commerce fulfillment options
                allowed us to scale rapidly without compromising on customer
                experience.”
              </p>

              <div>
                <p className="font-semibold text-gray-900">John Smith</p>
                <p className="text-sm text-gray-500">
                  CEO, Online Brands Inc.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-14 right-0 flex gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 transition">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-md border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20 transition">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
