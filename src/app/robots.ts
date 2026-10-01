import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.rahul.rest";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: ["Googlebot", "Bingbot", "Applebot", "DuckDuckBot", "Yandex", "Baiduspider"],
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "anthropic-ai", "Google-Extended"],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
