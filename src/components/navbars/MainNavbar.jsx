import { Search, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full  bg-[#1B1464]  border-b border-white/10">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-10">
            <span className="text-white font-semibold tracking-wide">
              BEAPOne UBOS
            </span>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-6 text-sm text-white/80">
              <Link href="#" className="hover:text-white transition">
                Product Overview
              </Link>
              <Link href="#" className="hover:text-white transition">
                Capabilities
              </Link>
              <Link href="#" className="hover:text-white transition">
                Core Modules
              </Link>
              <Link href="#" className="hover:text-white transition">
                Solutions Hub
              </Link>
              <Link href="#" className="hover:text-white transition">
                Resources
              </Link>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="text-white/80 hover:text-white transition">
              <Search size={18} />
            </button>

            {/* Sign in */}
            <button className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
              <User size={18} />
              <span>Sign in</span>
            </button>

            {/* Go to BEAPOne Lite */}
            <Link
              href="#"
              className="rounded-md border border-white/30 px-4 py-1.5 text-sm text-white hover:bg-white/10 transition"
            >
              Go to BEAPOne Lite
            </Link>

            {/* Contact Sales */}
            <Link
              href="#"
              className="rounded-md bg-white/10 px-4 py-1.5 text-sm text-white hover:bg-white/20 transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
