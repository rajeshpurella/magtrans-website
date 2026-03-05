import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/industries-data";
import { ChevronRight } from "lucide-react";
import { CONTAINER_CLASS, SECTION_PADDING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industries We Serve | MAGTrans Systems",
  description:
    "Delivering precision engineering systems across aerospace, research labs, universities, manufacturing, energy and defense sectors.",
  openGraph: {
    title: "Industries | MAGTrans Systems",
    description: "Precision systems across critical industrial and research sectors.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-white pt-32 pb-20 border-b border-zinc-200">
        <div className={CONTAINER_CLASS}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
              Industries We Serve
            </h1>
            <p className="mt-4 text-zinc-600 text-lg max-w-2xl mx-auto">
              Delivering precision engineering systems across critical sectors.
            </p>
          </div>
        </div>
      </section>

      <section className={`${SECTION_PADDING} bg-zinc-50`}>
        <div className={CONTAINER_CLASS}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group block bg-white rounded-3xl border border-zinc-200 shadow-md p-10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                  {industry.title}
                </h2>
                <p className="mt-5 text-zinc-600 text-base leading-relaxed flex-1">
                  {industry.shortDescription}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore
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
