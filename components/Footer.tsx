import Link from "next/link"

const columns = [
  {
    title: "Shop",
    links: [
      ["Products", "/products"],
      ["Deals", "/deals"],
      ["New Arrivals", "/new-arrivals"],
      ["Top Picks", "/top-picks"],
    ],
  },
  {
    title: "Categories",
    links: [
      ["Tech", "/category/tech"],
      ["Kitchen", "/category/kitchen"],
      ["Home", "/category/home"],
      ["Fitness", "/category/fitness"],
      ["Beauty", "/category/beauty"],
    ],
  },
  {
    title: "Info",
    links: [
      ["About", "/about"],
      ["Blog", "/blog"],
      ["Contact", "/contact"],
      ["Under ₹500", "/under-500"],
      ["Under ₹1000", "/under-1000"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Disclosure", "/disclosure"],
      ["Privacy Policy", "/privacy-policy"],
      ["Terms of Use", "/terms"],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a]">
      <div className="section-shell grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-[#f97316]">{column.title}</h2>
            <div className="mt-4 grid gap-3">
              {column.links.map(([label, href]) => (
                <Link key={href} href={href} className="text-sm text-[#9ca3af] transition hover:text-[#f97316]">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-[#2a2a2a] py-8">
        <div className="section-shell flex flex-col items-center justify-between gap-3 text-center text-sm text-[#6b7280] sm:flex-row sm:text-left">
          <p>© 2026 VK Affiliate. All rights reserved.</p>
          <p>As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </div>
    </footer>
  )
}
