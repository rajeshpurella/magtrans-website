import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Laboratory Equipment | MAGTRANS Systems",
  description:
    "Laminar air flow stations, bio-safety cabinets and fume hoods engineered to provide safe, clean and compliant environments for laboratory workflows.",
  alternates: {
    canonical: "/products/laboratory-equipment",
  },
};

export default function LaboratoryEquipmentPage() {
  const domain = getDomainBySlug("laboratory-equipment")!;
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
