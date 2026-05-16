"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Flame,
  Instagram,
  Mail,
  Menu,
  Pin,
  Send,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

const amazonUrl = "https://amzn.to/example";

const products = [
  {
    title: "Smart Desk Organizer",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Wireless Earbuds",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Premium Water Bottle",
    price: "$18.99",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Minimal LED Lamp",
    price: "$32.99",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
  },
];

const deals = [
  {
    title: "Kitchen Storage Set",
    price: "Save 28%",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Travel Tech Pouch",
    price: "Save 35%",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Home Fitness Essentials",
    price: "Save 22%",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Cozy Room Decor",
    price: "Save 31%",
    image:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=80",
  },
];

const navLinks = [
  ["Products", "#products"],
  ["Amazon Deals", "#deals"],
  ["Pinterest", "#pinterest"],
  ["Instagram", "#instagram"],
  ["Contact", "#contact"],
];

function ProductCard({ item, buttonLabel }) {
  return (
    <article className="gold-glow card-surface overflow-hidden rounded-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-bold text-white">{item.title}</h3>
          <p className="mt-1 text-sm font-semibold text-gold">{item.price}</p>
        </div>
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button-gold w-full px-5 py-3 text-sm"
        >
          {buttonLabel}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [qrError, setQrError] = useState(false);

  async function handleSubscribe(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Subscription failed.");
      }

      setEmail("");
      setStatus({ type: "success", message: "Subscribed successfully!" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/82 backdrop-blur-xl">
        <div className="section-shell flex h-20 items-center justify-between">
          <a href="#hero" className="flex items-center gap-3" aria-label="VK Affiliate home">
            <span className="logo-orb h-14 w-14 shrink-0">
              <Image
                src="/logo.png"
                alt="VK Affiliate logo"
                width={48}
                height={48}
                priority
                className="h-11 w-11 p-1"
              />
            </span>
            <span className="text-lg font-black tracking-wide">
              VK <span className="brand-gradient">Affiliate</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-white/72 transition hover:text-gold"
              >
                {label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="button-gold h-11 w-11 md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-black md:hidden">
            <div className="section-shell grid gap-2 py-4">
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-white/78 transition hover:bg-white/10 hover:text-gold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="hero" className="section-shell flex min-h-screen items-center pt-24">
        <div className="grid w-full items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/70 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-gold shadow-gold">
              <Sparkles size={14} aria-hidden="true" />
              Amazon Affiliate Partner
            </div>
            <h1 className="hero-title mt-7 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Discover. Click. <span className="brand-gradient">Earn.</span> Repeat.
            </h1>
            <p className="brand-gradient mt-5 inline-block text-2xl font-black">
              Turn Traffic Into Revenue
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Discover hand-picked Amazon products shared on Pinterest. Every click
              supports our curated affiliate collection — shop smart, save big.
            </p>
            <a href="#products" className="button-gold mt-8 px-7 py-4 text-base">
              Explore Products
              <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="hero-light" />
            <div className="logo-orb relative aspect-square w-full p-10">
              <Image
                src="/logo.png"
                alt="VK Affiliate brand mark"
                width={520}
                height={520}
                priority
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section-shell scroll-mt-24 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow text-sm font-black uppercase tracking-[0.18em]">
              Curated Collection
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">🔥 Hot Picks</h2>
          </div>
          <ShoppingBag className="hidden text-gold drop-shadow-[0_0_18px_rgba(244,122,0,0.55)] sm:block" size={34} aria-hidden="true" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <ProductCard key={item.title} item={item} buttonLabel="Check Deal" />
          ))}
        </div>
      </section>

      <section id="deals" className="section-shell scroll-mt-24 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="section-eyebrow text-sm font-black uppercase tracking-[0.18em]">
              Amazon Favorites
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl">
              Top Amazon Deals 🔥
            </h2>
          </div>
          <Flame className="hidden text-gold drop-shadow-[0_0_18px_rgba(244,122,0,0.55)] sm:block" size={34} aria-hidden="true" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((item) => (
            <ProductCard key={item.title} item={item} buttonLabel="Buy on Amazon" />
          ))}
        </div>
      </section>

      <section id="pinterest" className="section-shell scroll-mt-24 py-20 text-center">
        <div className="card-surface gold-glow mx-auto max-w-2xl rounded-lg px-6 py-14">
          <Pin className="mx-auto text-gold" size={48} aria-hidden="true" />
          <h2 className="mt-5 text-4xl font-black">Pinterest Picks</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Follow the curated product boards and discover fresh Amazon finds as
            soon as they go live.
          </p>
          <a
            href="/go/pinterest"
            className="button-gold mt-7 px-7 py-4"
          >
            Open Pinterest
            <ExternalLink size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="instagram" className="section-shell scroll-mt-24 py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="card-surface gold-glow rounded-lg p-8 sm:p-10">
            <Instagram className="text-gold" size={52} aria-hidden="true" />
            <h2 className="mt-6 text-4xl font-black">Follow VK Affiliate</h2>
            <p className="mt-4 max-w-xl text-white/70">
              Catch product drops, deal highlights, and affiliate inspiration on
              Instagram.
            </p>
            <a
              href="/go/instagram"
              className="button-gold mt-7 px-7 py-4"
            >
              Open Instagram
              <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="card-surface rounded-lg p-8 text-center sm:p-10">
            <h2 className="text-3xl font-black">Scan to follow 📲</h2>
            <div className="mt-7 flex min-h-[320px] items-center justify-center rounded-lg border border-white/12 bg-white/[0.03] p-5">
              {qrError ? (
                <div className="flex h-72 w-full max-w-sm items-center justify-center rounded-lg border-2 border-dashed border-gold/70 p-8 text-center text-sm font-semibold text-white/70">
                  Insert Instagram QR code here
                </div>
              ) : (
                <Image
                  src="/instagram-qr.png"
                  alt="Instagram QR code for VK Affiliate"
                  width={360}
                  height={360}
                  className="h-auto w-full max-w-sm rounded-lg bg-white"
                  onError={() => setQrError(true)}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell scroll-mt-24 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Mail className="mx-auto text-gold" size={44} aria-hidden="true" />
          <h2 className="mt-5 text-4xl font-black">Get Deal Alerts</h2>
          <p className="mt-4 text-white/70">
            Subscribe for fresh VK Affiliate picks and Amazon finds.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="Enter your email"
              className="min-h-14 flex-1 rounded-full border border-white/15 bg-white/[0.06] px-6 text-white outline-none transition placeholder:text-white/40 focus:border-gold focus:shadow-gold"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-gold min-h-14 px-7 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
              <Send size={18} aria-hidden="true" />
            </button>
          </form>
          {status.message && (
            <p
              className={`mt-4 text-sm font-semibold ${
                status.type === "success" ? "text-gold" : "text-red-300"
              }`}
              role="status"
            >
              {status.message}
            </p>
          )}
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col items-center justify-between gap-3 text-center text-sm text-white/58 sm:flex-row sm:text-left">
          <p>© 2026 VK Affiliate. All rights reserved.</p>
          <p>As an Amazon Associate, we earn from qualifying purchases.</p>
        </div>
      </footer>
    </main>
  );
}
