export interface HeroSlide {
  title: string;
  /** Optional, no longer used in hero but kept for compatibility */
  subtitle?: string;
  /** Optional second line under the title (legacy) */
  titleLine2?: string;
  description: string;
  image: string;
  href: string;
  /** Optional object fit mode for hero image */
  fit?: "cover" | "contain";
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "SMART COOLING",
    description: "Precision Cooling for Stable Industrial Performance.",
    image: "/products/images/hero/smart-cooling-hero.png",
    href: "/products/process-cooling",
  },
  {
    title: "MAGNETIC SYSTEMS",
    description: "Advanced Magnetic Testing for Industrial Precision.",
    image: "/products/images/hero/magnetic-hero.png",
    href: "/products/magnetic-testing",
  },
  {
    title: "MAGNETIC CHARACTERIZATION",
    description: "High-Accuracy Magnetic Measurement Solutions.",
    image: "/products/images/hero/advanced-magnetic.png",
    href: "/products/magnetic-testing",
  },
  {
    title: "HEAT FLUX SENSING",
    description: "Reliable Heat Flux Measurement for Extreme Environments.",
    image: "/products/images/hero/sensing-hero.png",
    href: "/products/sensing",
    fit: "contain",
  },
  {
    title: "CRYOGENIC SYSTEMS",
    description: "Ultra-Low Temperature Solutions for Advanced Research.",
    image: "/products/images/hero/cryogenic-hero.png",
    href: "/products/cryogenic-systems",
  },
  {
    title: "ATOMICX PLATFORMS",
    description: "Atomic-Scale Testing for Next-Generation Innovation.",
    image: "/products/images/hero/atomicx.png",
    href: "/products",
  },
];
