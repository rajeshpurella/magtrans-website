import type { Metadata } from "next";
import { getDomainBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Closed-cycle Cryostat | Cryogenic Systems | MAGTRANS Systems",
  description:
    "Closed-cycle cryostat on SHI 4 K cryocooler for variable-temperature magnetic, optical and electrical measurements without liquid helium consumption.",
  alternates: {
    canonical: "/products/cryogenic-systems/closed-cycle-cryostat",
  },
  openGraph: {
    title: "Closed-cycle Cryostat | Cryogenic Systems | MAGTRANS Systems",
    description:
      "Closed-cycle cryostat on SHI 4 K cryocooler for variable-temperature magnetic, optical and electrical measurements without liquid helium consumption.",
    images: ["/products/cryogenic-systems/Closed-cycle Cryostat.png"],
  },
};

export default function ClosedCycleCryostatPage() {
  const domain = getDomainBySlug("cryogenic-systems");
  const product = domain?.children?.find(
    (child) => child.slug === "closed-cycle-cryostat",
  );

  if (!product) {
    return (
      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
            Closed-cycle Cryostat
          </h1>
          <p className="mt-4 text-base text-zinc-700">
            Product details are currently unavailable.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
          {product.title}
        </h1>
        {product.contentHtml ? (
          <div
            className="mt-8 prose prose-zinc max-w-none"
            dangerouslySetInnerHTML={{ __html: product.contentHtml }}
          />
        ) : null}
      </div>
    </main>
  );
}

