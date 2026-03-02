import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industrial Cooling | Process Cooling | MAGTRANS Systems",
  description:
    "Industrial cooling systems including liquid cooling, air cooling, value added cooling solutions, dehumidifiers, humidifiers and cooling tower with air dryer configurations.",
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
      <section className="py-20 border-b border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            Industrial Cooling
          </h1>
          <p className="mt-4 text-base text-zinc-600 max-w-2xl">
            Industrial cooling systems for process equipment, utilities and
            environmental control. This section covers liquid and air cooling,
            value added configurations, dehumidification / humidification and
            cooling tower with air dryer solutions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Industrial cooling sections"
            className="divide-y divide-zinc-200 border border-zinc-200 rounded-xl bg-white"
          >
            {SECTIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-5 hover:bg-zinc-50 transition-colors group"
              >
                <h2 className="text-lg md:text-xl font-medium text-zinc-900 group-hover:text-red-600 transition-colors">
                  {item.label}
                </h2>
                {item.description && (
                  <p className="mt-1 text-sm text-zinc-600">{item.description}</p>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
}
