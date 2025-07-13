import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://crawlvaani.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://crawlvaani.vercel.app/terms",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://crawlvaani.vercel.app/privacy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    
  ];
}
