import type { MetadataRoute } from "next";

const baseUrl = "https://magtrans.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/products",
    "/products/process-cooling",
    "/products/magnetic-testing",
    "/products/cryogenic-systems",
    "/products/heat-flux-instrumentation",
    "/products/ht-solutions",
    "/products/laboratory-equipment",
    "/products/geophysical-research",
    "/industries",
    "/contact",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  return staticRoutes;
}

