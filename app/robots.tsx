import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about", "/contact", "/products", "/services", "/partners"],
      disallow: ["/fonts"]
    },
    sitemap: "https://buildbotgh.com/sitemap.xml",
  }
}
