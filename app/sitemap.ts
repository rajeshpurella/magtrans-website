import type { MetadataRoute } from "next";
import { productDomains } from "@/lib/products-data";
import { industries } from "@/lib/industries-data";

const baseUrl = "https://magtrans.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/products",
    "/industries",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/sitemap",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const productDomainRoutes: MetadataRoute.Sitemap = productDomains.map(
    (domain) => ({
      url: `${baseUrl}/products/${domain.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const productChildRoutes: MetadataRoute.Sitemap = productDomains.flatMap(
    (domain) =>
      (domain.children ?? []).map((child) => ({
        url: `${baseUrl}/products/${domain.slug}/${child.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      })),
  );

  const industryRoutes: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...coreRoutes,
    ...productDomainRoutes,
    ...productChildRoutes,
    ...industryRoutes,
  ];
}

