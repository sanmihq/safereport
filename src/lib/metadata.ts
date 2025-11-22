import type { Metadata } from "next";
import { SEO_CONFIG } from "@/config/seo.config";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
}

export function getMetadata({
  title,
  description,
  keywords,
  image,
  noIndex,
}: MetaProps = {}): Metadata {
  const fullTitle = title
    ? `${title} • ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.defaultTitle;

  return {
    title: fullTitle,
    description: description || SEO_CONFIG.description,
    keywords: keywords || SEO_CONFIG.keywords,
    metadataBase: new URL(SEO_CONFIG.url),

    openGraph: {
      title: fullTitle,
      description: description || SEO_CONFIG.description,
      url: SEO_CONFIG.url,
      siteName: SEO_CONFIG.siteName,
      images: image ? [image] : undefined,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      site: SEO_CONFIG.twitterHandle,
      title: fullTitle,
      description: description || SEO_CONFIG.description,
      images: image ? [image] : undefined,
    },

    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },

    themeColor: "#ffffff",
  };
}
