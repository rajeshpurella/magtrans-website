import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "High-Temperature Ovens & HT Solutions | MAGTRANS Systems",
  description:
    "Laboratory and industrial ovens, refrigerated air dryers and high-temperature furnaces for controlled heating, drying and thermal processing.",
  alternates: {
    canonical: "/products/ht-solutions",
  },
};

export default function HTSolutionsPage() {
  const domain = getDomainBySlug("ht-solutions")!;
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
