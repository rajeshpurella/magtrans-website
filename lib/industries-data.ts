export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
}

export const industries: Industry[] = [
  {
    slug: "aerospace",
    title: "Aerospace",
    shortDescription:
      "Advanced cooling and magnetic testing systems for aerospace environments.",
    intro:
      "MAGTRANS delivers precision engineering systems for aerospace applications. Our cooling, magnetic testing and instrumentation solutions support R&D, quality assurance and production in aerospace environments.",
  },
  {
    slug: "research-labs",
    title: "Research Labs",
    shortDescription:
      "Cryogenic and magnetic characterisation systems for R&D and fundamental research.",
    intro:
      "MAGTRANS supplies research laboratories with cryogenic systems, magnetic measurement equipment and thermal instrumentation for fundamental and applied research.",
  },
  {
    slug: "universities",
    title: "Universities",
    shortDescription:
      "Laboratory equipment and measurement solutions for academic research and teaching.",
    intro:
      "MAGTRANS supports universities with laboratory equipment, process cooling and measurement systems for academic research and teaching.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    shortDescription:
      "Process cooling and quality assurance systems for industrial production.",
    intro:
      "MAGTRANS provides process cooling, thermal solutions and quality assurance systems for manufacturing and industrial production.",
  },
  {
    slug: "energy-sector",
    title: "Energy Sector",
    shortDescription:
      "Thermal and instrumentation systems for energy generation and distribution.",
    intro:
      "MAGTRANS supplies thermal and instrumentation systems for energy generation, distribution and related industrial applications.",
  },
  {
    slug: "defense",
    title: "Defense",
    shortDescription:
      "Ruggedized precision systems for defense and strategic applications.",
    intro:
      "MAGTRANS delivers ruggedized precision engineering systems for defense and strategic applications.",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((i) => i.slug);
}
