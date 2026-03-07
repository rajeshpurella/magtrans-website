import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
    <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-24">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">Industries We Serve</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Delivering precision engineering systems across critical industrial and research sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {/* Aerospace */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="relative w-full h-[240px]">
            <Image
              src="/products/industries/aerospace/aerospace.png"
              alt="Aerospace"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-3">Aerospace</h3>
            <p className="text-gray-600 mb-4">
              Advanced cooling and magnetic testing systems for aerospace environments.
            </p>
            <Link
              href="/industries/aerospace"
              className="text-green-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Research Labs */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="relative w-full h-[240px]">
            <Image
              src="/products/industries/research-labs/research-labs.png"
              alt="Research Labs"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-3">Research Labs</h3>
            <p className="text-gray-600 mb-4">
              Cryogenic and magnetic characterisation systems for R&amp;D and fundamental research.
            </p>
            <Link
              href="/industries/research-labs"
              className="text-green-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Universities */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="relative w-full h-[240px]">
            <Image
              src="/products/industries/universities/universities.png"
              alt="Universities"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-3">Universities</h3>
            <p className="text-gray-600 mb-4">
              Laboratory equipment and measurement solutions for academic research and teaching.
            </p>
            <Link
              href="/industries/universities"
              className="text-green-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Manufacturing */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="relative w-full h-[240px]">
            <Image
              src="/products/industries/manufacturing/manufacturing.png"
              alt="Manufacturing"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-3">Manufacturing</h3>
            <p className="text-gray-600 mb-4">
              Process cooling and quality assurance systems for industrial production.
            </p>
            <Link
              href="/industries/manufacturing"
              className="text-green-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Energy Sector */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="relative w-full h-[240px]">
            <Image
              src="/products/industries/energy-sector/energy-sector.png"
              alt="Energy Sector"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-3">Energy Sector</h3>
            <p className="text-gray-600 mb-4">
              Thermal and instrumentation systems for energy generation and distribution.
            </p>
            <Link
              href="/industries/energy-sector"
              className="text-green-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* Defense */}
        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
          <div className="relative w-full h-[240px]">
            <Image
              src="/products/industries/defense/defense.png"
              alt="Defense"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl font-semibold mb-3">Defense</h3>
            <p className="text-gray-600 mb-4">
              Ruggedized precision systems for defense and strategic applications.
            </p>
            <Link
              href="/industries/defense"
              className="text-green-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
