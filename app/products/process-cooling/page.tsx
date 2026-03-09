import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import { getDomainBySlug } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Process Cooling Systems | MAGTRANS Systems",
  description:
    "Liquid, air and industrial cooling systems, value-added packages, dehumidifiers, humidifiers and cooling towers engineered for stable process temperatures.",
};

export default function ProcessCoolingPage() {
  const domain = getDomainBySlug("process-cooling")!;

  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12 border-b border-zinc-200">
          <div>
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
            <ul className="grid md:grid-cols-2 gap-8 md:gap-10">
              <li className="border border-zinc-200 border-l-4 border-emerald-600 px-8 py-8 transition-colors duration-200 hover:bg-zinc-50">
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                      Air Cooling
                    </h3>
                    <p className="mt-3 text-zinc-600 text-base leading-relaxed max-w-2xl">
                      Air-cooled chillers and heat rejection systems where
                      ambient air is the preferred heat sink.
                    </p>
                  </div>
                  <Link
                    href="/products/process-cooling/air-cooling"
                    className="inline-flex items-center gap-1 mt-5 text-emerald-700 font-medium group"
                  >
                    <span>View System Details</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </li>

              <li className="border border-zinc-200 border-l-4 border-emerald-600 px-8 py-8 transition-colors duration-200 hover:bg-zinc-50">
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                      Value Added Cooling Solutions
                    </h3>
                    <p className="mt-3 text-zinc-600 text-base leading-relaxed max-w-2xl">
                      Engineered cooling packages that combine chillers,
                      controls and auxiliaries around a defined process.
                    </p>
                  </div>
                  <Link
                    href="/products/process-cooling/value-added-cooling"
                    className="inline-flex items-center gap-1 mt-5 text-emerald-700 font-medium group"
                  >
                    <span>View System Details</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </li>

              <li className="border border-zinc-200 border-l-4 border-emerald-600 px-8 py-8 transition-colors duration-200 hover:bg-zinc-50">
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                      Cooling Tower &amp; Air Dryer
                    </h3>
                    <p className="mt-3 text-zinc-600 text-base leading-relaxed max-w-2xl">
                      Utility-side cooling tower and air dryer solutions that
                      stabilise plant services.
                    </p>
                  </div>
                  <Link
                    href="/products/process-cooling/cooling-tower-air-dryer"
                    className="inline-flex items-center gap-1 mt-5 text-emerald-700 font-medium group"
                  >
                    <span>View System Details</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </li>

              <li className="border border-zinc-200 border-l-4 border-emerald-600 px-8 py-8 transition-colors duration-200 hover:bg-zinc-50">
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                      Industrial Cooling
                    </h3>
                    <p className="mt-3 text-zinc-600 text-base leading-relaxed max-w-2xl">
                      Core industrial cooling stack including liquid, air and
                      modular systems grouped by application.
                    </p>
                  </div>
                  <Link
                    href="/products/process-cooling/industrial-cooling"
                    className="inline-flex items-center gap-1 mt-5 text-emerald-700 font-medium group"
                  >
                    <span>View System Details</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </li>

              <li className="border border-zinc-200 border-l-4 border-emerald-600 px-8 py-8 transition-colors duration-200 hover:bg-zinc-50 md:col-span-2">
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                      Dehumidifier / Humidifier
                    </h3>
                    <p className="mt-3 text-zinc-600 text-base leading-relaxed max-w-2xl">
                      Precision air treatment to keep humidity within a defined
                      band for sensitive processes and materials.
                    </p>
                  </div>
                  <Link
                    href="/products/process-cooling/dehumidifier-humidifier"
                    className="inline-flex items-center gap-1 mt-5 text-emerald-700 font-medium group"
                  >
                    <span>View System Details</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

