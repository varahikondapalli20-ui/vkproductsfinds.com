import Link from "next/link"

export default function EmptyState({ message = "No products found" }: { message?: string }) {
  return (
    <div className="rounded-2xl border border-[#2a2a2a] bg-[#1a1a1a] p-10 text-center">
      <h2 className="text-2xl font-black text-white">{message}</h2>
      <p className="mx-auto mt-3 max-w-lg text-[#9ca3af]">
        We are refreshing this shelf. Check back soon for new Amazon finds.
      </p>
      <Link href="/" className="button-gold mt-6 px-6 py-3">
        Back to Home
      </Link>
    </div>
  )
}
