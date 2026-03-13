import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";
import DomainLayout from "../DomainLayout";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Heat Flux & Instrumentation | MAGTRANS Systems",
  description:
    "Heat flux sensors, signal conditioning amplifiers and thermogage instrumentation for precise thermal and heat flux measurement in research and industry.",
  alternates: {
    canonical: "/products/heat-flux-instrumentation",
  },
};

export default function HeatFluxInstrumentationPage() {
  const domain = getDomainBySlug("heat-flux-instrumentation")!;
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
