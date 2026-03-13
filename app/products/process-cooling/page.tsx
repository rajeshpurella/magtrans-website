import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import { getDomainBySlug } from "@/lib/products-data";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CardContainer } from "@/components/ui/CardContainer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export const metadata: Metadata = {
  title: "Process Cooling Systems | MAGTRANS Systems",
  description:
    "Liquid, air and industrial cooling systems, value-added packages, dehumidifiers, humidifiers and cooling towers engineered for stable process temperatures.",
  alternates: {
    canonical: "/products/process-cooling",
  },
};

export default function ProcessCoolingPage() {
  const domain = getDomainBySlug("process-cooling")!;

  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12 border-b border-zinc-200">
          <div>
            <div className="mb-4">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Products", href: "/products" },
                  { label: domain.title },
                ]}
              />
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-zinc-600 hover:text-emerald-600 text-sm font-medium mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              All Products
            </Link>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
              {domain.title}
            </h1>
            <p className="mt-4 text-zinc-600 leading-relaxed max-w-2xl">
              {domain.intro}
            </p>
            <p className="mt-4 text-zinc-600 text-sm leading-relaxed max-w-2xl">
              Commonly deployed in{" "}
              <Link
                href="/industries/aerospace"
                className="text-emerald-700 hover:underline"
              >
                aerospace
              </Link>
              ,{" "}
              <Link
                href="/industries/manufacturing"
                className="text-emerald-700 hover:underline"
              >
                manufacturing
              </Link>{" "}
              and{" "}
              <Link
                href="/industries/energy-sector"
                className="text-emerald-700 hover:underline"
              >
                energy sector
              </Link>{" "}
              projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-emerald-700 transition-all duration-200"
              >
                Talk to a Product Specialist
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mt-6 pt-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 mb-8">
              Products &amp; Systems
            </h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <CardContainer
                as="article"
                interactive
                className="flex flex-col justify-between border-l-4 border-emerald-600"
              >
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                    Air Cooling
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-2xl">
                    Air-cooled chillers and heat rejection systems where ambient air is the
                    preferred heat sink.
                  </p>
                </div>
                <div className="px-6 pb-5 pt-1">
                  <PrimaryButton href="/products/process-cooling/air-cooling">
                    View System
                  </PrimaryButton>
                </div>
              </CardContainer>

              <CardContainer
                as="article"
                interactive
                className="flex flex-col justify-between border-l-4 border-emerald-600"
              >
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                    Value Added Cooling Solutions
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-2xl">
                    Engineered cooling packages that combine chillers, controls and auxiliaries
                    around a defined process.
                  </p>
                </div>
                <div className="px-6 pb-5 pt-1">
                  <PrimaryButton href="/products/process-cooling/value-added-cooling">
                    View System
                  </PrimaryButton>
                </div>
              </CardContainer>

              <CardContainer
                as="article"
                interactive
                className="flex flex-col justify-between border-l-4 border-emerald-600"
              >
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                    Cooling Tower &amp; Air Dryer
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-2xl">
                    Utility-side cooling tower and air dryer solutions that stabilise plant
                    services.
                  </p>
                </div>
                <div className="px-6 pb-5 pt-1">
                  <PrimaryButton href="/products/process-cooling/cooling-tower-air-dryer">
                    View System
                  </PrimaryButton>
                </div>
              </CardContainer>

              <CardContainer
                as="article"
                interactive
                className="flex flex-col justify-between border-l-4 border-emerald-600"
              >
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                    Industrial Cooling
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-2xl">
                    Core industrial cooling stack including liquid, air and modular systems grouped
                    by application.
                  </p>
                </div>
                <div className="px-6 pb-5 pt-1">
                  <PrimaryButton href="/products/process-cooling/industrial-cooling">
                    View System
                  </PrimaryButton>
                </div>
              </CardContainer>

              <CardContainer
                as="article"
                interactive
                className="md:col-span-2 flex flex-col justify-between border-l-4 border-emerald-600"
              >
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                    Dehumidifier / Humidifier
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-2xl">
                    Precision air treatment to keep humidity within a defined band for sensitive
                    processes and materials.
                  </p>
                </div>
                <div className="px-6 pb-5 pt-1">
                  <PrimaryButton href="/products/process-cooling/dehumidifier-humidifier">
                    View System
                  </PrimaryButton>
                </div>
              </CardContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

