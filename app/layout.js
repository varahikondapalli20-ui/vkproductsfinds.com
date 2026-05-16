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
