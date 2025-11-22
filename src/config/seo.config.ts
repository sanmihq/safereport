import { AppConfig } from "./app.config";
import { Links } from "./links.config";

export const SEO_CONFIG = {
  defaultTitle: AppConfig.name,
  siteName: AppConfig.name,
  url: Links.website,
  twitterHandle: "@sanmihq",
  description: AppConfig.description,
  keywords: AppConfig.keywords,
};
