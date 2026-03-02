import { productDomains } from "./products-data";
import { industries } from "./industries-data";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/products", label: "Products", mega: "products" as const },
  { href: "/industries", label: "Industries", mega: "industries" as const },
  { href: "/#contact", label: "Contact" },
] as const;

export const INDUSTRIES_MEGA = industries.map((i) => ({
  label: i.title,
  slug: i.slug,
  href: `/industries/${i.slug}`,
}));

export const INDUSTRIES_WITH_DESCRIPTIONS = industries.map((i) => ({
  label: i.title,
  slug: i.slug,
  description: i.shortDescription,
}));

export const PRODUCTS_MEGA = productDomains.map((d) => ({
  slug: d.slug,
  title: d.title,
  description: d.shortDescription,
  href: `/products/${d.slug}`,
}));

export const SECTION_PADDING = "py-24 md:py-28";
export const CONTAINER_CLASS = "max-w-7xl mx-auto px-6";

export const PRODUCTS_MEGA_COLUMNS: [number[], number[], number[]] = [
  [0, 1, 2],
  [3, 4, 5],
  [6],
];
