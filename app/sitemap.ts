import type { MetadataRoute } from "next";
import { articles } from "@/data/blog";
import { properties } from "@/data/properties";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/properties", "/services", "/about", "/blog", "/contact", "/list-property"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-10-06"),
  }));

  const listings = properties.map((property) => ({
    url: `${siteConfig.url}/properties/${property.id}`,
    lastModified: new Date("2026-10-06"),
  }));

  const posts = articles.map((article) => ({
    url: `${siteConfig.url}/blog/${article.slug}`,
    lastModified: new Date("2026-10-06"),
  }));

  return [...pages, ...listings, ...posts];
}
