import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://averinconsulting.com";
  const routes = ["", "/services", "/capabilities", "/technology-advisory", "/ai-retail-planning", "/health-check", "/about", "/insights", "/contact"];
  return routes.map(route => ({ url: `${base}${route}`, lastModified: new Date(), changeFrequency: route === "/insights" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.8 }));
}
