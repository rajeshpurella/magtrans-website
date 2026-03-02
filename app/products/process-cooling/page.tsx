import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import { getDomainBySlug } from "@/lib/products-data";
import BackButton from "@/app/components/BackButton";

export const metadata: Metadata = {
  title: "Process Cooling | MAGTRANS Systems",
  description:
    "Industrial cooling systems including liquid and air cooling, value-added solutions, cooling towers, air dryers, dehumidifiers and humidifiers for process stability and climate control.",
};

export default function ProcessCoolingPage() {
  const domain = getDomainBySlug("process-cooling")!;

  return (
    <>
      <section className="bg-white pt-28 pb-16 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-zinc-600 hover:text-emerald-600 text-sm font-medium mb-6 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              All Products
            </Link>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
              {domain.title}
            </h1>
            <p className="mt-4 text-zinc-600 text-lg max-w-3xl">
              {domain.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-zinc-900 mb-8">
              Products &amp; Systems
            </h2>
            <ul className="grid gap-6 md:grid-cols-2">
              <li className="group rounded-2xl border border-zinc-200 bg-white px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-zinc-700">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-900">
                      Industrial Cooling
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-600">
                      Core industrial cooling stack including liquid, air and
                      modular systems grouped by application.
                    </p>
                  </div>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <Link
                  href="/products/process-cooling/industrial-cooling"
                    className="inline-flex items-center gap-1 font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </li>

              <li className="group rounded-2xl border border-zinc-200 bg-white px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-zinc-700">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-900">
                      Air Cooling
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-600">
                      Air-cooled chillers and heat rejection systems where
                      ambient air is the preferred heat sink.
                    </p>
                  </div>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <Link
                  href="/products/process-cooling/air-cooling"
                    className="inline-flex items-center gap-1 font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </li>

              <li className="group rounded-2xl border border-zinc-200 bg-white px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-zinc-700">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-900">
                      Value Added Cooling Solutions
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-600">
                      Engineered cooling packages that combine chillers,
                      controls and auxiliaries around a defined process.
                    </p>
                  </div>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <Link
                  href="/products/process-cooling/value-added-cooling"
                    className="inline-flex items-center gap-1 font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </li>

              <li className="group rounded-2xl border border-zinc-200 bg-white px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-zinc-700">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-900">
                      Cooling Tower &amp; Air Dryer
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-600">
                      Utility-side cooling tower and air dryer solutions that
                      stabilise plant services.
                    </p>
                  </div>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <Link
                  href="/products/process-cooling/cooling-tower-air-dryer"
                    className="inline-flex items-center gap-1 font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </li>

              <li className="group rounded-2xl border border-zinc-200 bg-white px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-zinc-700 md:col-span-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-zinc-900">
                      Dehumidifier / Humidifier
                    </h3>
                    <p className="mt-1.5 text-sm text-zinc-600">
                      Precision air treatment to keep humidity within a defined
                      band for sensitive processes and materials.
                    </p>
                  </div>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <Link
                  href="/products/process-cooling/dehumidifier-humidifier"
                    className="inline-flex items-center gap-1 font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors"
                  >
                    <span>Explore</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </li>
            </ul>
            <div className="mt-10">
              <BackButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

