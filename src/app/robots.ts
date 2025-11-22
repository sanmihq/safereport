import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: `${SEO_CONFIG.url}/sitemap.xml`,
  };
}
