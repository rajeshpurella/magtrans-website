import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cryogenic Systems & Cryostats | MAGTRANS Systems",
  description:
    "Closed-cycle and liquid nitrogen cryostats, 4 K and ultra-low temperature platforms for magnetic, optical and electrical measurements without helium loss.",
  alternates: {
    canonical: "/products/cryogenic-systems",
  },
};

export default function CryogenicSystemsPage() {
  const domain = getDomainBySlug("cryogenic-systems")!;
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
