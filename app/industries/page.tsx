import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Industries We Serve | MAGTRANS Systems",
  description:
    "MAGTRANS supports aerospace, research labs, universities, manufacturing, energy and defense with engineered cooling, magnetic and instrumentation systems.",
  openGraph: {
    title: "Industries | MAGTRANS Systems",
    description: "Precision systems across critical industrial and research sectors.",
  },
  alternates: {
    canonical: "/industries",
  },
};

const INDUSTRIES = [
  {
    title: "Aerospace",
    slug: "aerospace",
    image: "/products/industries/aerospace/aerospace.png",
    shortDescription:
      "Advanced cooling and magnetic testing systems for aerospace environments.",
  },
  {
    title: "Research Labs",
    slug: "research-labs",
    image: "/products/industries/research-labs/research-labs.png",
    shortDescription:
      "Cryogenic and magnetic characterisation systems for R&D and fundamental research.",
  },
  {
    title: "Universities",
    slug: "universities",
    image: "/products/industries/universities/universities.png",
    shortDescription:
      "Laboratory equipment and measurement solutions for academic research and teaching.",
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    image: "/products/industries/manufacturing/manufacturing.png",
    shortDescription:
      "Process cooling and quality assurance systems for industrial production.",
  },
  {
    title: "Energy Sector",
    slug: "energy-sector",
    image: "/products/industries/energy-sector/energy-sector.png",
    shortDescription:
      "Thermal and instrumentation systems for energy generation and distribution.",
  },
  {
    title: "Defense",
    slug: "defense",
    image: "/products/industries/defense/defense.png",
    shortDescription:
      "Ruggedized precision systems for defense and strategic applications.",
  },
] as const;

export default function IndustriesPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries" },
            ]}
          />
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900">
            Industries We Serve
          </h1>
          <p className="mt-4 text-lg text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Delivering precision engineering systems across critical industrial and research
            sectors.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="block h-full"
            >
              <div className="h-full flex flex-col bg-white/95 border border-zinc-100 rounded-2xl overflow-hidden shadow-sm transition-transform transition-shadow duration-300 hover:shadow-md hover:-translate-y-1 group">
                <div className="relative w-full h-48 bg-zinc-50">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 flex flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors">
                    {industry.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 leading-relaxed">
                    {industry.shortDescription}
                  </p>
                  <span className="mt-auto inline-flex items-center text-sm font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors">
                    View More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
