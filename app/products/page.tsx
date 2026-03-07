import type { Metadata } from "next";
import { engineeringDomains } from "@/app/lib/domain-structure";
import DomainTree from "@/app/components/DomainTree";

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
      <section className="bg-white pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900">
              Engineering Domains
            </h1>
            <p className="mt-4 text-zinc-600 text-base sm:text-lg max-w-2xl mx-auto">
              Precision systems across core engineering disciplines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DomainTree nodes={engineeringDomains} basePath="/products" />
        </div>
      </section>
    </>
  );
}

