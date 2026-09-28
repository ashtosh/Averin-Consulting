import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://averinconsulting.com";
  const routes = ["", "/inventory-replenishment-sprint", "/capabilities", "/ai-retail-planning", "/about", "/insights", "/contact", "/services", "/technology-advisory", "/health-check"];
  return routes.map(route => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/insights" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/inventory-replenishment-sprint" ? 0.95 : 0.7,
  }));
}
