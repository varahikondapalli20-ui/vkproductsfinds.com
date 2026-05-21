import { Client, LogLevel } from "@notionhq/client"

export type Product = {
  id: string
  name: string
  imageUrl: string
  price: number
  originalPrice: number
  category: string
  amazonLink: string
  starRating: number
  reviewCount: number
  dateAdded: string
  status: string
  tags: string[]
  featured: boolean
  discountPercent: number
}

const notion = new Client({ auth: process.env.NOTION_SECRET, logLevel: LogLevel.ERROR })

function getDatabaseId() {
  const raw = process.env.NOTION_DATABASE_ID || ""
  const match = raw.match(/[a-f0-9]{32}/i)
  return match?.[0] || raw
}

const liveFilter = {
  property: "Status",
  select: { equals: "Live" },
}

function discount(price: number, originalPrice: number) {
  if (!price || !originalPrice || originalPrice <= price) return 0
  return Math.round((1 - price / originalPrice) * 100)
}

function prop(page: any, name: string) {
  return page?.properties?.[name]
}

export function mapProduct(page: any): Product {
  const name = prop(page, "Product Name")?.title?.[0]?.plain_text || "Untitled Product"
  const price = prop(page, "Price")?.number || 0
  const originalPrice = prop(page, "Original Price")?.number || 0

  return {
    id: page.id,
    name,
    imageUrl: prop(page, "Image URL")?.url || "/logo.png",
    price,
    originalPrice,
    category: prop(page, "Category")?.select?.name || "Uncategorized",
    amazonLink: prop(page, "Amazon Link")?.url || "#",
    starRating: prop(page, "Star Rating")?.number || 0,
    reviewCount: prop(page, "Review Count")?.number || 0,
    dateAdded: prop(page, "Date Added")?.date?.start || "",
    status: prop(page, "Status")?.select?.name || "Draft",
    tags: prop(page, "Tags")?.multi_select?.map((tag: any) => tag.name) || [],
    featured: prop(page, "Featured")?.checkbox || false,
    discountPercent: discount(price, originalPrice),
  }
}

async function queryProducts(filter?: any) {
  const database_id = getDatabaseId()
  if (!process.env.NOTION_SECRET || !database_id) return []

  try {
    const response = await notion.databases.query({
      database_id,
      filter: filter ? { and: [liveFilter, filter] } : liveFilter,
      sorts: [{ property: "Date Added", direction: "descending" }],
    })

    return response.results.map(mapProduct)
  } catch {
    return []
  }
}

export async function getProducts() {
  return queryProducts()
}

export async function getDailyDeals() {
  return queryProducts({
    or: [
      { property: "Tags", multi_select: { contains: "Today Only" } },
      { property: "Tags", multi_select: { contains: "Limited Deal" } },
    ],
  })
}

export async function getProductsByCategory(category: string) {
  return queryProducts({
    property: "Category",
    select: { equals: category },
  })
}

export async function getFeaturedProducts() {
  return queryProducts({
    property: "Featured",
    checkbox: { equals: true },
  })
}

export async function getTopPicks() {
  return queryProducts({
    or: [
      { property: "Tags", multi_select: { contains: "Hot" } },
      { property: "Tags", multi_select: { contains: "Trending" } },
    ],
  })
}

export async function getNewArrivals() {
  const since = new Date()
  since.setDate(since.getDate() - 7)

  return queryProducts({
    property: "Date Added",
    date: { on_or_after: since.toISOString().slice(0, 10) },
  })
}

export async function getProductsUnderPrice(maxPrice: number) {
  return queryProducts({
    property: "Price",
    number: { less_than_or_equal_to: maxPrice },
  })
}
