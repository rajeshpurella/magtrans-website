import { productDomains } from "./products-data";
import { industries } from "./industries-data";

export type NavMega = "products" | "industries";

export interface NavLink {
  href: string;
  label: string;
  mega?: NavMega;
}

export const NAV_LINKS: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", mega: "products" },
  { href: "/industries", label: "Industries", mega: "industries" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

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

/** Structured mega menu: categories with sub-items for Products dropdown */
export interface ProductsMegaCategory {
  label: string;
  items: { label: string; href: string }[];
}
export const PRODUCTS_MEGA_STRUCTURED: ProductsMegaCategory[] = [
  {
    label: "Magnetic Testing",
    items: [
      { label: "VSM", href: "/products/magnetic-testing/vibrating-sample-magnetometer" },
      { label: "Hall Measurement", href: "/products/magnetic-testing/hall-effect-measurement-systems" },
      { label: "Kerr Effect Systems", href: "/products/magnetic-testing/magneto-optic-kerr-effect" },
    ],
  },
  {
    label: "Cooling Solutions",
    items: [
      { label: "Cryogenic Cooling", href: "/products/cryogenic-systems" },
      { label: "Industrial Cooling Systems", href: "/products/process-cooling/industrial-cooling" },
    ],
  },
  {
    label: "Measurement Systems",
    items: [
      { label: "Magnet Measurement", href: "/products/magnetic-testing" },
      { label: "Precision Instruments", href: "/products/heat-flux-instrumentation" },
    ],
  },
];

export const SECTION_PADDING = "py-12 md:py-16";
export const CONTAINER_CLASS = "max-w-7xl mx-auto px-6 lg:px-8";

export const PRODUCTS_MEGA_COLUMNS: [number[], number[], number[]] = [
  [0, 1, 2],
  [3, 4, 5],
  [6],
];
