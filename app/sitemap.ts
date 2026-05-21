import type { MetadataRoute } from "next"

const baseUrl = "https://vkproductsfinds-com.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/deals",
    "/new-arrivals",
    "/top-picks",
    "/under-500",
    "/under-1000",
    "/blog",
    "/about",
    "/contact",
    "/disclosure",
    "/privacy-policy",
    "/terms",
  ]
  const categoryRoutes = ["tech", "kitchen", "home", "fitness", "beauty"].map((slug) => `/category/${slug}`)

  return [...staticRoutes, ...categoryRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }))
}
