import type { Metadata } from "next";
import { productDomains } from "@/lib/products-data";
import ProductDomainCard from "@/components/ProductDomainCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Products & Engineering Domains | MAGTRANS Systems",
  description:
    "Explore MAGTRANS products across process cooling, magnetic testing, cryogenic systems, heat flux instrumentation and high-temperature solutions.",
  openGraph: {
    title: "Products | MAGTrans Systems",
    description: "Magnetic testing, cryogenic cooling, and precision measurement systems.",
  },
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-6 md:mb-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products" },
            ]}
          />
        </div>
        <div className="text-center mb-10 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-4">
          Engineering Domains
        </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
          Precision systems across core engineering disciplines for research and industry.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {productDomains.map((domain) => (
            <ProductDomainCard
              key={domain.slug}
              slug={domain.slug}
              title={domain.title}
              shortDescription={domain.shortDescription}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
