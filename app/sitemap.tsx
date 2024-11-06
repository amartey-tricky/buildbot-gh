import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://buildbotgh.com",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1.0,
    },
    {
      url: "https://buildbotgh.com/about",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://buildbotgh.com/contact",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://buildbotgh.com/products",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://buildbotgh.com/services",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://buildbotgh.com/partners",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ]
}
