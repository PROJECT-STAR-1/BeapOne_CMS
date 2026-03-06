'use client'

import { Search, Globe } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Left */}
        <div className="flex items-center gap-4">
          <Link
            href="/home"
            className="rounded-md bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-800 transition"
          >
            Explore BEAPOne UBOS
          </Link>
        </div>

        {/* Center */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link href="/home/company/contact-us" className="hover:text-indigo-700 transition">
            Contact Sales
          </Link>
          <Link href="/home/resources/request-demo" className="hover:text-indigo-700 transition">
            Schedule Demo
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition">
            <Search className="h-5 w-5 text-gray-700" />
          </button>

          <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-indigo-700 transition">
            <Globe className="h-4 w-4" />
            <span>English</span>
          </button>

          <Link
            href="/home/comingSoon"
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600 transition"
          >
            Explore BEAPOne Lite
          </Link>
        </div>
      </nav>
    </header>
  )
}
