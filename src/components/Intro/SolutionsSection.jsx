import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"

const solutions = [
  {
    title: "Startups & Growing Teams",
    description:
      "Launch faster, stay compliant, and scale confidently with automated finance, operations, and reporting from day one.",
    image: "/images/intro/solutionOne.svg",
  },
  {
    title: "Multi-Branch & Distributed Businesses",
    description:
      "Manage multiple locations, teams, and accounts in real time—from a single unified dashboard.",
    image: "/images/intro/solutionTwo.svg",
  },
  {
    title: "SMEs & Mid-Market Companies",
    description:
      "Standardize operations, gain visibility across departments, and make data-driven decisions at scale.",
    image: "/images/intro/solutionThree.svg",
  },
  {
    title: "Finance-Driven Organizations",
    description:
      "Built for finance teams that need accuracy, control, compliance, and real-time financial intelligence.",
    image: "/images/intro/solutionFour.svg",
  },
  {
    title: "Service-Based Businesses",
    description:
      "Track projects, clients, invoicing, expenses, and performance—all in one connected system.",
    image: "/images/intro/solutionFive.svg",
  },
  {
    title: "Enterprises Driving Digital Transformation",
    description:
      "Replace fragmented tools with a unified operating system built for efficiency, scale, and insight.",
    image: "/images/intro/solutionSix.svg",
  },
]

export default function AccountingSolutionsSection() {
  return (
    <section className="w-full bg-white px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
            Tailored for you
          </p>
          <h2 className="text-4xl font-bold text-gray-900">
            An accounting solution for
            <br />
            every need and every business
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item) => (
            <div key={item.title} className="group">
              <div className="relative mb-5 h-56 w-full overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mb-4 text-sm text-gray-600">
                {item.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-24">
          <div className="relative overflow-hidden rounded-2xl bg-indigo-900 px-8 py-14 text-center text-white">
            <div className="mx-auto max-w-2xl">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-indigo-200">
                Newsletter
              </p>
              <h3 className="mb-3 text-3xl font-semibold">
                Stay Up To Date
              </h3>
              <p className="mb-8 text-sm text-indigo-200">
                Receive latest updates, news and special offers in your mailbox
              </p>

              <form className="mx-auto flex max-w-lg flex-col gap-3 sm:flex-row">
                <div className="relative w-full">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo-300" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-full bg-indigo-800 px-10 py-3 text-sm text-white placeholder-indigo-300 outline-none ring-1 ring-inset ring-indigo-700 focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-900 transition hover:bg-indigo-100"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* subtle grid background */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
