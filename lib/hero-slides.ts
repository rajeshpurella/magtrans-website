export interface HeroSlide {
  title: string;
  subtitle: string;
  /** Optional second line under the title (e.g. "in Extreme Temperatures") */
  titleLine2?: string;
  description: string;
  image: string;
  href: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "SMART COOLING",
    subtitle: "Cool Smart in Action",
    description:
      "Industrial and liquid cooling systems built for performance and process stability.",
    image: "/products/images/hero/smart-cooling-hero.png",
    href: "/products/process-cooling",
  },
  {
    title: "MAGNETIC",
    subtitle: "Focus on Field",
    description:
      "Advanced magnetic testing and characterization systems engineered for industrial precision.",
    image: "/products/images/hero/magnetic-hero.png",
    href: "/products/magnetic-testing",
  },
  {
    title: "MAGNETIC",
    subtitle: "Advanced Characterization",
    description:
      "High-end magnetic characterization systems including VSM and Hall Effect solutions.",
    image: "/products/images/hero/advanced-magnetic.jpeg",
    href: "/products/magnetic-testing",
  },
  {
    title: "Heat Flux",
    subtitle: "SENSING",
    titleLine2: "in Extreme Temperatures",
    description:
      "Precision heat flux sensing systems designed for extreme industrial environments.",
    image: "/products/images/hero/sensing-hero.png",
    href: "/products/sensing",
  },
  {
    title: "Reach",
    subtitle: "CRYOGENIC",
    titleLine2: "Temperatures",
    description:
      "Advanced cryogenic solutions engineered for ultra-low temperature research and industrial applications.",
    image: "/products/images/hero/cryogenic-hero.png",
    href: "/products/cryogenic-systems",
  },
];
