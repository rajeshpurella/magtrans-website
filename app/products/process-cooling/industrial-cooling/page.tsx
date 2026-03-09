import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Cooling Systems | Process Cooling | MAGTRANS Systems",
  description:
    "Industrial liquid and air cooling, value-added packages, dehumidifiers, humidifiers and cooling tower–air dryer systems for plant utilities.",
};

const SECTIONS = [
  {
    href: "/products/process-cooling/industrial-cooling/liquid-cooling",
    label: "Liquid Cooling",
    description:
      "Compact liquid cooling systems for process and equipment heat removal.",
  },
  {
    href: "/products/process-cooling/industrial-cooling/air-cooling",
    label: "Air Cooling",
    description:
      "Air-cooled chillers and systems for ambient-driven heat rejection.",
  },
  {
    href: "/products/process-cooling/industrial-cooling/value-added-cooling",
    label: "Value Added Cooling Solutions",
    description:
      "Engineered cooling packages tailored to specific industrial processes.",
  },
  {
    href: "/products/process-cooling/industrial-cooling/dehumidifier-humidifier",
    label: "Dehumidifier / Humidifier",
    description:
      "Air treatment solutions to maintain precise humidity within process environments.",
  },
  {
    href: "/products/process-cooling/industrial-cooling/cooling-tower-air-dryer",
    label: "Cooling Tower & Air Dryer",
    description:
      "Cooling towers and air dryers supporting stable utility conditions for plant operations.",
  },
];

export default function IndustrialCoolingPage() {
  return (
    <main className="bg-white">
      <section className="py-12 md:py-16 border-b border-zinc-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            Industrial Cooling
          </h1>
          <p className="mt-4 text-base text-zinc-600 leading-relaxed max-w-2xl">
            Industrial cooling systems for process equipment, utilities and
            environmental control. This section covers liquid and air cooling,
            value added configurations, dehumidification / humidification and
            cooling tower with air dryer solutions.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <nav
            aria-label="Industrial cooling sections"
            className="border border-zinc-200 rounded-2xl bg-white overflow-hidden"
          >
            {SECTIONS.map((item) => {
              const slug = item.href.split("/").pop()!;
              const viewMoreHref = `/products/process-cooling/${slug}`;

              return (
                <Link
                  key={item.href}
                  href={viewMoreHref}
                  className="group block border-b border-zinc-200 last:border-b-0 hover:bg-zinc-50 transition-all duration-200"
                >
                  <div className="flex flex-col px-8 py-10 border-l-4 border-emerald-600">
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900">
                      {item.label}
                    </h2>
                    {item.description && (
                      <p className="mt-3 text-base text-zinc-600 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                    )}
                    <span className="mt-4 text-emerald-700 font-medium inline-flex items-center gap-1">
                      View More
                      <span
                        aria-hidden
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </section>
    </main>
  );
}
