import { productDomains } from "./products-data";
import { industries } from "./industries-data";
import { NAV_LINKS } from "./constants";

export type SearchResultType = "product" | "industry" | "page";

export interface SearchResultItem {
  id: string;
  type: SearchResultType;
  title: string;
  href: string;
  subtitle?: string;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    // Remove common Unicode combining diacritic marks without using ES2018 regex features
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ");
}

export const SEARCH_INDEX: SearchResultItem[] = [
  ...productDomains.map((d) => ({
    id: `product-${d.slug}`,
    type: "product" as const,
    title: d.title,
    href: `/products/${d.slug}`,
    subtitle: d.shortDescription,
  })),
  ...industries.map((i) => ({
    id: `industry-${i.slug}`,
    type: "industry" as const,
    title: i.title,
    href: `/industries/${i.slug}`,
    subtitle: i.shortDescription,
  })),
  ...NAV_LINKS.filter((l) => !l.mega).map((l) => ({
    id: `page-${l.label.toLowerCase().replace(/\s+/g, "-")}`,
    type: "page" as const,
    title: l.label,
    href: l.href,
  })),
  { id: "page-products", type: "page", title: "Products", href: "/products" },
  { id: "page-industries", type: "page", title: "Industries", href: "/industries" },
];

export function searchSearchIndex(query: string): SearchResultItem[] {
  const q = normalize(query).trim();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return SEARCH_INDEX.filter((item) => {
    const titleNorm = normalize(item.title);
    const subtitleNorm = item.subtitle ? normalize(item.subtitle) : "";
    return terms.every(
      (t) => titleNorm.includes(t) || subtitleNorm.includes(t)
    );
  });
}
