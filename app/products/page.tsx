import type { Metadata } from "next";
import Link from "next/link";
import { productDomains } from "@/lib/products-data";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products | Magnetic Testing, Cooling & Measurement | MAGTrans Systems",
  description:
    "MAGTrans provides magnetic testing systems, cryogenic cooling, process cooling, heat flux instrumentation, and precision measurement equipment for research and industry.",
  openGraph: {
    title: "Products | MAGTrans Systems",
    description: "Magnetic testing, cryogenic cooling, and precision measurement systems.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-white pt-32 pb-20 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              Engineering Domains
            </h1>
            <p className="mt-4 text-zinc-600 text-lg max-w-2xl mx-auto">
              Precision systems across core engineering disciplines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {productDomains.map((domain) => (
              <Link
                key={domain.slug}
                href={`/products/${domain.slug}`}
                className="group block bg-white rounded-3xl border border-zinc-200 shadow-md p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  {domain.title}
                </h2>
                <p className="mt-5 text-zinc-600 text-base leading-relaxed flex-1">
                  {domain.shortDescription}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore Domain
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
