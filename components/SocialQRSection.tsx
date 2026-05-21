import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

function InstagramIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="instagram-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="45%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path fill="url(#instagram-gradient)" d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 2a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5.15-2.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
    </svg>
  )
}

function PinterestIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#e60023" d="M12 2a10 10 0 0 0-3.63 19.32 8.5 8.5 0 0 1 .03-2.87l1.18-5s-.3-.62-.3-1.53c0-1.44.83-2.51 1.87-2.51.88 0 1.31.66 1.31 1.46 0 .89-.57 2.22-.86 3.45-.24 1.03.52 1.87 1.53 1.87 1.84 0 3.26-1.94 3.26-4.74 0-2.48-1.78-4.21-4.32-4.21-2.94 0-4.67 2.21-4.67 4.49 0 .89.34 1.84.77 2.36.08.1.1.19.07.3l-.29 1.18c-.05.19-.16.23-.37.14-1.4-.65-2.27-2.69-2.27-4.33 0-3.53 2.56-6.77 7.39-6.77 3.88 0 6.9 2.76 6.9 6.46 0 3.86-2.43 6.96-5.8 6.96-1.14 0-2.2-.59-2.56-1.28l-.7 2.66a11 11 0 0 1-1.24 2.62A10 10 0 1 0 12 2Z" />
    </svg>
  )
}

const cards = [
  {
    label: "Instagram",
    image: "/instagram-qr.png",
    href: "/go/instagram",
    button: "Follow on Instagram",
    icon: <InstagramIcon />,
  },
  {
    label: "Pinterest",
    image: "/pinterest-qr.png",
    href: "/go/pinterest",
    button: "Follow on Pinterest",
    icon: <PinterestIcon />,
  },
]

export default function SocialQRSection() {
  return (
    <section id="social-qr" className="section-shell scroll-mt-24 py-20">
      <h2 className="text-center text-4xl font-black sm:text-5xl">Follow Us on Social Media</h2>
      <div className="mt-10 flex flex-col justify-center gap-6 md:flex-row">
        {cards.map((card) => (
          <div
            key={card.label}
            className="flex w-full flex-1 flex-col items-center rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-6 text-center transition-all duration-300 ease-out hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
          >
            {card.icon}
            <h3 className="mt-4 text-2xl font-black text-[#f97316]">{card.label}</h3>
            <div className="mt-5 rounded-2xl bg-white p-3">
              <Image src={card.image} alt={`${card.label} QR code`} width={260} height={260} className="h-auto w-full max-w-[260px]" />
            </div>
            <p className="mt-4 text-sm font-semibold text-[#9ca3af]">Scan to Follow</p>
            <Link href={card.href} className="button-gold mt-6 px-6 py-3">
              {card.button} <ExternalLink size={16} aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
