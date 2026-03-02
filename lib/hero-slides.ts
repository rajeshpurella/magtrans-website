export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "SMART COOLING",
    subtitle: "Cool Smart in Action",
    description: "Industrial and liquid cooling systems built for performance and process stability.",
    image: "/products/images/hero/smart-cooling-hero.png",
    href: "/products/process-cooling",
  },
  {
    title: "CRYOGENIC",
    subtitle: "Reach Extreme Temperatures",
    description: "Ultra-low temperature systems for advanced research and industrial applications.",
    image: "/images/cryogenic.jpg",
    href: "/products/cryogenic-systems",
  },
  {
    title: "SENSING",
    subtitle: "Heat Flux in Extreme Temperatures",
    description: "Precision heat flux instrumentation for demanding industrial environments.",
    image: "/images/sensing.jpg",
    href: "/products/heat-flux-instrumentation",
  },
  {
    title: "MAGNETIC",
    subtitle: "Advanced Characterization",
    description: "High-end magnetic characterization systems including VSM and Hall Effect solutions.",
    image: "/images/advanced-magnetics.jpg",
    href: "/products/magnetic-testing",
  },
  {
    title: "MAGNETIC",
    subtitle: "Focus on Field",
    description: "Advanced magnetic testing and characterization systems engineered for industrial precision.",
    image: "/products/images/hero/magnetic-hero.png",
    href: "/products/magnetic-testing",
  },
];
