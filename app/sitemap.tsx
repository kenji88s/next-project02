import { MetadataRoute } from "next";

const buildurl = (path?: string) => `http://localhost:3000${path ??　""}`;

/*
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const buildurl = (path?: string) => `${SITE_URL}${path ?? ""}`;
*/

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date().toISOString();

  return [
    {
      url: buildurl(),
      lastModified: now,
    },
    {
      url: buildurl("/contents1"),
      lastModified: now,
    },
    {
      url: buildurl("/greeting"),
      lastModified: now,
    },
    {
      url: buildurl("/access"),
      lastModified: now,
    },
    {
      url: buildurl("/inquiry"),
      lastModified: now,
    },
    {
      url: buildurl("/privacy"),
      lastModified: now,
    },
  ];
}