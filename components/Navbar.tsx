"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"

const categories = [
  ["Tech", "/category/tech"],
  ["Kitchen", "/category/kitchen"],
  ["Home", "/category/home"],
  ["Fitness", "/category/fitness"],
  ["Beauty", "/category/beauty"],
]

const links = [
  ["Products", "/products"],
  ["Deals", "/deals"],
  ["Top Picks", "/top-picks"],
  ["Blog", "/blog"],
]

function isActive(pathname: string, href: string) {
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`))
}

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#2a2a2a] bg-black/80 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="VK Affiliate home">
          <span className="logo-orb h-14 w-14 shrink-0">
            <Image src="/logo.png" alt="VK Affiliate logo" width={48} height={48} priority className="h-11 w-11 p-1" />
          </span>
          <span className="text-lg font-black tracking-wide">
            VK <span className="brand-gradient">Affiliate</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.slice(0, 2).map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`border-b-2 py-2 text-sm font-semibold transition ${
                isActive(pathname, href)
                  ? "border-[#f97316] text-[#f97316]"
                  : "border-transparent text-white/75 hover:text-[#f97316]"
              }`}
            >
              {label}
            </Link>
          ))}

          <div className="group relative">
            <button
              type="button"
              className={`flex items-center gap-1 border-b-2 py-2 text-sm font-semibold transition ${
                pathname.startsWith("/category")
                  ? "border-[#f97316] text-[#f97316]"
                  : "border-transparent text-white/75 group-hover:text-[#f97316]"
              }`}
            >
              Categories <ChevronDown size={15} aria-hidden="true" />
            </button>
            <div className="invisible absolute right-0 top-full w-44 translate-y-2 rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-2 opacity-0 shadow-[0_0_20px_rgba(249,115,22,0.18)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {categories.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#9ca3af] transition hover:bg-[#222222] hover:text-[#f97316]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {links.slice(2).map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`border-b-2 py-2 text-sm font-semibold transition ${
                isActive(pathname, href)
                  ? "border-[#f97316] text-[#f97316]"
                  : "border-transparent text-white/75 hover:text-[#f97316]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="button-gold h-11 w-11 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#2a2a2a] bg-[#0a0a0a] transition-all duration-300 md:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-shell grid gap-2 py-4">
          {[...links.slice(0, 2), ...categories, ...links.slice(2)].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-semibold text-white/80 transition hover:bg-[#222222] hover:text-[#f97316]"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
