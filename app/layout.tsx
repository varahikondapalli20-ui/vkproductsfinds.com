import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://vkproductsfinds-com.vercel.app"),
  title: {
    default: "VK Affiliate",
    template: "%s | VK Affiliate",
  },
  description: "Discover hand-picked Amazon products. Shop smart, save big.",
  keywords: ["amazon deals", "affiliate", "best products", "VK Affiliate"],
  openGraph: {
    siteName: "VK Affiliate",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary",
    images: ["/logo.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="p:domain_verify" content="fc095defc9cf75c86968ed48b4b8f9ba" />
      </head>
      <body className="bg-[#0a0a0a] font-sans text-white antialiased">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
