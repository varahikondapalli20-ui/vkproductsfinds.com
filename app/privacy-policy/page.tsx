import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "VK Affiliate privacy policy covering email, analytics, and third-party links.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="section-shell min-h-screen pt-32 pb-20">
      <article className="mx-auto max-w-3xl rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-8">
        <h1 className="text-5xl font-black">Privacy Policy</h1>
        <div className="mt-8 grid gap-5 leading-8 text-[#9ca3af]">
          <p>VK Affiliate collects only the information you choose to provide, such as your email address when subscribing to deal alerts or your contact details when sending a message.</p>
          <p>We may use cookies, basic analytics, and Vercel Analytics to understand site performance and improve content. Analytics data is used in aggregate and does not sell your personal data.</p>
          <p>Our website includes third-party links, including Amazon affiliate links and social media links. Those websites have their own privacy policies and terms.</p>
          <p>We do not sell personal data. You can contact us about privacy questions or removal requests using the contact page.</p>
        </div>
      </article>
    </main>
  )
}
