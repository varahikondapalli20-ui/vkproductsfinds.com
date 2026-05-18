import "./globals.css";

export const metadata = {
  title: "VK Affiliate | Turn Traffic Into Revenue",
  description:
    "Discover hand-picked Amazon products shared on Pinterest by VK Affiliate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black font-sans text-white antialiased">{children}</body>
    </html>
  );
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="p:domain_verify" content="fc095defc9cf75c86968ed48b4b8f9ba" />
      </head>
      <body>{children}</body>
    </html>
  );
}
