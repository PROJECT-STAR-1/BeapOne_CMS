import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1B1464]">
      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-32 pb-24 text-center text-white">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-indigo-200 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Join millions of users
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
          Unified operating system for businesses
        </h1>

        {/* Subheading */}
        <p className="mx-auto mt-5 max-w-2xl text-sm text-indigo-200 md:text-base">
          Your single source of truth. Break down data silos and seamlessly
          connect front, middle, and back office operations on one cohesive
          platform.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/home"
            className="rounded-md bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Start my free trial
          </Link>

          <Link
            href="/home/resources/request-demo"
            className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            Schedule a demo
          </Link>
        </div>
      </div>

      {/* DASHBOARD COLLAGE */}
      <div className="relative mx-auto mt-10 h-[560px] max-w-6xl">
        {/* LEFT STACK */}
        <div className="absolute left-0 top-16 h-[460px] w-[38%] space-y-4">
          <div className="relative h-1/2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0F0B3A] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/intro/introHeroThree.svg"
              alt="Left top dashboard"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-1/2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#0F0B3A] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <Image
              src="/images/intro/introHeroFour.svg"
              alt="Left bottom dashboard"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CENTER */}
        <div className="absolute left-1/2 top-0 z-30 h-[520px] w-[56%] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#0F0B3A] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
          <Image
            src="/images/intro/introHeroOne.svg"
            alt="Main dashboard"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT */}
        <div className="absolute right-0 top-24 z-20 h-[440px] w-[35%] overflow-hidden rounded-xl border border-white/10 bg-[#0F0B3A] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <Image
            src="/images/intro/introHeroTwo.svg"
            alt="Right panel"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-[#1B1464] via-[#1B1464]/80 to-transparent" />
    </section>
  );
}
