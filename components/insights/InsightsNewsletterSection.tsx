"use client";

import { SectionShell } from "@/components/ui/SectionShell";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { InsightCard } from "@/components/insights/InsightCard";

const NEWSLETTERS = [
  {
    title: "Atomic X Product Highlights",
    description:
      "Key capabilities, configurations and application notes for Atomic X geophysical and magnetism platforms.",
    imageSrc: "/products/images/hero/atomicx.png",
    pdfHref: "/newsletters/Atomic X Product Highlights.pdf",
  },
  {
    title: "Cost Effective Modular Magnetism Experimental Setups",
    description:
      "Overview of modular magnetism setups that combine flexibility, performance and cost-effective deployment.",
    imageSrc: "/products/images/hero/advanced-magnetic.png",
    pdfHref: "/newsletters/Cost Effective Modular Magnetism Experimental Setups.pdf",
  },
  {
    title: "D - EV News Letter",
    description:
      "Updates on D - EV platforms, application case highlights and deployment examples from MAGTRANS customers.",
    imageSrc: "/products/images/hero/sensing-hero.png",
    pdfHref: "/newsletters/D - EV News Letter.pdf",
  },
  {
    title: "Magnetism and Cryogenics Catalog",
    description:
      "Consolidated catalog of magnetism and cryogenic measurement systems offered by MAGTRANS and partners.",
    imageSrc: "/products/images/hero/cryogenic-hero.png",
    pdfHref: "/newsletters/Magnetism and Cryogenics Catalog.pdf",
  },
  {
    title: "MAGTRANS Catalog",
    description:
      "Company catalog summarising the full range of MAGTRANS systems across process cooling, magnetics and cryogenics.",
    imageSrc: "/products/process-cooling/process-cooling-hero.png",
    pdfHref: "/newsletters/MAGTRANS Catalog.pdf",
  },
] as const;

export default function InsightsNewsletterSection() {
  return (
    <SectionShell
      background="white"
      aria-label="Technical newsletters and insights"
    >
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex justify-center">
          <SectionHeader
            title="Technical Newsletters"
            subtitle="Download MAGTRANS newsletters and catalogs for detailed product information, applications and platform updates."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {NEWSLETTERS.map((item) => (
            <InsightCard
              key={item.title}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              viewHref={item.pdfHref}
              pdfHref={item.pdfHref}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

