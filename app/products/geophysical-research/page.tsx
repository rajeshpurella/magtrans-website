import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Geophysical Research Systems | MAGTRANS Systems",
  description:
    "Proton precession systems and magnetic measurement equipment for geophysical exploration, field surveys and research applications.",
  alternates: {
    canonical: "/products/geophysical-research",
  },
};

export default function GeophysicalResearchPage() {
  const domain = getDomainBySlug("geophysical-research")!;
  return (
    <>
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: domain.title },
            ]}
          />
        </div>
      </div>
      <DomainLayout domain={domain} />
    </>
  );
}
